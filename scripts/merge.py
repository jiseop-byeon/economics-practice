"""장 JSON을 저장소에 합친다.

사용: python3 scripts/merge.py REPO part_dir [part_dir ...] [--dry]
각 JSON: {chapter, html, glossary[], rules{}, topics[], unverified[]}.
규칙(새 id만; 같은 내용 중복은 건너뛰고 다른 내용 중복은 보고), 용어(고유 id), 주제, 장 html을 더하고 toc.js에서 장을 ready로 바꾼다.
"""
import glob, json, os, re, sys, subprocess

args = [a for a in sys.argv[1:] if not a.startswith("--")]
DRY = "--dry" in sys.argv
REPO, dirs = args[0], args[1:]

def node_eval(js_file, expr):
    code = f'global.window={{}};require({json.dumps(os.path.join(os.path.abspath(REPO), js_file))});console.log(JSON.stringify({expr}))'
    return json.loads(subprocess.check_output(["node", "-e", code]))

rules = node_eval("js/rules.js", "window.RULES")
topics = node_eval("js/rules.js", "window.RULE_TOPICS")
gloss = node_eval("js/glossary.js", "window.GLOSSARY")
chap_html = node_eval("js/chapters.js", "window.CHAPTER_HTML")
toc = open(os.path.join(REPO, "js/toc.js")).read()

problems, added = [], {"rules": 0, "gloss": 0, "chapters": [], "topics": 0}
files = sorted(f for d in dirs for f in glob.glob(os.path.join(d, "*.json")))
for f in files:
    o = json.load(open(f))
    if "chapter" not in o: continue
    cid = o["chapter"]
    for t in o.get("topics", []):
        if not any(x["id"] == t["id"] for x in topics):
            topics.append(t); added["topics"] += 1
    for rid, r in (o.get("rules") or {}).items():
        if rid in rules:
            if json.dumps(rules[rid], sort_keys=True) != json.dumps(r, sort_keys=True):
                problems.append(f"rule conflict {rid} ({cid}) — kept existing")
            continue
        rules[rid] = r; added["rules"] += 1
    for g in o.get("glossary", []):
        if any(x["id"] == g["id"] for x in gloss):
            problems.append(f"glossary dup {g['id']} ({cid})"); continue
        gloss.append(g); added["gloss"] += 1
    h = o["html"]
    if "`" in h or "${" in h:
        problems.append(f"backtick in {cid}"); continue
    chap_html[cid] = h
    toc, n = re.subn(r'(\{ id: "%s", part: "[a-z]+", status: )"planned"' % re.escape(cid), r'\1"ready"', toc)
    added["chapters"].append(cid)

topic_ids = {t["id"] for t in topics}
gids = {g["id"] for g in gloss}
for cid, h in chap_html.items():
    for rid in re.findall(r'data-rule="([^"]+)"', h):
        if rid not in rules: problems.append(f"missing rule {rid} in {cid}")
    for gid in re.findall(r'#/term/([a-z0-9-]+)', h):
        if gid not in gids: problems.append(f"missing glossary {gid} in {cid}")
    t = re.sub(r"<[^>]+>", "", h)
    if t.count("(") != t.count(")"): problems.append(f"paren mismatch in {cid}")
for rid, r in rules.items():
    if r.get("topic") not in topic_ids: problems.append(f"rule {rid} has unknown topic {r.get('topic')}")

print(json.dumps(added, ensure_ascii=False))
for p in problems: print("PROBLEM", p)
if DRY: sys.exit(0)

head_r = open(os.path.join(REPO, "js/rules.js")).read().split("window.RULE_TOPICS")[0]
open(os.path.join(REPO, "js/rules.js"), "w").write(
    head_r + "window.RULE_TOPICS = " + json.dumps(topics, ensure_ascii=False, indent=2) + ";\n\nwindow.RULES = " + json.dumps(rules, ensure_ascii=False, indent=2) + ";\n")
head_g = open(os.path.join(REPO, "js/glossary.js")).read().split("window.GLOSSARY")[0]
open(os.path.join(REPO, "js/glossary.js"), "w").write(head_g + "window.GLOSSARY = " + json.dumps(gloss, ensure_ascii=False, indent=1) + ";\n")
head_c = open(os.path.join(REPO, "js/chapters.js")).read().split("window.CHAPTER_HTML")[0]
body = ",\n".join(f'"{k}": `\n{v.strip()}\n`' for k, v in chap_html.items())
open(os.path.join(REPO, "js/chapters.js"), "w").write(head_c + "window.CHAPTER_HTML = {\n" + body + "\n};\n")
open(os.path.join(REPO, "js/toc.js"), "w").write(toc)
