# 투자실무 위키: 장 하나 쓰기 지침

사이트: 투자실무 (https://jiseop-byeon.github.io/economics-practice/). 형제 사이트: 경제학습 (economics-studies, 경제 용어 카드).

목적: 유능한 개인투자자가 되려는 사람이 실제 거래의 규칙, 비용, 구조, 위험을 정확히 이해하게 한다. **매매를 권하지 않고, 종목이나 시점을 고르지 않는다.** "이럴 때 사라/팔라", "이 지표가 낮으면 저평가" 같은 판단 문장은 쓰지 않는다. 지표와 제도가 무엇을 말해 주고 무엇을 말해 주지 않는지를 쓴다.

## 먼저 읽을 것
- js/chapters.js 의 "common-2", "common-3": 이 수준과 구조를 따른다.
- js/rules.js, js/glossary.js(형식과 이미 있는 id), js/toc.js(장 제목과 요약).

## 구조
1. 머리 문단 2개: 이 장이 무엇을 다루는지, 어떤 용어 무리로 나뉘는지, 앞 장들과 어떻게 이어지는지.
2. `<h2>` 소주제 2~4개, 그 아래 `<h3><a href="#/term/ID">용어</a></h3>` 구획 5~9개.
   - 구획 첫 문장: "X는 ~을 말한다." 형태의 정의. 이어서 작동 방식, 왜 그런 제도가 있는지.
   - `<div class="work"><p class="work-kicker">예시</p><p>…</p></div>`: 구체적 숫자 예시. python으로 검산한다. 가상의 회사·숫자를 쓰고 실제 종목 이름은 쓰지 않는다.
   - 필요하면 `<div class="note"><p class="note-kicker">헷갈리기 쉬운 점</p><p>…</p></div>`.
3. 장 끝: `<h2>읽다 생기는 질문</h2><p>이 장을 읽다 보면 자연히 생기는 물음을 모았다. 질문을 누르면 답이 열린다.</p>` 뒤에 `<details class="qa"><summary>질문?</summary><p>답</p></details>` 3~4개.
4. 미국과 다르면 `<div class="snap"><p class="snap-kicker">미국 주식이라면</p>…</div>` 비교 상자(선택).
5. 분량: 태그를 뺀 글자 수 4,000~7,000자가 기본이다. 다룰 지표가 많은 장은 더 길어도 된다.

## 문체
- 한다체. 쉬운 말을 먼저, 문장은 짧게.
- 전문용어는 그 장에서 처음 나올 때 `쉬운 말(용어 漢字 · English, 약어)`. 한자·영어는 확실할 때만. `<h3>` 제목 용어에는 괄호를 달지 않는다(자동으로 붙는다). 한 문단에 괄호 셋 이하.
- 경제 개념은 경제학습 카드로 링크: `<a class="econ" href="econ:t019">결제</a>`(id는 economics-studies/js/terms.js). 장마다 0~4개면 충분하다.
- 앞 장은 "공통 실무 1장에서 본 것처럼"처럼 가리키고 되풀이하지 않는다.

## 바뀌는 숫자 = 규칙 데이터
세율, 비율, 시간, 기준 금액, 기간처럼 제도가 바꿀 수 있는 숫자는 본문에 직접 쓰지 않고 규칙으로 만든다. 본문에는 `<span data-rule="ID"></span>`(값) 또는 `<span data-rule="ID" data-show="short"></span>`(풀어 쓴 말). 예시 상자 안의 계산 숫자는 직접 써도 된다(규칙 값과 맞아야 한다).
```
"kr-…": { topic, market: "KR|US|JP|GL", label, value, short, effective: "YYYY-MM-DD"(알면), checked: "YYYY-MM-DD", level: "official|press|pending", note, sources: [{ name: "기관/매체, 날짜", url }] }
```
- level: official = 기관·법령 원문을 실제로 열어 확인. press = 보도나 금융회사 안내로 확인. pending = 확인하지 못함.
- 반드시 WebSearch/WebFetch로 확인한다. 출처 url은 실제로 연 주소만 쓴다.
- 이미 있는 규칙은 새로 만들지 않고 그 id를 쓴다. 새 topic이 필요하면 topics에 {id, name}을 더하고 js/review.js 점검 묶음에도 넣는다.

## 원칙 (2026-10-18 결정)
1. **실시간 정보는 싣지 않는다.** 지금 시장 수준(가격, 금리, 지수, 이번 달 발표값과 해석, 진행 중인 사건)은 넣지 않는다. 대신 "지금 숫자는 ○○(원 기관)가 발표한다"고 쓴다.
2. **제도는 구조 + 핵심 값만.** 지역·종목 목록, 한시 조치, 좁은 예외, 국회 계류안, 예고만 된 변경은 넣지 않는다.
3. **지난 사건과 통계는 날짜를 박은 과거형.** "올해", "최근", "곧", "~할 예정"을 쓰지 않는다.
4. **예시는 가정 숫자로.** 현재 규칙 값을 예시에 그대로 쓰면 첫머리에 "이 예시는 YYYY년 M월 기준 ○○을 넣어 계산했다"고 밝힌다.
5. 차트·종목 분석은 계산과 연구 결과(저자·연도·기간), 한계만 쓴다. 상속·증여는 구조와 핵심 값만 쓰고 절세 요령은 쓰지 않는다.

## 출력과 합치기
장마다 `{chapter, html, glossary[{id, chapter, title, hanja, en, one, econ?}], rules{}, topics[], unverified[]}` JSON. html에는 백틱과 `${`를 쓰지 않는다. 본문의 모든 `#/term/ID`는 glossary에 있어야 한다. 합치기는 `python3 scripts/merge.py . <폴더> --dry` → 문제 없으면 `--dry` 없이.
