// 경제학습과 같은 주소(jiseop-byeon.github.io) 아래에 있으므로 읽음 기록 키를 따로 쓴다. 밝기 설정은 두 사이트가 함께 쓴다.
const KEY = "practice-v1";
const THEME_KEY = "cheoeum-theme";
const ECON = "https://jiseop-byeon.github.io/economics-studies/";

function load() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY));
    if (s && Array.isArray(s.read) && s.readAt && typeof s.readAt === "object") return s;
  } catch (_) {}
  return { read: [], readAt: {} };
}
function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (_) {} }
function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function fmtDate(v, long) {
  const [y, m, d] = v.split("-").map(Number);
  return long ? `${y}년 ${m}월 ${d}일` : `${y}.${String(m).padStart(2, "0")}.${String(d).padStart(2, "0")}`;
}
const readDates = (s, id) => (s.readAt && s.readAt[id]) || [];

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

const parts = () => window.PARTS || [];
const chapters = () => window.CHAPTERS || [];
const RULES = window.RULES || {};
const ready = () => chapters().filter((c) => c.status === "ready");
const partName = (id) => parts().find((p) => p.id === id)?.name || id;
const MARKET = { KR: "한국", US: "미국", JP: "일본" };
const GLOSS = () => window.GLOSSARY || [];
const gloss = (id) => GLOSS().find((g) => g.id === id);
const glossText = (g) => [g.hanja, g.en].filter(Boolean).map(esc).join(" · ");
const LEVEL = { official: "공식 자료로 확인", press: "보도·금융회사 안내로 확인", pending: "원문 대조 전" };

function parse() {
  const raw = (location.hash || "#/").replace(/^#/, "");
  const p = raw.split("/").filter(Boolean);
  return { name: p[0] || "home", arg: p[1] ? decodeURIComponent(p[1]) : "" };
}
function setNav(name) {
  const map = { home: "#/", toc: "#/toc", read: "#/toc", terms: "#/terms", term: "#/terms", rules: "#/rules", sources: "#/sources" };
  document.querySelectorAll(".nav a:not(.sibling)").forEach((a) => a.setAttribute("aria-current", a.getAttribute("href") === map[name] ? "page" : "false"));
}

function ruleDate(r) {
  return `${r.effective ? `시행 ${fmtDate(r.effective)} · ` : ""}확인 ${fmtDate(r.checked)}`;
}

// 본문의 규칙 자리와 경제학습 링크를 채운다. 쓰인 규칙 id를 순서대로 돌려준다.
function fillChapter(html) {
  const used = [];
  const out = html
    .replace(/<span data-rule="([^"]+)"(?: data-show="(short)")?><\/span>/g, (m, id, show) => {
      const r = RULES[id];
      if (!r) return `<span class="rule">[규칙 없음: ${esc(id)}]</span>`;
      if (!used.includes(id)) used.push(id);
      const n = used.indexOf(id) + 1;
      const text = show === "short" ? r.short : r.value;
      return `<a class="rule" href="#rule-${esc(id)}" title="${esc(r.label)} · ${esc(ruleDate(r))}">${esc(text)}<sup>${n}</sup></a>`;
    })
    .replace(/<h3><a href="#\/term\/([a-z0-9-]+)">([^<]*)<\/a><\/h3>/g, (m, id, title) => {
      const g = gloss(id);
      return `<h3><a href="#/term/${id}">${title}</a>${g ? `<span class="title-gloss">${glossText(g)}</span>` : ""}</h3>`;
    })
    .replace(/href="econ:([tp]\d+)"/g, (m, id) => `href="${ECON}#/term/${id}" target="_blank" rel="noopener"`);
  return { html: out, used };
}

