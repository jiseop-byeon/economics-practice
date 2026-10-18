// 거래 규칙 데이터. 본문은 숫자를 직접 적지 않고 <span data-rule="ID"></span>로 이 값을 불러온다.
// 규칙이 바뀌면 여기 한 줄만 고친다. checked는 이 사이트가 마지막으로 대조한 날이다.
// level: "official" 공식 기관·법령 원문으로 확인 / "press" 보도·금융회사 안내로 확인 / "pending" 원문 대조 전
window.RULE_TOPICS = [
  { id: "hours", name: "거래 시간" },
  { id: "limits", name: "가격 변동을 막는 장치" },
  { id: "settle", name: "결제" },
  { id: "tick", name: "호가 단위" },
  { id: "tax", name: "세금" }
];

window.RULES = {
  "kr-hours-regular": {
    topic: "hours", market: "KR", label: "정규시장 매매 시간 (한국거래소)",
    value: "09:00~15:30", short: "오전 9시부터 오후 3시 30분",
    checked: "2026-10-17", level: "press",
    note: "시작 전에 모은 주문으로 시작 가격을 한 번에 정하고, 마감 직전 10분(15:20~15:30)에도 같은 방식으로 마감 가격을 정한다(단일가매매). 그 사이에는 주문이 들어오는 대로 체결한다(접속매매).",
    sources: [
      { name: "삼성증권 국내주식 매매제도 안내", url: "https://www.samsungpop.com/ux/kor/customer/guide/workproductguide/domesticStockTab2.do" },
      { name: "한국거래소 영문 매매제도 안내", url: "https://global.krx.co.kr/contents/GLB/06/0602/0602020204/GLB0602020204T6.jsp" }
    ]
  },
  "kr-hours-after": {
    topic: "hours", market: "KR", label: "애프터마켓 (한국거래소)",
    value: "16:00~20:00", short: "오후 4시부터 8시",
    effective: "2026-09-14", checked: "2026-10-17", level: "press",
    note: "2026년 9월 14일 시작하며 기존 시간외 단일가매매를 대신한다. 오전 프리마켓(07:00~07:50 계획)은 2027년 말로 미뤄졌다.",
    sources: [
      { name: "경북매일, 2026.9.9", url: "https://www.kbmaeil.com/article/20260909500701" },
      { name: "이투데이, 2026.6.19", url: "https://www.etoday.co.kr/news/view/2595443" }
    ]
  },
  "kr-hours-nxt": {
    topic: "hours", market: "KR", label: "대체거래소 넥스트레이드 거래 시간",
    value: "프리 08:00~08:50, 애프터 15:40~20:00", short: "오전 8시~8시 50분과 오후 3시 40분~8시",
    effective: "2025-03-04", checked: "2026-10-17", level: "press",
    note: "정규시장 시간에는 한국거래소와 함께 거래한다. 시작·마감 단일가매매 시간에는 넥스트레이드 거래가 멈춘다. 출범 때 보도는 애프터마켓 시작을 15:30으로 적었다.",
    sources: [
      { name: "한국경제, 2026.4.17", url: "https://www.hankyung.com/article/2026041789161" },
      { name: "뉴시스, 2025.2.14", url: "https://www.newsis.com/view/NISX20250214_0003065753" }
    ]
  },
  "us-hours-regular": {
    topic: "hours", market: "US", label: "정규 거래 시간 (뉴욕증권거래소·나스닥)",
    value: "09:30~16:00 (미국 동부 시간)", short: "미국 동부 시간 오전 9시 30분부터 오후 4시",
    checked: "2026-10-17", level: "pending",
    note: "한국 시간으로는 서머타임 기간 22:30~05:00, 그 밖에는 23:30~06:00이다. 정규 시간 앞뒤의 장 전·장 후 거래는 증권사마다 제공 범위가 다르다.",
    sources: [{ name: "뉴욕증권거래소 거래 시간 안내", url: "https://www.nyse.com/markets/hours-calendars" }]
  },
  "kr-limit-daily": {
    topic: "limits", market: "KR", label: "하루 가격제한폭 (주식)",
    value: "기준가격 ±30%", short: "전날 기준가격의 위아래 30%",
    effective: "2015-06-15", checked: "2026-10-17", level: "press",
    note: "하루에 이 범위 밖의 가격으로는 사고팔 수 없다. 개별 종목이 갑자기 크게 움직이면 잠시 단일가매매로 바꾸는 변동성완화장치(VI)도 있다.",
    sources: [{ name: "삼성증권 국내주식 매매제도 안내", url: "https://www.samsungpop.com/ux/kor/customer/guide/workproductguide/domesticStockTab2.do" }]
  },
  "us-limit-daily": {
    topic: "limits", market: "US", label: "하루 가격제한폭",
    value: "없음", short: "정해진 하루 상한·하한이 없다",
    checked: "2026-10-17", level: "press",
    note: "대신 개별 종목이 5분 기준가격에서 5% 또는 10%(종목 등급별) 넘게 벗어난 채 15초가 지나면 5분 멈추는 LULD 장치가 있다.",
    sources: [{ name: "Harvard Law School Forum, 2012.6.13 (LULD·서킷브레이커 승인 해설)", url: "https://corpgov.law.harvard.edu/2012/06/13/limit-up-limit-down-plan-and-circuit-breakers-approved/" }]
  },
  "us-mwcb": {
    topic: "limits", market: "US", label: "시장 전체 서킷브레이커",
    value: "S&P 500 −7% / −13% / −20%", short: "S&P 500 지수가 전날보다 7%, 13%, 20% 떨어질 때",
    checked: "2026-10-17", level: "press",
    note: "7%와 13%는 동부 시간 15:25 전이면 15분 멈추고, 20%는 그날 거래를 끝낸다.",
    sources: [{ name: "Harvard Law School Forum, 2012.6.13", url: "https://corpgov.law.harvard.edu/2012/06/13/limit-up-limit-down-plan-and-circuit-breakers-approved/" }]
  },
  "kr-settle-stock": {
    topic: "settle", market: "KR", label: "주식 결제일",
    value: "T+2", short: "거래한 날부터 2영업일 뒤",
    checked: "2026-10-17", level: "pending",
    note: "체결되면 계좌 화면에는 곧바로 보이지만, 판 돈을 실제로 찾을 수 있는 날은 2영업일 뒤이다.",
    sources: [{ name: "한국예탁결제원", url: "https://www.ksd.or.kr" }]
  },
  "us-settle-stock": {
    topic: "settle", market: "US", label: "주식 결제일",
    value: "T+1", short: "거래한 날부터 1영업일 뒤",
    effective: "2024-05-28", checked: "2026-10-17", level: "official",
    note: "2024년 5월 28일 T+2에서 T+1로 줄었다. 한국 증권사를 거치면 환전과 시차 때문에 원화로 찾는 날은 더 늦을 수 있다.",
    sources: [
      { name: "SEC Investor.gov, New T+1 Settlement Cycle", url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/new-t1-settlement-cycle-what-investors-need-know-investor-bulletin" },
      { name: "SEC 보도자료 2024-62", url: "https://www.sec.gov/news/press-release/2024-62" }
    ]
  },
  "kr-tick": {
    topic: "tick", market: "KR", label: "주식 호가 단위",
    value: "2천 원 미만 1원 · 5천 원 미만 5원 · 2만 원 미만 10원 · 5만 원 미만 50원 · 20만 원 미만 100원 · 50만 원 미만 500원 · 그 이상 1,000원",
    short: "가격대에 따라 1원에서 1,000원",
    effective: "2023-01-25", checked: "2026-10-17", level: "pending",
    note: "2023년 1월 25일 개편으로 일부 가격대의 단위가 줄었다(예: 1만~2만 원 50원→10원). 구간 경계 전체는 거래소 시행세칙으로 다시 대조해야 한다.",
    sources: [{ name: "블루밍비트, 2023.1 (개편 보도)", url: "https://bloomingbit.io/feed/news/41211" }]
  },
  "kr-tax-tx-kospi": {
    topic: "tax", market: "KR", label: "증권거래세 (유가증권시장, 팔 때)",
    value: "0.20%", short: "판 금액의 0.20%",
    effective: "2026-01-01", checked: "2026-10-17", level: "press",
    note: "증권거래세 0.05%와 농어촌특별세 0.15%를 합친 값이다. 2025년에는 0.15%였다.",
    sources: [
      { name: "조세일보, 2025.12.1", url: "https://www.taxtimes.co.kr/news/article.html?no=272624" },
      { name: "세계일보, 2026.1.5", url: "https://www.segye.com/newsView/20260105516769" }
    ]
  },
  "kr-tax-tx-kosdaq": {
    topic: "tax", market: "KR", label: "증권거래세 (코스닥, 팔 때)",
    value: "0.20%", short: "판 금액의 0.20%",
    effective: "2026-01-01", checked: "2026-10-17", level: "press",
    note: "농어촌특별세가 붙지 않고 증권거래세만 0.20%이다. 2025년에는 0.15%였다.",
    sources: [{ name: "조세일보, 2025.12.1", url: "https://www.taxtimes.co.kr/news/article.html?no=272624" }]
  },
  "us-tax-cg": {
    topic: "tax", market: "US", label: "해외주식 매매차익 세금 (한국 거주자)",
    value: "연 250만 원 공제 뒤 22%", short: "1년 이익에서 250만 원을 빼고 22%",
    checked: "2026-10-17", level: "press",
    note: "양도소득세 20%와 지방소득세 2%이다. 한 해의 이익과 손실을 합쳐 계산하고, 다음 해 5월에 스스로 신고한다. 손실은 다음 해로 넘기지 못한다.",
    sources: [
      { name: "KB국민은행 KB Think, 미국 주식 세금", url: "https://kbthink.com/main/economy/expert-column/gw-tax/gw-tax-231004.html" },
      { name: "삼성증권 해외주식 양도소득세 안내", url: "https://www.samsungpop.com/ux/kor/trading/overseasStock/overseasStockDealGuide/transferTax.do" }
    ]
  },
  "us-tax-div": {
    topic: "tax", market: "US", label: "미국 주식 배당 세금 (한국 거주자)",
    value: "미국에서 15% 원천징수", short: "미국에서 먼저 15%를 뗀다",
    checked: "2026-10-17", level: "press",
    note: "한미 조세조약에 따른 세율이다. 한국 배당세율(지방세 포함 15.4%)과의 차이만큼 한국에서 더 낼 수 있고, 이자와 배당이 연 2천만 원을 넘으면 종합과세 대상이 된다.",
    sources: [{ name: "KB국민은행 KB Think, 해외주식 세금", url: "https://kbthink.com/stock/foreign-tax.html" }]
  }
};
