// 점검 묶음. 규칙마다 처음 맞는 묶음을 따른다(ids → pattern → topics 순). days는 다시 확인할 추천 주기이다.
window.REVIEW_GROUPS = [
  { id: "mortgage", name: "주택 대출 규제", days: 90, why: "대책이 나올 때마다 LTV·DSR·스트레스 금리·한도가 바뀐다.", topics: ["mortgage"] },
  { id: "margin", name: "파생상품 증거금률", days: 90, why: "한국거래소가 매달 재산정한다. 본문 예시는 계산에 쓴 증거금률과 날짜를 밝혀 두었다.", ids: ["kr-fut-k200-im", "kr-fut-k200-mm", "kr-fut-k200-clearing"] },
  { id: "entry", name: "레버리지 상품·공매도·파생 진입 요건", days: 180, why: "2025~2026년에 여러 번 바뀌었다.", pattern: "^kr-(etp|short|deriv-(edu|mock|deposit)|ovs-deriv)" },
  { id: "crypto", name: "가상자산 제도와 과세", days: 180, why: "과세 시작일이 여러 번 미뤄졌고, 법과 감독규정·자율규제가 단계적으로 바뀌고 있다.", pattern: "^kr-crypto-", topics: ["crypto"] },
  { id: "re-tax", name: "부동산 세금", days: 180, why: "여름 세제개편안과 연말·연초 개정 시행 때 바뀐다.", topics: ["re-tax"] },
  { id: "re-rules", name: "청약·임대차·거래 절차", days: 180, why: "시행령과 규칙 개정이 해마다 몇 번씩 있다.", topics: ["subscription", "lease", "re-deal"] },
  { id: "market", name: "증권시장 제도", days: 180, why: "거래 시간, 가격 장치, 공매도·신용, ETF, 배당 절차, 거래 비용.", topics: ["hours", "limits", "credit", "etf", "corp", "cost"] },
  { id: "tax", name: "금융 세금·절세 계좌", days: 365, why: "세법 개정은 대개 1월 1일에 시행된다. 연초에 본다.", topics: ["tax", "account"] },
  { id: "base", name: "공시·결제·발표 일정·투자자 보호", days: 365, why: "법령에 박힌 기한과 한도, 기관이 정해 둔 발표 관행이라 드물게 바뀐다.", topics: ["disclose", "settle", "tick", "protect", "release", "research"] },
  { id: "bonds", name: "채권과 국채", days: 365, why: "발행 제도와 등급 체계는 드물게 바뀐다.", topics: ["bonds", "rating", "govbond"] },
  { id: "deriv", name: "파생상품 명세와 일정", days: 365, why: "계약 명세와 만기 규칙은 드물게 바뀐다.", topics: ["deriv"] },
  { id: "commodity", name: "원자재 계약과 발표 일정", days: 365, why: "거래소 명세와 정기 발표 일정.", topics: ["commodity", "metals", "energy"] },
  { id: "re-law", name: "부동산 권리·건축 법령", days: 365, why: "등기, 용도지역, 건폐율·용적률은 법령 개정 때만 바뀐다.", topics: ["registry", "landuse"] }
];