function usedBox(used) {
  if (!used.length) return "";
  const rows = used.map((id, i) => {
    const r = RULES[id];
    const src = (r.sources || []).map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a>`).join(" · ");
    return `<li id="rule-${esc(id)}"><b>${i + 1}. ${esc(MARKET[r.market] || "")} ${esc(r.label)}</b>: ${esc(r.value)}<br>
      <span class="meta">${esc(ruleDate(r))} · <span class="${r.level === "official" ? "" : "level-press"}">${esc(LEVEL[r.level] || "")}</span>${src ? ` · ${src}` : ""}</span></li>`;
  }).join("");
  return `<div class="note"><p class="note-kicker">이 장의 숫자</p><p class="meta">본문의 밑줄 친 숫자는 모두 아래 규칙에서 불러온다. 규칙이 바뀌면 이 목록과 <a href="#/rules">규칙 비교표</a>가 함께 바뀐다.</p><ul class="rules-used">${rows}</ul></div>`;
}

function markButton(id) {
  const s = load();
  const ds = readDates(s, id);
  if (!ds.length) return `<button class="btn" type="button" id="mark" data-id="${esc(id)}">읽음으로 표시</button>`;
  const log = ds.map((d, i) => `${i + 1}회독 ${fmtDate(d)}`).join(" · ");
  const done = ds.includes(today());
  return `<p class="meta read-log">${esc(log)}</p>`
    + `<button class="btn${done ? "-quiet" : ""}" type="button" id="mark" data-id="${esc(id)}"${done ? " disabled" : ""}>${done ? "오늘 읽음 기록됨" : "오늘 다시 읽음"}</button>`
    + `<button class="btn-quiet" type="button" id="unmark" data-id="${esc(id)}">마지막 기록 지우기</button>`;
}

function home() {
  const s = load();
  const rs = ready();
  const next = rs.find((c) => !readDates(s, c.id).length) || rs[0];
  return `
    <section class="landing">
      <h1>실제로 거래할 때 알아야 할 것</h1>
      <p class="dek">주문이 체결되어 돈이 옮겨 가기까지의 규칙, 빠져나가는 비용과 세금, 상품의 구조, 잃을 수 있는 폭을 공식 자료로 따라간다. 무엇을 언제 사라고는 말하지 않는다.</p>
      <div class="row">
        ${next ? `<a class="btn" href="#/read/${esc(next.id)}">${readDates(s, next.id).length ? "이어서 읽기" : "1장부터 읽기"}</a>` : ""}
        <a class="btn-quiet" href="#/toc">전체 목차</a>
      </div>
      <h2 class="home-h">${parts().length}개 영역</h2>
      <div class="parts-grid">
        ${parts().map((p, k) => {
          const cs = chapters().filter((c) => c.part === p.id);
          const r = cs.filter((c) => c.status === "ready").length;
          const first = cs.find((c) => c.status === "ready");
          return `<a class="part-card${r ? "" : " is-planned"}" href="${first ? `#/read/${esc(first.id)}` : "#/toc"}">
            <span class="part-no">${String(k + 1).padStart(2, "0")}</span>
            <strong>${esc(p.name)}</strong>
            <span class="part-line">${esc(p.line)}</span>
            <span class="part-progress"><span class="bar"><i style="width:${cs.length ? Math.round((r / cs.length) * 100) : 0}%"></i></span><span>${r ? `${r}/${cs.length}장` : `${cs.length}장 준비 중`}</span></span>
          </a>`;
        }).join("")}
      </div>
      <div class="note"><p class="note-kicker">경제학습과 함께</p><p>금리, 물가, 환율처럼 거래 뒤에 있는 경제 개념은 형제 사이트 <a href="${ECON}">경제학습</a>에서 다룬다. 이 사이트의 본문에서 ↗ 표시가 붙은 용어를 누르면 그 개념의 카드로 간다.</p></div>
    </section>`;
}

function toc() {
  const s = load();
  const mark = (id) => {
    const n = readDates(s, id).length;
    return n ? `<span class="toc-done">${n > 1 ? n + "회독" : "읽음"} ${fmtDate(readDates(s, id)[n - 1])}</span>` : "";
  };
  const total = chapters().length, done = ready().length;
  return `
    <p class="kicker">목차</p>
    <h1>공통 실무에서 시작해 상품별로 내려간다.</h1>
    <p class="dek">${total}장 가운데 ${done}장을 읽을 수 있다. 흐린 줄은 쓸 예정인 장이다.</p>
    ${parts().map((p) => `
      <section class="toc-head"><h2>${esc(p.name)}</h2><p>${esc(p.line)}</p></section>
      <ol class="toc">${chapters().filter((c) => c.part === p.id).map((c) => {
        const ok = c.status === "ready";
        return `<li class="${ok ? "" : "planned"}"><a href="${ok ? `#/read/${esc(c.id)}` : "#/toc"}">
          <span class="toc-domain">${esc(c.id.replace(/^[a-z]+-/, ""))}장</span>
          <span class="toc-title">${esc(c.title)}</span>
          <span class="toc-count">${ok ? mark(c.id) : `<span class="toc-plan">준비 중</span>`}</span>
        </a></li>`;
      }).join("")}</ol>`).join("")}`;
}

function readView(id) {
  const c = chapters().find((x) => x.id === id);
  const src = (window.CHAPTER_HTML || {})[id];
  if (!c || !src) return `<h1>아직 쓰지 않은 장이다.</h1><p><a href="#/toc">목차로</a></p>`;
  const rs = ready();
  const i = rs.findIndex((x) => x.id === id);
  const prev = rs[i - 1], next = rs[i + 1];
  const { html, used } = fillChapter(src);
  return `
    <article class="lesson">
      <p class="kicker">${esc(partName(c.part))} · ${esc(c.id.replace(/^[a-z]+-/, ""))}장</p>
      <h1>${esc(c.title)}</h1>
      <p class="dek">${esc(c.dek)}</p>
      <div class="article">${html}</div>
      ${usedBox(used)}
      <div class="row">${markButton(c.id)}</div>
      <div class="pager">
        ${prev ? `<a href="#/read/${esc(prev.id)}">← ${esc(prev.title)}</a>` : "<span></span>"}
        ${next ? `<a href="#/read/${esc(next.id)}">${esc(next.title)} →</a>` : `<a href="#/toc">목차</a>`}
      </div>
    </article>`;
}

function termsView(q) {
  return `
    <p class="kicker">용어 ${GLOSS().length}</p>
    <h1>거래에서 만나는 말</h1>
    <p class="dek">장 본문에서 제목으로 다룬 실전 용어를 모았다. 금리, 물가, 환율 같은 경제 개념은 형제 사이트 <a href="${ECON}#/terms">경제학습의 용어</a>에서 찾는다.</p>
    <input class="search" id="q" type="search" placeholder="예: 호가, 결제일, 증권거래세" value="${esc(q || "")}" aria-label="용어 검색">
    <div class="term-list" id="list"></div>`;
}
function paintTerms() {
  const q = (document.getElementById("q")?.value || "").trim().toLowerCase();
  const list = GLOSS().filter((g) => !q || (g.title + g.hanja + g.en + g.one).toLowerCase().includes(q));
  document.getElementById("list").innerHTML = list.map((g) => {
    const c = chapters().find((x) => x.id === g.chapter);
    return `<a class="term-link" href="#/term/${esc(g.id)}"><strong>${esc(g.title)}<span class="title-gloss">${glossText(g)}</span></strong><span class="tag">${c ? `${esc(partName(c.part))} · ${esc(c.id.replace(/^[a-z]+-/, ""))}장` : ""}</span><span>${esc(g.one)}</span></a>`;
  }).join("") || `<p>해당하는 용어가 없다.</p>`;
}
function termView(id) {
  const g = gloss(id);
  if (!g) return `<h1>용어를 찾지 못했다.</h1><p><a href="#/terms">용어 목록으로</a></p>`;
  const c = chapters().find((x) => x.id === g.chapter);
  return `
    <article class="lesson">
      <p class="kicker">실전 용어${c ? ` · ${esc(partName(c.part))}` : ""}</p>
      <h1>${esc(g.title)}<span class="title-gloss">${glossText(g)}</span></h1>
      <p class="dek">${esc(g.one)}</p>
      <div class="row">
        ${c ? `<a class="btn" href="#/read/${esc(c.id)}">이 용어를 설명하는 장 · ${esc(c.title)}</a>` : ""}
        ${g.econ ? `<a class="btn-quiet" href="${ECON}#/term/${esc(g.econ)}" target="_blank" rel="noopener">경제학습에서 개념 보기 ↗</a>` : ""}
      </div>
    </article>`;
}

function rulesView() {
  const topics = window.RULE_TOPICS || [];
  const ids = Object.keys(RULES);
  const cell = (id) => {
    if (!id) return `<td class="meta">—</td>`;
    const r = RULES[id];
    const src = (r.sources || [])[0];
    return `<td><b>${esc(r.value)}</b><small>${esc(r.label)}</small><small>${esc(ruleDate(r))} · <span class="${r.level === "official" ? "" : "level-press"}">${esc(LEVEL[r.level])}</span>${src ? ` · <a href="${esc(src.url)}" target="_blank" rel="noopener">출처</a>` : ""}</small>${r.note ? `<small>${esc(r.note)}</small>` : ""}</td>`;
  };
  const body = topics.map((t) => {
    const mine = ids.filter((id) => RULES[id].topic === t.id);
    if (!mine.length) return "";
    const markets = Object.keys(MARKET).filter((m) => mine.some((id) => RULES[id].market === m));
    const cols = markets.map((m) => mine.filter((id) => RULES[id].market === m));
    const n = Math.max(...cols.map((c) => c.length));
    const rows = Array.from({ length: n }, (_, i) => `<tr>${cols.map((c) => cell(c[i])).join("")}</tr>`).join("");
    return `<h2>${esc(t.name)}</h2><table class="rules-table cols-${markets.length}"><thead><tr>${markets.map((m) => `<th>${MARKET[m]}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table>`;
  }).join("");
  return `
    <article class="lesson">
      <p class="kicker">규칙</p>
      <h1>바뀌는 숫자는 여기 한곳에 둔다.</h1>
      <p class="dek">거래 시간, 가격 장치, 결제일, 세율처럼 제도가 바뀌면 달라지는 숫자를 나라별로 나란히 둔다. 본문은 이 표의 값을 불러다 쓴다. 숫자마다 시행일, 이 사이트가 확인한 날, 확인한 자료를 적었다.</p>
      <div class="note"><p class="note-kicker">확인 수준</p><p><b>공식 자료로 확인</b>: 기관이나 법령의 원문으로 대조했다. <span class="level-press"><b>보도·금융회사 안내로 확인</b></span>: 언론 보도나 증권회사 안내로 확인했고 원문 대조가 남았다. <span class="level-press"><b>원문 대조 전</b></span>: 오래된 규칙이라 널리 알려져 있지만 이번에 원문을 다시 보지 못했다. 거래 전에는 기관 자료로 한 번 더 확인한다.</p></div>
      ${body}
    </article>`;
}

function sources() {
  const all = [];
  Object.values(RULES).forEach((r) => (r.sources || []).forEach((s) => { if (!all.some((x) => x.url === s.url)) all.push(s); }));
  return `
    <article class="lesson">
      <p class="kicker">출처</p>
      <h1>공식 자료를 먼저 본다.</h1>
      <p class="dek">이 사이트는 공개된 공식 자료를 근거로 쓴다. 기관 자료로 아직 대조하지 못한 숫자는 규칙표에 그 상태를 적어 둔다.</p>
      <h2>근거로 삼는 기관</h2>
      <ul>
        <li><a href="https://www.krx.co.kr" target="_blank" rel="noopener">한국거래소</a> — 매매 제도, 상품 명세</li>
        <li><a href="https://www.kofia.or.kr" target="_blank" rel="noopener">금융투자협회</a> — 투자자 교육, 채권 정보</li>
        <li><a href="https://fine.fss.or.kr" target="_blank" rel="noopener">금융감독원 파인</a> — 금융상품 비교, 분쟁조정 사례</li>
        <li><a href="https://dart.fss.or.kr" target="_blank" rel="noopener">전자공시시스템 DART</a> — 상장회사 공시</li>
        <li><a href="https://www.nts.go.kr" target="_blank" rel="noopener">국세청</a>, <a href="https://www.law.go.kr" target="_blank" rel="noopener">국가법령정보센터</a> — 세금과 법령</li>
        <li><a href="https://www.molit.go.kr" target="_blank" rel="noopener">국토교통부</a>, <a href="https://www.iros.go.kr" target="_blank" rel="noopener">인터넷등기소</a> — 부동산</li>
        <li><a href="https://www.investor.gov" target="_blank" rel="noopener">미국 SEC Investor.gov</a>, <a href="https://www.finra.org" target="_blank" rel="noopener">FINRA</a> — 미국 시장</li>
      </ul>
      <h2>규칙표에 쓴 자료</h2>
      <ul>${all.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a></li>`).join("")}</ul>
      <div class="note"><p class="note-kicker">이 사이트가 하지 않는 일</p><p>종목이나 매매 시점을 고르지 않는다. 세금과 계약은 개인 사정에 따라 결론이 달라지므로 계산의 구조까지만 다루고, 최종 판단은 세무사, 법무사, 금융회사에 확인하도록 안내한다.</p></div>
    </article>`;
}

function render() {
  const { name, arg } = parse();
  setNav(name);
  const main = document.getElementById("main");
  if (name === "toc") main.innerHTML = toc();
  else if (name === "read") main.innerHTML = readView(arg);
  else if (name === "terms") main.innerHTML = termsView(arg);
  else if (name === "term") main.innerHTML = termView(arg);
  else if (name === "rules") main.innerHTML = rulesView();
  else if (name === "sources") main.innerHTML = sources();
  else main.innerHTML = home();

  const mark = document.getElementById("mark");
  if (mark) mark.onclick = () => {
    const s = load(), id = mark.dataset.id, ds = readDates(s, id);
    if (!ds.includes(today())) s.readAt[id] = ds.concat(today());
    if (!s.read.includes(id)) s.read.push(id);
    save(s); render();
  };
  const unmark = document.getElementById("unmark");
  if (unmark) unmark.onclick = () => {
    const s = load(), id = unmark.dataset.id, ds = readDates(s, id).slice(0, -1);
    if (ds.length) s.readAt[id] = ds;
    else { delete s.readAt[id]; s.read = s.read.filter((x) => x !== id); }
    save(s); render();
  };
  if (name === "terms") { document.getElementById("q").addEventListener("input", paintTerms); paintTerms(); }
  // 본문의 규칙 링크는 같은 쪽 아래 목록으로 내려간다.
  main.querySelectorAll('a.rule[href^="#rule-"]').forEach((a) => a.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById(a.getAttribute("href").slice(1))?.scrollIntoView({ behavior: "smooth", block: "center" });
  }));
  if (!location.hash.includes("rule-")) window.scrollTo(0, 0);
}

function setTheme(light) {
  const root = document.documentElement;
  if (light) root.dataset.theme = "light"; else delete root.dataset.theme;
  try { localStorage.setItem(THEME_KEY, light ? "light" : "dark"); } catch (_) {}
  const btn = document.getElementById("theme");
  if (btn) { btn.textContent = light ? "어둡게" : "밝게"; btn.setAttribute("aria-pressed", light ? "true" : "false"); }
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", light ? "#f3f6f5" : "#0e1513");
}
setTheme(document.documentElement.dataset.theme === "light");
document.getElementById("theme").addEventListener("click", () => setTheme(document.documentElement.dataset.theme !== "light"));
addEventListener("hashchange", render);
addEventListener("scroll", () => document.querySelector(".top").classList.toggle("scrolled", scrollY > 4), { passive: true });
render();
