// 거래 규칙 데이터. 본문은 숫자를 직접 적지 않고 <span data-rule="ID"></span>로 이 값을 불러온다.
// 규칙이 바뀌면 여기 한 줄만 고친다. checked는 이 사이트가 마지막으로 대조한 날이다.
// level: "official" 공식 기관·법령 원문으로 확인 / "press" 보도·금융회사 안내로 확인 / "pending" 원문 대조 전
window.RULE_TOPICS = [
  {
    "id": "hours",
    "name": "거래 시간"
  },
  {
    "id": "limits",
    "name": "가격 변동을 막는 장치"
  },
  {
    "id": "settle",
    "name": "결제"
  },
  {
    "id": "tick",
    "name": "호가 단위"
  },
  {
    "id": "tax",
    "name": "세금"
  },
  {
    "id": "protect",
    "name": "투자자 보호"
  },
  {
    "id": "disclose",
    "name": "공시"
  },
  {
    "id": "corp",
    "name": "배당과 자본 변동"
  },
  {
    "id": "etf",
    "name": "ETF 제도"
  },
  {
    "id": "credit",
    "name": "공매도와 신용거래"
  },
  {
    "id": "bonds",
    "name": "채권"
  },
  {
    "id": "rating",
    "name": "신용등급"
  },
  {
    "id": "govbond",
    "name": "국채 발행과 중앙은행"
  },
  {
    "id": "deriv",
    "name": "선물과 옵션"
  },
  {
    "id": "commodity",
    "name": "원자재"
  },
  {
    "id": "metals",
    "name": "금속 거래소와 금속 정책"
  },
  {
    "id": "energy",
    "name": "에너지 시장"
  },
  {
    "id": "registry",
    "name": "부동산 권리 확인"
  },
  {
    "id": "landuse",
    "name": "건축과 토지 이용"
  },
  {
    "id": "re-deal",
    "name": "부동산 거래 절차"
  },
  {
    "id": "lease",
    "name": "임대차와 보증금"
  },
  {
    "id": "mortgage",
    "name": "주택 대출 규제"
  },
  {
    "id": "re-tax",
    "name": "부동산 세금"
  },
  {
    "id": "subscription",
    "name": "청약"
  }
];

window.RULES = {
  "kr-hours-regular": {
    "topic": "hours",
    "market": "KR",
    "label": "정규시장 매매 시간 (한국거래소)",
    "value": "09:00~15:30",
    "short": "오전 9시부터 오후 3시 30분",
    "checked": "2026-10-17",
    "level": "press",
    "note": "시작 전에 모은 주문으로 시작 가격을 한 번에 정하고, 마감 직전 10분(15:20~15:30)에도 같은 방식으로 마감 가격을 정한다(단일가매매). 그 사이에는 주문이 들어오는 대로 체결한다(접속매매).",
    "sources": [
      {
        "name": "삼성증권 국내주식 매매제도 안내",
        "url": "https://www.samsungpop.com/ux/kor/customer/guide/workproductguide/domesticStockTab2.do"
      },
      {
        "name": "한국거래소 영문 매매제도 안내",
        "url": "https://global.krx.co.kr/contents/GLB/06/0602/0602020204/GLB0602020204T6.jsp"
      }
    ]
  },
  "kr-hours-after": {
    "topic": "hours",
    "market": "KR",
    "label": "애프터마켓 (한국거래소)",
    "value": "16:00~20:00",
    "short": "오후 4시부터 8시",
    "effective": "2026-09-14",
    "checked": "2026-10-17",
    "level": "press",
    "note": "2026년 9월 14일 시작하며 기존 시간외 단일가매매를 대신한다. 오전 프리마켓(07:00~07:50 계획)은 2027년 말로 미뤄졌다.",
    "sources": [
      {
        "name": "경북매일, 2026.9.9",
        "url": "https://www.kbmaeil.com/article/20260909500701"
      },
      {
        "name": "이투데이, 2026.6.19",
        "url": "https://www.etoday.co.kr/news/view/2595443"
      }
    ]
  },
  "kr-hours-nxt": {
    "topic": "hours",
    "market": "KR",
    "label": "대체거래소 넥스트레이드 거래 시간",
    "value": "프리 08:00~08:50, 애프터 15:40~20:00",
    "short": "오전 8시~8시 50분과 오후 3시 40분~8시",
    "effective": "2025-03-04",
    "checked": "2026-10-17",
    "level": "press",
    "note": "정규시장 시간에는 한국거래소와 함께 거래한다. 시작·마감 단일가매매 시간에는 넥스트레이드 거래가 멈춘다. 출범 때 보도는 애프터마켓 시작을 15:30으로 적었다.",
    "sources": [
      {
        "name": "한국경제, 2026.4.17",
        "url": "https://www.hankyung.com/article/2026041789161"
      },
      {
        "name": "뉴시스, 2025.2.14",
        "url": "https://www.newsis.com/view/NISX20250214_0003065753"
      }
    ]
  },
  "us-hours-regular": {
    "topic": "hours",
    "market": "US",
    "label": "정규 거래 시간 (뉴욕증권거래소·나스닥)",
    "value": "09:30~16:00 (미국 동부 시간)",
    "short": "미국 동부 시간 오전 9시 30분부터 오후 4시",
    "checked": "2026-10-17",
    "level": "pending",
    "note": "한국 시간으로는 서머타임 기간 22:30~05:00, 그 밖에는 23:30~06:00이다. 정규 시간 앞뒤의 장 전·장 후 거래는 증권사마다 제공 범위가 다르다.",
    "sources": [
      {
        "name": "뉴욕증권거래소 거래 시간 안내",
        "url": "https://www.nyse.com/markets/hours-calendars"
      }
    ]
  },
  "kr-limit-daily": {
    "topic": "limits",
    "market": "KR",
    "label": "하루 가격제한폭 (주식)",
    "value": "기준가격 ±30%",
    "short": "전날 기준가격의 위아래 30%",
    "effective": "2015-06-15",
    "checked": "2026-10-17",
    "level": "press",
    "note": "하루에 이 범위 밖의 가격으로는 사고팔 수 없다. 개별 종목이 갑자기 크게 움직이면 잠시 단일가매매로 바꾸는 변동성완화장치(VI)도 있다.",
    "sources": [
      {
        "name": "삼성증권 국내주식 매매제도 안내",
        "url": "https://www.samsungpop.com/ux/kor/customer/guide/workproductguide/domesticStockTab2.do"
      }
    ]
  },
  "us-limit-daily": {
    "topic": "limits",
    "market": "US",
    "label": "하루 가격제한폭",
    "value": "없음",
    "short": "정해진 하루 상한·하한이 없다",
    "checked": "2026-10-17",
    "level": "press",
    "note": "대신 개별 종목이 5분 기준가격에서 5% 또는 10%(종목 등급별) 넘게 벗어난 채 15초가 지나면 5분 멈추는 LULD 장치가 있다.",
    "sources": [
      {
        "name": "Harvard Law School Forum, 2012.6.13 (LULD·서킷브레이커 승인 해설)",
        "url": "https://corpgov.law.harvard.edu/2012/06/13/limit-up-limit-down-plan-and-circuit-breakers-approved/"
      }
    ]
  },
  "us-mwcb": {
    "topic": "limits",
    "market": "US",
    "label": "시장 전체 서킷브레이커",
    "value": "S&P 500 −7% / −13% / −20%",
    "short": "S&P 500 지수가 전날보다 7%, 13%, 20% 떨어질 때",
    "checked": "2026-10-17",
    "level": "press",
    "note": "7%와 13%는 동부 시간 15:25 전이면 15분 멈추고, 20%는 그날 거래를 끝낸다.",
    "sources": [
      {
        "name": "Harvard Law School Forum, 2012.6.13",
        "url": "https://corpgov.law.harvard.edu/2012/06/13/limit-up-limit-down-plan-and-circuit-breakers-approved/"
      }
    ]
  },
  "kr-settle-stock": {
    "topic": "settle",
    "market": "KR",
    "label": "주식 결제일",
    "value": "T+2",
    "short": "거래한 날부터 2영업일 뒤",
    "checked": "2026-10-17",
    "level": "pending",
    "note": "체결되면 계좌 화면에는 곧바로 보이지만, 판 돈을 실제로 찾을 수 있는 날은 2영업일 뒤이다.",
    "sources": [
      {
        "name": "한국예탁결제원",
        "url": "https://www.ksd.or.kr"
      }
    ]
  },
  "us-settle-stock": {
    "topic": "settle",
    "market": "US",
    "label": "주식 결제일",
    "value": "T+1",
    "short": "거래한 날부터 1영업일 뒤",
    "effective": "2024-05-28",
    "checked": "2026-10-17",
    "level": "official",
    "note": "2024년 5월 28일 T+2에서 T+1로 줄었다. 한국 증권사를 거치면 환전과 시차 때문에 원화로 찾는 날은 더 늦을 수 있다.",
    "sources": [
      {
        "name": "SEC Investor.gov, New T+1 Settlement Cycle",
        "url": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/new-t1-settlement-cycle-what-investors-need-know-investor-bulletin"
      },
      {
        "name": "SEC 보도자료 2024-62",
        "url": "https://www.sec.gov/news/press-release/2024-62"
      }
    ]
  },
  "kr-tick": {
    "topic": "tick",
    "market": "KR",
    "label": "주식 호가 단위",
    "value": "2천 원 미만 1원 · 5천 원 미만 5원 · 2만 원 미만 10원 · 5만 원 미만 50원 · 20만 원 미만 100원 · 50만 원 미만 500원 · 그 이상 1,000원",
    "short": "가격대에 따라 1원에서 1,000원",
    "effective": "2023-01-25",
    "checked": "2026-10-17",
    "level": "pending",
    "note": "2023년 1월 25일 개편으로 일부 가격대의 단위가 줄었다(예: 1만~2만 원 50원→10원). 구간 경계 전체는 거래소 시행세칙으로 다시 대조해야 한다.",
    "sources": [
      {
        "name": "블루밍비트, 2023.1 (개편 보도)",
        "url": "https://bloomingbit.io/feed/news/41211"
      }
    ]
  },
  "kr-tax-tx-kospi": {
    "topic": "tax",
    "market": "KR",
    "label": "증권거래세 (유가증권시장, 팔 때)",
    "value": "0.20%",
    "short": "판 금액의 0.20%",
    "effective": "2026-01-01",
    "checked": "2026-10-17",
    "level": "press",
    "note": "증권거래세 0.05%와 농어촌특별세 0.15%를 합친 값이다. 2025년에는 0.15%였다.",
    "sources": [
      {
        "name": "조세일보, 2025.12.1",
        "url": "https://www.taxtimes.co.kr/news/article.html?no=272624"
      },
      {
        "name": "세계일보, 2026.1.5",
        "url": "https://www.segye.com/newsView/20260105516769"
      }
    ]
  },
  "kr-tax-tx-kosdaq": {
    "topic": "tax",
    "market": "KR",
    "label": "증권거래세 (코스닥, 팔 때)",
    "value": "0.20%",
    "short": "판 금액의 0.20%",
    "effective": "2026-01-01",
    "checked": "2026-10-17",
    "level": "press",
    "note": "농어촌특별세가 붙지 않고 증권거래세만 0.20%이다. 2025년에는 0.15%였다.",
    "sources": [
      {
        "name": "조세일보, 2025.12.1",
        "url": "https://www.taxtimes.co.kr/news/article.html?no=272624"
      }
    ]
  },
  "us-tax-cg": {
    "topic": "tax",
    "market": "US",
    "label": "해외주식 매매차익 세금 (한국 거주자)",
    "value": "연 250만 원 공제 뒤 22%",
    "short": "1년 이익에서 250만 원을 빼고 22%",
    "checked": "2026-10-17",
    "level": "press",
    "note": "양도소득세 20%와 지방소득세 2%이다. 한 해의 이익과 손실을 합쳐 계산하고, 다음 해 5월에 스스로 신고한다. 손실은 다음 해로 넘기지 못한다.",
    "sources": [
      {
        "name": "KB국민은행 KB Think, 미국 주식 세금",
        "url": "https://kbthink.com/main/economy/expert-column/gw-tax/gw-tax-231004.html"
      },
      {
        "name": "삼성증권 해외주식 양도소득세 안내",
        "url": "https://www.samsungpop.com/ux/kor/trading/overseasStock/overseasStockDealGuide/transferTax.do"
      }
    ]
  },
  "us-tax-div": {
    "topic": "tax",
    "market": "US",
    "label": "미국 주식 배당 세금 (한국 거주자)",
    "value": "미국에서 15% 원천징수",
    "short": "미국에서 먼저 15%를 뗀다",
    "checked": "2026-10-17",
    "level": "press",
    "note": "한미 조세조약에 따른 세율이다. 한국 배당세율(지방세 포함 15.4%)과의 차이만큼 한국에서 더 낼 수 있고, 이자와 배당이 연 2천만 원을 넘으면 종합과세 대상이 된다.",
    "sources": [
      {
        "name": "KB국민은행 KB Think, 해외주식 세금",
        "url": "https://kbthink.com/stock/foreign-tax.html"
      }
    ]
  },
  "kr-vi-dynamic": {
    "topic": "limits",
    "market": "KR",
    "label": "동적 변동성완화장치(VI)",
    "value": "직전 체결가 대비 코스피200 종목 ±3%, 그 밖의 종목 ±6%",
    "short": "바로 앞 체결가에서 3%(대형주) 또는 6% 넘게 튈 때",
    "effective": "2014-09-01",
    "checked": "2026-10-18",
    "level": "press",
    "note": "주문 하나로 가격이 순간적으로 크게 움직이면 한국거래소에서는 2분 동안 단일가매매로 바꾸고, 넥스트레이드에서는 그 2분 동안 거래를 멈춘다. 시간대에 따라 기준이 다른 경우가 있다.",
    "sources": [
      {
        "name": "KB국민은행 KB Think, VI 발동 기준",
        "url": "https://kbthink.com/stock/vi.html"
      },
      {
        "name": "뉴시스, 2026.7.24",
        "url": "https://mobile.newsis.com/view/NISX20260724_0003722742"
      }
    ]
  },
  "kr-vi-static": {
    "topic": "limits",
    "market": "KR",
    "label": "정적 변동성완화장치(VI)",
    "value": "기준가격 대비 ±10%",
    "short": "그날 기준가격에서 10% 넘게 움직일 때",
    "effective": "2014-09-01",
    "checked": "2026-10-18",
    "level": "press",
    "note": "여러 주문에 걸쳐 가격이 누적으로 크게 움직였을 때 2분 동안 단일가매매로 바꾼다.",
    "sources": [
      {
        "name": "KB국민은행 KB Think, VI 발동 기준",
        "url": "https://kbthink.com/stock/vi.html"
      }
    ]
  },
  "kr-tax-div": {
    "topic": "tax",
    "market": "KR",
    "label": "배당소득세 (원천징수)",
    "value": "15.4%",
    "short": "배당금의 15.4%",
    "checked": "2026-10-18",
    "level": "press",
    "note": "소득세 14%와 지방소득세 1.4%이다. 증권회사가 떼고 나머지를 입금한다.",
    "sources": [
      {
        "name": "KB국민은행 KB Think, 해외주식 세금",
        "url": "https://kbthink.com/stock/foreign-tax.html"
      }
    ]
  },
  "kr-tax-comprehensive": {
    "topic": "tax",
    "market": "KR",
    "label": "금융소득 종합과세 기준",
    "value": "이자와 배당 합계 연 2,000만 원 초과",
    "short": "한 해 이자와 배당이 2,000만 원을 넘을 때",
    "checked": "2026-10-18",
    "level": "press",
    "note": "넘는 부분은 다른 소득과 합쳐 누진세율로 다시 계산하므로 15.4%보다 세금이 늘 수 있다. 다음 해 5월에 신고한다.",
    "sources": [
      {
        "name": "KB국민은행 KB Think, 2026년 달라지는 세법",
        "url": "https://kbthink.com/tax/expert/gw/251230.html"
      }
    ]
  },
  "kr-tax-div-sep": {
    "topic": "tax",
    "market": "KR",
    "label": "고배당기업 배당 분리과세 (한시)",
    "value": "2천만 원 이하 14% · 3억 원 이하 20% · 50억 원 이하 25% · 그 이상 30%",
    "short": "고배당기업의 배당을 다른 소득과 합치지 않고 14~30%로 따로 과세",
    "effective": "2026-01-01",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2026년 받는 배당부터 2028년 사업연도 배당분까지 적용하는 한시 제도이다. 배당성향 같은 요건을 갖춘 상장사의 배당만 해당하고, 지방소득세는 따로 붙는다. 대상 여부와 신고 방법은 국세청 안내로 확인한다.",
    "sources": [
      {
        "name": "KB국민은행 KB Think, 2026년 달라지는 세법",
        "url": "https://kbthink.com/tax/expert/gw/251230.html"
      },
      {
        "name": "다음뉴스(더파이낸스), 2025.12.17",
        "url": "https://v.daum.net/v/20251217160504663"
      }
    ]
  },
  "kr-major-shareholder": {
    "topic": "tax",
    "market": "KR",
    "label": "상장주식 양도소득세 대주주 기준",
    "value": "한 종목 보유액 50억 원 이상 (또는 일정 지분율 이상)",
    "short": "한 종목을 50억 원 넘게 가진 경우",
    "checked": "2026-10-18",
    "level": "press",
    "note": "이 기준 아래의 일반 투자자는 거래소에서 사고판 상장주식 이익에 양도소득세를 내지 않는다. 정부가 10억 원으로 낮추려다 50억 원 유지로 돌아선 적이 있어, 바뀌기 쉬운 숫자이다.",
    "sources": [
      {
        "name": "인사이트, 2026.7.26",
        "url": "https://www.insight.co.kr/news/520049"
      },
      {
        "name": "파이낸셜뉴스, 2025.8.24",
        "url": "https://www.fnnews.com/news/202508241819434186"
      }
    ]
  },
  "kr-deposit-insurance": {
    "topic": "protect",
    "market": "KR",
    "label": "예금자보호 한도 (투자자예탁금 포함)",
    "value": "금융회사 한 곳당 1인 1억 원",
    "short": "금융회사 한 곳당 1억 원까지",
    "effective": "2025-09-01",
    "checked": "2026-10-18",
    "level": "official",
    "note": "증권회사에 맡긴 투자자예탁금도 원금과 예탁금 이용료를 합쳐 1억 원까지 보호한다. 주식, 펀드, 채권처럼 값이 오르내리는 상품은 보호하지 않는다.",
    "sources": [
      {
        "name": "금융위원회, 2025.9.1부터 예금을 1억 원까지 보호 안내",
        "url": "https://www.fsc.go.kr/po020201/84975"
      }
    ]
  },
  "us-sipc": {
    "topic": "protect",
    "market": "US",
    "label": "미국 증권회사 파산 시 보호 (SIPC)",
    "value": "1인당 50만 달러 (현금은 그중 25만 달러)",
    "short": "증권회사가 무너졌을 때 1인당 50만 달러까지",
    "checked": "2026-10-18",
    "level": "pending",
    "note": "미국 증권회사가 파산해 고객 자산이 모자랄 때 메워 주는 제도이다. 주가가 떨어져 생긴 손실은 보호하지 않는다. 한국 증권회사를 통해 산 미국 주식에는 한국의 제도가 먼저 적용된다.",
    "sources": [
      {
        "name": "SIPC, What SIPC Protects",
        "url": "https://www.sipc.org/for-investors/what-sipc-protects"
      }
    ]
  },
  "kr-cb-stages": {
    "topic": "limits",
    "market": "KR",
    "label": "서킷브레이커 발동 기준 (매매거래 일시중단)",
    "value": "코스피·코스닥 지수 전날 대비 −8% / −15% / −20%, 1분 지속",
    "short": "8%, 15%, 20% 이상 떨어지고",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2단계와 3단계는 앞 단계 발동 지점보다 1% 이상 더 떨어지는 조건도 함께 채워야 한다. 각 단계는 하루 한 번만 걸리고, 지수가 떨어질 때만 작동한다. 정규시장에만 적용한다.",
    "sources": [
      {
        "name": "한국거래소 영문 코스닥 매매제도: Circuit Breakers",
        "url": "https://global.krx.co.kr/contents/GLB/06/0602/0602020204/GLB0602020204T2.jsp"
      },
      {
        "name": "한국거래소, Guide to Trading in the Korean Stock Market (영문 안내서)",
        "url": "https://global.krx.co.kr/contents/GLB/01/0109/0109000000/guide_to_trading_in_the_korean_stock_market.pdf"
      }
    ]
  },
  "kr-cb-halt": {
    "topic": "limits",
    "market": "KR",
    "label": "서킷브레이커 발동 시 조치",
    "value": "1·2단계 20분 매매 중단 뒤 10분 단일가매매, 3단계 당일 장 종료",
    "short": "시장 전체가 20분 동안 멈추고, 이어서 10분 동안 주문을 모아 단일가매매로 다시 연다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "멈춘 동안에는 주문 취소만 받는다. 1·2단계 때 관련 지수선물과 주식선물 거래도 함께 멈춘다. 3단계가 걸리면 그날 장을 끝내며, 취소 주문을 포함한 모든 호가를 받지 않는다.",
    "sources": [
      {
        "name": "한국거래소 영문 코스닥 매매제도: Circuit Breakers",
        "url": "https://global.krx.co.kr/contents/GLB/06/0602/0602020204/GLB0602020204T2.jsp"
      },
      {
        "name": "한국거래소, Guide to Trading in the Korean Stock Market (영문 안내서)",
        "url": "https://global.krx.co.kr/contents/GLB/01/0109/0109000000/guide_to_trading_in_the_korean_stock_market.pdf"
      }
    ]
  },
  "kr-cb-cutoff": {
    "topic": "limits",
    "market": "KR",
    "label": "서킷브레이커 발동 제한 시간",
    "value": "장 종료 40분 전부터 1·2단계 발동 안 함 (3단계는 가능)",
    "short": "장 마감 40분 전(15:30 마감이면 14:50)부터는 1단계와 2단계가 걸리지 않는다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "3단계는 마감 40분 전 이후에도 걸릴 수 있다.",
    "sources": [
      {
        "name": "한국거래소 영문 코스닥 매매제도: Circuit Breakers",
        "url": "https://global.krx.co.kr/contents/GLB/06/0602/0602020204/GLB0602020204T2.jsp"
      },
      {
        "name": "KB국민은행 KB Think, 사이드카 뜻과 발동 조건",
        "url": "https://kbthink.com/stock/sidecar.html"
      }
    ]
  },
  "kr-sidecar-kospi": {
    "topic": "limits",
    "market": "KR",
    "label": "사이드카 발동 기준 (유가증권시장)",
    "value": "코스피200 선물이 기준가격 대비 ±5% 이상 움직인 상태가 1분 지속",
    "short": "코스피200 선물이 5% 넘게 움직인 채 1분",
    "checked": "2026-10-18",
    "level": "official",
    "note": "오를 때는 프로그램 매수 호가, 내릴 때는 프로그램 매도 호가의 효력을 멈춘다.",
    "sources": [
      {
        "name": "한국거래소, Guide to Trading in the Korean Stock Market (영문 안내서)",
        "url": "https://global.krx.co.kr/contents/GLB/01/0109/0109000000/guide_to_trading_in_the_korean_stock_market.pdf"
      },
      {
        "name": "KB국민은행 KB Think, 사이드카 뜻과 발동 조건",
        "url": "https://kbthink.com/stock/sidecar.html"
      }
    ]
  },
  "kr-sidecar-kosdaq": {
    "topic": "limits",
    "market": "KR",
    "label": "사이드카 발동 기준 (코스닥시장)",
    "value": "코스닥150 선물 ±6% 이상과 코스닥150 지수 ±3% 이상 변동이 함께 1분 지속",
    "short": "코스닥150 선물 6%와 지수 3%가 함께 1분",
    "checked": "2026-10-18",
    "level": "official",
    "note": "두 조건을 동시에 채워야 한다.",
    "sources": [
      {
        "name": "한국거래소 영문 코스닥 매매제도: Sidecar",
        "url": "https://global.krx.co.kr/contents/GLB/06/0602/0602020204/GLB0602020204T3.jsp"
      },
      {
        "name": "한국거래소, Guide to Trading in the Korean Stock Market (영문 안내서)",
        "url": "https://global.krx.co.kr/contents/GLB/01/0109/0109000000/guide_to_trading_in_the_korean_stock_market.pdf"
      }
    ]
  },
  "kr-sidecar-halt": {
    "topic": "limits",
    "market": "KR",
    "label": "사이드카 발동 시 조치",
    "value": "프로그램매매 호가 효력 5분 정지, 하루 1번, 09:05부터",
    "short": "프로그램매매 호가의 효력이 5분 동안 멈춘다. 방향과 상관없이 하루에 한 번만 걸리고, 장 시작 5분 뒤부터 마감 40분 전까지 작동한다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "멈춘 동안 프로그램매매 주문의 취소·정정도 멈춘다. 5분이 지나거나, 장 마감 40분 전이 되거나, 서킷브레이커 뒤 거래가 다시 열리면 풀린다. 일부 금융회사 안내는 매수와 매도 사이드카가 따로 걸린다고 적지만, 한국거래소 영문 안내서는 방향과 상관없이 하루 한 번이라고 적는다.",
    "sources": [
      {
        "name": "한국거래소, Guide to Trading in the Korean Stock Market (영문 안내서)",
        "url": "https://global.krx.co.kr/contents/GLB/01/0109/0109000000/guide_to_trading_in_the_korean_stock_market.pdf"
      },
      {
        "name": "한국거래소 영문 코스닥 매매제도: Sidecar",
        "url": "https://global.krx.co.kr/contents/GLB/06/0602/0602020204/GLB0602020204T3.jsp"
      },
      {
        "name": "KB국민은행 KB Think, 사이드카 뜻과 발동 조건",
        "url": "https://kbthink.com/stock/sidecar.html"
      }
    ]
  },
  "kr-alert-caution": {
    "topic": "limits",
    "market": "KR",
    "label": "투자주의종목 지정 기간",
    "value": "1일",
    "short": "지정된 날 하루만 유지된다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "소수 계좌 매수 관여 과다, 단기 급등, 투자경고 지정예고 같은 사유로 지정한다. 매매 방법에는 제한이 없다.",
    "sources": [
      {
        "name": "한국거래소 KIND, 투자경고종목 지정예고 공시, 2026.7.16",
        "url": "https://kind.krx.co.kr/external/2026/07/16/001034/20260716002334/68807.htm"
      },
      {
        "name": "KB국민은행 KB Think, 시장경보제도 지정 및 해제 조건, 2026.2.26",
        "url": "https://kbthink.com/stock/market-warning.html"
      }
    ]
  },
  "kr-alert-warning": {
    "topic": "limits",
    "market": "KR",
    "label": "투자경고종목 지정 요건 (대표 유형)",
    "value": "5일 전 대비 60% 이상(또는 15일 전 대비 100% 이상) 상승 + 최근 15일 종가 중 최고가 + 같은 기간 지수 상승률의 5배(15일 기준은 3배) 이상",
    "short": "5일 전보다 60% 이상 또는 15일 전보다 100% 이상 오르고, 최근 15일 종가 중 최고가이며, 오름폭이 같은 기간 지수 상승률의 5배(15일 기준 3배) 이상인 경우",
    "checked": "2026-10-18",
    "level": "official",
    "note": "지정예고 뒤 10일 안에 요건을 채우는 날이 오면 다음 날 지정한다. 이 밖에 1년 동안의 초장기 상승과 특정 계좌 쏠림을 함께 보는 유형 등이 있다. 근거는 시장감시규정 제5조의3과 그 시행세칙이다.",
    "sources": [
      {
        "name": "한국거래소 KIND, 투자경고종목 지정 공시, 2026.5.13",
        "url": "https://kind.krx.co.kr/external/2026/05/13/001032/20260513002272/70804.htm"
      },
      {
        "name": "한국거래소 KIND, 투자경고종목 지정예고 공시, 2026.7.16",
        "url": "https://kind.krx.co.kr/external/2026/07/16/001034/20260716002334/68807.htm"
      }
    ]
  },
  "kr-alert-top100": {
    "topic": "limits",
    "market": "KR",
    "label": "투자경고 지정 제외: 시가총액 상위 100위",
    "value": "전날 시가총액 상위 100위 이내 종목 제외",
    "short": "2025년 말부터 시가총액 상위 100위 종목은 투자경고 지정에서 빠지므로, 대형주는 크게 올라도 경고가 붙지 않을 수 있다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2025년 12월 일부 요건(초장기 상승 등)에서 먼저 뺐고, 2026년 5월 개정안으로 지정과 지정예고 전반으로 넓혔다. 2026년 7월 지정예고 공시에는 '시가총액 100위 이내에 해당하지 않을 것'이 요건으로 들어가 있다. 확대 시행일은 확인하지 못했다.",
    "sources": [
      {
        "name": "한국거래소 KIND, 투자경고종목 지정예고 공시, 2026.7.16",
        "url": "https://kind.krx.co.kr/external/2026/07/16/001034/20260716002334/68807.htm"
      },
      {
        "name": "한국경제, 2025.12.24",
        "url": "https://www.hankyung.com/article/2025122438051"
      },
      {
        "name": "스마트투데이, 2026.5.19",
        "url": "https://www.smarttoday.co.kr/ko-kr/articles/107650"
      }
    ]
  },
  "kr-alert-restrict": {
    "topic": "limits",
    "market": "KR",
    "label": "투자경고·투자위험종목 매수 제한",
    "value": "위탁증거금 100%, 신용융자 매수 불가, 대용증권 불인정",
    "short": "살 때 위탁증거금 100%를 내야 하고, 신용융자로 살 수 없으며, 담보로 쓰는 대용증권으로도 인정되지 않는다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "투자경고와 투자위험 단계에 똑같이 적용한다.",
    "sources": [
      {
        "name": "한국거래소 KIND, 투자경고종목 지정 공시, 2026.5.13",
        "url": "https://kind.krx.co.kr/external/2026/05/13/001032/20260513002272/70804.htm"
      },
      {
        "name": "한국거래소 KIND, 투자위험종목 지정 공시, 2026.4.13",
        "url": "https://kind.krx.co.kr/external/2026/04/13/000702/20260413001923/68812.htm"
      }
    ]
  },
  "kr-alert-warning-halt": {
    "topic": "limits",
    "market": "KR",
    "label": "투자경고종목 매매거래정지 요건",
    "value": "지정 뒤 2일간 40% 이상 상승하고 지정 전날 종가보다 높을 때 1일 정지 (1회)",
    "short": "이틀 동안 40% 넘게 더 오르고 지정 전날 종가보다 높을 때 한 번, 하루 매매거래를 멈출 수 있다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "정지되면 해제 판단 날짜가 매매거래일 기준으로 뒤로 밀린다.",
    "sources": [
      {
        "name": "한국거래소 KIND, 투자경고종목 지정 공시, 2026.5.13",
        "url": "https://kind.krx.co.kr/external/2026/05/13/001032/20260513002272/70804.htm"
      }
    ]
  },
  "kr-alert-risk": {
    "topic": "limits",
    "market": "KR",
    "label": "투자위험종목 지정 요건 (대표 유형)",
    "value": "3일 전 대비 45% 이상 상승 + 최근 15일 종가 중 최고가 + 같은 기간 지수 상승률의 5배 이상",
    "short": "3일 전보다 45% 이상 오르고, 최근 15일 종가 중 최고가이며, 오름폭이 같은 기간 지수 상승률의 5배 이상인 경우",
    "checked": "2026-10-18",
    "level": "official",
    "note": "투자경고 상태에서만 지정한다. 지정되면 지정일 하루 매매거래를 멈추고(금융회사 안내 기준), 그 뒤 추가 급등 때 하루씩 더 멈출 수 있다. 다른 유형의 요건도 있다.",
    "sources": [
      {
        "name": "한국거래소 KIND, 투자위험종목 지정 공시, 2026.4.13",
        "url": "https://kind.krx.co.kr/external/2026/04/13/000702/20260413001923/68812.htm"
      },
      {
        "name": "KB국민은행 KB Think, 시장경보제도 지정 및 해제 조건, 2026.2.26",
        "url": "https://kbthink.com/stock/market-warning.html"
      }
    ]
  },
  "kr-alert-release": {
    "topic": "limits",
    "market": "KR",
    "label": "투자경고·투자위험종목 해제 요건",
    "value": "지정 10일째 이후 판단일에 '5일 전 대비 60% 이상 상승', '15일 전 대비 100% 이상 상승', '최근 15일 최고가'에 모두 해당하지 않으면 다음 날 해제",
    "short": "지정 열흘째부터 매일 판단해, 5일 전보다 60% 이상 상승, 15일 전보다 100% 이상 상승, 최근 15일 최고가 가운데 어느 것에도 해당하지 않는 날이 오면 다음 날 풀린다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "해당하면 하루씩 미뤄 다시 판단한다. 투자위험에서 풀리면 투자경고로, 투자경고에서 풀리면 그날 하루 투자주의로 내려온다.",
    "sources": [
      {
        "name": "한국거래소 KIND, 투자경고종목 지정 공시, 2026.5.13",
        "url": "https://kind.krx.co.kr/external/2026/05/13/001032/20260513002272/70804.htm"
      },
      {
        "name": "한국거래소 KIND, 투자위험종목 지정 공시, 2026.4.13",
        "url": "https://kind.krx.co.kr/external/2026/04/13/000702/20260413001923/68812.htm"
      }
    ]
  },
  "kr-overheat": {
    "topic": "limits",
    "market": "KR",
    "label": "단기과열종목 지정 요건 (3거래일 유형)",
    "value": "종가 ≥ 직전 40거래일 평균 종가의 130%, 2일 평균 회전율 ≥ 40거래일 평균의 600%, 2일 평균 변동성 ≥ 40거래일 평균의 150%",
    "short": "종가가 직전 40거래일 평균의 130% 이상, 최근 2거래일 회전율 평균이 직전 40거래일 평균의 600% 이상, 변동성 평균이 150% 이상이고 종가가 전날보다 오른 날이 오면",
    "checked": "2026-10-18",
    "level": "official",
    "note": "지정예고 뒤 10거래일 안에 세 요건을 모두 채우고, 그날 종가가 전날과 예고 전날 종가보다 높아야 한다. 투자경고·투자위험 종목에는 적용하지 않는다. 우선주처럼 유통 주식이 적은 종목에는 다른 유형이 있다.",
    "sources": [
      {
        "name": "한국거래소 KIND, 단기과열종목 지정예고 공시, 2025.3.7",
        "url": "https://kind.krx.co.kr/external/2025/03/07/000958/20250307002325/99427.htm"
      },
      {
        "name": "한국거래소 KIND, 단기과열종목 지정예고 공시, 2025.2.6",
        "url": "https://kind.krx.co.kr/external/2025/02/06/001040/20250206002604/70724.htm"
      }
    ]
  },
  "kr-overheat-auction": {
    "topic": "limits",
    "market": "KR",
    "label": "단기과열종목 지정 시 조치",
    "value": "3거래일 동안 30분 단위 단일가매매",
    "short": "3거래일 동안 30분마다 한 번씩 단일가매매로만 거래한다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "해제와 연장 요건은 확인한 공시에 적혀 있지 않았다.",
    "sources": [
      {
        "name": "한국거래소 KIND, 단기과열종목 지정예고 공시, 2025.3.7",
        "url": "https://kind.krx.co.kr/external/2025/03/07/000958/20250307002325/99427.htm"
      },
      {
        "name": "한국거래소 KIND, 단기과열종목 지정예고 공시, 2025.2.6",
        "url": "https://kind.krx.co.kr/external/2025/02/06/001040/20250206002604/70724.htm"
      }
    ]
  },
  "kr-halt-disclosure": {
    "topic": "limits",
    "market": "KR",
    "label": "중요 공시에 따른 매매거래정지",
    "value": "공시 시점부터 30분",
    "short": "공시 시점부터 30분 동안 매매를 멈춘다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "조회공시에 기한까지 답하지 않으면 답할 때까지(코스닥은 답한 뒤 30분까지) 멈춘다. 불성실공시법인 지정, 관리종목 지정은 하루, 상장폐지 사유는 사유가 풀릴 때까지 멈춘다. 근거로 쓴 영문 안내서는 2026년 9월 애프터마켓 도입 전 판이다.",
    "sources": [
      {
        "name": "한국거래소, Guide to Trading in the Korean Stock Market (영문 안내서)",
        "url": "https://global.krx.co.kr/contents/GLB/01/0109/0109000000/guide_to_trading_in_the_korean_stock_market.pdf"
      }
    ]
  },
  "kr-nxt-measures": {
    "topic": "limits",
    "market": "KR",
    "label": "넥스트레이드의 시장조치 연동",
    "value": "한국거래소와 같은 가격제한폭·시장조치 적용, 매매거래정지·해제 즉시 연동",
    "short": "넥스트레이드는 한국거래소와 같은 가격제한폭과 시장조치를 쓰고, 한국거래소의 매매거래정지와 해제를 곧바로 따른다",
    "effective": "2025-03-04",
    "checked": "2026-10-18",
    "level": "press",
    "note": "한국거래소의 서킷브레이커가 걸리면 넥스트레이드도 그 시장 종목의 거래를 멈춘다. 2025년 8월 정지 해제 시점이 어긋난 일 뒤에 9월 9일 시행세칙을 고쳐 재개 시점을 맞췄다.",
    "sources": [
      {
        "name": "이투데이 기사 인용(서플), 2026.7.20",
        "url": "https://supple.kr/news/cmrsaabxw003zkrcbhr6xnocy"
      },
      {
        "name": "SBS Biz, 2025.3 (넥스트레이드 서킷브레이커 연동)",
        "url": "https://biz.sbs.co.kr/amp/article/20000221559"
      },
      {
        "name": "아시아경제, 2025.9.10",
        "url": "https://core.asiae.co.kr/article/2025091007252013006"
      }
    ]
  },
  "kr-disc-annual": {
    "topic": "disclose",
    "market": "KR",
    "label": "사업보고서 제출 기한",
    "value": "사업연도 경과 후 90일 이내",
    "short": "사업연도가 끝나고 90일 안",
    "checked": "2026-10-18",
    "level": "official",
    "note": "금융위원회와 거래소에 낸다. 12월 결산 회사는 대개 3월 31일이 마감이다. 기간의 마지막 날이 공휴일이면 다음 근무일까지 낼 수 있다. 감사보고서 작성에 부득이한 사유가 있으면 미리 신고해 연 1회, 5영업일 안에서 늦출 수 있다(자본시장법 제165조).",
    "sources": [
      {
        "name": "금융감독원 DART 기업공시 길라잡이, 정기보고서",
        "url": "https://dart.fss.or.kr/info/main.do?menu=210"
      },
      {
        "name": "금융감독원 DART 기업공시 길라잡이, 정기보고서 제출기한(공시업무 스케줄)",
        "url": "https://dart.fss.or.kr/info/main.do?menu=410"
      },
      {
        "name": "자본시장법 제159조 조문 (케이스노트 수록)",
        "url": "https://casenote.kr/법령/자본시장과_금융투자업에_관한_법률/제159조"
      }
    ]
  },
  "kr-disc-quarter": {
    "topic": "disclose",
    "market": "KR",
    "label": "반기·분기보고서 제출 기한",
    "value": "반기·분기 경과 후 45일 이내",
    "short": "반기나 분기가 끝나고 45일 안",
    "checked": "2026-10-18",
    "level": "official",
    "note": "연결재무제표 기준으로 처음 작성하는 회사는 최초 사업연도와 그다음 사업연도에 한해 15일 늘어난 60일 안에 낼 수 있다. 반기보고서는 회계감사인의 검토를 받고, 분기보고서의 검토의견은 일정 규모(별도 기준 자산 5천억 원) 미만 회사라면 생략할 수 있다.",
    "sources": [
      {
        "name": "금융감독원 DART 기업공시 길라잡이, 정기보고서",
        "url": "https://dart.fss.or.kr/info/main.do?menu=210"
      },
      {
        "name": "금융감독원 DART 기업공시 길라잡이, 정기보고서 제출기한(공시업무 스케줄)",
        "url": "https://dart.fss.or.kr/info/main.do?menu=410"
      },
      {
        "name": "자본시장법 제160조 조문 (케이스노트 수록)",
        "url": "https://casenote.kr/법령/자본시장과_금융투자업에_관한_법률/제160조"
      }
    ]
  },
  "kr-disc-major": {
    "topic": "disclose",
    "market": "KR",
    "label": "주요사항보고서 제출 기한",
    "value": "사유 발생일 다음 날까지 (합병·분할 등은 3일 이내)",
    "short": "그 일이 생긴 다음 날까지",
    "checked": "2026-10-18",
    "level": "official",
    "note": "금융위원회에 낸다. 합병, 분할, 분할합병, 주식의 포괄적 교환·이전은 3일 안이다. 상장회사의 자기주식 취득·처분 결의는 거래소 공시와 맞추어 당일 공시한다.",
    "sources": [
      {
        "name": "금융감독원 DART 기업공시 길라잡이, 주요사항보고서",
        "url": "https://dart.fss.or.kr/info/main.do?menu=220"
      },
      {
        "name": "자본시장법 제161조 조문 (케이스노트 수록)",
        "url": "https://casenote.kr/법령/자본시장과_금융투자업에_관한_법률/제161조"
      }
    ]
  },
  "kr-disc-krx": {
    "topic": "disclose",
    "market": "KR",
    "label": "거래소 수시공시 기한",
    "value": "당일 공시사항: 사유 발생 당일 18:00까지 · 익일 공시사항: 사유 발생 다음 매매거래일 18:00까지",
    "short": "사안에 따라 그날 오후 6시 또는 다음 거래일 오후 6시까지",
    "checked": "2026-10-18",
    "level": "official",
    "note": "당일 공시사항은 18시 이후에 생기는 등 불가피한 경우 다음 날 장 시작 전 시간외시장 개시 10분 전까지 낼 수 있다. 공정공시는 정보를 특정인에게 제공하기 전까지 낸다. 근거 문서는 코스닥시장 해설서(2024.1)이며, 유가증권시장 공시규정도 같은 틀이다.",
    "sources": [
      {
        "name": "한국거래소 KIND, 2024 코스닥시장 공시·상장관리 해설(2024.1)",
        "url": "https://kind.krx.co.kr/external/dst/reference/10951/(%EA%B3%B5%EC%A7%80)%2024%EB%85%84%EC%BD%94%EC%8A%A4%EB%8B%A5%EC%8B%9C%EC%9E%A5%EA%B3%B5%EC%8B%9C%EC%83%81%EC%9E%A5%EA%B4%80%EB%A6%AC%ED%95%B4%EC%84%A4%EC%84%9C.pdf"
      }
    ]
  },
  "kr-disc-hours": {
    "topic": "disclose",
    "market": "KR",
    "label": "전자공시 접수 시간",
    "value": "07:30~18:00",
    "short": "오전 7시 30분부터 오후 6시까지",
    "checked": "2026-10-18",
    "level": "official",
    "note": "거래소 공시제출시스템과 DART의 운영 시간이다. DART는 18:00~19:00에 접수한 서류를 다음 날 07:30에 배포한다. 2026년 9월 애프터마켓 도입 뒤에도 공시 접수는 18시까지로 유지된다고 보도되었다.",
    "sources": [
      {
        "name": "한국거래소 KIND, 2024 코스닥시장 공시·상장관리 해설(2024.1)",
        "url": "https://kind.krx.co.kr/external/dst/reference/10951/(%EA%B3%B5%EC%A7%80)%2024%EB%85%84%EC%BD%94%EC%8A%A4%EB%8B%A5%EC%8B%9C%EC%9E%A5%EA%B3%B5%EC%8B%9C%EC%83%81%EC%9E%A5%EA%B4%80%EB%A6%AC%ED%95%B4%EC%84%A4%EC%84%9C.pdf"
      },
      {
        "name": "경북매일, 2026.9.9",
        "url": "https://www.kbmaeil.com/article/20260909500701"
      }
    ]
  },
  "kr-disc-inquiry": {
    "topic": "disclose",
    "market": "KR",
    "label": "조회공시 답변 기한",
    "value": "풍문·보도: 오전 요구는 당일 18:00, 오후 요구는 다음 날 12:00까지 (매매거래정지를 수반하면 다음 날 18:00) · 주가·거래량 급변: 다음 날 18:00까지",
    "short": "소문은 반나절 안, 주가 급변은 다음 날 오후 6시까지",
    "checked": "2026-10-18",
    "level": "official",
    "note": "기한까지 답하지 않으면 매매거래가 정지되고, 답변 뒤 30분이 지나면 재개된다. 근거 문서는 코스닥시장 해설서(2024.1)이다.",
    "sources": [
      {
        "name": "한국거래소 KIND, 2024 코스닥시장 공시·상장관리 해설(2024.1)",
        "url": "https://kind.krx.co.kr/external/dst/reference/10951/(%EA%B3%B5%EC%A7%80)%2024%EB%85%84%EC%BD%94%EC%8A%A4%EB%8B%A5%EC%8B%9C%EC%9E%A5%EA%B3%B5%EC%8B%9C%EC%83%81%EC%9E%A5%EA%B4%80%EB%A6%AC%ED%95%B4%EC%84%A4%EC%84%9C.pdf"
      }
    ]
  },
  "kr-disc-unconfirmed": {
    "topic": "disclose",
    "market": "KR",
    "label": "조회공시 미확정 답변 뒤 재공시 기한",
    "value": "미확정 공시일부터 1개월 이내",
    "short": "1개월 안에",
    "checked": "2026-10-18",
    "level": "official",
    "note": "1개월 안에 확정되지 않으면 확정 시한을 밝혀 다시 미확정으로 공시할 수 있다. 거래소와 협의하면 예외적으로 최대 3개월 안에서 기간을 정할 수 있다.",
    "sources": [
      {
        "name": "한국거래소 KIND, 2024 코스닥시장 공시·상장관리 해설(2024.1)",
        "url": "https://kind.krx.co.kr/external/dst/reference/10951/(%EA%B3%B5%EC%A7%80)%2024%EB%85%84%EC%BD%94%EC%8A%A4%EB%8B%A5%EC%8B%9C%EC%9E%A5%EA%B3%B5%EC%8B%9C%EC%83%81%EC%9E%A5%EA%B4%80%EB%A6%AC%ED%95%B4%EC%84%A4%EC%84%9C.pdf"
      }
    ]
  },
  "kr-disc-5pct": {
    "topic": "disclose",
    "market": "KR",
    "label": "주식 대량보유 보고 (5% 규칙)",
    "value": "특수관계인 합산 5% 이상 보유 시, 이후 1% 이상 변동 시, 5영업일 이내",
    "short": "5% 넘게 갖게 되거나 그 뒤 1%포인트 넘게 바뀌면 5영업일 안",
    "checked": "2026-10-18",
    "level": "official",
    "note": "기간 계산에서 토요일, 공휴일, 근로자의 날은 빠진다. 보유 목적이나 주요 계약(신탁, 담보, 대차 등)이 바뀌어도 보고한다. 보고를 어기면 과징금이 붙고, 어긴 부분의 의결권 행사가 제한될 수 있다.",
    "sources": [
      {
        "name": "금융감독원 DART 기업공시 길라잡이, 대량 보유상황 보고",
        "url": "https://dart.fss.or.kr/info/main.do?menu=310"
      },
      {
        "name": "자본시장법 제147조 조문 (케이스노트 수록)",
        "url": "https://casenote.kr/법령/자본시장과_금융투자업에_관한_법률/제147조"
      }
    ]
  },
  "kr-disc-5pct-purpose": {
    "topic": "disclose",
    "market": "KR",
    "label": "대량보유 보고 목적별 기한",
    "value": "경영참가: 모든 보고 5영업일 이내 · 일반투자: 변동 보고 10영업일 이내 · 단순투자: 변동 보고 다음 달 10일까지",
    "short": "경영참가는 5영업일, 일반투자는 10영업일, 단순투자는 다음 달 10일까지",
    "checked": "2026-10-18",
    "level": "official",
    "note": "신규 보고는 목적과 상관없이 5영업일 안이다. 경영참가 목적으로 새로 보고하거나 목적을 바꾸면, 보고 사유가 생긴 날부터 보고한 날 뒤 5일까지 추가 취득과 의결권 행사가 금지된다(냉각기간). 일부 전문투자자에게는 따로 특례가 있다.",
    "sources": [
      {
        "name": "금융감독원 DART 기업공시 길라잡이, 대량 보유상황 보고",
        "url": "https://dart.fss.or.kr/info/main.do?menu=310"
      },
      {
        "name": "자본시장법 시행령 제154조 조문 (korea.legal 수록)",
        "url": "https://korea.legal/wiki/%ec%9e%90%eb%b3%b8%ec%8b%9c%ec%9e%a5%ea%b3%bc-%ea%b8%88%ec%9c%b5%ed%88%ac%ec%9e%90%ec%97%85%ec%97%90-%ea%b4%80%ed%95%9c-%eb%b2%95%eb%a5%a0-%ec%8b%9c%ed%96%89%eb%a0%b9-%ec%a0%9c154/"
      }
    ]
  },
  "kr-disc-major-holder": {
    "topic": "disclose",
    "market": "KR",
    "label": "주요주주의 기준",
    "value": "의결권 있는 발행주식의 10% 이상 소유 또는 사실상 영향력 행사",
    "short": "의결권 있는 주식의 10% 이상을 가졌거나 경영에 사실상 영향력을 쓰는 주주",
    "checked": "2026-10-18",
    "level": "official",
    "note": "10%를 셀 때 전환사채처럼 아직 주식이 아닌 증권은 넣지 않는다.",
    "sources": [
      {
        "name": "금융감독원 DART 기업공시 길라잡이, 임원 소유상황 보고",
        "url": "https://dart.fss.or.kr/info/main.do?menu=320"
      },
      {
        "name": "금융위원회 보도자료, 2024.7.9 (내부자거래 사전공시제도 7.24 시행)",
        "url": "https://www.fsc.go.kr/no010101/82635"
      }
    ]
  },
  "kr-disc-insider": {
    "topic": "disclose",
    "market": "KR",
    "label": "임원·주요주주 소유상황 보고",
    "value": "된 날 또는 변동일부터 5영업일 이내 (변동 수량 1,000주 미만이면서 금액 1,000만 원 미만이면 변동 보고 면제)",
    "short": "임원·주요주주가 되거나 보유가 바뀐 날부터 5영업일 안",
    "checked": "2026-10-18",
    "level": "official",
    "note": "신규 보고에는 면제가 없다. 면제된 변동도 쌓여서 1,000주 이상이나 1,000만 원 이상이 되면 보고한다. 장내 매매는 결제일(체결일 + 2영업일)이 보고 의무가 생기는 날이다. 주식배당 같은 부득이한 변동은 다음 달 10일까지 보고할 수 있다.",
    "sources": [
      {
        "name": "금융감독원 DART 기업공시 길라잡이, 임원 소유상황 보고",
        "url": "https://dart.fss.or.kr/info/main.do?menu=320"
      },
      {
        "name": "자본시장법 제173조 조문 (케이스노트 수록)",
        "url": "https://casenote.kr/법령/자본시장과_금융투자업에_관한_법률/제173조"
      }
    ]
  },
  "kr-disc-insider-plan": {
    "topic": "disclose",
    "market": "KR",
    "label": "임원·주요주주 거래계획 사전 보고",
    "value": "거래 개시 30일 전까지 (과거 6개월 합산 거래가 발행주식 1% 이상 또는 50억 원 이상일 때)",
    "short": "발행주식 1% 이상이나 50억 원 이상을 사고팔려면 30일 전에 미리 보고",
    "effective": "2024-07-24",
    "checked": "2026-10-18",
    "level": "official",
    "note": "1% 미만이면서 50억 원 미만인 거래만 면제된다. 연기금, 펀드, 은행, 보험사 같은 재무적 투자자와 상속, 주식배당, 반대매매 같은 거래는 빠진다. 거래는 개시일부터 30일 안에 끝내야 하고, 계획과 30%까지만 다르게 거래할 수 있다. 어기면 과징금(최대 20억 원)이 붙는다.",
    "sources": [
      {
        "name": "금융위원회 보도자료, 2024.7.9 (내부자거래 사전공시제도 7.24 시행)",
        "url": "https://www.fsc.go.kr/no010101/82635"
      },
      {
        "name": "금융감독원 DART 기업공시 길라잡이, 임원 등의 특정증권등 거래계획 보고",
        "url": "https://dart.fss.or.kr/info/main.do?menu=340"
      }
    ]
  },
  "kr-disc-shortswing": {
    "topic": "disclose",
    "market": "KR",
    "label": "단기매매차익 반환",
    "value": "매수 뒤 또는 매도 뒤 6개월 이내 반대 거래로 얻은 이익",
    "short": "6개월 안에",
    "checked": "2026-10-18",
    "level": "official",
    "note": "임원, 주요주주, 일부 직원이 대상이다. 내부 정보를 썼는지와 상관없이 회사가 반환을 청구할 수 있다.",
    "sources": [
      {
        "name": "금융감독원 DART 기업공시 길라잡이, 단기매매차익 반환",
        "url": "https://dart.fss.or.kr/info/main.do?menu=330"
      }
    ]
  },
  "kr-delist-audit": {
    "topic": "disclose",
    "market": "KR",
    "label": "감사의견 비적정과 상장폐지",
    "value": "비적정 의견 시 상장폐지 사유, 2년 연속이면 이의신청 없이 상장폐지",
    "short": "비적정 의견을 받으면 상장폐지 사유나 관리종목 지정 사유가 생기고, 2년 연속 비적정이면 이의신청 없이 곧바로 상장폐지된다",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2025년 1월 금융당국의 상장폐지 제도개선 방안으로, 종전에는 이의신청으로 개선기간을 받아 다음 감사의견까지 상장을 유지할 수 있었다. 보도에 따르면 2025사업연도 감사의견부터 적용되었다. 회생·워크아웃 기업은 예외를 둔다. 한정 의견을 코스피와 코스닥에서 어떻게 다루는지(코스피에서 감사범위 제한 한정은 종전 관리종목 사유)는 규정 원문으로 대조하지 못했다.",
    "sources": [
      {
        "name": "법무법인 신&김 뉴스레터, 2025",
        "url": "https://shinkim.com/kor/media/newsletter/2721"
      },
      {
        "name": "헤럴드경제, 2026.4.8",
        "url": "https://www.heraldk.com/article/2026040821022946361"
      },
      {
        "name": "메트로서울, 2023.3.12",
        "url": "https://www.metroseoul.co.kr/article/20230312500177"
      }
    ]
  },
  "kr-ifrs-1118": {
    "topic": "disclose",
    "market": "KR",
    "label": "K-IFRS 1118호(재무제표 표시와 공시) 시행",
    "value": "2027-01-01 이후 시작하는 회계연도부터",
    "short": "2027년 1월 1일 이후 시작하는 회계연도부터는 새 기준(K-IFRS 1118호)에 따라 손익을 영업·투자·재무 등으로 나누게 되어, 영업이익의 범위가 바뀐다",
    "effective": "2027-01-01",
    "checked": "2026-10-18",
    "level": "press",
    "note": "기존 K-IFRS 1001호를 대체하며 조기 적용할 수 있다. 영업손익은 투자·재무·법인세·중단영업에 속하지 않는 모든 손익으로 정의되고, 경영진이 정의한 성과측정치(MPM) 공시가 새로 생긴다.",
    "sources": [
      {
        "name": "포비스마자르 인사이트",
        "url": "https://www.forvismazars.com/kr/ko/insights/5/1/k-ifrs-1118"
      },
      {
        "name": "아시아경제, 2026.4.13",
        "url": "https://view.asiae.co.kr/article/2026041316473164081"
      }
    ]
  },
  "kr-div-procedure": {
    "topic": "corp",
    "market": "KR",
    "label": "결산배당 절차 개선 (배당액 먼저, 기준일 나중)",
    "value": "정관을 고친 회사는 주주총회 등에서 배당액을 정한 뒤 그 이후 날짜를 배당 기준일로 둘 수 있음",
    "short": "2024년에 지급하는 2023 사업연도 결산배당부터 적용할 수 있다",
    "effective": "2023-01-31",
    "checked": "2026-10-18",
    "level": "official",
    "note": "의결권 기준일과 배당 기준일을 나눌 수 있다는 법무부 유권해석에 기댄 제도로, 강제가 아니라 회사의 선택이다. 회사마다 정관과 기준일 공시를 확인해야 한다.",
    "sources": [
      {
        "name": "금융위원회 보도자료, 2023.1.31 (글로벌 스탠더드에 부합하는 배당절차 개선방안)",
        "url": "https://www.fsc.go.kr/po010101/79358"
      },
      {
        "name": "다음뉴스, 2023.3.1 (정관 변경 상장사 현황)",
        "url": "https://v.daum.net/v/20230301104249450"
      }
    ]
  },
  "kr-div-quarterly": {
    "topic": "corp",
    "market": "KR",
    "label": "분기배당 기준일 (자본시장법 제165조의12)",
    "value": "분기 말부터 45일 안의 이사회에서 배당액을 정하고, 기준일은 그 뒤로 둘 수 있음 (3·6·9월 말 고정 기준일 삭제)",
    "short": "2024년 12월 국회를 통과한 자본시장법 개정으로, 공포한 날부터 시행",
    "effective": "2025-01-21",
    "checked": "2026-10-18",
    "level": "official",
    "note": "개정 내용과 '공포한 날부터 시행'은 금융위원회 보도참고자료로 확인했다. 공포일 2025년 1월 21일은 법무법인 뉴스레터·보도로 확인했다. 결산배당 정관을 이미 고친 회사도 분기배당에 적용하려면 정관을 다시 고쳐야 한다.",
    "sources": [
      {
        "name": "금융위원회 보도참고, 2024.12.27 (배당절차 및 기업공시 제도개선을 위한 자본시장법 개정)",
        "url": "https://www.fsc.go.kr/no010101/83741"
      },
      {
        "name": "메트로신문, 2025.2.16",
        "url": "https://www.metroseoul.co.kr/article/20250216500140"
      }
    ]
  },
  "kr-exdiv-adjust": {
    "topic": "corp",
    "market": "KR",
    "label": "배당락일 기준가격 조정",
    "value": "현금배당: 조정하지 않음 · 주식배당: 배당부 종가 × 배당 전 주식 수 ÷ 배당 후 주식 수",
    "short": "현금배당은 기준가격을 고치지 않고, 주식배당만 비율대로 낮춘다",
    "effective": "1998-07-01",
    "checked": "2026-10-18",
    "level": "press",
    "note": "현금배당락 조치는 1998년 7월 폐지되었다고 학술 논문이 적고 있다(정확한 날짜는 월만 확인). 거래소 업무규정 시행세칙 원문은 대조하지 못했다.",
    "sources": [
      {
        "name": "한국재무관리학회, 현금배당락조치 폐지 이후 배당락일의 주가행태(2004)",
        "url": "https://kiss.kstudy.com/Detail/Ar?key=2004872"
      },
      {
        "name": "더밸류뉴스, 2016.1.15 (배당락과 권리락)",
        "url": "https://www.thevaluenews.co.kr/news/3024"
      }
    ]
  },
  "kr-rights-ex-price": {
    "topic": "corp",
    "market": "KR",
    "label": "권리락 기준가격 계산식",
    "value": "(권리부 종가 × 증자 전 주식 수 + 신주 납입금액) ÷ 증자 후 주식 수",
    "short": "권리 붙은 마지막 날 종가와 새 주식 납입금을 합쳐 늘어난 주식 수로 나눈 값",
    "checked": "2026-10-18",
    "level": "press",
    "note": "무상증자는 납입금액이 0이다. 주주배정과 무상증자에만 적용하고, 일반공모와 제3자배정에는 권리락이 없다. 호가 단위로 끝자리를 어떻게 정리하는지와 계산에 쓰는 발행가격 시점은 거래소 시행세칙으로 대조하지 못했다.",
    "sources": [
      {
        "name": "더밸류뉴스, 2016.1.15 (배당락과 권리락)",
        "url": "https://www.thevaluenews.co.kr/news/3024"
      },
      {
        "name": "KB국민은행 KB Think, 유상증자와 무상증자",
        "url": "https://kbthink.com/stock/issue.html"
      }
    ]
  },
  "kr-rights-discount": {
    "topic": "corp",
    "market": "KR",
    "label": "상장회사 유상증자 발행가격 할인 한도",
    "value": "일반공모 기준주가의 30% 이내 · 제3자배정 10% 이내",
    "short": "일반공모는 30%, 제3자배정은 10%까지 할인할 수 있다",
    "checked": "2026-10-18",
    "level": "press",
    "note": "근거는 금융위원회 고시 '증권의 발행 및 공시 등에 관한 규정' 제5-18조이다. 주주배정은 모든 주주가 같은 조건으로 받으므로 이 한도가 적용되지 않는 것으로 알려져 있으나 원문 대조는 못 했다. 회생절차 등 예외가 있다.",
    "sources": [
      {
        "name": "딜사이트 (일반공모 30% 할인 해설)",
        "url": "https://dealsite.co.kr/articles/89807"
      },
      {
        "name": "비즈워치, 2022.4.7 (제3자배정 10% 이내)",
        "url": "https://news.bizwatch.co.kr/article/market/2022/04/07/0007"
      }
    ]
  },
  "kr-treasury-cancel": {
    "topic": "corp",
    "market": "KR",
    "label": "자기주식 소각 의무 (개정 상법 제341조의4)",
    "value": "취득한 날부터 1년 안에 소각 (예외는 주주총회 승인 필요)",
    "short": "회사가 산 자기주식은 1년 안에 소각하는 것이 원칙이다",
    "effective": "2026-03-06",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2026년 2월 25일 국회를 통과해 3월 6일 공포와 함께 시행되었다. 시행 전에 가지고 있던 자기주식은 시행일부터 6개월이 지난 날부터 1년 안에 소각하면 된다. 임직원 보상, 우리사주, 합병 등 법이 정한 예외는 주주총회 승인을 받아 보유·처분할 수 있다. 법령 원문은 대조하지 못했다.",
    "sources": [
      {
        "name": "삼일PwC 거버넌스센터, 2026.3 (자기주식 소각 의무화 개정 상법)",
        "url": "https://www.pwc.com/kr/ko/services/governance-center/thought-leadership/whats-on/whats-on_commercial-act_mar2026.html"
      },
      {
        "name": "조세일보 (자사주 의무 소각 상법 개정)",
        "url": "https://www.taxtimes.co.kr/news/article.html?no=274003"
      }
    ]
  },
  "kr-etf-lp-gap": {
    "topic": "etf",
    "market": "KR",
    "label": "ETF 괴리율 관리 기준 (유동성공급자, 마감 가격 기준)",
    "value": "국내 자산 2%, 해외 자산 5% 이내",
    "short": "마감 가격이 NAV에서 국내 자산 2%, 해외 자산 5% 넘게 벗어나지 않게",
    "effective": "2026-08-19",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2026년 8월 19일 국내 3%→2%, 해외 6%→5%로 좁혔다. 고의·중과실이나 상습 위반 LP는 새 종목의 유동성공급 업무가 제한될 수 있다. 단일종목 레버리지 대책과 함께 발표되었으며, 모든 ETF에 같은 기준이 적용되는지는 거래소 규정 원문으로 다시 확인해야 한다. 시작·마감 단일가매매 시간 등에는 LP 호가 의무가 면제된다.",
    "sources": [
      {
        "name": "파이낸셜뉴스, 2026.7.16",
        "url": "https://www.fnnews.com/news/202607161824498605"
      },
      {
        "name": "SAT경제, 2026.10",
        "url": "https://sateconomy.co.kr/news/view/1065599877858641"
      },
      {
        "name": "금융위원회 보도자료(KDI 경제정보센터 게시), 2026.7.24",
        "url": "https://eiec.kdi.re.kr/policy/materialView.do?num=284654"
      }
    ]
  },
  "kr-etf-leverage-max": {
    "topic": "etf",
    "market": "KR",
    "label": "국내 상장 레버리지·인버스 ETF 배수 상한",
    "value": "하루 수익률의 ±2배",
    "short": "하루 수익률의 2배 또는 −2배",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2026년 7월 단일종목 레버리지 대책 논의에서 배수를 1.5배로 낮추는 안은 당장 추진하지 않기로 했다고 보도되었다. 해외 상장 상품에는 3배짜리도 있다.",
    "sources": [
      {
        "name": "이코노미스트, 2026.7.28",
        "url": "https://economist.co.kr/article/view/ecn202607280014"
      }
    ]
  },
  "kr-etp-leverage-req": {
    "topic": "protect",
    "market": "KR",
    "label": "국내 레버리지 ETF·ETN 매수 요건 (개인)",
    "value": "금융투자협회 온라인 사전교육 1시간 이상 이수와 기본예탁금 1,000만 원 이상",
    "short": "사전교육을 마치고 계좌에 1,000만 원 이상을 두어야 한다",
    "checked": "2026-10-18",
    "level": "press",
    "note": "교육은 금융투자협회 금융투자교육원에서 유료로 듣고, 이수번호를 증권사에 등록한다. 만 65세 이상이거나 투자성향이 낮으면 교육 시간이 늘 수 있다. 기본예탁금은 증권사가 투자자의 거래 경험 등에 따라 차등할 수 있다. 인버스 1배 상품의 적용 여부는 증권사 안내로 확인한다.",
    "sources": [
      {
        "name": "비즈워치, 2025.11.17",
        "url": "https://news.bizwatch.co.kr/article/market/2025/11/17/0025"
      },
      {
        "name": "파이낸셜뉴스, 2026.7.16",
        "url": "https://www.fnnews.com/news/202607161824498605"
      }
    ]
  },
  "kr-etp-single-lev-deposit": {
    "topic": "protect",
    "market": "KR",
    "label": "단일종목 레버리지 ETF·ETN 기본예탁금",
    "value": "현금 3,000만 원 이상",
    "short": "현금으로 3,000만 원 이상의 기본예탁금",
    "effective": "2026-07-31",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2026년 7월 31일 1,000만 원에서 올렸다(처음 8월 예정에서 앞당김). 주식·채권 같은 대용증권은 인정하지 않고, 기존 투자자의 추가 매수에도 적용한다. 같은 대책으로 단일종목 레버리지·인버스 상품의 신규 상장과 광고가 멈췄고, 매매 단위를 1주에서 20주로 늘리는 방안과 교육 시간 연장이 추진 중이다. 홍콩·미국 상장 단일종목 레버리지 상품에도 같은 기준을 적용하는 방침이다.",
    "sources": [
      {
        "name": "금융위원회 보도자료(KDI 경제정보센터 게시), 2026.7.24",
        "url": "https://eiec.kdi.re.kr/policy/materialView.do?num=284654"
      },
      {
        "name": "이코노미스트, 2026.7.28",
        "url": "https://economist.co.kr/article/view/ecn202607280014"
      },
      {
        "name": "파이낸셜뉴스, 2026.7.16",
        "url": "https://www.fnnews.com/news/202607161824498605"
      }
    ]
  },
  "kr-etp-overseas-edu": {
    "topic": "protect",
    "market": "KR",
    "label": "해외 상장 레버리지 ETF·ETN 매수 요건 (개인)",
    "value": "사전교육 1시간 이상 (기본예탁금 없음)",
    "short": "사전교육을 마쳐야 새로 살 수 있다",
    "effective": "2025-12-15",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2025년 12월 15일부터 해외 레버리지 상품을 처음 거래하는 투자자에게 적용한다. 이미 거래 경험이 있거나 국내 레버리지 교육을 이수한 사람은 제외된다. 교육은 국내외 통합이다. 단일종목 레버리지 상품은 해외 상장이라도 3,000만 원 기본예탁금 기준을 적용하는 방침이 2026년 7월 발표되었다.",
    "sources": [
      {
        "name": "비즈워치, 2025.11.17",
        "url": "https://news.bizwatch.co.kr/article/market/2025/11/17/0025"
      },
      {
        "name": "파이낸셜뉴스, 2026.7.16",
        "url": "https://www.fnnews.com/news/202607161824498605"
      }
    ]
  },
  "kr-tax-etf-tx": {
    "topic": "tax",
    "market": "KR",
    "label": "국내 상장 ETF 매도 시 증권거래세",
    "value": "면제",
    "short": "증권거래세 면제",
    "checked": "2026-10-18",
    "level": "press",
    "note": "주식과 달리 ETF를 팔 때는 증권거래세가 붙지 않는다. 증권회사 수수료와 호가 차이는 그대로 든다.",
    "sources": [
      {
        "name": "KB국민은행 KB Think, ETF 세금",
        "url": "https://kbthink.com/etf/etf-tax.html"
      }
    ]
  },
  "kr-tax-etf-gain": {
    "topic": "tax",
    "market": "KR",
    "label": "국내주식형 외 국내 상장 ETF 매매차익 과세 기준",
    "value": "실제 매매차익과 보유 기간 과표기준가격 상승분 중 작은 금액에 배당소득세",
    "short": "실제 매매차익과 보유 기간 동안 과표기준가격 상승분 중 작은 금액",
    "checked": "2026-10-18",
    "level": "press",
    "note": "국내주식형 ETF의 매매차익은 비과세이다. 해외 주식, 채권, 원자재 등을 담은 ETF는 이 금액을 배당소득으로 보아 15.4%를 원천징수하고 금융소득종합과세 합산 대상에 넣는다. 분배금은 두 종류 모두 배당소득이다. 연금저축·퇴직연금 같은 계좌에서는 다르게 과세한다.",
    "sources": [
      {
        "name": "삼성자산운용 ETF 가이드, ETF 과세",
        "url": "https://www.samsungfund.com/etf/insight/guide/view05.do"
      },
      {
        "name": "KB국민은행 KB Think, ETF 세금",
        "url": "https://kbthink.com/etf/etf-tax.html"
      }
    ]
  },
  "kr-short-resume": {
    "topic": "credit",
    "market": "KR",
    "label": "공매도 전면 재개",
    "value": "2025-03-31 재개 (2023-11-06~2025-03-30 금지)",
    "short": "2025년 3월 31일 모든 상장주식에서 다시 허용되었다",
    "effective": "2025-03-31",
    "checked": "2026-10-18",
    "level": "official",
    "note": "코스피200·코스닥150 종목은 약 17개월, 그 밖의 종목은 2020년 3월부터 약 5년 만의 재개였다. 기관은 전산시스템 구축(또는 사전입고)과 내부통제기준을 갖춰야 공매도할 수 있다.",
    "sources": [
      {
        "name": "금융위원회 보도참고, 2025.3.21 (3월 31일부터 공매도 전면 재개)",
        "url": "https://fsc.go.kr/po010105/84216?curPage=8&srchBeginDt=&srchCtgry=&srchEndDt=&srchKey=&srchText="
      }
    ]
  },
  "kr-short-loan-term": {
    "topic": "credit",
    "market": "KR",
    "label": "공매도 목적 차입 주식의 상환기간 (개인·기관 공통)",
    "value": "90일 이내, 연장 포함 최장 12개월",
    "short": "90일 이내, 연장해도 최장 12개월",
    "effective": "2025-03-31",
    "checked": "2026-10-18",
    "level": "official",
    "note": "자본시장법 시행령 제208조의6. 예전에는 개인 대주에만 90일 제한이 있었다. 상장폐지·거래정지 등으로 되사기 어려우면 그 사유가 끝난 날부터 3영업일이 끝이다.",
    "sources": [
      {
        "name": "금융위원회 보도자료, 2025.2.18 (공매도 제도개선 후속 자본시장법 시행령 개정)",
        "url": "https://www.fsc.go.kr/no010101/84025"
      },
      {
        "name": "금융위원회 보도참고, 2025.3.21 (3월 31일부터 공매도 전면 재개)",
        "url": "https://fsc.go.kr/po010105/84216?curPage=8&srchBeginDt=&srchCtgry=&srchEndDt=&srchKey=&srchText="
      }
    ]
  },
  "kr-short-retail-collateral": {
    "topic": "credit",
    "market": "KR",
    "label": "개인 대주 담보비율",
    "value": "105% (현금 기준)",
    "short": "빌린 주식 값의 105%(현금 기준)",
    "effective": "2025-03-31",
    "checked": "2026-10-18",
    "level": "official",
    "note": "120%에서 기관 대차 수준인 105%로 낮췄다. 신용융자와 담보를 함께 관리하는 140% 통합계좌를 고를 수도 있다. 계산 방식과 추가 담보 기한은 증권회사마다 다르다.",
    "sources": [
      {
        "name": "금융위원회 보도참고, 2025.3.21 (3월 31일부터 공매도 전면 재개)",
        "url": "https://fsc.go.kr/po010105/84216?curPage=8&srchBeginDt=&srchCtgry=&srchEndDt=&srchKey=&srchText="
      },
      {
        "name": "조선비즈(다음뉴스), 2025.4.3 (개인 공매도 체험기)",
        "url": "https://v.daum.net/v/20250403060131494"
      }
    ]
  },
  "kr-short-penalty": {
    "topic": "credit",
    "market": "KR",
    "label": "고의적 무차입 공매도 벌금",
    "value": "부당이득액의 4~6배 (5억 원 이상이면 징역 가중)",
    "short": "부당이득의 4~6배 벌금",
    "effective": "2025-03-31",
    "checked": "2026-10-18",
    "level": "official",
    "note": "종전 3~5배에서 올렸다. 부당이득 5억 원·50억 원 이상이면 징역을 가중한다. 금융상품 거래 제한, 임원 선임 제한, 계좌 지급정지는 2025년 4월 23일 시행 예정으로 발표되었다. 과징금은 따로 부과된다.",
    "sources": [
      {
        "name": "금융위원회 보도참고, 2025.3.21 (3월 31일부터 공매도 전면 재개)",
        "url": "https://fsc.go.kr/po010105/84216?curPage=8&srchBeginDt=&srchCtgry=&srchEndDt=&srchKey=&srchText="
      }
    ]
  },
  "kr-short-retail-prereq": {
    "topic": "credit",
    "market": "KR",
    "label": "개인 공매도 사전 요건",
    "value": "금융투자협회 사전교육(1시간)과 증권회사 모의거래를 마쳐야 하고, 처음에는 3,000만 원 한도 안에서만 빌릴 수 있다",
    "short": "사전교육과 모의거래 이수, 첫 한도 3,000만 원",
    "checked": "2026-10-18",
    "level": "press",
    "note": "사전교육은 공매도를 처음 하는 모든 개인이 대상이며 이미 이수했으면 다시 듣지 않는다. 거래 경험이 쌓이면 한도가 단계적으로 늘어난다(2021년 발표 기준 7,000만 원, 이후 제한 없음). 한도 단계의 현행 기준은 원문으로 다시 대조해야 한다.",
    "sources": [
      {
        "name": "금융투자교육원 공매도 사전의무교육 안내",
        "url": "https://www.kifin.or.kr/common/edu/6/detail.do"
      },
      {
        "name": "조선비즈(다음뉴스), 2025.4.3",
        "url": "https://v.daum.net/v/20250403060131494"
      }
    ]
  },
  "kr-credit-deposit-rate": {
    "topic": "credit",
    "market": "KR",
    "label": "신용거래융자 보증금률",
    "value": "최소 40% (증권회사·종목별로 더 높게 정함)",
    "short": "산 금액의 최소 40%를 내 돈으로",
    "checked": "2026-10-18",
    "level": "press",
    "note": "금융투자업규정이 최저선을 정하고 증권회사가 종목별로 40~60%대로 정한다. 2026년 6월 금융당국이 보증금률·담보비율 상향을 검토한다는 보도가 있었으나 2026년 10월까지 개정 확인은 하지 못했다.",
    "sources": [
      {
        "name": "머니투데이, 2026.6.24 (신용융자·미수거래 통합관리 검토)",
        "url": "https://www.mt.co.kr/article/2026062414533188720"
      },
      {
        "name": "한국투자증권 신용거래(융자·대주) 설명서",
        "url": "https://file.koreainvestment.com/updata/namo/07125928신용거래설명서_전문.pdf"
      }
    ]
  },
  "kr-credit-maint": {
    "topic": "credit",
    "market": "KR",
    "label": "신용거래융자 담보유지비율",
    "value": "140% (증권회사·종목별 140~160%)",
    "short": "빌린 돈의 140%",
    "checked": "2026-10-18",
    "level": "press",
    "note": "담보비율은 (주식 평가액 + 현금 등) ÷ 융자금으로 계산한다. 관리종목처럼 위험한 종목에는 더 높은 비율을 적용하기도 한다. 2022년 7~9월에는 유지 의무가 한시적으로 면제된 적이 있다.",
    "sources": [
      {
        "name": "머니투데이, 2026.6.24 (신용융자·미수거래 통합관리 검토)",
        "url": "https://www.mt.co.kr/article/2026062414533188720"
      },
      {
        "name": "한국투자증권 신용거래(융자·대주) 설명서",
        "url": "https://file.koreainvestment.com/updata/namo/07125928신용거래설명서_전문.pdf"
      }
    ]
  },
  "kr-credit-call-deadline": {
    "topic": "credit",
    "market": "KR",
    "label": "신용거래 추가 담보 기한과 반대매매",
    "value": "추가 담보 요구일 다음 영업일까지 채우지 못하면 그다음 영업일에 증권회사가 반대매매한다",
    "short": "요구 다음 날까지 못 채우면 그다음 날 반대매매",
    "checked": "2026-10-18",
    "level": "press",
    "note": "한 증권회사 설명서 기준이며 기한은 회사마다 다르다. 반대매매 수량은 전날 종가보다 15% 낮은 가격을 기준으로 계산하고, 하한가로 처분될 수도 있다.",
    "sources": [
      {
        "name": "한국투자증권 신용거래(융자·대주) 설명서",
        "url": "https://file.koreainvestment.com/updata/namo/07125928신용거래설명서_전문.pdf"
      }
    ]
  },
  "kr-credit-term": {
    "topic": "credit",
    "market": "KR",
    "label": "신용거래융자 기간",
    "value": "증권회사가 정한다(보통 90~180일, 연장 가능)",
    "short": "증권회사가 정한 90~180일 안팎",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2026년 7월 일부 증권회사는 180일이던 기간을 90일로 줄였다. 신용 대주는 90일 이내, 연장 포함 최장 12개월이 적용된다.",
    "sources": [
      {
        "name": "머니투데이, 2026.7.8 (증권사 자체 빚투 관리)",
        "url": "https://www.mt.co.kr/stock/2026/07/08/2026070815190777606"
      },
      {
        "name": "한국투자증권 신용거래(융자·대주) 설명서",
        "url": "https://file.koreainvestment.com/updata/namo/07125928신용거래설명서_전문.pdf"
      }
    ]
  },
  "kr-misu-forced": {
    "topic": "credit",
    "market": "KR",
    "label": "미수 반대매매 시점",
    "value": "결제일 다음 영업일(T+3)에 증권회사가 산 주식을 팔아 모자란 돈을 채운다",
    "short": "결제일 다음 영업일에 강제 매도",
    "checked": "2026-10-18",
    "level": "press",
    "note": "수량은 하한가(−30%) 수준을 기준으로 정해 시장가로 판다. 시각과 방식은 증권회사마다 조금씩 다르다.",
    "sources": [
      {
        "name": "다올투자증권 주식 결제·미수 안내",
        "url": "https://www.daolsecurities.com/customer/guide/stockPayment.jsp"
      }
    ]
  },
  "kr-misu-freeze": {
    "topic": "credit",
    "market": "KR",
    "label": "미수동결 계좌",
    "value": "미수 발생 다음 영업일부터 30일간 증거금 100% 현금",
    "short": "결제일 다음 영업일부터 30일 동안",
    "effective": "2007-05-01",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2007년 5월 금융감독원 주도로 도입되었다. 동결 정보는 모든 증권회사가 공유한다. 계좌당 미수금이 10만 원 이하이면 제외하는 증권회사가 있다.",
    "sources": [
      {
        "name": "키움증권 미수동결제도 안내",
        "url": "https://download.kiwoom.com/hero4_help_new/1001.htm"
      },
      {
        "name": "다올투자증권 주식 결제·미수 안내",
        "url": "https://www.daolsecurities.com/customer/guide/stockPayment.jsp"
      }
    ]
  },
  "kr-ktb-terms": {
    "topic": "bonds",
    "market": "KR",
    "label": "국고채 만기와 이자 지급",
    "value": "만기 2·3·5·10·20·30·50년, 이자는 6개월마다",
    "short": "2년부터 50년까지 일곱 가지 만기, 이자는 1년에 두 번",
    "checked": "2026-10-18",
    "level": "official",
    "note": "고정금리 국고채 기준. 물가연동국고채는 만기 10년이다. 국고채전문딜러를 상대로 한 경쟁입찰로 발행하고 한국은행이 발행 사무를 대행한다.",
    "sources": [
      {
        "name": "재정경제부 국채시장, 국고채권",
        "url": "https://ktb.moef.go.kr/ntpbnd.do"
      },
      {
        "name": "재정경제부 국채시장, FAQ",
        "url": "https://ktb.moef.go.kr/faq.do"
      }
    ]
  },
  "kr-bond-krx-hours": {
    "topic": "bonds",
    "market": "KR",
    "label": "장내 일반채권시장 매매 시간 (한국거래소)",
    "value": "09:00~15:30",
    "short": "오전 9시부터 오후 3시 30분",
    "checked": "2026-10-18",
    "level": "press",
    "note": "소액채권시장은 마감 무렵 정해진 시간에 단일가로 거래한다. 증권회사마다 주문 접수 시간은 조금씩 다르다.",
    "sources": [
      {
        "name": "KB증권 장내채권 매매 안내",
        "url": "https://www.kbsec.com/go.able?linkcd=s01060600P100"
      }
    ]
  },
  "kr-bond-krx-lot": {
    "topic": "bonds",
    "market": "KR",
    "label": "장내 일반채권시장 매매수량단위",
    "value": "액면 1만 원",
    "short": "액면 1만 원 단위",
    "effective": "2026-01-12",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2026년 1월 12일 액면 1,000원에서 1만 원으로 바뀌었다. 소액채권시장(첨가소화채권)은 액면 1,000원 단위를 유지한다. 재정경제부 국채시장 안내 페이지는 아직 1천 원으로 적고 있다.",
    "sources": [
      {
        "name": "유진투자증권 공지 '[장내채권] 일반채권시장 매매수량 단위 변경 안내', 2025.12.10",
        "url": "https://m.eugenefn.com/no20r.do?msgId=501606&pageNo=1&topFlag=0"
      }
    ]
  },
  "kr-bond-krx-tick": {
    "topic": "bonds",
    "market": "KR",
    "label": "장내 채권 호가가격단위 (액면 1만 원당)",
    "value": "잔존만기 2년 미만 0.1원, 2년 이상 10년 미만 0.5원, 10년 이상 1원",
    "short": "남은 만기에 따라 0.1원·0.5원·1원",
    "effective": "2016-06-27",
    "checked": "2026-10-18",
    "level": "press",
    "note": "그 전에는 1원으로 통일되어 있었다. 국고채 10년 지표물과 물가연동국고채 지표물은 1원을 유지한다는 증권사 안내가 있다. 현행 거래소 세칙 원문은 확인하지 못했다.",
    "sources": [
      {
        "name": "이데일리, 2016.6.24",
        "url": "https://edaily.co.kr/News/Read?mediaCodeNo=257&newsId=02335366612685000"
      },
      {
        "name": "다올투자증권 채권 매매 안내",
        "url": "https://www.daolsecurities.com/customer/guide/bondTrade.jsp"
      }
    ]
  },
  "kr-bond-krx-settle": {
    "topic": "settle",
    "market": "KR",
    "label": "장내 일반채권시장 결제일",
    "value": "당일결제(T+0)",
    "short": "체결한 날 바로",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주식(T+2)과 달리 체결한 날 돈과 채권이 바뀐다.",
    "sources": [
      {
        "name": "재정경제부 국채시장, 한국거래소 채권시장",
        "url": "https://ktb.moef.go.kr/koreaExchnBondMrkt.do"
      }
    ]
  },
  "kr-bond-otc-settle": {
    "topic": "settle",
    "market": "KR",
    "label": "장외 채권 결제일",
    "value": "체결 다음 날부터 30영업일 이내 (소매채권매매는 당일 결제 가능)",
    "short": "체결 다음 날부터 30영업일 안, 개인 대상 소매 거래는 당일도 가능",
    "checked": "2026-10-18",
    "level": "official",
    "note": "소매채권매매는 개인과 일반법인(전문투자자 제외)을 상대로 한 액면 100억 원 미만의 거래를 말한다. 실제 결제일은 증권회사가 정하며, 개인 거래는 당일 또는 다음 영업일 결제가 흔하다.",
    "sources": [
      {
        "name": "금융투자업규정 제5-4조·제5-1조제10호 (금융위원회 고시, 2026.9.15 시행본)",
        "url": "https://www.law.go.kr/행정규칙/금융투자업규정"
      }
    ]
  },
  "kr-bond-otc-report": {
    "topic": "bonds",
    "market": "KR",
    "label": "장외 채권 거래 보고 시한",
    "value": "체결 후 15분 이내",
    "short": "체결하고 15분 안에",
    "checked": "2026-10-18",
    "level": "official",
    "note": "채권을 장외에서 투자자와 매매하거나 중개한 금융투자회사가 건별 거래 내역을 금융투자협회에 보고하고, 협회가 이를 공시한다(15분 룰, 2000년 도입). 해외 발행 외화채권과 단기사채 등은 제외한다.",
    "sources": [
      {
        "name": "금융투자협회 금융투자회사의 영업 및 업무에 관한 규정 제7-5조 (2024.8.22 개정)",
        "url": "https://law.kofia.or.kr/service/law/detailArticlePrint.do?seq=136&historySeq=1655&contentSeq=277822"
      },
      {
        "name": "재정경제부 국채시장, 장외시장",
        "url": "https://ktb.moef.go.kr/curbMrkt.do"
      }
    ]
  },
  "kr-rktb-maturities": {
    "topic": "bonds",
    "market": "KR",
    "label": "개인투자용 국채 종류",
    "value": "3년(이표채·복리채), 5년, 10년, 20년",
    "short": "3년·5년·10년·20년 네 가지 만기",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2024년 6월 10년물·20년물로 시작했고, 2025년 3월 5년물, 2026년 4월 3년물이 더해졌다. 3년물은 가산금리가 없고 분리과세 대상이 아니며, 이자를 해마다 받는 이표채와 만기에 받는 복리채 중에서 고른다. 매달 종목별 발행 한도와 금리를 새로 공고한다.",
    "sources": [
      {
        "name": "국회예산정책처 나보포커스 제134호, 2026.2.2",
        "url": "https://www.nabo.go.kr/board/file/down.do?fid=33319091"
      },
      {
        "name": "한국소통투데이, 2026.9.30 (10월 발행계획)",
        "url": "https://www.kbcs.kr/news/article.html?no=413854"
      }
    ]
  },
  "kr-rktb-limit": {
    "topic": "bonds",
    "market": "KR",
    "label": "개인투자용 국채 매입 단위와 한도",
    "value": "최소 10만 원, 전용계좌 1인당 연 2억 원",
    "short": "10만 원부터 한 해 2억 원까지(퇴직연금 계좌는 별도 한도 없음)",
    "checked": "2026-10-18",
    "level": "press",
    "note": "전용계좌는 1인 1계좌이다. 퇴직연금(DC·IRP) 계좌에는 별도의 연간 매입 한도가 없다. 청약이 한도를 넘으면 모든 청약자에게 300만 원까지 먼저 배정하고 나머지를 청약액에 비례해 나눈다. 출시 초기에는 연간 한도가 1억 원이었다는 보도가 있다.",
    "sources": [
      {
        "name": "뉴스핌, 2026.8.27",
        "url": "https://www.newspim.com/news/view/20260827001141"
      }
    ]
  },
  "kr-rktb-tax": {
    "topic": "tax",
    "market": "KR",
    "label": "개인투자용 국채 이자 분리과세",
    "value": "매입액 총 2억 원까지의 이자에 14% (지방소득세 포함 15.4%)",
    "short": "2027년 말까지 전용계좌로 산 만기 5년 이상물을 만기까지 보유하면, 매입액 총 2억 원까지의 이자에 14%(지방소득세 포함 15.4%) 분리과세",
    "effective": "2023-04-11",
    "checked": "2026-10-18",
    "level": "official",
    "note": "조세특례제한법 제91조의23: 전용계좌로 2027년 12월 31일까지 매입하고, 시행령 제93조의9에 따라 발행일부터 만기일까지 5년 이상인 개인투자용 국채를 발행일부터 만기일까지 보유해야 한다. 종합소득 과세표준에 합산하지 않는다. 3년물과 중도환매분은 적용되지 않는다. 처음에는 만기 10년 이상만 대상이었고 2024년 말 개정으로 5년물이 포함되었다.",
    "sources": [
      {
        "name": "조세특례제한법 제91조의23 (국가법령정보센터, 2026.9.18 시행본)",
        "url": "https://www.law.go.kr/법령/조세특례제한법/제91조의23"
      },
      {
        "name": "조세특례제한법 시행령 제93조의9",
        "url": "https://www.law.go.kr/법령/조세특례제한법시행령/제93조의9"
      }
    ]
  },
  "kr-rktb-redeem": {
    "topic": "bonds",
    "market": "KR",
    "label": "개인투자용 국채 중도환매",
    "value": "발행일부터 1년이 지난 뒤, 매달 정해진 신청 기간에 월별 한도 안에서",
    "short": "발행 1년 뒤부터 매달 신청 기간에, 원금과 표면금리 단리 이자만 받는 조건으로",
    "checked": "2026-10-18",
    "level": "press",
    "note": "중도환매하면 원금과 발행일부터 환매일까지 표면금리의 단리 이자만 받고, 가산금리·연복리·분리과세는 적용되지 않는다. 월별 중도환매 한도를 넘으면 신청해도 환매되지 않을 수 있다. 남에게 팔거나 넘길 수는 없다(상속 등은 예외).",
    "sources": [
      {
        "name": "국회예산정책처 나보포커스 제134호, 2026.2.2",
        "url": "https://www.nabo.go.kr/board/file/down.do?fid=33319091"
      },
      {
        "name": "한국소통투데이, 2026.9.30",
        "url": "https://www.kbcs.kr/news/article.html?no=413854"
      }
    ]
  },
  "kr-rktb-pension": {
    "topic": "bonds",
    "market": "KR",
    "label": "개인투자용 국채 퇴직연금 계좌 매입",
    "value": "DC·IRP 계좌에서 10년물·20년물",
    "short": "퇴직연금 DC·IRP 계좌에서 10년물과 20년물만",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2026년 9월 발행분부터 허용되었다. 확정급여형(DB)은 대상이 아니다. 판매 금융회사는 은행과 증권회사 8곳으로 늘었다.",
    "sources": [
      {
        "name": "뉴스핌, 2026.8.27",
        "url": "https://www.newspim.com/news/view/20260827001141"
      },
      {
        "name": "SBS Biz, 2026.8",
        "url": "https://biz.sbs.co.kr/article/20000331223"
      }
    ]
  },
  "kr-tax-interest": {
    "topic": "tax",
    "market": "KR",
    "label": "이자소득 원천징수 세율(채권 이자)",
    "value": "15.4%",
    "short": "소득세 14%와 지방소득세 1.4%를 합친 15.4%",
    "checked": "2026-10-18",
    "level": "press",
    "note": "개인이 채권을 직접 가지면 표면금리로 받는 이자에만 붙고, 값이 올라 생긴 매매차익에는 붙지 않는다. 금융소득종합과세 기준을 넘는 부분은 따로 계산한다.",
    "sources": [
      {
        "name": "머니투데이, 2022-08-02",
        "url": "https://www.mt.co.kr/stock/2022/08/02/2022080215180038317"
      },
      {
        "name": "검색 결과 종합(세율 15.4% = 14% + 1.4%), 2026-10-18 확인",
        "url": "https://glasswallet.com/calculate/deposit-interest/tax"
      }
    ]
  },
  "kr-rating-scale-long": {
    "topic": "rating",
    "market": "KR",
    "label": "국내 장기 신용등급(회사채) 체계",
    "value": "AAA~D 10개 등급, AA~CCC에 +·− 부호",
    "short": "AAA, AA, A, BBB, BB, B, CCC, CC, C, D의 10개 등급이고, AA부터 CCC까지는 같은 등급 안의 우열을 +와 −로 나눈다",
    "checked": "2026-10-18",
    "level": "press",
    "note": "한국기업평가 등 국내 신용평가회사의 등급 정의를 발행회사 IR 페이지에서 확인했다. 평가회사 누리집의 등급 정의 원문은 열어 보지 못했다.",
    "sources": [
      {
        "name": "삼성SDI IR 신용등급(한국기업평가 등급 정의 수록)",
        "url": "https://samsungsdi.co.kr/ir/financial/credit-rating.html"
      },
      {
        "name": "LG전자 IR 신용등급 안내(국내 3사 회사채 등급 정의 수록)",
        "url": "https://www.lge.co.kr/company/investor/creditrating"
      }
    ]
  },
  "kr-rating-ig-line": {
    "topic": "rating",
    "market": "KR",
    "label": "투자등급과 투기등급의 경계(장기 등급)",
    "value": "BBB− 이상 투자등급, BB+ 이하 투기등급",
    "short": "BBB−까지가 투자등급이고 BB+부터 투기등급",
    "checked": "2026-10-18",
    "level": "press",
    "note": "국내 등급 정의는 AAA~BBB를 투자등급, BB~C를 투기등급으로 나눈다. 법령이 정한 선이 아니라 등급 정의와 시장 관행에 따른 구분이다.",
    "sources": [
      {
        "name": "LG전자 IR 신용등급 안내(국내 3사 회사채 등급 정의 수록)",
        "url": "https://www.lge.co.kr/company/investor/creditrating"
      }
    ]
  },
  "kr-rating-scale-short": {
    "topic": "rating",
    "market": "KR",
    "label": "국내 단기 신용등급(기업어음·전자단기사채) 체계",
    "value": "A1~D 6개 등급, A2~B에 +·− 부호",
    "short": "A1, A2, A3, B, C, D의 6개 등급이고, A2부터 B까지는 +와 −로 더 나눈다",
    "checked": "2026-10-18",
    "level": "press",
    "note": "한국기업평가와 한국신용평가의 기업어음 등급 정의(A2~B에 +,− 부여 가능)를 발행회사 IR 페이지에서 확인했다.",
    "sources": [
      {
        "name": "현대그룹 IR 신용등급(한국기업평가·한국신용평가 CP 등급 정의 수록)",
        "url": "https://www.ehyundai.com/newPortal/group/HLDS/FI000120.do?locale=ko"
      }
    ]
  },
  "kr-tax-bond-holding": {
    "topic": "tax",
    "market": "KR",
    "label": "채권 보유기간 과세 (파는 사람 몫)",
    "value": "직전 이자지급일(없으면 발행일)부터 매도일까지의 이자상당액",
    "short": "직전 이자 지급일부터 판 날까지 쌓인 이자에 해당하는 금액",
    "checked": "2026-10-18",
    "level": "official",
    "note": "소득세법 제46조는 채권 이자를 보유기간별로 각 보유자의 이자소득으로 보고, 제133조의2는 이자를 받거나 발행법인 또는 시행령이 정한 법인에 팔 때 이 금액을 원천징수하게 한다. 계산 방법은 시행령에 맡겨져 있다. 법령 원문을 옮겨 둔 케이스노트 페이지로 확인했고, 국가법령정보센터 페이지는 내용을 불러오지 못했다.",
    "sources": [
      {
        "name": "소득세법 제46조 (케이스노트 법령 원문)",
        "url": "https://casenote.kr/법령/소득세법/제46조"
      },
      {
        "name": "소득세법 제133조의2 (케이스노트 법령 원문)",
        "url": "https://casenote.kr/법령/소득세법/제133조의2"
      }
    ]
  },
  "kr-tax-bond-gain": {
    "topic": "tax",
    "market": "KR",
    "label": "개인의 채권 매매차익",
    "value": "비과세",
    "short": "세금이 붙지 않는다",
    "effective": "2024-12-10",
    "checked": "2026-10-18",
    "level": "press",
    "note": "소득세법이 과세 소득으로 열거하지 않아 개인이 직접 가진 채권의 매매차익과 만기상환 차익(시장에서 싸게 산 경우)은 과세하지 않는다. 이를 과세하려던 금융투자소득세는 2024년 12월 10일 국회 본회의에서 폐지 법안이 통과되어 시행되지 않았다(effective는 폐지 의결일). 발행 할인액은 이자로 과세한다. 펀드·ETF를 거치면 배당소득으로 과세된다.",
    "sources": [
      {
        "name": "KB국민은행 KB Think, 2024.6.24 (현행 채권 자본이익 비과세)",
        "url": "https://kbthink.com/main/economy/expert-column/tax-column/2024/tax-column-240624.html"
      },
      {
        "name": "SBS Biz, 2024.12.10 (금투세 폐지 법안 본회의 통과)",
        "url": "https://biz.sbs.co.kr/amp/article/20000206343"
      },
      {
        "name": "머니투데이, 2022.8.2",
        "url": "https://www.mt.co.kr/stock/2022/08/02/2022080215180038317"
      }
    ]
  },
  "us-tsy-types": {
    "topic": "govbond",
    "market": "US",
    "label": "미국 국채의 만기별 종류",
    "value": "T-bill 4주~52주, T-note 2·3·5·7·10년, T-bond 20·30년, TIPS 5·10·30년",
    "short": "1년 이하는 T-bill, 2~10년은 T-note, 20·30년은 T-bond",
    "checked": "2026-10-18",
    "level": "official",
    "note": "T-bill은 이자 없이 액면보다 싸게 팔고 만기에 액면을 준다. T-note, T-bond, TIPS는 6개월마다 이자를 준다. 이 밖에 3개월마다 이자가 바뀌는 2년 만기 변동금리채(FRN)가 있다.",
    "sources": [
      {
        "name": "TreasuryDirect, Marketable Securities",
        "url": "https://www.treasurydirect.gov/marketable-securities/"
      },
      {
        "name": "TreasuryDirect, Treasury Bonds",
        "url": "https://www.treasurydirect.gov/marketable-securities/treasury-bonds/"
      }
    ]
  },
  "us-tsy-min": {
    "topic": "govbond",
    "market": "US",
    "label": "미국 국채 최소 매입 단위",
    "value": "100달러, 100달러 단위",
    "short": "100달러부터 100달러 단위로",
    "checked": "2026-10-18",
    "level": "official",
    "note": "경매에서 비경쟁 입찰은 한 번에 최대 1천만 달러까지이다. 한국 개인이 국내 증권회사에서 장외로 살 때의 최소 금액과 단위는 증권회사가 따로 정한다.",
    "sources": [
      {
        "name": "TreasuryDirect, Buying a Marketable Security",
        "url": "https://www.treasurydirect.gov/marketable-securities/buying-a-marketable-security/"
      },
      {
        "name": "TreasuryDirect, Treasury Bonds",
        "url": "https://www.treasurydirect.gov/marketable-securities/treasury-bonds/"
      }
    ]
  },
  "us-tsy-auction": {
    "topic": "govbond",
    "market": "US",
    "label": "미국 국채 경매 방식과 낙찰 한도",
    "value": "단일가격 경매, 경쟁 입찰자 한 명 낙찰 한도 발행액의 35%",
    "short": "경쟁 입찰로 한 입찰자가 받을 수 있는 몫은 발행 금액의 35%까지로 묶는다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "낙찰된 경쟁 입찰자와 비경쟁 입찰자 모두 받아들여진 가장 높은 금리에 해당하는 가격으로 받는다. 35% 한도에서는 입찰자가 이미 가진 순매수 포지션을 뺀다.",
    "sources": [
      {
        "name": "TreasuryDirect, Auction FAQs",
        "url": "https://www.treasurydirect.gov/help-center/faqs/auction-faqs/"
      },
      {
        "name": "31 CFR 356.20 (Cornell LII)",
        "url": "https://www.law.cornell.edu/cfr/text/31/356.20"
      }
    ]
  },
  "jp-boj-ycc-end": {
    "topic": "govbond",
    "market": "JP",
    "label": "일본은행 수익률곡선 통제 종료",
    "value": "2024-03-19",
    "short": "2024년 3월 19일 수익률곡선 통제를 끝냈다",
    "effective": "2024-03-19",
    "checked": "2026-10-18",
    "level": "official",
    "note": "단기 정책금리를 −0.1%에서 0~0.1%로 올리고, ETF와 J-REIT 매입을 멈췄다. 국채 매입은 당시 한 달 약 6조 엔 수준을 대체로 유지한다고 했다. 수익률곡선 통제는 2016년 9월 시작했다.",
    "sources": [
      {
        "name": "일본은행, Changes in the Monetary Policy Framework, 2024.3.19",
        "url": "https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2024/k240319a.pdf"
      }
    ]
  },
  "jp-boj-rate": {
    "topic": "govbond",
    "market": "JP",
    "label": "일본은행 정책금리 (무담보 콜금리 익일물 유도 목표)",
    "value": "1.25% 정도",
    "short": "1.25% 정도",
    "effective": "2026-09-18",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2024년 3월 0~0.1%, 2024년 7월 0.25%, 2025년 1월 0.5%, 2025년 12월 0.75%, 2026년 6월 1.0%, 2026년 9월 18일 1.25%로 올렸다. 다음 결정회의 결과로 바뀔 수 있다.",
    "sources": [
      {
        "name": "구마니치(교도통신), 2026.9",
        "url": "https://kumanichi.com/articles/2037289"
      },
      {
        "name": "다이와종합연구소, 2025.12.22",
        "url": "https://www.dir.co.jp/report/research/capital-mkt/securities/20251222_025483.html"
      },
      {
        "name": "미쓰비시UFJ모건스탠리, 2026.6.16",
        "url": "https://www.am.mufg.jp/report/special/special_260616.pdf"
      }
    ]
  },
  "jp-boj-jgb-purchase": {
    "topic": "govbond",
    "market": "JP",
    "label": "일본은행 국채 매입 감액 계획",
    "value": "분기마다 감액, 2027년 1~3월 한 달 약 2조 엔",
    "short": "2024년 7월 감액 계획을 세워 분기마다 줄이고 있고, 2027년 1~3월에는 한 달 약 2조 엔까지 낮춘다",
    "effective": "2024-07-31",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2024년 7월 계획: 분기마다 약 4천억 엔씩 줄여 2026년 1~3월 한 달 약 3조 엔. 2025년 6월 중간 점검: 2026년 4~6월부터 분기마다 약 2천억 엔씩 줄여 2027년 1~3월 약 2조 엔. 2026년 6월 중간 점검에서 2027년 4월 이후 한 달 약 2조 엔을 유지하기로 했다고 보도되었다(이 부분은 보도로 확인).",
    "sources": [
      {
        "name": "일본은행, 2025.6.17 결정문",
        "url": "https://www.boj.or.jp/en/mopo/mpmdeci/state_2025/k250617a.htm"
      },
      {
        "name": "일본은행, 2024.7.31 결정문",
        "url": "https://www.boj.or.jp/en/mopo/mpmdeci/state_2024/k240731a.htm"
      },
      {
        "name": "미쓰비시UFJ모건스탠리, 2026.6.16",
        "url": "https://www.am.mufg.jp/report/special/special_260616.pdf"
      }
    ]
  },
  "jp-jgb-types": {
    "topic": "govbond",
    "market": "JP",
    "label": "일본 국채의 만기별 종류",
    "value": "국고단기증권(1년 이하, 할인), 이표채 2·5·10·20·30·40년, 10년 물가연동채",
    "short": "2년, 5년, 10년, 20년, 30년, 40년 만기로 나오며 6개월마다 이자를 준다",
    "checked": "2026-10-18",
    "level": "press",
    "note": "10년물 표면금리는 원칙적으로 3개월마다 시장 금리에 맞추어 조정한다. 2026년 10월 6일 입찰에서 3.1%로 정해졌다. 개인용 국채(個人向け国債)는 따로 있다.",
    "sources": [
      {
        "name": "일본 재무성, 개인용 국채 안내",
        "url": "https://www.mof.go.jp/jgbs/individual/how_to/index.htm"
      },
      {
        "name": "구마니치(교도통신), 2026.10.6",
        "url": "https://kumanichi.com/articles/2043510"
      }
    ]
  },
  "us-tax-tsy-wht": {
    "topic": "tax",
    "market": "US",
    "label": "미국 국채 이자의 미국 원천징수 (외국인)",
    "value": "포트폴리오 이자 면제 · 만기 183일 이하 채권 면제",
    "short": "외국인이 받는 미국 국채 이자에는 대체로 미국이 세금을 떼지 않는다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "등록식(registered form) 채권의 이자는 받는 사람이 미국인이 아님을 서류(W-8BEN 등)로 확인하면 포트폴리오 이자로 미국 원천징수가 면제된다. 만기 183일 이하 채권의 이자와 할인액도 면제된다. 미국 상장 채권 ETF의 분배금은 펀드가 이자 관련 배당으로 지정한 부분만 면제될 수 있어, 실제 원천징수는 증권회사 내역으로 확인한다. 한미 조세조약의 이자 제한세율은 12%이다.",
    "sources": [
      {
        "name": "IRS Publication 515 (2026)",
        "url": "https://www.irs.gov/publications/p515"
      },
      {
        "name": "전국투자자교육협의회, 해외채권",
        "url": "https://www.kcie.or.kr/mobile/guide/2/12/web_view?content_idx=481"
      }
    ]
  },
  "kr-tax-fbond-interest": {
    "topic": "tax",
    "market": "KR",
    "label": "해외채권 이자소득 과세 (개인, 직접 보유)",
    "value": "15.4% 원천징수",
    "short": "15.4%를 원천징수한다",
    "checked": "2026-10-18",
    "level": "press",
    "note": "소득세 14%와 지방소득세 1.4%이다. 외국에서 조약 세율만큼 먼저 떼었다면 국내 세율과의 차이만 더 뗀다. 이자와 배당 합계가 연 2,000만 원을 넘으면 금융소득종합과세 대상이다.",
    "sources": [
      {
        "name": "전국투자자교육협의회, 해외채권",
        "url": "https://www.kcie.or.kr/mobile/guide/2/12/web_view?content_idx=481"
      },
      {
        "name": "KB국민은행 KB Think, 미국채 사는 법, 2024.8",
        "url": "https://kbthink.com/main/asset-management/wealth-manage-tip/kbthink-original/202408/howtobuyUSbonds.html"
      },
      {
        "name": "토스뱅크, 채권 세금",
        "url": "https://www.tossbank.com/articles/bondstax"
      }
    ]
  },
  "kr-tax-fbond-gain": {
    "topic": "tax",
    "market": "KR",
    "label": "해외채권 매매차익·환차익 과세 (개인, 직접 보유)",
    "value": "비과세",
    "short": "세금이 붙지 않는다",
    "checked": "2026-10-18",
    "level": "press",
    "note": "소득세법이 정한 소득만 과세하는 구조에서 개인의 채권 매매차익과 환차익은 과세 대상 소득에 들지 않는다. 할인채의 할인액은 이자로 볼 수 있다. ETF나 펀드로 산 경우에는 해당하지 않는다.",
    "sources": [
      {
        "name": "전국투자자교육협의회, 해외채권",
        "url": "https://www.kcie.or.kr/mobile/guide/2/12/web_view?content_idx=481"
      },
      {
        "name": "KB국민은행 KB Think, 미국채 사는 법, 2024.8",
        "url": "https://kbthink.com/main/asset-management/wealth-manage-tip/kbthink-original/202408/howtobuyUSbonds.html"
      }
    ]
  },
  "kr-fut-k200-mult": {
    "topic": "deriv",
    "market": "KR",
    "label": "코스피200선물 거래승수",
    "value": "1포인트당 25만 원",
    "short": "지수 1포인트에 25만 원",
    "effective": "2017-03-27",
    "checked": "2026-10-18",
    "level": "official",
    "note": "계약 금액 = 선물 가격 × 250,000원. 2017년 3월 27일 50만 원에서 25만 원으로 낮췄다(미니코스피200 선물·옵션 승수도 함께 절반으로).",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - KOSPI 200 Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040201/GLB0201040201.jsp"
      },
      {
        "name": "서울경제, 2017-03-13",
        "url": "https://m.sedaily.com/article/11554129"
      }
    ]
  },
  "kr-fut-k200-tick": {
    "topic": "deriv",
    "market": "KR",
    "label": "코스피200선물 최소가격변동폭",
    "value": "0.05포인트(12,500원)",
    "short": "0.05포인트, 한 틱에 12,500원",
    "checked": "2026-10-18",
    "level": "official",
    "note": "0.05 × 250,000원 = 12,500원.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - KOSPI 200 Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040201/GLB0201040201.jsp"
      }
    ]
  },
  "kr-fut-k200-months": {
    "topic": "deriv",
    "market": "KR",
    "label": "코스피200선물 결제월",
    "value": "분기월 4개·반기월 2개·연월 1개, 모두 7개",
    "short": "3·6·9·12월을 중심으로 7개 결제월",
    "checked": "2026-10-18",
    "level": "official",
    "note": "가까운 분기월(3·6·9·12월) 4개, 그 뒤의 반기월(6·12월) 2개, 연월(12월) 1개가 동시에 상장된다.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - KOSPI 200 Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040201/GLB0201040201.jsp"
      }
    ]
  },
  "kr-fut-mini-mult": {
    "topic": "deriv",
    "market": "KR",
    "label": "미니코스피200선물 거래승수",
    "value": "1포인트당 5만 원",
    "short": "지수 1포인트에 5만 원",
    "effective": "2017-03-27",
    "checked": "2026-10-18",
    "level": "official",
    "note": "코스피200선물의 5분의 1 크기.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - Mini KOSPI 200 Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040204/GLB0201040204.jsp"
      }
    ]
  },
  "kr-fut-mini-tick": {
    "topic": "deriv",
    "market": "KR",
    "label": "미니코스피200선물 최소가격변동폭",
    "value": "0.02포인트(1,000원)",
    "short": "0.02포인트, 한 틱에 1,000원",
    "checked": "2026-10-18",
    "level": "official",
    "note": "0.02 × 50,000원 = 1,000원.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - Mini KOSPI 200 Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040204/GLB0201040204.jsp"
      }
    ]
  },
  "kr-fut-mini-months": {
    "topic": "deriv",
    "market": "KR",
    "label": "미니코스피200선물 결제월",
    "value": "연속 6개 월",
    "short": "매달 하나씩 이어지는 6개 결제월",
    "checked": "2026-10-18",
    "level": "official",
    "note": "분기월이 아닌 달도 결제월이 된다. 분기월물의 일일정산가격은 코스피200선물의 정산가격을 쓴다.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - Mini KOSPI 200 Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040204/GLB0201040204.jsp"
      }
    ]
  },
  "kr-fut-kq150-mult": {
    "topic": "deriv",
    "market": "KR",
    "label": "코스닥150선물 거래승수",
    "value": "1포인트당 1만 원",
    "short": "지수 1포인트에 1만 원",
    "checked": "2026-10-18",
    "level": "official",
    "note": "계약 금액 = 선물 가격 × 10,000원.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - KOSDAQ 150 Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040208/GLB0201040208.jsp"
      }
    ]
  },
  "kr-fut-kq150-tick": {
    "topic": "deriv",
    "market": "KR",
    "label": "코스닥150선물 최소가격변동폭",
    "value": "0.1포인트(1,000원)",
    "short": "0.1포인트, 한 틱에 1,000원",
    "checked": "2026-10-18",
    "level": "official",
    "note": "0.1 × 10,000원 = 1,000원.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - KOSDAQ 150 Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040208/GLB0201040208.jsp"
      }
    ]
  },
  "kr-fut-kq150-months": {
    "topic": "deriv",
    "market": "KR",
    "label": "코스닥150선물 결제월",
    "value": "분기월 2개·반기월 2개·연월 3개, 모두 7개",
    "short": "분기월 중심의 7개 결제월",
    "checked": "2026-10-18",
    "level": "official",
    "note": "영문 명세의 two quarterly, two half-yearly, three yearly months.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - KOSDAQ 150 Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040208/GLB0201040208.jsp"
      }
    ]
  },
  "kr-fut-last-index": {
    "topic": "deriv",
    "market": "KR",
    "label": "주가지수선물·개별주식선물 최종거래일",
    "value": "결제월의 둘째 목요일",
    "short": "결제월 둘째 주 목요일",
    "checked": "2026-10-18",
    "level": "official",
    "note": "최종결제일은 최종거래일의 다음 날. 최종거래일에는 정규 거래가 15:20에 끝난다. 현금결제.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - KOSPI 200 Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040201/GLB0201040201.jsp"
      },
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - Single Stock Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040401/GLB0201040401.jsp"
      }
    ]
  },
  "kr-fut-ssf-size": {
    "topic": "deriv",
    "market": "KR",
    "label": "개별주식선물 거래단위",
    "value": "주식 10주",
    "short": "기초 주식 10주",
    "checked": "2026-10-18",
    "level": "official",
    "note": "계약 금액 = 선물 가격 × 10. 현금결제.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - Single Stock Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040401/GLB0201040401.jsp"
      }
    ]
  },
  "kr-fut-ssf-tick": {
    "topic": "deriv",
    "market": "KR",
    "label": "개별주식선물 최소가격변동폭",
    "value": "가격대별 1원~1,000원",
    "short": "가격대에 따라 1원(2천 원 미만)부터 1,000원(50만 원 이상)까지",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2천 원 미만 1원, 2천~5천 원 5원, 5천~2만 원 10원, 2만~5만 원 50원, 5만~20만 원 100원, 20만~50만 원 500원, 50만 원 이상 1,000원. 한 틱의 가치는 여기에 10주를 곱한다.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - Single Stock Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040401/GLB0201040401.jsp"
      }
    ]
  },
  "kr-fut-ssf-months": {
    "topic": "deriv",
    "market": "KR",
    "label": "개별주식선물 결제월",
    "value": "분기월 4개 + 비분기월 2개",
    "short": "분기월(3·6·9·12월) 4개와 그 밖의 달 2개",
    "checked": "2026-10-18",
    "level": "official",
    "note": "대상 종목 목록은 거래소가 정해 수시로 바꾼다.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - Single Stock Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040401/GLB0201040401.jsp"
      }
    ]
  },
  "kr-fut-ktb3-size": {
    "topic": "deriv",
    "market": "KR",
    "label": "3년 국채선물 거래단위",
    "value": "액면 1억 원, 표면금리 연 5%(6개월 이자 지급), 만기 3년",
    "short": "액면 1억 원, 표면금리 5%인 3년 만기 표준 국채",
    "checked": "2026-10-18",
    "level": "official",
    "note": "실제 발행된 채권이 아닌 거래소가 정한 표준물이 기초자산. 5년·10년·30년 국채선물도 있다.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - 3-Year KTB Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040501/GLB0201040501.jsp"
      }
    ]
  },
  "kr-fut-ktb3-tick": {
    "topic": "deriv",
    "market": "KR",
    "label": "3년 국채선물 최소가격변동폭",
    "value": "0.01(1만 원)",
    "short": "0.01, 한 틱에 1만 원",
    "checked": "2026-10-18",
    "level": "official",
    "note": "액면 100 기준 가격 0.01 = 1억 원 × 0.01 ÷ 100 = 1만 원. 가격이 액면 100 기준이라는 점은 틱 가치에서 역산한 것이다(영문 명세에 표시 방식이 따로 적혀 있지 않음).",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - 3-Year KTB Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040501/GLB0201040501.jsp"
      }
    ]
  },
  "kr-fut-ktb3-months": {
    "topic": "deriv",
    "market": "KR",
    "label": "3년 국채선물 결제월과 최종거래일",
    "value": "분기월 2개, 결제월 셋째 화요일",
    "short": "분기월 2개, 최종거래일은 결제월 셋째 화요일",
    "checked": "2026-10-18",
    "level": "official",
    "note": "최종거래일 정규 거래는 08:45~11:30. 최종결제일은 다음 날. 현금결제.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - 3-Year KTB Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040501/GLB0201040501.jsp"
      }
    ]
  },
  "kr-fut-usd-size": {
    "topic": "deriv",
    "market": "KR",
    "label": "미국달러선물 거래단위",
    "value": "1만 달러",
    "short": "1만 미국 달러",
    "checked": "2026-10-18",
    "level": "official",
    "note": "만기에 달러와 원화를 실제로 주고받는 인수도결제.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - US Dollar Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040601/GLB0201040601.jsp"
      }
    ]
  },
  "kr-fut-usd-tick": {
    "topic": "deriv",
    "market": "KR",
    "label": "미국달러선물 최소가격변동폭",
    "value": "1달러당 0.10원(1,000원)",
    "short": "0.1원, 한 틱에 1,000원",
    "checked": "2026-10-18",
    "level": "official",
    "note": "0.1원 × 10,000달러 = 1,000원.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - US Dollar Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040601/GLB0201040601.jsp"
      }
    ]
  },
  "kr-fut-usd-months": {
    "topic": "deriv",
    "market": "KR",
    "label": "미국달러선물 결제월과 최종거래일",
    "value": "연속 12개 월 + 분기월 8개, 결제월 셋째 월요일",
    "short": "매달 이어지는 12개와 분기월 8개, 최종거래일은 결제월 셋째 월요일",
    "checked": "2026-10-18",
    "level": "official",
    "note": "최종거래일 정규 거래는 08:45~11:30. 최종결제일은 최종거래일부터 셋째 날(T+2). 인수도결제.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - US Dollar Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040601/GLB0201040601.jsp"
      }
    ]
  },
  "kr-fut-hours-regular": {
    "topic": "hours",
    "market": "KR",
    "label": "파생상품 정규 거래 시간 (한국거래소)",
    "value": "08:45~15:45",
    "short": "오전 8시 45분부터 오후 3시 45분",
    "checked": "2026-10-18",
    "level": "official",
    "note": "최종거래일에는 주가지수선물·개별주식선물이 15:20, 국채선물·미국달러선물이 11:30에 끝난다.",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - KOSPI 200 Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040201/GLB0201040201.jsp"
      },
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - US Dollar Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040601/GLB0201040601.jsp"
      }
    ]
  },
  "kr-fut-hours-night": {
    "topic": "hours",
    "market": "KR",
    "label": "파생상품 야간 거래 시간 (한국거래소)",
    "value": "18:00~다음 날 06:00",
    "short": "오후 6시부터 다음 날 오전 6시",
    "effective": "2025-06-09",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2025년 6월 9일 유렉스 연계 방식을 끝내고 한국거래소가 직접 연다. 대상 10종: 코스피200선물·미니코스피200선물·코스닥150선물·3년/10년 국채선물·미국달러선물과 코스피200·위클리·미니코스피200·코스닥150 옵션. 개별주식선물은 대상이 아니다. 야간 체결분은 다음 정규 거래일과 합쳐 정산된다(보도).",
    "sources": [
      {
        "name": "한국거래소(KRX) 영문 상품 명세 - KOSPI 200 Futures, 2026-10 확인",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040201/GLB0201040201.jsp"
      },
      {
        "name": "파이낸셜뉴스, 2025-06-08",
        "url": "https://www.fnnews.com/news/202506080801401186"
      },
      {
        "name": "파이낸셜뉴스, 2025-06-09",
        "url": "https://www.fnnews.com/news/202506091108409820"
      }
    ]
  },
  "us-fut-es": {
    "topic": "deriv",
    "market": "US",
    "label": "E-mini S&P 500 선물 계약 크기 (CME)",
    "value": "지수 × 50달러, 최소 0.25포인트(12.50달러)",
    "short": "지수 1포인트에 50달러, 한 틱 0.25포인트에 12.50달러",
    "checked": "2026-10-18",
    "level": "press",
    "note": "CME 계약 명세 페이지는 자동 접속이 막혀 검색 결과 요약과 중개회사 안내로 확인했다.",
    "sources": [
      {
        "name": "CME Group, E-mini S&P 500 Contract Specs (검색 결과 요약)",
        "url": "https://cmegroup.com/markets/equities/sp/e-mini-sandp500.contractSpecs.html"
      },
      {
        "name": "NinjaTrader, What are E-mini S&P 500 (ES) Futures?",
        "url": "https://ninjatrader.com/futures/blogs/what-are-e-mini-s-p-500-es-futures/"
      }
    ]
  },
  "us-fut-mes": {
    "topic": "deriv",
    "market": "US",
    "label": "Micro E-mini S&P 500 선물 계약 크기 (CME)",
    "value": "지수 × 5달러, 최소 0.25포인트(1.25달러)",
    "short": "지수 1포인트에 5달러, 한 틱에 1.25달러",
    "checked": "2026-10-18",
    "level": "press",
    "note": "E-mini의 10분의 1 크기.",
    "sources": [
      {
        "name": "CME Group, Micro E-mini Equity Index futures products overview",
        "url": "https://www.cmegroup.com/education/courses/micro-e-mini-futures/micro-e-mini-futures-products-overview.html"
      }
    ]
  },
  "us-fut-es-months": {
    "topic": "deriv",
    "market": "US",
    "label": "E-mini S&P 500 선물 결제월과 만기 (CME)",
    "value": "3·6·9·12월, 결제월 셋째 금요일 현금결제",
    "short": "3·6·9·12월 분기물, 결제월 셋째 금요일에 현금으로 정산",
    "checked": "2026-10-18",
    "level": "press",
    "note": "최종 정산 시각은 확인하지 못했다.",
    "sources": [
      {
        "name": "CME Group, Micro E-mini Equity Index futures products overview",
        "url": "https://www.cmegroup.com/education/courses/micro-e-mini-futures/micro-e-mini-futures-products-overview.html"
      },
      {
        "name": "NinjaTrader, What are E-mini S&P 500 (ES) Futures?",
        "url": "https://ninjatrader.com/futures/blogs/what-are-e-mini-s-p-500-es-futures/"
      }
    ]
  },
  "us-fut-es-hours": {
    "topic": "hours",
    "market": "US",
    "label": "E-mini S&P 500 선물 거래 시간 (CME Globex)",
    "value": "일요일 18:00~금요일 17:00(미국 동부시간), 평일 매일 1시간 쉼",
    "short": "일요일 저녁부터 금요일 오후까지 거의 하루 종일(매일 1시간 쉼)",
    "checked": "2026-10-18",
    "level": "press",
    "note": "미국 중부시간 기준으로는 17:00~다음 날 16:00. 15:15~15:30(중부) 짧은 정지가 따로 있다는 안내도 있다.",
    "sources": [
      {
        "name": "NinjaTrader, What are E-mini S&P 500 (ES) Futures?",
        "url": "https://ninjatrader.com/futures/blogs/what-are-e-mini-s-p-500-es-futures/"
      },
      {
        "name": "CME Group, Micro E-mini Equity Index futures products overview",
        "url": "https://www.cmegroup.com/education/courses/micro-e-mini-futures/micro-e-mini-futures-products-overview.html"
      }
    ]
  },
  "kr-fut-k200-im": {
    "topic": "deriv",
    "market": "KR",
    "label": "코스피200선물 위탁증거금률",
    "value": "21.75%",
    "short": "계약 금액의 21.75%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주문 때 맡기는 증거금 비율(개시증거금에 해당). 거래소 표에서 위탁증거금률은 거래증거금률의 1.5배로 정해진다. 2026년 들어 여러 차례 올랐다(5월 19.20%, 8월 21.00%, 9월 21.75%). 9월 정기 점검부터 이 값이고, 10월 6일 시행분에서 그대로 유지되었다. 미니코스피200선물·코스피200옵션·코스닥150선물도 같은 비율. 매달 바뀔 수 있다.",
    "sources": [
      {
        "name": "한국거래소 청산결제본부, '26년 10월 장내 파생상품시장 증거금률 변경결과(2026-09-30 공지, 유안타증권 게시본)",
        "url": "https://www.myasset.com/myasset/static/notice/261002_01.pdf"
      },
      {
        "name": "한국거래소 청산결제본부, '26년 8월 장내 파생상품시장 증거금률 변경결과(유안타증권 게시본)",
        "url": "https://www.myasset.com/myasset/static/notice/260731_03.pdf"
      }
    ]
  },
  "kr-fut-k200-mm": {
    "topic": "deriv",
    "market": "KR",
    "label": "코스피200선물 유지위탁증거금률",
    "value": "14.50%",
    "short": "계약 금액의 14.50%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "계좌의 돈이 이 비율로 계산한 금액 아래로 내려가면 추가증거금이 생긴다. 거래소 표에서 유지위탁증거금률은 거래증거금률과 같다. 9월 정기 점검부터 이 값이고 10월 6일 시행분에서 유지되었다.",
    "sources": [
      {
        "name": "한국거래소 청산결제본부, '26년 10월 장내 파생상품시장 증거금률 변경결과(2026-09-30 공지, 유안타증권 게시본)",
        "url": "https://www.myasset.com/myasset/static/notice/261002_01.pdf"
      }
    ]
  },
  "kr-fut-k200-clearing": {
    "topic": "deriv",
    "market": "KR",
    "label": "코스피200선물 거래증거금률 (회원이 거래소에 내는 증거금)",
    "value": "14.50%",
    "short": "계약 금액의 14.50%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "증권회사(회원)가 거래소에 내는 증거금의 비율. 투자자가 증권회사에 내는 위탁증거금률은 이것의 1.5배이다.",
    "sources": [
      {
        "name": "한국거래소 청산결제본부, '26년 10월 장내 파생상품시장 증거금률 변경결과(2026-09-30 공지, 유안타증권 게시본)",
        "url": "https://www.myasset.com/myasset/static/notice/261002_01.pdf"
      }
    ]
  },
  "kr-fut-margin-review": {
    "topic": "deriv",
    "market": "KR",
    "label": "파생상품 증거금률 정기 점검 주기",
    "value": "매월 첫째 월요일(휴장일이면 다음 거래일) 정기 점검",
    "short": "매달 첫째 월요일(휴장이면 다음 거래일)마다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "「증권·파생상품시장 증거금 관리지침」에 따른 정기 점검. 기초자산 가격 변동성을 바탕으로 결제 안정성과 상품 특성을 감안해 조정한다. 공지는 시행일 며칠 전에 나오고, 2026년 10월분은 9월 30일 공지·10월 6일 시행이었다.",
    "sources": [
      {
        "name": "한국거래소 청산결제본부, '26년 10월 장내 파생상품시장 증거금률 변경결과(2026-09-30 공지, 유안타증권 게시본)",
        "url": "https://www.myasset.com/myasset/static/notice/261002_01.pdf"
      }
    ]
  },
  "kr-fut-call-deadline": {
    "topic": "deriv",
    "market": "KR",
    "label": "선물·옵션 추가증거금 납부 기한",
    "value": "부족이 생긴 거래일의 다음 영업일 12시까지",
    "short": "다음 영업일 정오까지",
    "checked": "2026-10-18",
    "level": "press",
    "note": "장 종료 시점에 예탁총액이 유지위탁증거금보다 적거나 예탁현금이 유지현금예탁필요액보다 적으면 생긴다. 위탁증거금 수준까지 채워야 하며, 12시 전에 계약을 줄여 증거금 수준을 맞추어도 된다. 증권회사는 결제불이행 우려가 있는 고객에게 기한을 앞당길 수 있다. 기한을 넘기면 통지 없이 반대매매할 수 있다.",
    "sources": [
      {
        "name": "한국투자증권 파생상품계좌설정약관(2025-06-09 시행) 및 별첨",
        "url": "https://file.koreainvestment.com/updata/namo/파생상품계좌설정약관.pdf"
      },
      {
        "name": "한국투자증권 장내파생상품 거래설명서(2026-05-11 심사필)",
        "url": "https://file.koreainvestment.com/updata/namo/13092626장내파생상품 래설명서_전문.pdf"
      }
    ]
  },
  "kr-fut-intraday-call": {
    "topic": "deriv",
    "market": "KR",
    "label": "장중 추가증거금 부과 조건",
    "value": "코스피200이 전날 종가보다 코스피200선물 유지증거금률의 80% 이상 움직인 날",
    "short": "지수가 유지증거금률의 80% 이상 움직인 날",
    "checked": "2026-10-18",
    "level": "press",
    "note": "9시 1분, 10시~14시 정각에 확인한다(15시는 제외, 야간거래에는 적용하지 않음). 유지증거금률 14.50%이면 기준은 11.6%. 예탁총액이 장중유지위탁증거금보다 적은 계좌에 부과하고, 기한은 그날 장 종료 시점(회사에 따라 다음 거래일 호가 접수 전까지 연장 가능). 채우지 않으면 신규 주문과 증거금을 늘리는 주문이 거부된다.",
    "sources": [
      {
        "name": "한국투자증권 장내파생상품 거래설명서(2026-05-11 심사필)",
        "url": "https://file.koreainvestment.com/updata/namo/13092626장내파생상품 래설명서_전문.pdf"
      },
      {
        "name": "한국투자증권 파생상품계좌설정약관(2025-06-09 시행) 및 별첨",
        "url": "https://file.koreainvestment.com/updata/namo/파생상품계좌설정약관.pdf"
      }
    ]
  },
  "kr-fut-cash-req": {
    "topic": "deriv",
    "market": "KR",
    "label": "선물 신규 주문의 현금예탁필요액",
    "value": "위탁증거금의 2분의 1",
    "short": "위탁증거금의 절반은 현금",
    "checked": "2026-10-18",
    "level": "press",
    "note": "한국거래소 파생상품시장 업무규정에 따른 것으로 증권회사 약관 별첨에 '위탁금액 × 위탁증거금률 × 1/2'로 적혀 있다. 나머지는 대용증권·외화로 낼 수 있다. 옵션을 살 때는 대금 전액이 현금이고, 선물 스프레드 거래는 0이다.",
    "sources": [
      {
        "name": "한국투자증권 파생상품계좌설정약관(2025-06-09 시행) 및 별첨",
        "url": "https://file.koreainvestment.com/updata/namo/파생상품계좌설정약관.pdf"
      },
      {
        "name": "다올투자증권 선물옵션 증거금 안내",
        "url": "https://www.daolsecurities.com/customer/guide/FuturesIndex04.jsp"
      }
    ]
  },
  "kr-drv-final-settle-day": {
    "topic": "deriv",
    "market": "KR",
    "label": "지수·주식 선물·옵션 최종결제일",
    "value": "최종거래일 다음 거래일",
    "short": "최종거래일 다음 거래일",
    "checked": "2026-10-18",
    "level": "official",
    "note": "미국달러선물은 최종거래일 이틀 뒤에 인수도한다.",
    "sources": [
      {
        "name": "한국거래소 KOSPI 200 Futures 상품명세",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040201/GLB0201040201.jsp"
      },
      {
        "name": "한국거래소 KOSPI 200 Options 상품명세",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040202/GLB0201040202.jsp"
      },
      {
        "name": "한국거래소 Single Stock Futures 상품명세",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040401/GLB0201040401.jsp"
      }
    ]
  },
  "kr-drv-hours-lastday": {
    "topic": "deriv",
    "market": "KR",
    "label": "최종거래일 도래 종목의 거래 시간 (지수·주식 선물·옵션)",
    "value": "08:45~15:20",
    "short": "오전 8시 45분부터 오후 3시 20분",
    "checked": "2026-10-18",
    "level": "official",
    "note": "평소 정규거래는 08:45~15:45이다. 만기 종목은 그날 정규거래로 끝나고 야간 거래에는 나오지 않는다.",
    "sources": [
      {
        "name": "한국거래소 KOSPI 200 Futures 상품명세",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040201/GLB0201040201.jsp"
      },
      {
        "name": "한국거래소 Single Stock Futures 상품명세",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040401/GLB0201040401.jsp"
      }
    ]
  },
  "kr-drv-weekly-k200": {
    "topic": "deriv",
    "market": "KR",
    "label": "코스피200 위클리옵션 만기",
    "value": "월요일 만기와 목요일 만기 (둘째 목요일 제외)",
    "short": "매주 월요일과 목요일에 상장되어 다음 주 같은 요일에 끝나는 두 종류(월물 옵션 만기인 둘째 목요일에는 위클리옵션이 없다)",
    "checked": "2026-10-18",
    "level": "official",
    "note": "월요일 만기는 휴장일이면 다음 거래일로, 목요일 만기는 앞 거래일로 옮긴다. 코스닥150 위클리옵션도 월·목 만기로 있다(2025.10 시행 보도). 개별주식 위클리옵션은 2026년 6월 29일 상장 예정이었으나 무기한 연기되었다.",
    "sources": [
      {
        "name": "한국거래소 KOSPI 200 Options 상품명세",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040202/GLB0201040202.jsp"
      },
      {
        "name": "한국거래소, Guide to Night Session in KRX Derivatives Market, 2025.4",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201041003/Guide_to_Night_Session_in_KRX_Derivatives_Market.pdf"
      },
      {
        "name": "헤럴드경제, 2026.6.24",
        "url": "https://www.heraldk.com/article/2026062417550980028"
      }
    ]
  },
  "kr-drv-fsp-k200": {
    "topic": "deriv",
    "market": "KR",
    "label": "코스피200선물·옵션 최종결제가격",
    "value": "최종거래일의 코스피200 종가지수",
    "short": "최종거래일의 코스피200 종가지수",
    "checked": "2026-10-18",
    "level": "press",
    "note": "주식선물은 최종거래일 기초주권 종가를 쓰는 것으로 알려져 있으나 원문 확인 전이다. 파생상품시장 업무규정 원문은 열어 보지 못했다.",
    "sources": [
      {
        "name": "KB증권 코스피200 선물·옵션 상품 비교 안내",
        "url": "https://www.kbsec.com/go.able?linkcd=s040308010002"
      }
    ]
  },
  "kr-drv-ktb-expiry": {
    "topic": "deriv",
    "market": "KR",
    "label": "국채선물 최종거래일",
    "value": "결제월 셋째 화요일, 11:30 거래 종료, 현금결제",
    "short": "결제월 셋째 화요일(그날은 오전 11시 30분에 거래 종료)",
    "checked": "2026-10-18",
    "level": "official",
    "note": "최종결제가격은 거래소가 고른 바스켓 국채들의 11:30 수익률(금융투자협회 제공)로 계산한다. 최종결제일은 다음 거래일.",
    "sources": [
      {
        "name": "한국거래소 3-Year KTB Futures 상품명세",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040501/GLB0201040501.jsp"
      }
    ]
  },
  "kr-drv-usd-expiry": {
    "topic": "deriv",
    "market": "KR",
    "label": "미국달러선물 최종거래일과 인수도",
    "value": "결제월 셋째 월요일, 11:30 거래 종료, 이틀 뒤 인수도",
    "short": "결제월 셋째 월요일(그날은 오전 11시 30분에 거래 종료)",
    "checked": "2026-10-18",
    "level": "official",
    "note": "1계약 10,000달러. 최종결제가격은 최종거래일 거래 종료 뒤 거래소가 정해 알린다.",
    "sources": [
      {
        "name": "한국거래소 US Dollar Futures 상품명세",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040601/GLB0201040601.jsp"
      }
    ]
  },
  "us-drv-es-expiry": {
    "topic": "deriv",
    "market": "US",
    "label": "미국 E-mini S&P 500 선물 만기와 최종결제",
    "value": "3·6·9·12월 셋째 금요일, 특별 시가(SOQ)로 현금결제",
    "short": "3·6·9·12월 셋째 금요일에 끝나고, 그날 아침 구성 종목 시가로 계산한 특별 시가(SOQ)로 현금결제한다",
    "checked": "2026-10-18",
    "level": "press",
    "note": "CME 안내 자료 기준. 규정 원문(CME Rulebook)은 열어 보지 않았다.",
    "sources": [
      {
        "name": "CME Group, Understanding Equity Index Daily & Final Settlement",
        "url": "https://www.cmegroup.com/education/courses/introduction-to-equity-index-products/understanding-equity-index-daily-and-final-settlement"
      }
    ]
  },
  "kr-k200opt-multiplier": {
    "topic": "deriv",
    "market": "KR",
    "label": "코스피200옵션 거래승수",
    "value": "250,000원",
    "short": "지수 1포인트당 25만 원",
    "effective": "2017-03-27",
    "checked": "2026-10-18",
    "level": "official",
    "note": "계약 금액은 옵션 가격(포인트) × 250,000원이다. 2012년 6월 10만 원에서 50만 원으로 올렸다가 2017년 3월 27일 25만 원으로 낮췄다(변경일은 증권회사 안내로 확인).",
    "sources": [
      {
        "name": "한국거래소 KOSPI 200 Options 상품명세(영문)",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040202/GLB0201040202.jsp"
      },
      {
        "name": "Interactive Brokers, Eurex/KRX 상품 안내",
        "url": "https://interactivebrokers.com.au/en/trading/eurex-krx.php"
      },
      {
        "name": "다올투자증권 지수옵션 안내",
        "url": "https://www.daolsecurities.com/customer/guide/FuturesIndex03.jsp"
      }
    ]
  },
  "kr-k200opt-style": {
    "topic": "deriv",
    "market": "KR",
    "label": "코스피200옵션 행사 방식과 결제",
    "value": "유럽형 · 현금결제",
    "short": "만기일에만 행사할 수 있는 유럽형이고, 차액을 현금으로 주고받는다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "최종결제일은 최종거래일의 다음 거래일이다.",
    "sources": [
      {
        "name": "한국거래소 KOSPI 200 Options 상품명세(영문)",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040202/GLB0201040202.jsp"
      }
    ]
  },
  "kr-k200opt-expiry": {
    "topic": "deriv",
    "market": "KR",
    "label": "코스피200옵션 최종거래일",
    "value": "결제월 두 번째 목요일",
    "short": "결제월의 두 번째 목요일(휴일이면 앞당김)",
    "checked": "2026-10-18",
    "level": "official",
    "note": "위클리옵션은 매주 월요일·목요일 만기 상품이 따로 있다(목요일물 2019.9.23, 월요일물 2023.7.31 상장). 두 번째 목요일에는 월물이 만기이므로 목요일 위클리를 두지 않는다. 정규 거래시간은 08:45~15:45(최종거래일 15:20까지), 야간 18:00~06:00.",
    "sources": [
      {
        "name": "한국거래소 KOSPI 200 Options 상품명세(영문)",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040202/GLB0201040202.jsp"
      }
    ]
  },
  "kr-k200opt-tick": {
    "topic": "deriv",
    "market": "KR",
    "label": "코스피200옵션 호가가격단위",
    "value": "10p 미만 0.01p(2,500원) / 10p 이상 0.05p(12,500원)",
    "short": "프리미엄 10포인트 미만에서 0.01포인트(2,500원), 10포인트 이상에서 0.05포인트(12,500원)",
    "checked": "2026-10-18",
    "level": "official",
    "note": "",
    "sources": [
      {
        "name": "한국거래소 KOSPI 200 Options 상품명세(영문)",
        "url": "https://global.krx.co.kr/contents/GLB/02/0201/0201040202/GLB0201040202.jsp"
      },
      {
        "name": "다올투자증권 지수옵션 안내",
        "url": "https://www.daolsecurities.com/customer/guide/FuturesIndex03.jsp"
      }
    ]
  },
  "kr-fut-price-limit": {
    "topic": "deriv",
    "market": "KR",
    "label": "코스피200선물·옵션 단계별 가격제한폭",
    "value": "기준가격 대비 ±8% → ±15% → ±20%",
    "short": "1단계 8%, 2단계 15%, 3단계 20%",
    "checked": "2026-10-18",
    "level": "press",
    "note": "앞 단계 한도에 닿은 뒤 일정 조건(기준 종목이 한도에 닿고 5분 경과 등)이 되면 같은 방향으로 다음 단계가 열린다. 야간 거래에는 1단계만 적용한다.",
    "sources": [
      {
        "name": "한국투자증권 장내파생상품 거래설명서 (2026.5 심사)",
        "url": "https://file.koreainvestment.com/updata/namo/13092626장내파생상품 래설명서_전문.pdf"
      },
      {
        "name": "다올투자증권 KOSPI200선물 상품 안내",
        "url": "https://www.daolsecurities.com/customer/guide/FuturesIndex01.jsp"
      }
    ]
  },
  "kr-deriv-edu": {
    "topic": "protect",
    "market": "KR",
    "label": "국내 장내파생상품 사전교육 (일반개인투자자)",
    "value": "최저 1시간 이상 (금융투자협회 사전교육)",
    "short": "금융투자협회의 사전교육을 최저 1시간 이상 들어야 한다",
    "effective": "2019-12-02",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2019년 12월 2일 30시간(20+10)에서 낮췄다. 증권회사가 투자성향·나이·거래 경험을 보고 늘린다. 한 증권회사 기준은 1단계 1시간, 2단계 3시간, 3단계 10시간이며, 공격투자형 미만이거나 만 65세 이상이면 10시간 과정에 해당할 수 있다. 수강료는 3,000원으로 보도되었다. 2019.12.2 이전 종전 제도로 이수했으면 인정한다. 다른 회사 거래확인서나 자격증으로 면제하는 증권회사도 있다.",
    "sources": [
      {
        "name": "금융위원회 보도자료, 파생상품시장 발전방안, 2019.5.30",
        "url": "https://www.fsc.go.kr/no010101/73717"
      },
      {
        "name": "한국투자증권 장내파생상품 거래설명서(심사필 2026.5.11)",
        "url": "https://file.koreainvestment.com/updata/namo/13092626장내파생상품 래설명서_전문.pdf"
      },
      {
        "name": "다올투자증권 선물옵션 기본예탁금·교육 안내",
        "url": "https://www.daolsecurities.com/customer/guide/FuturesIndex05.jsp"
      },
      {
        "name": "비즈워치, 2025.11.17",
        "url": "https://news.bizwatch.co.kr/article/market/2025/11/17/0025"
      }
    ]
  },
  "kr-deriv-mock": {
    "topic": "protect",
    "market": "KR",
    "label": "국내 장내파생상품 모의거래 (일반개인투자자)",
    "value": "최저 3시간 이상",
    "short": "모의거래를 최저 3시간 이상 마쳐야 한다",
    "effective": "2019-12-02",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2019년 12월 2일 50시간에서 낮췄다. 한국거래소나 증권회사가 무료로 제공한다. 증권회사가 투자자에 따라 늘리며, 한 증권회사 기준은 1단계 3시간, 2단계 5시간, 3단계 10시간이다.",
    "sources": [
      {
        "name": "금융위원회 보도자료, 파생상품시장 발전방안, 2019.5.30",
        "url": "https://www.fsc.go.kr/no010101/73717"
      },
      {
        "name": "한국투자증권 장내파생상품 거래설명서(심사필 2026.5.11)",
        "url": "https://file.koreainvestment.com/updata/namo/13092626장내파생상품 래설명서_전문.pdf"
      },
      {
        "name": "다올투자증권 선물옵션 기본예탁금·교육 안내",
        "url": "https://www.daolsecurities.com/customer/guide/FuturesIndex05.jsp"
      },
      {
        "name": "비즈워치, 2025.11.17",
        "url": "https://news.bizwatch.co.kr/article/market/2025/11/17/0025"
      }
    ]
  },
  "kr-deriv-deposit-1": {
    "topic": "protect",
    "market": "KR",
    "label": "파생상품 기본예탁금 1단계 (선물·옵션 매수)",
    "value": "1,000만 원 이상 (증권회사가 정함)",
    "short": "1,000만 원 이상으로 증권회사가 정한 금액",
    "effective": "2019-12-02",
    "checked": "2026-10-18",
    "level": "official",
    "note": "변동성지수선물을 뺀 선물과 옵션 매수만 할 수 있다. 근거는 한국거래소 파생상품시장 업무규정 제127조와 시행세칙 제122조이다. 증권회사가 반대매매·추가증거금 이력 등에 따라 더 높게 정한다(예: 1,000만/1,500만/3,000만 원). 금선물·돈육선물만 거래하면 50만 원이다. 자본시장법상 전문투자자는 납부 의무가 없다.",
    "sources": [
      {
        "name": "한국거래소, Guide to Night Session in KRX Derivatives Market, 2025.4",
        "url": "https://open.krx.co.kr/contents/OPN/01/01041401/Guide_to_Night_Session_in_KRX_Derivatives_Market.pdf"
      },
      {
        "name": "한국투자증권 장내파생상품 거래설명서(심사필 2026.5.11)",
        "url": "https://file.koreainvestment.com/updata/namo/13092626장내파생상품 래설명서_전문.pdf"
      },
      {
        "name": "다올투자증권 선물옵션 기본예탁금·교육 안내",
        "url": "https://www.daolsecurities.com/customer/guide/FuturesIndex05.jsp"
      },
      {
        "name": "금융위원회 보도자료, 파생상품시장 발전방안, 2019.5.30",
        "url": "https://www.fsc.go.kr/no010101/73717"
      }
    ]
  },
  "kr-deriv-deposit-2": {
    "topic": "protect",
    "market": "KR",
    "label": "파생상품 기본예탁금 2단계 (모든 거래)",
    "value": "2,000만 원 이상 (증권회사가 정함), 미결제약정 10거래일 이상 보유 경험",
    "short": "2,000만 원 이상이고, 미결제약정을 10거래일 이상 들고 있었던 경험이 있어야 한다",
    "effective": "2019-12-02",
    "checked": "2026-10-18",
    "level": "official",
    "note": "옵션 매도와 변동성지수선물을 포함한 모든 장내파생상품을 거래할 수 있다. 2019년 개편 때 '1단계 진입 후 1년 경과' 조건을 없앴고, 거래 경험 요건은 계좌 개설 후 미결제약정 10거래일 이상 보유로 정했다. 증권회사가 더 높게 정할 수 있다(예: 2,000만/2,500만/5,000만 원).",
    "sources": [
      {
        "name": "한국거래소, Guide to Night Session in KRX Derivatives Market, 2025.4",
        "url": "https://open.krx.co.kr/contents/OPN/01/01041401/Guide_to_Night_Session_in_KRX_Derivatives_Market.pdf"
      },
      {
        "name": "한국투자증권 장내파생상품 거래설명서(심사필 2026.5.11)",
        "url": "https://file.koreainvestment.com/updata/namo/13092626장내파생상품 래설명서_전문.pdf"
      },
      {
        "name": "다올투자증권 선물옵션 기본예탁금·교육 안내",
        "url": "https://www.daolsecurities.com/customer/guide/FuturesIndex05.jsp"
      },
      {
        "name": "금융위원회 보도자료, 파생상품시장 발전방안, 2019.5.30",
        "url": "https://www.fsc.go.kr/no010101/73717"
      }
    ]
  },
  "kr-deriv-deposit-when": {
    "topic": "protect",
    "market": "KR",
    "label": "기본예탁금을 확인하는 때",
    "value": "미결제약정이 없는 상태에서 새로 주문할 때(계좌를 처음 열었을 때 포함) 확인하며, 현금·대용증권·외화·외화증권으로 낼 수 있다",
    "short": "미결제약정이 없는 상태에서 새로 주문할 때",
    "checked": "2026-10-18",
    "level": "official",
    "note": "기존 계좌에서 미결제약정을 모두 정리한 뒤 다시 주문할 때도 확인한다. 야간 거래에도 같은 기준이 적용되며, 정규시장에서 이미 예탁하고 미결제약정을 가진 투자자는 야간에 따로 더 내지 않는다.",
    "sources": [
      {
        "name": "한국거래소, Guide to Night Session in KRX Derivatives Market, 2025.4",
        "url": "https://open.krx.co.kr/contents/OPN/01/01041401/Guide_to_Night_Session_in_KRX_Derivatives_Market.pdf"
      }
    ]
  },
  "kr-deriv-entry-history": {
    "topic": "protect",
    "market": "KR",
    "label": "2019년 완화 전 개인 파생상품 진입 요건",
    "value": "사전교육 30시간(20+10), 모의거래 50시간, 기본예탁금 1단계 2,000만~5,000만 원 이상·2단계 3,000만~1억 원 이상",
    "short": "2019년 완화 전에는 사전교육 30시간, 모의거래 50시간, 1단계 기본예탁금이 최소 2,000만 원이었다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2014년 6월 파생상품시장 발전방안이 '실질적인 투자능력을 갖춘 적격 개인투자자'만 단계적으로 들어오게 한다는 원칙 아래 교육 30시간, 모의거래 50시간, 1단계 3,000만 원, 2단계 5,000만 원과 1년 거래 경험을 제시했다. 2019년 5월 발전방안이 교육 1시간, 모의거래 3시간, 예탁금 1,000만/2,000만 원 이상으로 낮추었고 2019년 12월 2일 시행되었다.",
    "sources": [
      {
        "name": "금융위원회, 파생상품시장 발전방안, 2014.6.17",
        "url": "https://www.fsc.go.kr/po010101/71164"
      },
      {
        "name": "금융위원회 보도자료, 파생상품시장 발전방안, 2019.5.30",
        "url": "https://www.fsc.go.kr/no010101/73717"
      },
      {
        "name": "한국투자증권 장내파생상품 거래설명서(심사필 2026.5.11)",
        "url": "https://file.koreainvestment.com/updata/namo/13092626장내파생상품 래설명서_전문.pdf"
      }
    ]
  },
  "kr-deriv-night": {
    "topic": "hours",
    "market": "KR",
    "label": "한국거래소 야간 파생상품시장",
    "value": "18:00~다음 날 06:00 (10개 상품)",
    "short": "오후 6시부터 다음 날 오전 6시까지",
    "effective": "2025-06-09",
    "checked": "2026-10-18",
    "level": "official",
    "note": "호가 접수는 17:50부터이고, 밤 거래는 다음 거래일 거래로 본다. 대상은 코스피200선물·옵션, 미니코스피200선물·옵션, 코스피200위클리옵션(월·목), 코스닥150선물·옵션, 미국달러선물, 3년·10년 국채선물이다. 유렉스 연계 방식을 대신해 정규 파생상품 계좌로 거래하며, 기본예탁금과 위탁증거금 기준은 정규시장과 같다. 주식 관련 파생상품은 1단계 가격제한(8%)만 적용한다. 정규시장은 08:45~15:45이다. 거래소는 2027년 말 24시간 거래를 목표로 한다고 보도되었다.",
    "sources": [
      {
        "name": "한국거래소, Guide to Night Session in KRX Derivatives Market, 2025.4",
        "url": "https://open.krx.co.kr/contents/OPN/01/01041401/Guide_to_Night_Session_in_KRX_Derivatives_Market.pdf"
      },
      {
        "name": "파이낸셜뉴스, 2025.6.9",
        "url": "https://www.fnnews.com/news/202506091108409820"
      }
    ]
  },
  "kr-deriv-weekly": {
    "topic": "protect",
    "market": "KR",
    "label": "위클리옵션 현황",
    "value": "코스피200·코스닥150 위클리옵션(월요일·목요일 만기) 상장, 개별주식 위클리옵션은 상장 연기",
    "short": "코스피200과 코스닥150 위클리옵션이 월요일·목요일 만기로 거래되고, 개별주식 위클리옵션은 2026년 6월 상장 직전에 연기되었다",
    "checked": "2026-10-18",
    "level": "press",
    "note": "코스닥150 위클리옵션은 2025년 10월 말(보도상 27일) 정규·야간 시장에 상장되었다. 삼성전자·SK하이닉스·현대차·LG에너지솔루션을 기초로 한 개별주식 위클리옵션은 2026년 6월 29일 상장 예정이었으나 거래소가 6월 25일 시장 여건을 이유로 연기했다. 위클리옵션도 다른 옵션과 같은 기본예탁금 단계를 적용받는다(매수 1단계, 매도 2단계).",
    "sources": [
      {
        "name": "한국거래소, Guide to Night Session in KRX Derivatives Market, 2025.4",
        "url": "https://open.krx.co.kr/contents/OPN/01/01041401/Guide_to_Night_Session_in_KRX_Derivatives_Market.pdf"
      },
      {
        "name": "뉴데일리, 2025.10.22",
        "url": "https://biz.newdaily.co.kr/site/data/html/2025/10/22/2025102200029.amp.html"
      },
      {
        "name": "비즈워치, 2026.6.25",
        "url": "https://news.bizwatch.co.kr/article/market/2026/06/25/0021"
      }
    ]
  },
  "kr-ovs-deriv-req": {
    "topic": "protect",
    "market": "KR",
    "label": "해외파생상품 진입 요건 (일반개인투자자)",
    "value": "처음 거래할 때 사전교육 1시간 이상과 모의거래 3시간 이상",
    "short": "처음 거래하는 개인은 사전교육 1시간 이상과 모의거래 3시간 이상을 마쳐야 한다",
    "effective": "2025-12-15",
    "checked": "2026-10-18",
    "level": "press",
    "note": "금융감독원이 2025년 11월 16일 발표했고 금융투자협회 규정 개정으로 시행되었다. 증권회사가 투자성향·나이·경험에 따라 시간을 늘리며, 경험 없는 만 65세 이상에게는 교육 10시간·모의거래 7시간을 권고한다고 보도되었다. 국내와 같은 기본예탁금은 도입되지 않았다(보도 기준). 금융감독원 집계로 개인의 해외파생상품 손실은 2020년~2025년 상반기 연평균 약 4,580억 원이다.",
    "sources": [
      {
        "name": "한국투자증권 해외파생상품시장거래총괄계좌설정약관 신구조문(2025.12.15 시행)",
        "url": "https://file.koreainvestment.com/updata/namo/12132251해외파생상품시장거래총괄계좌설정약관_신구조문.pdf"
      },
      {
        "name": "경향신문, 2025.11.16",
        "url": "https://www.khan.co.kr/article/202511161310001/"
      },
      {
        "name": "비즈워치, 2025.11.17",
        "url": "https://news.bizwatch.co.kr/article/market/2025/11/17/0025"
      },
      {
        "name": "데일리안, 2025.5.25",
        "url": "https://www.dailian.co.kr/news/view/1502047/"
      }
    ]
  },
  "kr-etp-single-lev-mock": {
    "topic": "protect",
    "market": "KR",
    "label": "단일종목 레버리지·인버스 ETF·ETN 모의거래",
    "value": "5거래일 이상, 거래일마다 1시간 이상 (총 5시간 이상)",
    "short": "5거래일 이상, 하루 1시간 이상씩 총 5시간 이상의 모의거래",
    "effective": "2026-08-19",
    "checked": "2026-10-18",
    "level": "official",
    "note": "국내·해외 상장 단일종목 레버리지·인버스 상품에 새로 투자하는 개인 일반투자자가 대상이다. 한국거래소가 홈페이지에서 무료로 운영하며 가상 자금으로 그날 시세에 맞춰 거래한다. 매일 이어서 할 필요는 없다. 현금 3,000만 원 기본예탁금과 사전교육(보도상 기본 1시간·심화 2시간)도 함께 요구된다.",
    "sources": [
      {
        "name": "정책브리핑(금융위원회), 2026.8.12",
        "url": "https://www.korea.kr/news/policyNewsView.do?newsId=148969967"
      },
      {
        "name": "비즈워치, 2026.8.12",
        "url": "https://news.bizwatch.co.kr/article/market/2026/08/12/0036"
      }
    ]
  },
  "kr-tax-deriv-rate": {
    "topic": "tax",
    "market": "KR",
    "label": "파생상품 양도소득세율",
    "value": "20% (탄력세율 10%)",
    "short": "법정 세율은 20%이지만 탄력세율 10%",
    "effective": "2018-04-01",
    "checked": "2026-10-18",
    "level": "official",
    "note": "소득세법 제104조, 시행령 제167조의9. 2016.1.1~2018.3.31 양도분은 5%였다. 개인지방소득세가 양도소득세의 10%만큼 따로 붙어 실제 부담은 11%이다. 장기보유특별공제와 비과세·감면은 없다. 2026년 10월 현재 세율 변경은 확인되지 않았다.",
    "sources": [
      {
        "name": "국세청, 파생상품에 대한 양도소득세 신고납부 안내",
        "url": "https://www.nts.go.kr/tax/sub/1.5.4.파생상품에 대한 양도소득세 신고납부 안내.html"
      },
      {
        "name": "국세청, 양도소득세율 변천표(2020)",
        "url": "https://www.nts.go.kr/upload/ti_tax/01/%EC%96%91%EB%8F%84%EC%86%8C%EB%93%9D%EC%84%B8%EC%9C%A8.pdf"
      }
    ]
  },
  "kr-tax-deriv-scope": {
    "topic": "tax",
    "market": "KR",
    "label": "양도소득세 과세 대상 파생상품",
    "value": "국내 주가지수 관련 장내파생상품(ELW·CFD 포함), 해외 장내파생상품 전부, 주가지수 관련 장외파생상품 일부",
    "short": "국내에서는 시장을 대표하는 지수를 기초로 한 장내파생상품, 해외에서는 거래소에 상장된 파생상품 전부",
    "checked": "2026-10-18",
    "level": "official",
    "note": "코스피200선물·옵션(2016.1)부터 시작해 미니코스피200(2016.7), 코스피200 ELW(2017.4), 코스닥150·KRX300·변동성지수 등 모든 주가지수 관련 상품(2019.4), 주식 차액결제거래(CFD, 2021.4)로 넓혀 왔다. 장외파생상품은 국내 장내상품과 경제적 실질이 같은 것만 과세한다. 국내 개별주식선물·국채선물·통화선물은 국세청 과세 대상 목록에 없다.",
    "sources": [
      {
        "name": "국세청, 파생상품에 대한 양도소득세 신고납부 안내",
        "url": "https://www.nts.go.kr/tax/sub/1.5.4.파생상품에 대한 양도소득세 신고납부 안내.html"
      },
      {
        "name": "국세청, 양도소득세율 변천표(2020)",
        "url": "https://www.nts.go.kr/upload/ti_tax/01/%EC%96%91%EB%8F%84%EC%86%8C%EB%93%9D%EC%84%B8%EC%9C%A8.pdf"
      }
    ]
  },
  "kr-tax-deriv-deduct": {
    "topic": "tax",
    "market": "KR",
    "label": "파생상품 양도소득 기본공제와 손익통산",
    "value": "연 250만 원 (국내·해외 파생상품 합산)",
    "short": "국내와 해외 파생상품 소득을 합쳐 한 해 250만 원",
    "effective": "2017-01-01",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2017년 1월 1일 양도분부터 국내·해외 파생상품 손익을 통산한다. 주식·부동산 등 다른 양도소득과는 통산하지 않고, 손실의 이월공제는 없다. 주가지수 ELW 손익은 파생상품 소득과 통산한다.",
    "sources": [
      {
        "name": "국세청, 파생상품에 대한 양도소득세 신고납부 안내",
        "url": "https://www.nts.go.kr/tax/sub/1.5.4.파생상품에 대한 양도소득세 신고납부 안내.html"
      }
    ]
  },
  "kr-tax-deriv-filing": {
    "topic": "tax",
    "market": "KR",
    "label": "파생상품 양도소득세 신고·납부 기간",
    "value": "다음 해 5월 1일~5월 31일",
    "short": "다음 해 5월 한 달 동안",
    "checked": "2026-10-18",
    "level": "official",
    "note": "홈택스·손택스로 신고하며, 증권회사가 국세청에 낸 자료로 모두채움 서비스가 제공된다. 개인지방소득세는 시·군·구에 따로 신고·납부한다(홈택스는 위택스와 연계). 무신고 가산세는 20%이다.",
    "sources": [
      {
        "name": "국세청, 파생상품에 대한 양도소득세 신고납부 안내",
        "url": "https://www.nts.go.kr/tax/sub/1.5.4.파생상품에 대한 양도소득세 신고납부 안내.html"
      }
    ]
  },
  "us-cme-wti-unit": {
    "topic": "commodity",
    "market": "US",
    "label": "WTI 원유 선물 1계약의 크기 (NYMEX)",
    "value": "1,000배럴",
    "short": "1,000배럴로, 값은 배럴당 달러로 부른다",
    "checked": "2026-10-18",
    "level": "press",
    "note": "최소 가격 변동 배럴당 0.01달러(1계약 10달러). 실물 인도 장소는 오클라호마주 쿠싱. CME 공식 페이지가 자동 접속을 막아(403·시간 초과) 검색 결과에 나온 CME 페이지 내용으로 확인했다.",
    "sources": [
      {
        "name": "CME Group, Light Sweet Crude Oil Futures contract specs (검색 결과로 확인)",
        "url": "https://cmegroup.com/trading/energy/crude-oil/light-sweet-crude_contractSpecs_futures.html"
      }
    ]
  },
  "us-ice-brent-unit": {
    "topic": "commodity",
    "market": "GL",
    "label": "브렌트 원유 선물 1계약의 크기 (ICE Futures Europe)",
    "value": "1,000배럴",
    "short": "1,000배럴로, 값은 배럴당 달러로 부른다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "EFP 방식 인도에 ICE Brent Index로 현금 결제할 수 있는 선택이 붙은 계약. 최소 변동 배럴당 0.01달러. 만기는 해당 월의 두 달 전 마지막 영업일. 실제 시장은 런던이다(market 표시는 임시로 US).",
    "sources": [
      {
        "name": "ICE Futures Europe, Brent Crude Futures Contract Specifications (2026-10-18 내려받음)",
        "url": "https://www.ice.com/api/productguide/spec/219/pdf"
      }
    ]
  },
  "us-comex-gold-unit": {
    "topic": "commodity",
    "market": "US",
    "label": "금 선물 1계약의 크기 (COMEX)",
    "value": "100트로이온스",
    "short": "100트로이온스로, 값은 온스당 달러로 부른다",
    "checked": "2026-10-18",
    "level": "press",
    "note": "최소 가격 변동 온스당 0.10달러. CME 공식 페이지 직접 열기 실패, 검색 결과의 CME 자료로 확인.",
    "sources": [
      {
        "name": "CME Group, Gold futures and options fact card",
        "url": "https://www.cmegroup.com/trading/metals/files/fact-card-gold-futures-options.pdf"
      }
    ]
  },
  "us-comex-silver-unit": {
    "topic": "commodity",
    "market": "US",
    "label": "은 선물 1계약의 크기 (COMEX)",
    "value": "5,000트로이온스",
    "short": "5,000트로이온스",
    "checked": "2026-10-18",
    "level": "press",
    "note": "최소 가격 변동 온스당 0.005달러(1계약 25달러). Barchart 계약 명세표(2026.3)로 확인, CME 원문은 열지 못했다.",
    "sources": [
      {
        "name": "Barchart, Metals contract specifications",
        "url": "https://www.barchart.com/futures/contract-specifications/metals"
      }
    ]
  },
  "us-cbot-grain-unit": {
    "topic": "commodity",
    "market": "US",
    "label": "옥수수·밀·대두 선물 1계약의 크기 (CBOT)",
    "value": "5,000부셸",
    "short": "5,000부셸",
    "checked": "2026-10-18",
    "level": "press",
    "note": "세 곡물 모두 부셸당 센트로 호가. 옥수수 최소 변동 1/4센트(1계약 12.50달러). CME 밀 상품 페이지 내용이 검색 결과로 확인됨.",
    "sources": [
      {
        "name": "CME Group, Wheat futures",
        "url": "https://cmegroup.com/markets/agriculture/grains/wheat.html"
      },
      {
        "name": "Virginia Tech, Feeder grain CME",
        "url": "https://aaec.vt.edu/extension/va-commodity-market/feedergraincme.html"
      }
    ]
  },
  "us-lme-lot-base": {
    "topic": "commodity",
    "market": "GL",
    "label": "LME 구리·알루미늄·아연의 거래 단위",
    "value": "25톤",
    "short": "25톤(2% 안팎 허용)",
    "checked": "2026-10-18",
    "level": "official",
    "note": "LME 규정집 Special Contract Rules의 SIZE OF LOT: Copper Grade A, High Grade Primary Aluminium, Special High Grade Zinc 각 25 tonnes (2% either more or less). 2023년 규정 개정 공지문으로 확인. 실제 시장은 런던(market 표시는 임시로 US).",
    "sources": [
      {
        "name": "LME, Notice 23/133 Special Contracts Rules (규정집 개정본 포함), 2023.7",
        "url": "https://www.lme.com/-/media/Files/News/Notices/2023/07/RULEBOOK-23-133-SPECIAL-CONTRACTS-RULES--ADDITION-OF-ZINC-JUMBOS-AND-OTHER-ADMINISTRATIVE-AMENDMENTS.pdf"
      }
    ]
  },
  "us-lme-lot-nickel": {
    "topic": "commodity",
    "market": "GL",
    "label": "LME 니켈의 거래 단위",
    "value": "6톤",
    "short": "6톤(2% 안팎 허용)",
    "checked": "2026-10-18",
    "level": "official",
    "note": "LME 규정집 Special Contract Rules for Primary Nickel, SIZE OF LOT 6 tonnes. 실제 시장은 런던(market 표시는 임시로 US).",
    "sources": [
      {
        "name": "LME, Notice 23/133 Special Contracts Rules, 2023.7",
        "url": "https://www.lme.com/-/media/Files/News/Notices/2023/07/RULEBOOK-23-133-SPECIAL-CONTRACTS-RULES--ADDITION-OF-ZINC-JUMBOS-AND-OTHER-ADMINISTRATIVE-AMENDMENTS.pdf"
      }
    ]
  },
  "us-lbma-gold-times": {
    "topic": "commodity",
    "market": "GL",
    "label": "LBMA 금 가격 경매 시각",
    "value": "런던 시각 10:30, 15:00",
    "short": "런던 시각 오전 10시 30분과 오후 3시, 하루 두 번",
    "effective": "2015-03-20",
    "checked": "2026-10-18",
    "level": "official",
    "note": "ICE Benchmark Administration(IBA)이 운영하는 전자 경매. 가격 발견은 미국 달러로 하고, 다른 통화 값은 참고·결제용. IBA 운영은 2015.3.20부터. 실제 시장은 런던(market 표시는 임시로 US).",
    "sources": [
      {
        "name": "LBMA, LBMA Gold Price",
        "url": "https://www.lbma.org.uk/prices-and-data/lbma-gold-price/lbma-gold-price"
      }
    ]
  },
  "us-lbma-gold-tolerance": {
    "topic": "commodity",
    "market": "GL",
    "label": "LBMA 금 가격 경매가 끝나는 매수·매도 차이 범위",
    "value": "10,000온스",
    "short": "사려는 양과 팔려는 양의 차이 10,000온스 이내",
    "checked": "2026-10-18",
    "level": "official",
    "note": "차이가 범위 안에 들면 경매를 끝내고, 남은 차이는 직접 참가자들이 똑같이 나눠 진다.",
    "sources": [
      {
        "name": "LBMA, LBMA Gold Price",
        "url": "https://www.lbma.org.uk/prices-and-data/lbma-gold-price/lbma-gold-price"
      }
    ]
  },
  "kr-goldmkt-product": {
    "topic": "commodity",
    "market": "KR",
    "label": "KRX 금시장 거래 대상",
    "value": "순도 99.99% 금지금 1kg·100g",
    "short": "순도 99.99퍼센트의 금괴(1kg와 100g 두 종목)",
    "effective": "2014-03-24",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2014.3.24 개설. 100g 종목은 뒤에 추가됐다. 증권회사 안내 페이지로 확인, 한국거래소 원문은 열지 못했다.",
    "sources": [
      {
        "name": "유안타증권(myasset), 금현물 거래 안내",
        "url": "https://www.myasset.com/myasset/static/trading/TR_1401000_P1.jsp"
      }
    ]
  },
  "kr-goldmkt-unit": {
    "topic": "commodity",
    "market": "KR",
    "label": "KRX 금시장 매매·호가 수량 단위",
    "value": "1g",
    "short": "1그램",
    "checked": "2026-10-18",
    "level": "press",
    "note": "호가 가격 단위 10원, 가격제한폭 기준가격의 ±10%, 1회 주문 한도 5,000g, 지정가 주문만, 당일 결제.",
    "sources": [
      {
        "name": "유안타증권(myasset), 금현물 거래 안내",
        "url": "https://www.myasset.com/myasset/static/trading/TR_1401000_P1.jsp"
      }
    ]
  },
  "kr-goldmkt-hours": {
    "topic": "commodity",
    "market": "KR",
    "label": "KRX 금시장 매매 시간",
    "value": "09:00~15:30",
    "short": "오전 9시부터 오후 3시 30분(시작 전 8시 30분부터 단일가 주문 접수, 마감 10분은 단일가)",
    "checked": "2026-10-18",
    "level": "press",
    "note": "08:30~09:00 시가 단일가, 09:00~15:20 접속매매, 15:20~15:30 종가 단일가. 2014년 개장 때는 10:00~15:00이었다.",
    "sources": [
      {
        "name": "유안타증권(myasset), 금현물 거래 안내",
        "url": "https://www.myasset.com/myasset/static/trading/TR_1401000_P1.jsp"
      }
    ]
  },
  "kr-gold-bar-vat": {
    "topic": "tax",
    "market": "KR",
    "label": "금 실물(골드바) 장외 구입 시 부가가치세",
    "value": "10%",
    "short": "구입 가격의 10% 부가가치세",
    "checked": "2026-10-18",
    "level": "press",
    "note": "금지금 공급은 부가가치세 과세 대상이다. 개인은 살 때 낸 부가가치세를 되팔 때 돌려받지 못한다. 판매처의 가공비·마진(5% 안팎으로 보도)이 별도로 붙는다. 한국거래소 금시장 안의 매매만 조세특례제한법 제126조의7에 따라 면제된다.",
    "sources": [
      {
        "name": "매일경제, 2026.1.26 (다음 뉴스 게재)",
        "url": "https://v.daum.net/v/20260126060003073"
      },
      {
        "name": "KB국민은행 KB Think, 금 통장 장단점, 2026.4.20",
        "url": "https://kbthink.com/investment/101/gold-banking.html"
      },
      {
        "name": "한국거래소 KRX금시장 안내 리플렛, 2023.12",
        "url": "https://regulation.krx.co.kr/contents/RGL/04/04010108/KRX_GOLD_Leaflet_20231226.pdf"
      }
    ]
  },
  "kr-goldmkt-limit": {
    "topic": "commodity",
    "market": "KR",
    "label": "KRX 금시장 가격제한폭",
    "value": "기준가격(전날 종가) ±10%",
    "short": "전날 종가에서 위아래 10%",
    "checked": "2026-10-18",
    "level": "press",
    "note": "전날 종가가 없으면 최근 매매거래일 종가가 기준가격이다.",
    "sources": [
      {
        "name": "유안타증권 금현물시장매매거래설명서, 2026.10.12",
        "url": "https://www.myasset.com/myasset/static/agreement/c_20_rule.pdf"
      }
    ]
  },
  "kr-goldmkt-settle": {
    "topic": "commodity",
    "market": "KR",
    "label": "KRX 금시장 결제일",
    "value": "당일결제(T+0)",
    "short": "체결된 당일에 이루어진다",
    "checked": "2026-10-18",
    "level": "press",
    "note": "매수 대금은 현금으로 전액 미리 맡겨야 한다(현금위탁증거금률 100%). 결제 뒤 매수자는 한국예탁결제원에 혼합보관된 금지금의 지분을 갖는다.",
    "sources": [
      {
        "name": "유안타증권 금현물시장매매거래설명서, 2026.10.12",
        "url": "https://www.myasset.com/myasset/static/agreement/c_20_rule.pdf"
      }
    ]
  },
  "kr-goldmkt-tax": {
    "topic": "tax",
    "market": "KR",
    "label": "KRX 금시장 개인 매매차익 과세",
    "value": "양도소득세·배당소득세 비과세 (금융소득종합과세 제외)",
    "short": "양도소득세와 배당소득세가 없고 금융소득종합과세에도 들어가지 않는다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "장내 거래에서 생긴 개인투자자의 매매차익에 해당한다. 사업자는 거래차익에 법인세(소득세)가 붙는다.",
    "sources": [
      {
        "name": "한국거래소 KRX금시장 안내 리플렛, 2023.12",
        "url": "https://regulation.krx.co.kr/contents/RGL/04/04010108/KRX_GOLD_Leaflet_20231226.pdf"
      }
    ]
  },
  "kr-goldmkt-vat": {
    "topic": "tax",
    "market": "KR",
    "label": "KRX 금시장 부가가치세",
    "value": "장내 매매 면제 · 실물 인출 시 공급가액(평균 매수 단가 × 인출 수량)의 10%",
    "short": "장내 매매는 부가가치세 면제",
    "checked": "2026-10-18",
    "level": "official",
    "note": "조세특례제한법 제126조의7 제1항 제2호(장내 면제)와 제4항(인출 시 납부)에 근거한다고 금융회사 설명서가 적고 있다. 증권회사 위탁수수료와 인출 수수료에는 별도로 부가가치세 10%가 붙는다. 법령 원문은 직접 열어 보지 못했다.",
    "sources": [
      {
        "name": "한국거래소 KRX금시장 안내 리플렛, 2023.12",
        "url": "https://regulation.krx.co.kr/contents/RGL/04/04010108/KRX_GOLD_Leaflet_20231226.pdf"
      },
      {
        "name": "유안타증권 금현물시장매매거래설명서, 2026.10.12",
        "url": "https://www.myasset.com/myasset/static/agreement/c_20_rule.pdf"
      }
    ]
  },
  "kr-goldmkt-withdraw": {
    "topic": "commodity",
    "market": "KR",
    "label": "KRX 금시장 실물 인출",
    "value": "1kg·100g 골드바 단위, 부가가치세 10% + 인출 수수료(개당 2만 원 안팎)",
    "short": "1kg나 100g 골드바 한 개 단위로 꺼내며, 부가가치세 10%와 개당 2만 원 안팎의 인출 수수료가 든다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "17시까지 신청하면 다음 영업일에 받을 수 있다. 한 번 인출한 골드바는 다시 입고해 장내에서 팔 수 없다. 수수료는 증권회사마다 다르다(예: 1만 원 + 인수도단위당 2만 원).",
    "sources": [
      {
        "name": "한국거래소 KRX금시장 안내 리플렛, 2023.12",
        "url": "https://regulation.krx.co.kr/contents/RGL/04/04010108/KRX_GOLD_Leaflet_20231226.pdf"
      },
      {
        "name": "유안타증권 금현물시장매매거래설명서, 2026.10.12",
        "url": "https://www.myasset.com/myasset/static/agreement/c_20_rule.pdf"
      }
    ]
  },
  "kr-goldmkt-fee": {
    "topic": "commodity",
    "market": "KR",
    "label": "KRX 금시장 매매 수수료 (증권회사)",
    "value": "증권회사마다 다름, 온라인 0.2~0.3% 안팎 (부가가치세 별도)",
    "short": "증권회사마다 다르지만 온라인 0.2~0.3% 안팎",
    "checked": "2026-10-18",
    "level": "press",
    "note": "한국거래소 안내는 '0.3% 내외', 한 증권회사 설명서(2026.10)는 온라인 0.2%·모바일 0.3%·영업점 0.5%(부가세 별도)로 적는다. 일부 증권회사는 보관수수료를 받는다.",
    "sources": [
      {
        "name": "한국거래소 KRX금시장 안내 리플렛, 2023.12",
        "url": "https://regulation.krx.co.kr/contents/RGL/04/04010108/KRX_GOLD_Leaflet_20231226.pdf"
      },
      {
        "name": "유안타증권 금현물시장매매거래설명서, 2026.10.12",
        "url": "https://www.myasset.com/myasset/static/agreement/c_20_rule.pdf"
      }
    ]
  },
  "kr-goldbank-tax": {
    "topic": "tax",
    "market": "KR",
    "label": "골드뱅킹(금 통장) 매매차익 과세",
    "value": "배당소득으로 15.4% 원천징수",
    "short": "배당소득으로 보아 출금·해지할 때 15.4%를 원천징수한다",
    "checked": "2026-10-18",
    "level": "press",
    "note": "배당소득세 14%와 지방소득세 1.4%이다. 금융소득종합과세 합산 대상이다. 2010년 과세 방침과 이후 소송을 거쳐 소득세법 개정으로 배당소득 과세가 명확해졌다(2018년부터라는 보도).",
    "sources": [
      {
        "name": "KB국민은행 KB Think, 금 통장 장단점, 2026.4.20",
        "url": "https://kbthink.com/investment/101/gold-banking.html"
      },
      {
        "name": "한국거래소 KRX금시장 안내 리플렛, 2023.12",
        "url": "https://regulation.krx.co.kr/contents/RGL/04/04010108/KRX_GOLD_Leaflet_20231226.pdf"
      },
      {
        "name": "한국경제, 2017.12.15",
        "url": "https://www.hankyung.com/amp/2017121576431"
      }
    ]
  },
  "kr-goldbank-protect": {
    "topic": "protect",
    "market": "KR",
    "label": "골드뱅킹(금 통장) 예금자보호",
    "value": "보호되지 않음",
    "short": "예금자보호법에 따라 보호되지 않는다",
    "checked": "2026-10-18",
    "level": "press",
    "note": "은행 상품이지만 금 시세에 연동된 투자 상품이다. KRX 금현물 거래도 예금자보호 대상이 아니다.",
    "sources": [
      {
        "name": "KB국민은행 KB Think, 금 통장 장단점, 2026.4.20",
        "url": "https://kbthink.com/investment/101/gold-banking.html"
      },
      {
        "name": "유안타증권 금현물시장매매거래설명서, 2026.10.12",
        "url": "https://www.myasset.com/myasset/static/agreement/c_20_rule.pdf"
      }
    ]
  },
  "kr-goldbank-cost": {
    "topic": "commodity",
    "market": "KR",
    "label": "골드뱅킹 거래 비용",
    "value": "사고팔 때 각 1% 안팎 · 실물 인출 시 4~5% 수수료 + 부가가치세 10%",
    "short": "사고팔 때 각각 시세의 1% 안팎이고, 실물로 받으면 4~5% 수수료와 부가가치세 10%가 붙는다",
    "checked": "2026-10-18",
    "level": "press",
    "note": "은행마다 다르다. 거래 단위는 0.01g이다. 실물 인출에는 약 1주일이 걸린다는 안내가 있다.",
    "sources": [
      {
        "name": "한국거래소 KRX금시장 안내 리플렛, 2023.12",
        "url": "https://regulation.krx.co.kr/contents/RGL/04/04010108/KRX_GOLD_Leaflet_20231226.pdf"
      },
      {
        "name": "KB국민은행 KB Think, 금 통장 장단점, 2026.4.20",
        "url": "https://kbthink.com/investment/101/gold-banking.html"
      }
    ]
  },
  "kr-tax-etn-gain": {
    "topic": "tax",
    "market": "KR",
    "label": "국내주식형 외 ETN 매매차익 과세",
    "value": "보유기간과세로 배당소득세 15.4%",
    "short": "국내주식형이 아니면 매매차익을 보유 기간 기준으로 계산해 배당소득세를 뗀다",
    "checked": "2026-10-18",
    "level": "press",
    "note": "분배금과 중도상환·만기 상환금도 배당소득이다. 매매차익은 합산하되 매매차손은 빼지 않는다. 금융소득종합과세 합산 대상이 될 수 있다. ETN은 발행 증권회사의 신용위험을 진다.",
    "sources": [
      {
        "name": "키움증권 ETN 투자 유의사항 안내",
        "url": "https://download.kiwoom.com/web/ETN_NOTE.pdf"
      }
    ]
  },
  "us-ptp-withholding": {
    "topic": "tax",
    "market": "US",
    "label": "미국 PTP(상장 조합) 지분 매도 시 원천징수 (외국인)",
    "value": "매도 금액의 10%",
    "short": "이익과 상관없이 매도 금액의 10%를 원천징수한다",
    "effective": "2023-01-01",
    "checked": "2026-10-18",
    "level": "press",
    "note": "미국 세법 1446(f) 규정이다. 규정 조문의 적용일은 2022-01-01이지만 브로커 원천징수는 IRS 고시로 2023-01-01부터 시작되었다. 일부 원자재 선물 상품이 PTP 형태이다. 해당 여부는 상품 설명서로 확인한다.",
    "sources": [
      {
        "name": "26 CFR 1.1446(f)-4 (Cornell LII)",
        "url": "https://www.law.cornell.edu/cfr/text/26/1.1446(f)-4"
      },
      {
        "name": "SIX Group, IRS Section 1446(f), 2022",
        "url": "https://www.six-group.com/de/newsroom/news/financial-information/2022/irs-section-1446f-how-to-tackle-the-challenges.html"
      }
    ]
  },
  "us-fut-cl-last-trade": {
    "topic": "commodity",
    "market": "US",
    "label": "미국 WTI 원유 선물 최종거래일",
    "value": "인도 월 전달 25일의 3영업일 전 (25일이 영업일이 아니면 4영업일 전)",
    "short": "인도 월 전달 25일의 3영업일 전(25일이 휴일이면 4영업일 전)에",
    "checked": "2026-10-18",
    "level": "press",
    "note": "예를 들어 2020년 5월물은 4월 21일에 거래가 끝났다. CME 상품 명세 페이지가 자동 접속을 막아 검색 결과로 확인했으며 규정 원문(NYMEX Rulebook 200장) 대조가 남았다.",
    "sources": [
      {
        "name": "CME Group, Light Sweet Crude Oil 상품 명세",
        "url": "https://cmegroup.com/trading/energy/crude-oil/light-sweet-crude_contractSpecs_futures.html"
      },
      {
        "name": "CFTC 중간 보고서 보도자료, 2020.11.23",
        "url": "https://www.cftc.gov/node/234886"
      }
    ]
  },
  "us-idx-gsci-roll": {
    "topic": "commodity",
    "market": "US",
    "label": "S&P GSCI 원자재 지수의 정기 롤 기간",
    "value": "매달 5~9번째 영업일, 하루 20%씩",
    "short": "매달 5번째부터 9번째 영업일까지 하루 20%씩 나누어",
    "checked": "2026-10-18",
    "level": "press",
    "note": "계약 수량 기준으로 첫 근월물에서 다음 월물로 옮긴다. 모든 품목이 매달 옮기는 것은 아니다(일부 품목은 정해진 달에만). 2020년 4월에는 6월물을 7월물로 즉시 옮기는 비정기 롤을 했다. S&P 방법론 원문은 자동 접속이 막혀 요약 자료로 확인했다.",
    "sources": [
      {
        "name": "Goldman Sachs, S&P GSCI Roll Period 설명",
        "url": "https://www.goldmansachs.com/what-we-do/FICC-and-equities/business-groups/sts-folder/gsci/roll-period.html"
      },
      {
        "name": "대신증권 ETN 자료(S&P GSCI 방법론 요약), 2022.6",
        "url": "https://etn.daishin.com/e5_data/mboard/etn_product/2022/06/34_00_methodology-sp-gsci-quick-guide.pdf"
      },
      {
        "name": "Bloomberg, 2020.4.28",
        "url": "https://www.bloomberg.com/news/articles/2020-04-28/biggest-commodity-index-moves-all-wti-exposure-away-from-june"
      }
    ]
  },
  "comex-lot-copper": {
    "topic": "metals",
    "market": "US",
    "label": "COMEX 구리 한 계약 크기와 호가 단위",
    "value": "25,000파운드, 파운드당 센트",
    "short": "한 계약 25,000파운드에 파운드당 센트로 값을 부르고",
    "checked": "2026-10-18",
    "level": "official",
    "note": "25,000파운드는 약 11.34톤이다. CME그룹 소속 거래소이다.",
    "sources": [
      {
        "name": "ICSG, The World Copper Factbook 2026",
        "url": "https://icsg.org/copper-factbook/"
      }
    ]
  },
  "shfe-lot-copper": {
    "topic": "metals",
    "market": "GL",
    "label": "상하이선물거래소(SHFE) 구리 한 계약 크기",
    "value": "5톤, 톤당 위안",
    "short": "한 계약 5톤에 위안화로 톤당 값을 부른다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "ICSG 공식 자료로 확인. SHFE 원문은 열지 않았다.",
    "sources": [
      {
        "name": "ICSG, The World Copper Factbook 2026",
        "url": "https://icsg.org/copper-factbook/"
      }
    ]
  },
  "lme-limit-base": {
    "topic": "metals",
    "market": "GL",
    "label": "LME 하루 가격 제한 (구리·알루미늄·아연, 3개월물)",
    "value": "12%",
    "short": "전날 3개월물 종가에서 위아래 12%",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2022년 니켈 사태 뒤 도입. 전날 밤 3개월물 종가를 기준으로 모든 만기에 적용한다. 2022년 보도에는 다른 금속이 15%였다고 되어 있어 이후 바뀐 것으로 보이며 변경 날짜는 확인하지 못했다. LME 페이지는 접속 차단으로 검색 요약만 확인.",
    "sources": [
      {
        "name": "LME, Volatility controls: price limits and price bands",
        "url": "https://www.lme.com/en/trading/volatility-controls-price-limits-and-price-bands"
      }
    ]
  },
  "lme-limit-nickel": {
    "topic": "metals",
    "market": "GL",
    "label": "LME 하루 가격 제한 (니켈, 3개월물)",
    "value": "15%",
    "short": "전날 3개월물 종가에서 위아래 15%",
    "effective": "2022-03-21",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2022년 3월 16일 재개 때 5%로 시작해 8%, 12%를 거쳐 3월 21일 15%가 되었다(LME 공지 22/080, '추후 공지까지').",
    "sources": [
      {
        "name": "LME 공지 TRADING 22/080 (ISDA 게시본)",
        "url": "https://www.isda.org/a/diPgE/TRADING-22-080-DAILY-PRICE-LIMITS-UPDATE-NICKEL.pdf"
      },
      {
        "name": "LME, Volatility controls: price limits and price bands",
        "url": "https://www.lme.com/en/trading/volatility-controls-price-limits-and-price-bands"
      }
    ]
  },
  "cn-al-cap": {
    "topic": "metals",
    "market": "GL",
    "label": "중국 알루미늄 제련 능력 상한",
    "value": "연 4,500만 톤",
    "short": "연 4,500만 톤",
    "effective": "2017-01-01",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2017년 도입. 새 제련소를 지으려면 같은 능력의 기존 설비를 닫아야 한다. 효율 개선으로 2026년 실제 생산은 연율 약 4,670만 톤으로 상한을 넘었다는 보도가 있다. 2017년 안의 정확한 시행일은 확인하지 못해 1월 1일로 적었다.",
    "sources": [
      {
        "name": "Mining Weekly(Reuters), 2026.9.9",
        "url": "https://www.miningweekly.com/article/capped-at-home-china-extends-its-aluminium-dominance-abroad-reuters-says-2026-09-09"
      },
      {
        "name": "Engineering News(Reuters), 2026.9.15",
        "url": "https://www.engineeringnews.co.za/article/china-aluminium-output-hits-record-high-in-august-with-capacity-cap-in-sight-2026-09-15"
      }
    ]
  },
  "id-ni-ore-ban": {
    "topic": "metals",
    "market": "GL",
    "label": "인도네시아 니켈 광석 수출 금지",
    "value": "2020년 1월 1일 시행",
    "short": "2020년 1월부터",
    "effective": "2020-01-01",
    "checked": "2026-10-18",
    "level": "press",
    "note": "원래 2022년 예정이던 금지를 2019년 9월 발표로 2년 앞당겼다. 나라 안 제련·가공 투자를 끌어들이려는 정책이다. 대상 광석 품위 범위는 보도마다 다르다.",
    "sources": [
      {
        "name": "Al Jazeera, 2019.9.2",
        "url": "https://www.aljazeera.com/economy/2019/9/2/worlds-biggest-nickel-ore-maker-bans-exports-from-january-2020"
      },
      {
        "name": "Argus, 2019",
        "url": "https://www.argusmedia.com/en/news/1969668-indonesia-to-stop-nickel-ore-exports-in-2020"
      }
    ]
  },
  "us-cbot-grain-tick": {
    "topic": "commodity",
    "checked": "2026-10-18",
    "market": "US",
    "label": "CBOT 밀·옥수수·대두 선물 최소 가격 단위",
    "value": "부셸당 1/4센트(한 계약 12.50달러)",
    "short": "부셸당 1/4센트, 한 계약에 12.50달러",
    "level": "press",
    "note": "가격은 부셸당 센트로 부르므로 1센트 움직이면 한 계약에 50달러가 오간다.",
    "sources": [
      {
        "name": "CME Group CBOT Rulebook Chapter 10 (Corn Futures)",
        "url": "https://www.cmegroup.com/content/dam/cmegroup/rulebook/CBOT/I/10.pdf"
      },
      {
        "name": "CME Group 옥수수 선물 계약 명세",
        "url": "https://cmegroup.com/content/cmegroup/en//trading/agricultural/grain-and-oilseed/corn_contract_specifications.html"
      }
    ]
  },
  "us-cbot-grain-limit": {
    "topic": "commodity",
    "checked": "2026-10-18",
    "market": "US",
    "label": "CBOT 곡물 선물 하루 가격제한폭 재설정",
    "value": "매년 5월·11월 재설정, 기준 가격의 약 7%(최저 한도 있음)",
    "short": "해마다 5월과 11월에 최근 가격의 약 7%로 다시 정한다",
    "effective": "2026-05-01",
    "level": "press",
    "note": "7%로 계산한 값과 품목별 최저 한도 가운데 큰 쪽을 쓴다. 제한폭까지 움직인 다음 거래일에는 한도를 넓힌다. 2026년 5월 1일 거래일부터 적용된 한도는 11월 첫 거래일까지 쓴다. 구체적인 센트 값은 CME 공지 원문으로 확인하지 못했다.",
    "sources": [
      {
        "name": "CME Group SER-9730, 2026.4.24",
        "url": "https://www.cmegroup.com/content/dam/cmegroup/notices/ser/2026/04/ser-9730.pdf"
      },
      {
        "name": "Manitoba Co-operator (CME 가변 가격제한폭 도입 보도)",
        "url": "https://www.manitobacooperator.ca/?p=120856"
      }
    ]
  },
  "grain-bushel-weight": {
    "topic": "commodity",
    "checked": "2026-10-18",
    "market": "US",
    "label": "곡물 1부셸의 표준 무게와 톤 환산",
    "value": "옥수수 56파운드(1톤 = 39.368부셸), 밀·대두 60파운드(1톤 = 36.744부셸)",
    "short": "옥수수는 56파운드, 밀과 대두는 60파운드",
    "level": "press",
    "note": "1톤 = 2,204.62파운드. 미국 농업통계청 웹사이트에 실린 캔자스 밀 위원회 환산표 기준이다.",
    "sources": [
      {
        "name": "Kansas Wheat Quality 보고서 환산표 (USDA NASS 게재)",
        "url": "https://nass.usda.gov/statistics_by_state/Kansas/Publications/Cooperative_Projects/Wheat_Quality/wq02pdf.pdf"
      }
    ]
  },
  "soy-crush-yield": {
    "topic": "commodity",
    "checked": "2026-10-18",
    "market": "US",
    "label": "대두 1부셸 압착 수율 (선물 압착 마진 계산 기준)",
    "value": "대두박 44파운드(0.022숏톤), 대두유 11파운드",
    "short": "대두박 44파운드와 대두유 11파운드",
    "level": "press",
    "note": "CME가 압착 마진(board crush) 계산에 쓰는 표준값이다. 실제 수율은 대두 품질과 공장에 따라 다르며, 나머지는 껍질과 손실이다.",
    "sources": [
      {
        "name": "CME Group, The Soybean Crush",
        "url": "https://cmegroup.com/trading/agricultural/grain-and-oilseed/soybean-crush-spreads.html"
      }
    ]
  },
  "us-grain-marketing-year": {
    "topic": "commodity",
    "checked": "2026-10-18",
    "market": "US",
    "label": "미국 곡물 판매연도",
    "value": "옥수수·대두 9월~이듬해 8월, 밀 6월~이듬해 5월",
    "short": "옥수수와 대두는 9월부터 이듬해 8월까지, 밀은 6월부터 이듬해 5월까지이다",
    "level": "official",
    "note": "미국 농무부 수급표의 기준 기간이다. 세계 교역 통계는 곡물별 국제 교역연도(밀 7월~6월 등)를 따로 쓴다.",
    "sources": [
      {
        "name": "USDA ERS Wheat Outlook WHS-26i, 2026.9.15",
        "url": "https://ers.usda.gov/media/29631/whs-26i.pdf"
      },
      {
        "name": "USDA ERS Feed Outlook FDS-26j, 2026.10.14",
        "url": "https://www.ers.usda.gov/media/29746/fds-26j.pdf"
      }
    ]
  },
  "us-wasde-schedule": {
    "topic": "commodity",
    "checked": "2026-10-18",
    "market": "US",
    "label": "WASDE(세계 농산물 수급 전망) 발표 일정",
    "value": "매달 8~12일 무렵, 미국 동부 시간 정오",
    "short": "매달 한 번, 8~12일 무렵 정오(미국 동부 시간)",
    "level": "press",
    "note": "미국 농무부 세계농업전망위원회(WAOB)가 낸다. 미국 농무부 WASDE 페이지는 접속이 막혀 검색 결과의 일정표와 CME 해설로 확인했다.",
    "sources": [
      {
        "name": "USDA WASDE 페이지",
        "url": "https://www.usda.gov/oce/commodity/wasde"
      },
      {
        "name": "CME Group, Understanding Major USDA Reports in 2026",
        "url": "https://www.cmegroup.com/articles/2026/understanding-major-usda-reports-in-2026.html"
      }
    ]
  },
  "us-crop-progress": {
    "topic": "commodity",
    "checked": "2026-10-18",
    "market": "US",
    "label": "작황 보고서(Crop Progress) 발표",
    "value": "생육기(4월 초~11월 말) 매주 첫 영업일 동부시간 16:00 이후",
    "short": "4월 초부터 11월 말까지 매주 첫 영업일(보통 월요일) 미국 동부시간 오후 4시 이후에 발표한다",
    "level": "official",
    "note": "작물 상태는 매우 나쁨·나쁨·보통·좋음·아주 좋음 다섯 단계 비율로 적는다. 12~3월에는 주간 보고서 대신 월간 자료가 나온다.",
    "sources": [
      {
        "name": "USDA NASS Crop Progress, 2026.10.5",
        "url": "https://esmis.nal.usda.gov/sites/default/release-files/796095/prog4026.txt"
      }
    ]
  },
  "india-wheat-ban-2022": {
    "topic": "commodity",
    "checked": "2026-10-18",
    "market": "WORLD",
    "label": "인도 밀 수출 금지 (2022)",
    "value": "2022-05-13 고시, 즉시 시행",
    "short": "인도가 폭염으로 작황이 나빠지자 밀 수출을 금지했다",
    "effective": "2022-05-13",
    "level": "press",
    "note": "식량 안보와 물가를 이유로 들었다. 그 이전에 발행된 신용장 물량 등은 예외로 했다.",
    "sources": [
      {
        "name": "farmdoc Farm Policy News, 2022.5",
        "url": "https://farmpolicynews.illinois.edu/2022/05/india-bans-wheat-exports/"
      }
    ]
  },
  "black-sea-grain-initiative": {
    "topic": "commodity",
    "checked": "2026-10-18",
    "market": "WORLD",
    "label": "흑해곡물협정 기간",
    "value": "2022-07-22 서명 ~ 2023-07-17 만료(러시아 연장 거부)",
    "short": "2022년 7월 22일부터 러시아가 빠진 2023년 7월 17일까지",
    "effective": "2022-07-22",
    "level": "press",
    "note": "러시아, 튀르키예, 우크라이나, 유엔이 이스탄불에서 서명했다. 우크라이나 세 항구에서 약 3,300만 톤의 곡물·식품이 나갔다.",
    "sources": [
      {
        "name": "UN, Black Sea Grain Initiative",
        "url": "https://www.un.org/en/black-sea-grain-initiative"
      },
      {
        "name": "Michigan Farm Bureau, 2023.7.18",
        "url": "https://www.michfb.com/about/news-media/lifeline-cut-russia-pulls-out-black-sea-grain-deal"
      }
    ]
  },
  "brent-basket": {
    "topic": "energy",
    "checked": "2026-10-18",
    "market": "GL",
    "label": "브렌트 기준 가격에 들어가는 원유",
    "value": "Brent, Forties, Oseberg, Ekofisk, Troll + WTI Midland(2023.6 인도분부터)",
    "short": "브렌트, 포티스, 오세베르그, 에코피스크, 트롤에 2023년 6월 인도분부터 미국의 WTI 미들랜드까지 들어 있다",
    "effective": "2023-06-01",
    "level": "press",
    "note": "S&P Global Platts의 Dated Brent 평가 기준. 북해 생산 감소로 바구니를 넓혔다. 북해 밖 원유가 들어간 것은 처음이다.",
    "sources": [
      {
        "name": "S&P Global Commodity Insights, 2022.6.8",
        "url": "https://www.spglobal.com/energy/en/news-research/latest-news/crude-oil/060822-platts-to-include-wti-midland-in-dated-brent-related-assessments-from-june-2023"
      },
      {
        "name": "Kitco/Reuters 해설, 2023.4.25",
        "url": "https://www.kitco.com/news/off-the-wire/2023-04-25/explainer-will-wti-midlandaposs-inclusion-dated-brent-affect-oil"
      }
    ]
  },
  "us-eia-wpsr": {
    "topic": "energy",
    "checked": "2026-10-18",
    "market": "US",
    "label": "EIA 주간 석유 현황 보고서 발표 시각",
    "value": "매주 수요일 10:30 (미국 동부시간)",
    "short": "매주 수요일 오전 10시 30분, 미국 동부시간 기준이다. 한국 시각으로는 미국 서머타임 기간에 수요일 밤 11시 30분, 그 밖에는 목요일 0시 30분이다",
    "level": "official",
    "note": "직전 금요일에 끝난 주의 자료. 월요일이 연방 공휴일인 주 등에는 대개 목요일 정오(동부시간)로 미뤄진다(예: 2026.10.15, 11.12).",
    "sources": [
      {
        "name": "미국 에너지정보청(EIA) 발표 일정",
        "url": "https://www.eia.gov/petroleum/supply/weekly/schedule.php"
      }
    ]
  },
  "us-api-wsb": {
    "topic": "energy",
    "checked": "2026-10-18",
    "market": "US",
    "label": "미국석유협회(API) 주간 통계 발표 시각",
    "value": "매주 화요일 16:30 무렵 (미국 동부시간)",
    "short": "매주 화요일 오후 4시 30분 무렵(미국 동부시간)",
    "level": "press",
    "note": "유료 구독 자료. 월요일이 연방 공휴일이면 수요일 오후로 미뤄진다.",
    "sources": [
      {
        "name": "API Weekly Statistical Bulletin 안내(검색 결과 요약)",
        "url": "https://www.api.org/energy-insights/statistics/wsb"
      }
    ]
  },
  "us-eia-ngs": {
    "topic": "energy",
    "checked": "2026-10-18",
    "market": "US",
    "label": "EIA 주간 천연가스 저장 보고서 발표 시각",
    "value": "매주 목요일 10:30 (미국 동부시간)",
    "short": "매주 목요일 오전 10시 30분(미국 동부시간)",
    "level": "official",
    "note": "공휴일이 낀 주에는 요일이나 시각이 바뀐다. 한국 시각으로는 서머타임 기간 목요일 밤 11시 30분, 그 밖에는 금요일 0시 30분.",
    "sources": [
      {
        "name": "미국 에너지정보청(EIA) 천연가스 저장 보고서 일정",
        "url": "https://ir.eia.gov/ngs/schedule.html"
      }
    ]
  },
  "kr-fuel-tax-structure": {
    "topic": "energy",
    "checked": "2026-10-18",
    "market": "KR",
    "label": "유류세의 구성 (휘발유·경유)",
    "value": "교통·에너지·환경세 + 교육세(교통세의 15%) + 주행세(교통세의 26%) + 부가가치세 10%",
    "short": "교통·에너지·환경세, 그 15%인 교육세, 그 26%인 주행세, 그리고 부가가치세 10%",
    "level": "press",
    "note": "교통·에너지·환경세는 법정세율의 30% 범위에서 시행령(탄력세율)으로 조정한다. 휘발유 탄력세율 리터당 529원 기준 세 세금 합계 745.9원(=529×1.41)에 부가세 10%를 더하면 약 820원으로, 인하 전 금액 보도와 맞는다. 주행세 비율은 법령 원문으로 대조하지 못했다.",
    "sources": [
      {
        "name": "택스워치, 2023.6.22",
        "url": "https://www.taxwatch.co.kr/article/tax/2023/06/22/0001"
      }
    ]
  },
  "kr-fuel-tax-amount": {
    "topic": "energy",
    "checked": "2026-10-18",
    "market": "KR",
    "label": "한시 인하 전 기준 리터당 유류세",
    "value": "휘발유 약 820원, 경유 약 581원 (부가세 포함, 한시 인하 적용 전)",
    "short": "부가가치세를 포함해 리터당 휘발유 약 820원, 경유 약 581원",
    "level": "press",
    "note": "재정경제부가 한시 인하를 발표하면 실제 세액은 이보다 낮아진다. 인하율과 기간은 자주 바뀌므로 재정경제부 발표로 확인한다. 금액은 2026.9.18 보도의 인하 후 세액(휘발유 698원, 경유 436원)과 인하액(122원, 145원)을 더해 계산했고, 휘발유는 탄력세율 529원 × 1.41 × 1.1 ≈ 820원과도 맞는다.",
    "sources": [
      {
        "name": "SBS Biz, 2026.9.18",
        "url": "https://biz.sbs.co.kr/amp/article/20000335452"
      },
      {
        "name": "택스워치, 2023.6.22",
        "url": "https://www.taxwatch.co.kr/article/tax/2023/06/22/0001"
      }
    ]
  },
  "kr-re1-view-fee": {
    "topic": "registry",
    "market": "KR",
    "label": "등기기록 인터넷 열람 수수료 (인터넷등기소)",
    "value": "1건 700원",
    "short": "1건에 700원",
    "checked": "2026-10-17",
    "level": "press",
    "note": "등기사항증명서 등 수수료규칙 제3조 제2항. 방문 열람은 1건 1,200원. 대법원 법원행정처가 2026년 9월 28일 인터넷 열람 수수료를 1,100원으로 올리는 개정안을 입법예고했으며(2026년 10월 14일 보도 기준 확정 전), 시행되면 바꾼다.",
    "sources": [
      {
        "name": "등기사항증명서 등 수수료규칙 제3조 (korea.legal 법령 전재)",
        "url": "https://korea.legal/wiki/%eb%93%b1%ea%b8%b0%ec%82%ac%ed%95%ad%ec%a6%9d%eb%aa%85%ec%84%9c-%eb%93%b1-%ec%88%98%ec%88%98%eb%a3%8c%ea%b7%9c%ec%b9%99-%ec%a0%9c3%ec%a1%b0/"
      },
      {
        "name": "SBS Biz, 2026-10-14",
        "url": "https://biz.sbs.co.kr/amp/article/20000339862"
      }
    ]
  },
  "kr-re1-issue-fee": {
    "topic": "registry",
    "market": "KR",
    "label": "등기사항증명서 인터넷·무인발급기 발급 수수료",
    "value": "1통 1,000원",
    "short": "1통에 1,000원",
    "checked": "2026-10-17",
    "level": "press",
    "note": "등기사항증명서 등 수수료규칙 제2조 제2항. 창구 발급은 20장까지 1,200원. 2026년 9월 28일 입법예고된 개정안은 1,400원으로 올리는 내용이며 확정 전이다.",
    "sources": [
      {
        "name": "등기사항증명서 등 수수료규칙 (korea.legal 법령 전재)",
        "url": "https://korea.legal/wiki/%eb%93%b1%ea%b8%b0%ec%82%ac%ed%95%ad%ec%a6%9d%eb%aa%85%ec%84%9c-%eb%93%b1-%ec%88%98%ec%88%98%eb%a3%8c%ea%b7%9c%ec%b9%99-%ec%a0%9c3%ec%a1%b0/"
      },
      {
        "name": "SBS Biz, 2026-10-14",
        "url": "https://biz.sbs.co.kr/amp/article/20000339862"
      }
    ]
  },
  "kr-re1-max-claim": {
    "topic": "registry",
    "market": "KR",
    "label": "근저당권 채권최고액 설정 관행",
    "value": "대출 원금의 120~130%",
    "short": "대출 원금의 1.2~1.3배",
    "checked": "2026-10-17",
    "level": "press",
    "note": "법령이 정한 비율이 아니라 금융회사의 설정 관행이다. 금융회사와 상품에 따라 다를 수 있다. 은행 공식 기준 문서로는 확인하지 못했다.",
    "sources": [
      {
        "name": "세이프홈즈 해설, 채권최고액이 대출 원금의 120%로 설정되는 이유",
        "url": "https://safehomes.kr/insights/ap-435-채권최고액이-대출-원금의-120로-설정되는-이유와-확인-방법"
      }
    ]
  },
  "kr-re1-landlord-info": {
    "topic": "registry",
    "market": "KR",
    "label": "임대인의 정보 제시 의무 (주택임대차보호법 제3조의7)",
    "value": "2023년 4월 18일 시행",
    "short": "2023년 4월 18일부터",
    "effective": "2023-04-18",
    "checked": "2026-10-17",
    "level": "official",
    "note": "임대인은 계약 체결 때 확정일자 부여일·차임·보증금 등 정보와 국세·지방세 납세증명서를 임차인에게 제시해야 한다. 임대인이 정보 제공이나 미납세금 열람에 동의하면 갈음할 수 있다. 위반에 대한 과태료 규정은 없다는 해설이 있다.",
    "sources": [
      {
        "name": "법무부, 전세사기 피해 방지를 위한 개정 주택임대차보호법 안내 (2023-07-06)",
        "url": "https://www.moj.go.kr/bbs/moj/85/572899/artclView.do"
      },
      {
        "name": "찾기쉬운 생활법령정보, 계약 상대방 관련 정보 확인",
        "url": "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=1972&ccfNo=3&cciNo=1&cnpClsNo=2"
      }
    ]
  },
  "kr-re1-unpaid-tax": {
    "topic": "registry",
    "market": "KR",
    "label": "임차인의 미납국세 열람 (임대인 동의 없이)",
    "value": "계약 후, 보증금 1,000만 원 초과, 임대차 시작일까지",
    "short": "보증금이 1,000만 원을 넘으면 임대차 시작일까지 임대인 동의 없이",
    "checked": "2026-10-17",
    "level": "official",
    "note": "국세징수법 제109조. 계약 전이거나 보증금 1,000만 원 이하이면 임대인 동의가 필요하다. 세무서 방문 신청이 원칙이며, 동의 없이 열람하면 임대인에게 통지된다. 신고 기한 후 일정 기간이 지나야 나타나는 세금이 있다. 지방세는 지방세징수법에 따라 따로 신청한다.",
    "sources": [
      {
        "name": "대한민국 정책브리핑, 부동산 거래 전 임대인의 미납국세를 확인하세요 (2024-08-06)",
        "url": "https://www.korea.kr/multi/visualNewsView.do?newsId=148932319"
      },
      {
        "name": "찾기쉬운 생활법령정보, 계약 상대방 관련 정보 확인",
        "url": "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=1972&ccfNo=3&cciNo=1&cnpClsNo=2"
      }
    ]
  },
  "kr-re2-law-bcr": {
    "topic": "landuse",
    "market": "KR",
    "label": "용도지역별 건폐율 법률 상한 (국토계획법 제77조)",
    "value": "도시지역 주거 70%, 상업 90%, 공업 70%, 녹지 20% 이하; 계획관리 40%, 그 밖의 관리·농림·자연환경보전 20% 이하",
    "short": "주거지역 70%, 상업지역 90%, 공업지역 70%, 녹지지역 20% 이하",
    "checked": "2026-10-18",
    "level": "official",
    "note": "같은 법 제78조의 용적률 상한은 주거 500%, 상업 1,500%, 공업 400%, 녹지 100% 이하. 세분된 지역별 범위는 시행령, 실제 값은 조례가 정한다.",
    "sources": [
      {
        "name": "국토의 계획 및 이용에 관한 법률 제77조·제78조 (국가법령정보센터, 시행 2026.7.1. 기준)",
        "url": "https://www.law.go.kr/법령/국토의계획및이용에관한법률"
      }
    ]
  },
  "kr-re2-res1": {
    "topic": "landuse",
    "market": "KR",
    "label": "용도지역 상한: 제1종 일반주거지역 (국토계획법 시행령)",
    "value": "건폐율 60% 이하, 용적률 100~200%",
    "short": "제1종 일반주거지역은 건폐율 60% 이하, 용적률 100~200% 범위",
    "checked": "2026-10-18",
    "level": "official",
    "note": "시행령은 범위만 정하고, 실제 적용 값은 그 범위 안에서 시·군 도시계획조례가 정한다. 건폐율은 제84조 제1항, 용적률은 제85조 제1항.",
    "sources": [
      {
        "name": "국토의 계획 및 이용에 관한 법률 시행령 제84조·제85조 (국가법령정보센터, 시행 2026.9.18. 기준)",
        "url": "https://www.law.go.kr/법령/국토의계획및이용에관한법률시행령"
      }
    ]
  },
  "kr-re2-res2": {
    "topic": "landuse",
    "market": "KR",
    "label": "용도지역 상한: 제2종 일반주거지역 (국토계획법 시행령)",
    "value": "건폐율 60% 이하, 용적률 100~250%",
    "short": "제2종 일반주거지역은 건폐율 60% 이하, 용적률 100~250% 범위",
    "checked": "2026-10-18",
    "level": "official",
    "note": "시행령은 범위만 정하고, 실제 적용 값은 그 범위 안에서 시·군 도시계획조례가 정한다. 건폐율은 제84조 제1항, 용적률은 제85조 제1항.",
    "sources": [
      {
        "name": "국토의 계획 및 이용에 관한 법률 시행령 제84조·제85조 (국가법령정보센터, 시행 2026.9.18. 기준)",
        "url": "https://www.law.go.kr/법령/국토의계획및이용에관한법률시행령"
      }
    ]
  },
  "kr-re2-res3": {
    "topic": "landuse",
    "market": "KR",
    "label": "용도지역 상한: 제3종 일반주거지역 (국토계획법 시행령)",
    "value": "건폐율 50% 이하, 용적률 100~300%",
    "short": "제3종 일반주거지역은 건폐율 50% 이하, 용적률 100~300% 범위",
    "checked": "2026-10-18",
    "level": "official",
    "note": "시행령은 범위만 정하고, 실제 적용 값은 그 범위 안에서 시·군 도시계획조례가 정한다. 건폐율은 제84조 제1항, 용적률은 제85조 제1항.",
    "sources": [
      {
        "name": "국토의 계획 및 이용에 관한 법률 시행령 제84조·제85조 (국가법령정보센터, 시행 2026.9.18. 기준)",
        "url": "https://www.law.go.kr/법령/국토의계획및이용에관한법률시행령"
      }
    ]
  },
  "kr-re2-semires": {
    "topic": "landuse",
    "market": "KR",
    "label": "용도지역 상한: 준주거지역 (국토계획법 시행령)",
    "value": "건폐율 70% 이하, 용적률 200~500%",
    "short": "준주거지역은 건폐율 70% 이하, 용적률 200~500% 범위",
    "checked": "2026-10-18",
    "level": "official",
    "note": "시행령은 범위만 정하고, 실제 적용 값은 그 범위 안에서 시·군 도시계획조례가 정한다. 건폐율은 제84조 제1항, 용적률은 제85조 제1항.",
    "sources": [
      {
        "name": "국토의 계획 및 이용에 관한 법률 시행령 제84조·제85조 (국가법령정보센터, 시행 2026.9.18. 기준)",
        "url": "https://www.law.go.kr/법령/국토의계획및이용에관한법률시행령"
      }
    ]
  },
  "kr-re2-commgen": {
    "topic": "landuse",
    "market": "KR",
    "label": "용도지역 상한: 일반상업지역 (국토계획법 시행령)",
    "value": "건폐율 80% 이하, 용적률 200~1,300%",
    "short": "일반상업지역은 건폐율 80% 이하, 용적률 200~1,300% 범위",
    "checked": "2026-10-18",
    "level": "official",
    "note": "시행령은 범위만 정하고, 실제 적용 값은 그 범위 안에서 시·군 도시계획조례가 정한다. 건폐율은 제84조 제1항, 용적률은 제85조 제1항.",
    "sources": [
      {
        "name": "국토의 계획 및 이용에 관한 법률 시행령 제84조·제85조 (국가법령정보센터, 시행 2026.9.18. 기준)",
        "url": "https://www.law.go.kr/법령/국토의계획및이용에관한법률시행령"
      }
    ]
  },
  "kr-re2-seoul-res1": {
    "topic": "landuse",
    "market": "KR",
    "label": "서울시 조례 값: 제1종 일반주거지역",
    "value": "건폐율 60%, 용적률 150%",
    "short": "서울 제1종 일반주거지역은 건폐율 60%, 용적률 150%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "서울특별시 도시계획 조례가 시행령 범위 안에서 정한 값. 지구단위계획구역, 임대주택 건설, 공공시설 제공 등에 따른 완화·강화는 따로 정해진다.",
    "sources": [
      {
        "name": "서울특별시 도시계획 조례 제44조·제48조 (국가법령정보센터 자치법규, 시행 2026.7.13. 기준)",
        "url": "https://www.law.go.kr/자치법규/서울특별시도시계획조례"
      }
    ]
  },
  "kr-re2-seoul-res2": {
    "topic": "landuse",
    "market": "KR",
    "label": "서울시 조례 값: 제2종 일반주거지역",
    "value": "건폐율 60%, 용적률 200%",
    "short": "서울 제2종 일반주거지역은 건폐율 60%, 용적률 200%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "서울특별시 도시계획 조례가 시행령 범위 안에서 정한 값. 지구단위계획구역, 임대주택 건설, 공공시설 제공 등에 따른 완화·강화는 따로 정해진다.",
    "sources": [
      {
        "name": "서울특별시 도시계획 조례 제44조·제48조 (국가법령정보센터 자치법규, 시행 2026.7.13. 기준)",
        "url": "https://www.law.go.kr/자치법규/서울특별시도시계획조례"
      }
    ]
  },
  "kr-re2-seoul-res3": {
    "topic": "landuse",
    "market": "KR",
    "label": "서울시 조례 값: 제3종 일반주거지역",
    "value": "건폐율 50%, 용적률 250%",
    "short": "서울 제3종 일반주거지역은 건폐율 50%, 용적률 250%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "서울특별시 도시계획 조례가 시행령 범위 안에서 정한 값. 지구단위계획구역, 임대주택 건설, 공공시설 제공 등에 따른 완화·강화는 따로 정해진다.",
    "sources": [
      {
        "name": "서울특별시 도시계획 조례 제44조·제48조 (국가법령정보센터 자치법규, 시행 2026.7.13. 기준)",
        "url": "https://www.law.go.kr/자치법규/서울특별시도시계획조례"
      }
    ]
  },
  "kr-re2-seoul-semires": {
    "topic": "landuse",
    "market": "KR",
    "label": "서울시 조례 값: 준주거지역",
    "value": "건폐율 60%, 용적률 400%",
    "short": "서울 준주거지역은 건폐율 60%, 용적률 400%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "서울특별시 도시계획 조례가 시행령 범위 안에서 정한 값. 지구단위계획구역, 임대주택 건설, 공공시설 제공 등에 따른 완화·강화는 따로 정해진다.",
    "sources": [
      {
        "name": "서울특별시 도시계획 조례 제44조·제48조 (국가법령정보센터 자치법규, 시행 2026.7.13. 기준)",
        "url": "https://www.law.go.kr/자치법규/서울특별시도시계획조례"
      }
    ]
  },
  "kr-re2-seoul-commgen": {
    "topic": "landuse",
    "market": "KR",
    "label": "서울시 조례 값: 일반상업지역",
    "value": "건폐율 60%, 용적률 800%(서울도심 600%)",
    "short": "서울 일반상업지역은 건폐율 60%, 용적률 800%(서울도심 600%)",
    "checked": "2026-10-18",
    "level": "official",
    "note": "서울특별시 도시계획 조례가 시행령 범위 안에서 정한 값. 지구단위계획구역, 임대주택 건설, 공공시설 제공 등에 따른 완화·강화는 따로 정해진다. 서울도심은 조례가 따로 정한 지역이다.",
    "sources": [
      {
        "name": "서울특별시 도시계획 조례 제44조·제48조 (국가법령정보센터 자치법규, 시행 2026.7.13. 기준)",
        "url": "https://www.law.go.kr/자치법규/서울특별시도시계획조례"
      }
    ]
  },
  "kr-re2-penalty-base": {
    "topic": "landuse",
    "market": "KR",
    "label": "이행강제금 상한: 건폐율·용적률 초과, 무허가·무신고 건축 (건축법 제80조 제1항 제1호)",
    "value": "㎡당 시가표준액 × 50% × 위반면적 × 위반별 비율",
    "short": "㎡당 시가표준액의 50%에 위반면적을 곱한 금액",
    "checked": "2026-10-18",
    "level": "official",
    "note": "시가표준액은 지방세법에 따른 값. 그 밖의 위반(용도 위반 등)은 같은 항 제2호에 따라 건축물 시가표준액의 10% 범위에서 시행령 별표 15로 정한다.",
    "sources": [
      {
        "name": "건축법 제80조 (국가법령정보센터, 시행 2026.2.27. 기준)",
        "url": "https://www.law.go.kr/법령/건축법"
      }
    ]
  },
  "kr-re2-penalty-ratio": {
    "topic": "landuse",
    "market": "KR",
    "label": "이행강제금 위반별 비율 (건축법 시행령 제115조의3)",
    "value": "건폐율 초과 80%, 용적률 초과 90%, 무허가 100%, 무신고 70%",
    "short": "건폐율 초과 80%, 용적률 초과 90%, 허가 없이 지음 100%, 신고 없이 지음 70%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "건축조례로 낮출 수 있으나 60% 이상이어야 한다.",
    "sources": [
      {
        "name": "건축법 시행령 제115조의3 (국가법령정보센터, 시행 2026.10.6. 기준)",
        "url": "https://www.law.go.kr/법령/건축법시행령"
      }
    ]
  },
  "kr-re2-penalty-freq": {
    "topic": "landuse",
    "market": "KR",
    "label": "이행강제금 반복 부과 횟수 (건축법 제80조 제5항)",
    "value": "1년에 2회 이내(조례로 정함)",
    "short": "1년에 2회 이내에서 조례로 정한 횟수만큼",
    "checked": "2026-10-18",
    "level": "official",
    "note": "최초 시정명령일 기준. 시정하면 새 부과는 즉시 멈추지만 이미 부과된 금액은 징수한다(제6항).",
    "sources": [
      {
        "name": "건축법 제80조 (국가법령정보센터, 시행 2026.2.27. 기준)",
        "url": "https://www.law.go.kr/법령/건축법"
      }
    ]
  },
  "kr-re2-penalty-surcharge": {
    "topic": "landuse",
    "market": "KR",
    "label": "이행강제금 가중 (건축법 제80조 제2항, 시행령 제115조의3 제2항)",
    "value": "영리 목적·상습 위반 시 100% 범위에서 조례로 가중",
    "short": "100% 범위에서 조례로 정한 만큼 더 무겁게 매겨야 한다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "영리 목적의 무단 용도변경·증축(위반면적 50㎡ 초과), 다세대 세대수·다가구 가구수 5개 이상 무단 증가, 3년 내 2회 이상 위반 등. 위반 후 소유권이 바뀐 경우는 제외.",
    "sources": [
      {
        "name": "건축법 제80조 (국가법령정보센터, 시행 2026.2.27. 기준)",
        "url": "https://www.law.go.kr/법령/건축법"
      },
      {
        "name": "건축법 시행령 제115조의3 (국가법령정보센터, 시행 2026.10.6. 기준)",
        "url": "https://www.law.go.kr/법령/건축법시행령"
      }
    ]
  },
  "kr-re2-penalty-small": {
    "topic": "landuse",
    "market": "KR",
    "label": "소규모 주거용 이행강제금 감액 (건축법 제80조 제1항 단서)",
    "value": "연면적 60㎡ 이하 주거용: 2분의 1 범위에서 조례로 정함",
    "short": "연면적(공동주택은 세대 면적) 60㎡ 이하면 위 금액의 2분의 1 범위에서 조례로 정한 금액으로 줄어든다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "사용승인 없이 사용, 조경·높이 제한 위반 등 시행령 제115조의2가 정한 주거용 위반도 같은 감액 대상. 별도로 제80조의2와 시행령 제115조의4에 따른 감경(소유권 변경, 소규모 위반면적 등)이 있다.",
    "sources": [
      {
        "name": "건축법 제80조 (국가법령정보센터, 시행 2026.2.27. 기준)",
        "url": "https://www.law.go.kr/법령/건축법"
      }
    ]
  },
  "kr-re2-dagagu": {
    "topic": "landuse",
    "market": "KR",
    "label": "다가구주택 요건 (건축법 시행령 별표 1 제1호다목)",
    "value": "주택 층수 3개 층 이하, 1개 동 주택 바닥면적 660㎡ 이하, 19세대 이하",
    "short": "주택으로 쓰는 층수 3개 층 이하(지하층 제외), 1개 동 주택 바닥면적 합계 660㎡ 이하, 19세대 이하",
    "checked": "2026-10-18",
    "level": "official",
    "note": "1층 바닥면적 절반 이상을 필로티 주차장으로 쓰고 나머지를 주택 외 용도로 쓰면 그 층은 주택 층수에서 뺀다. 공동주택에 해당하지 않는 단독주택이다. 출처는 2021년 법제처 해석에 인용된 별표 1 문언이며, 현행 별표 원문 파일은 직접 열지 못했다.",
    "sources": [
      {
        "name": "법제처 법령해석 21-0594 (건축법 시행령 별표 1 인용), 2021.12.7.",
        "url": "https://opinion.lawmaking.go.kr/nl4li/lsItptEmp/429318?mode=all"
      }
    ]
  },
  "kr-re2-dasedae": {
    "topic": "landuse",
    "market": "KR",
    "label": "다세대주택 요건 (건축법 시행령 별표 1 제2호다목)",
    "value": "주택 1개 동 바닥면적 660㎡ 이하, 4개 층 이하",
    "short": "주택으로 쓰는 1개 동의 바닥면적 합계 660㎡ 이하, 층수 4개 층 이하인 공동주택",
    "checked": "2026-10-18",
    "level": "official",
    "note": "바닥면적이 660㎡를 넘으면 연립주택, 주택 층수가 5개 층 이상이면 아파트로 분류된다(별표 1 제2호). 출처는 2021년 법제처 해석에 인용된 별표 1 문언이며, 현행 별표 원문 파일은 직접 열지 못했다.",
    "sources": [
      {
        "name": "법제처 법령해석 21-0594 (건축법 시행령 별표 1 인용), 2021.12.7.",
        "url": "https://opinion.lawmaking.go.kr/nl4li/lsItptEmp/429318?mode=all"
      }
    ]
  },
  "kr-re-cancel-deposit": {
    "topic": "re-deal",
    "market": "KR",
    "label": "계약금에 의한 해제(해약금)",
    "value": "이행 착수 전까지 매수인은 계약금 포기, 매도인은 계약금 배액 상환으로 해제",
    "short": "당사자 일방이 이행에 착수할 때까지 계약금을 준 쪽은 이를 포기하고, 받은 쪽은 그 두 배를 돌려주고 매매계약을 해제할 수 있다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "민법 제565조. 당사자 사이에 다른 약정이 있으면 그에 따른다. 해약금의 기준은 실제 받은 금액이 아니라 약정 계약금이라는 판례(대법원 2015. 4. 23. 선고 2014다231378)가 있다.",
    "sources": [
      {
        "name": "국가법령정보센터, 민법 제565조",
        "url": "https://www.law.go.kr/법령/민법/제565조"
      }
    ]
  },
  "kr-re-title-deadline": {
    "topic": "re-deal",
    "market": "KR",
    "label": "소유권이전등기 신청 기한(매매)",
    "value": "잔금 지급 완료일부터 60일 이내",
    "short": "매매처럼 서로 대가를 주고받는 계약은 반대급부, 곧 잔금 지급이 끝난 날부터 60일 이내에 소유권이전등기를 신청해야 한다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "부동산등기 특별조치법 제2조 제1항. 상당한 사유 없이 신청을 게을리하면 같은 법 제11조에 따라 과태료 대상이 된다. 계약이 취소·해제되거나 무효이면 신청 의무가 없다.",
    "sources": [
      {
        "name": "국가법령정보센터, 부동산등기 특별조치법 제2조",
        "url": "https://www.law.go.kr/법령/부동산등기특별조치법/제2조"
      }
    ]
  },
  "kr-re-report-deadline": {
    "topic": "re-deal",
    "market": "KR",
    "label": "부동산 거래신고 기한",
    "value": "계약 체결일부터 30일 이내",
    "short": "계약을 맺은 날부터 30일 이내",
    "checked": "2026-10-18",
    "level": "official",
    "note": "부동산 거래신고 등에 관한 법률 제3조 제1항. 개업공인중개사가 거래계약서를 작성·교부했다면 중개사가 신고한다(같은 조 제3항). 신고필증을 받으면 등기에 필요한 검인을 받은 것으로 본다.",
    "sources": [
      {
        "name": "국가법령정보센터, 부동산 거래신고 등에 관한 법률 제3조",
        "url": "https://www.law.go.kr/법령/부동산거래신고등에관한법률/제3조"
      }
    ]
  },
  "kr-re-report-cancel": {
    "topic": "re-deal",
    "market": "KR",
    "label": "거래 해제등 신고 기한",
    "value": "해제·무효·취소 확정일부터 30일 이내",
    "short": "해제·무효·취소가 확정된 날부터 30일 이내",
    "checked": "2026-10-18",
    "level": "official",
    "note": "부동산 거래신고 등에 관한 법률 제3조의2. 2019년 8월 신설되었다.",
    "sources": [
      {
        "name": "국가법령정보센터, 부동산 거래신고 등에 관한 법률 제3조의2",
        "url": "https://www.law.go.kr/법령/부동산거래신고등에관한법률/제3조의2"
      }
    ]
  },
  "kr-re-report-fine": {
    "topic": "re-deal",
    "market": "KR",
    "label": "거래신고·해제신고 미이행 과태료",
    "value": "500만 원 이하의 과태료",
    "short": "500만 원 이하의 과태료",
    "checked": "2026-10-18",
    "level": "official",
    "note": "부동산 거래신고 등에 관한 법률 제28조 제2항. 거짓 신고는 같은 조 제1항에 따라 3천만 원 이하의 과태료 등 더 무거운 제재 대상이다.",
    "sources": [
      {
        "name": "국가법령정보센터, 부동산 거래신고 등에 관한 법률 제28조",
        "url": "https://www.law.go.kr/법령/부동산거래신고등에관한법률/제28조"
      }
    ]
  },
  "kr-re-funding-plan": {
    "topic": "re-deal",
    "market": "KR",
    "label": "자금조달계획서 제출 대상(주택)",
    "value": "투기과열지구·조정대상지역의 주택은 금액과 관계없이, 그 밖의 지역은 실거래가 6억 원 이상 주택, 법인이 사는 주택은 지역·금액과 관계없이 낸다",
    "short": "규제지역 주택은 금액 무관, 비규제지역은 6억 원 이상, 법인 매수는 모두",
    "checked": "2026-10-18",
    "level": "press",
    "note": "부동산 거래신고 등에 관한 법률 시행령 별표 1에 근거한다. 별표 원문은 열어 보지 못했고 법률 해설과 보도로 확인했다. 토지 거래에는 별도 기준이 있다.",
    "sources": [
      {
        "name": "로톡 법률 해설 '자금조달계획서, 규제지역은 금액 불문 제출입니다'",
        "url": "https://www.lawtalk.co.kr/posts/170312"
      },
      {
        "name": "경향신문, 2026-02-09",
        "url": "https://www.khan.co.kr/article/202602091559001/"
      }
    ]
  },
  "kr-re-funding-proof": {
    "topic": "re-deal",
    "market": "KR",
    "label": "자금조달 입증서류 첨부 대상",
    "value": "투기과열지구 주택, 2026-02-10 계약분부터 토지거래허가를 받은 주택",
    "short": "투기과열지구 주택, 그리고 2026년 2월 10일 계약분부터는 토지거래허가를 받은 주택",
    "effective": "2026-02-10",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2026년 2월 10일 시행 개정으로 중개 거래의 거래신고 때 계약금 지급을 입증하는 서류도 첨부하게 되었다고 보도되었다. 시행령·시행규칙 원문은 대조하지 못했다.",
    "sources": [
      {
        "name": "경향신문, 2026-02-09",
        "url": "https://www.khan.co.kr/article/202602091559001/"
      },
      {
        "name": "로톡 법률 해설",
        "url": "https://www.lawtalk.co.kr/posts/170312"
      }
    ]
  },
  "kr-re-land-permit-residence": {
    "topic": "re-deal",
    "market": "KR",
    "label": "허가받은 주거용 토지의 이용 의무 기간",
    "value": "취득일부터 2년",
    "short": "취득일부터 2년 동안 허가받은 목적대로, 곧 직접 거주용으로 써야 한다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "부동산 거래신고 등에 관한 법률 제17조와 시행령 제14조. 자기 거주용 주택용지 등의 목적으로 허가받은 경우 2년이다. 허가 없이 맺은 계약은 효력이 없다(법 제11조 제6항).",
    "sources": [
      {
        "name": "국가법령정보센터, 부동산 거래신고 등에 관한 법률 시행령",
        "url": "https://www.law.go.kr/법령/부동산거래신고등에관한법률시행령"
      }
    ]
  },
  "kr-re-brokerage-sale": {
    "topic": "re-deal",
    "market": "KR",
    "label": "주택 매매 중개보수 상한(한쪽당)",
    "value": "5천만 원 미만 0.6%(한도 25만 원), 5천만~2억 원 0.5%(한도 80만 원), 2억~9억 원 0.4%, 9억~12억 원 0.5%, 12억~15억 원 0.6%, 15억 원 이상 0.7%",
    "short": "거래금액 구간별 0.4~0.7% 상한, 그 안에서 협의",
    "effective": "2021-10-19",
    "checked": "2026-10-18",
    "level": "official",
    "note": "공인중개사법 시행규칙 제20조 제1항과 별표 1. 매도인·매수인 각각에게 받으며, 시·도 조례가 정한 한도 안에서 협의한다. 부가가치세는 별도일 수 있다.",
    "sources": [
      {
        "name": "인천광역시 중개보수 요율 안내",
        "url": "https://www.incheon.go.kr/build/BU060102/274"
      },
      {
        "name": "국가법령정보센터, 공인중개사법 시행규칙 제20조",
        "url": "https://www.law.go.kr/법령/공인중개사법시행규칙/제20조"
      }
    ]
  },
  "kr-re-brokerage-nonhouse": {
    "topic": "re-deal",
    "market": "KR",
    "label": "주택 외 중개대상물 중개보수 상한",
    "value": "거래금액의 0.9% 이내 협의",
    "short": "거래금액의 0.9% 이내에서 협의한다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "공인중개사법 시행규칙 제20조 제4항. 일정 요건을 갖춘 주거용 오피스텔에는 별도의 낮은 요율이 있다.",
    "sources": [
      {
        "name": "국가법령정보센터, 공인중개사법 시행규칙 제20조",
        "url": "https://www.law.go.kr/법령/공인중개사법시행규칙/제20조"
      }
    ]
  },
  "kr-re-broker-retain": {
    "topic": "re-deal",
    "market": "KR",
    "label": "확인·설명서와 거래계약서 보존 기간",
    "value": "확인·설명서 3년, 거래계약서 5년",
    "short": "3년 동안 보존해야 하고, 거래계약서는 5년 동안 보존해야 한다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "공인중개사법 제25조 제3항·시행령 제21조 제4항(3년), 법 제26조·시행령 제22조 제2항(5년). 공인전자문서센터에 보관된 경우는 예외이다.",
    "sources": [
      {
        "name": "국가법령정보센터, 공인중개사법 시행령 제21조",
        "url": "https://www.law.go.kr/법령/공인중개사법시행령/제21조"
      }
    ]
  },
  "kr-lease-opposability": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "주택임대차 대항력 발생 시점",
    "value": "인도와 주민등록(전입신고)을 마친 다음 날",
    "short": "주택을 넘겨받고 전입신고를 마친 다음 날",
    "level": "official",
    "note": "주택임대차보호법 제3조 제1항. 전입신고를 한 때 주민등록이 된 것으로 본다. 판례는 '다음 날 오전 0시'로 해석한다(대법원 1999.5.25. 99다9981로 인용되나 판결문 원문은 직접 열람하지 못함).",
    "sources": [
      {
        "name": "국가법령정보센터, 주택임대차보호법 (시행 2026.1.2.)",
        "url": "https://www.law.go.kr/법령/주택임대차보호법"
      },
      {
        "name": "로톡, 전입신고와 근저당이 같은 날이면 대항력은 다음 날 0시부터",
        "url": "https://www.lawtalk.co.kr/posts/180699"
      }
    ]
  },
  "kr-lease-small-seoul": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "소액임차인 최우선변제: 서울특별시",
    "value": "보증금 1억 6,500만 원 이하이면 5,500만 원까지",
    "short": "보증금 1억 6,500만 원 이하 임차인에게 5,500만 원까지",
    "effective": "2023-02-21",
    "level": "official",
    "note": "시행령 제11조(대상 보증금)와 제10조(최우선변제액). 적용 기준은 계약일이 아니라 그 주택의 최선순위 담보물권 설정일로 정한다(시행령 부칙 경과조치). 그 이전에 설정된 담보물권이 있으면 그때의 낮은 기준이 쓰인다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택임대차보호법 시행령 (시행 2026.7.1.)",
        "url": "https://www.law.go.kr/법령/주택임대차보호법시행령"
      }
    ]
  },
  "kr-lease-small-dense": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "소액임차인 최우선변제: 과밀억제권역(서울 제외)·세종·용인·화성·김포",
    "value": "보증금 1억 4,500만 원 이하이면 4,800만 원까지",
    "short": "보증금 1억 4,500만 원 이하 임차인에게 4,800만 원까지",
    "effective": "2023-02-21",
    "level": "official",
    "note": "시행령 제11조(대상 보증금)와 제10조(최우선변제액). 적용 기준은 계약일이 아니라 그 주택의 최선순위 담보물권 설정일로 정한다(시행령 부칙 경과조치). 그 이전에 설정된 담보물권이 있으면 그때의 낮은 기준이 쓰인다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택임대차보호법 시행령 (시행 2026.7.1.)",
        "url": "https://www.law.go.kr/법령/주택임대차보호법시행령"
      }
    ]
  },
  "kr-lease-small-metro": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "소액임차인 최우선변제: 광역시(과밀억제권역·군 제외)·안산·광주·파주·이천·평택",
    "value": "보증금 8,500만 원 이하이면 2,800만 원까지",
    "short": "보증금 8,500만 원 이하 임차인에게 2,800만 원까지",
    "effective": "2023-02-21",
    "level": "official",
    "note": "시행령 제11조(대상 보증금)와 제10조(최우선변제액). 적용 기준은 계약일이 아니라 그 주택의 최선순위 담보물권 설정일로 정한다(시행령 부칙 경과조치). 그 이전에 설정된 담보물권이 있으면 그때의 낮은 기준이 쓰인다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택임대차보호법 시행령 (시행 2026.7.1.)",
        "url": "https://www.law.go.kr/법령/주택임대차보호법시행령"
      }
    ]
  },
  "kr-lease-small-other": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "소액임차인 최우선변제: 그 밖의 지역",
    "value": "보증금 7,500만 원 이하이면 2,500만 원까지",
    "short": "보증금 7,500만 원 이하 임차인에게 2,500만 원까지",
    "effective": "2023-02-21",
    "level": "official",
    "note": "시행령 제11조(대상 보증금)와 제10조(최우선변제액). 적용 기준은 계약일이 아니라 그 주택의 최선순위 담보물권 설정일로 정한다(시행령 부칙 경과조치). 그 이전에 설정된 담보물권이 있으면 그때의 낮은 기준이 쓰인다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택임대차보호법 시행령 (시행 2026.7.1.)",
        "url": "https://www.law.go.kr/법령/주택임대차보호법시행령"
      }
    ]
  },
  "kr-lease-small-cap": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "최우선변제 총액 한도",
    "value": "주택가액(대지 포함)의 2분의 1",
    "short": "집값(대지 포함)의 2분의 1",
    "level": "official",
    "note": "주택임대차보호법 제8조 제3항 단서, 시행령 제10조 제2항·제3항. 임차인이 여럿이면 각자의 일정액 비율로 나눈다. 경매신청 등기 전에 대항요건을 갖추어야 한다(법 제8조 제1항).",
    "sources": [
      {
        "name": "국가법령정보센터, 주택임대차보호법 (시행 2026.1.2.)",
        "url": "https://www.law.go.kr/법령/주택임대차보호법"
      },
      {
        "name": "국가법령정보센터, 주택임대차보호법 시행령 (시행 2026.7.1.)",
        "url": "https://www.law.go.kr/법령/주택임대차보호법시행령"
      }
    ]
  },
  "kr-lease-report-scope": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "주택 임대차 신고 대상",
    "value": "보증금 6,000만 원 초과 또는 월세 30만 원 초과",
    "short": "보증금 6,000만 원이나 월세 30만 원을 넘는 계약",
    "effective": "2021-06-01",
    "level": "official",
    "note": "부동산거래신고법 시행령 제4조의3. 보증금·차임 변동 없이 기간만 연장하는 갱신은 제외. 적용 지역은 특별자치시·특별자치도·시·군(광역시와 경기도의 군만)·구. 전입신고를 하면 임대차 신고를 한 것으로 보고(법 제6조의5 제1항), 계약서를 붙여 신고하면 확정일자가 부여된 것으로 본다(같은 조 제3항).",
    "sources": [
      {
        "name": "국가법령정보센터, 부동산 거래신고 등에 관한 법률 시행령 (시행 2026.10.1.)",
        "url": "https://www.law.go.kr/법령/부동산거래신고등에관한법률시행령"
      },
      {
        "name": "국가법령정보센터, 부동산 거래신고 등에 관한 법률",
        "url": "https://www.law.go.kr/법령/부동산거래신고등에관한법률"
      }
    ]
  },
  "kr-lease-report-deadline": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "주택 임대차 신고 기한",
    "value": "계약 체결일부터 30일 이내",
    "short": "계약일부터 30일 안",
    "level": "official",
    "note": "부동산거래신고법 제6조의2 제1항. 변경·해제도 확정일부터 30일 이내(제6조의3).",
    "sources": [
      {
        "name": "국가법령정보센터, 부동산 거래신고 등에 관한 법률",
        "url": "https://www.law.go.kr/법령/부동산거래신고등에관한법률"
      }
    ]
  },
  "kr-lease-report-fine": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "임대차 신고 위반 과태료",
    "value": "지연 신고 최대 30만 원, 거짓 신고 최대 100만 원",
    "short": "늦은 신고는 최대 30만 원, 거짓 신고는 최대 100만 원",
    "effective": "2025-06-01",
    "level": "press",
    "note": "법률 상한은 100만 원 이하(부동산거래신고법 제28조 제5항 제3호). 시행령 별표의 세부 금액은 원문(별표 파일)을 열지 못해 보도로 확인했다. 계도기간은 2025년 5월 31일에 끝나 6월 1일 이후 계약부터 과태료가 부과된다.",
    "sources": [
      {
        "name": "아주경제, 2025.4.28",
        "url": "https://www.ajunews.com/view/20250428115430677"
      },
      {
        "name": "뉴시스, 2025.4.28",
        "url": "https://www.newsis.com/view/NISX20250428_0003155781"
      },
      {
        "name": "국가법령정보센터, 부동산 거래신고 등에 관한 법률",
        "url": "https://www.law.go.kr/법령/부동산거래신고등에관한법률"
      }
    ]
  },
  "kr-lease-renewal": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "계약갱신요구권 횟수와 기간",
    "value": "1회, 갱신 기간 2년",
    "short": "한 번, 2년",
    "level": "official",
    "note": "주택임대차보호법 제6조의3 제2항. 임대인 실거주 등 제1항 각 호의 사유가 있으면 거절할 수 있다. 실거주를 이유로 거절하고 제3자에게 임대하면 손해배상 책임(제5항·제6항).",
    "sources": [
      {
        "name": "국가법령정보센터, 주택임대차보호법 (시행 2026.1.2.)",
        "url": "https://www.law.go.kr/법령/주택임대차보호법"
      }
    ]
  },
  "kr-lease-renewal-window": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "계약갱신 요구 기간",
    "value": "임대차기간 종료 6개월 전부터 2개월 전까지",
    "short": "계약이 끝나기 6개월 전부터 2개월 전까지",
    "level": "official",
    "note": "주택임대차보호법 제6조의3 제1항이 제6조 제1항 전단의 기간을 따른다. 2020년 12월 10일 이후 처음 체결하거나 갱신한 계약부터 6개월~2개월(그 전 계약은 6개월~1개월). 묵시적 갱신 시 임차인 해지 통지는 3개월 뒤 효력(제6조의2).",
    "sources": [
      {
        "name": "국가법령정보센터, 주택임대차보호법 (시행 2026.1.2.)",
        "url": "https://www.law.go.kr/법령/주택임대차보호법"
      }
    ]
  },
  "kr-lease-increase-cap": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "차임·보증금 증액 상한",
    "value": "약정한 차임등의 20분의 1(5%)",
    "short": "기존 금액의 5%(20분의 1)",
    "level": "official",
    "note": "주택임대차보호법 제7조 제2항, 시행령 제8조. 시·도 조례로 이 범위 안에서 더 낮출 수 있다. 증액 후 1년 이내에는 다시 증액을 청구하지 못한다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택임대차보호법 (시행 2026.1.2.)",
        "url": "https://www.law.go.kr/법령/주택임대차보호법"
      },
      {
        "name": "국가법령정보센터, 주택임대차보호법 시행령 (시행 2026.7.1.)",
        "url": "https://www.law.go.kr/법령/주택임대차보호법시행령"
      }
    ]
  },
  "kr-lease-hug-ratio": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "HUG 전세보증금반환보증 전세가율 요건",
    "value": "보증금과 선순위채권의 합이 주택가격의 90% 이하",
    "short": "보증금과 앞선 빚의 합이 주택가격의 90% 이하",
    "effective": "2023-05-01",
    "level": "press",
    "note": "2023년 5월 1일 신규 보증부터 100%에서 90%로 강화(갱신 보증은 2024년 1월 1일 신청분부터). 2026년 10월 15일 국정감사에서 HUG 사장이 80%까지 단계적으로 낮추겠다고 밝혔으나 시행 시점은 미정. HUG 공식 상품 안내 페이지는 열지 못했다.",
    "sources": [
      {
        "name": "매일신문, 2023.5.1 (전세보증 가입요건 강화)",
        "url": "https://www.imaeil.com/page/view/2023050111440974360"
      },
      {
        "name": "KB Think, HF·HUG·SGI 전세보증 비교, 2025.8.13",
        "url": "https://kbthink.com/life/daily/hf-hug-sgi.html"
      },
      {
        "name": "아주경제, 2026.10.15 (HUG 국정감사)",
        "url": "https://www.ajunews.com/view/20261015145045392"
      }
    ]
  },
  "kr-lease-hug-price": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "HUG 보증의 공시가격 적용 비율",
    "value": "공시가격 × 140% (보증 한도로는 공시가격의 126%)",
    "short": "공시가격의 140%를 주택가격으로 보므로, 보증금과 앞선 빚의 합은 공시가격의 126%까지 인정된다",
    "effective": "2023-05-01",
    "level": "press",
    "note": "시세(KB 등)가 없는 주택에 적용. 140% × 90% = 126%. 2022년까지는 150%였다. 주택 유형과 평가 자료에 따라 다른 방식이 쓰일 수 있다.",
    "sources": [
      {
        "name": "매일신문, 2023.5.1 (전세보증 가입요건 강화)",
        "url": "https://www.imaeil.com/page/view/2023050111440974360"
      },
      {
        "name": "KB Think, HF·HUG·SGI 전세보증 비교, 2025.8.13",
        "url": "https://kbthink.com/life/daily/hf-hug-sgi.html"
      }
    ]
  },
  "kr-lease-hug-limit": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "HUG 전세보증금반환보증 보증금 상한",
    "value": "수도권 7억 원, 그 밖의 지역 5억 원 이하",
    "short": "수도권 7억 원, 그 밖 5억 원",
    "level": "press",
    "note": "HF 전세지킴보증도 같은 상한으로 안내된다. SGI 전세금보장신용보험은 아파트 상한이 없고 그 밖 주택은 10억 원 이내로 안내된다(2025.8 기준 금융회사 안내).",
    "sources": [
      {
        "name": "KB Think, HF·HUG·SGI 전세보증 비교, 2025.8.13",
        "url": "https://kbthink.com/life/daily/hf-hug-sgi.html"
      }
    ]
  },
  "kr-lease-hug-deadline": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "HUG 전세보증금반환보증 신청 기한",
    "value": "계약 기간의 절반이 지나기 전",
    "short": "계약 기간의 절반이 지나기 전",
    "level": "press",
    "note": "잔금일과 전입신고일 중 늦은 날부터 따진다(금융회사 안내).",
    "sources": [
      {
        "name": "KB Think, HF·HUG·SGI 전세보증 비교, 2025.8.13",
        "url": "https://kbthink.com/life/daily/hf-hug-sgi.html"
      }
    ]
  },
  "kr-lease-fraud-sunset": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "전세사기피해자 특별법 유효기간",
    "value": "2027년 5월 31일까지 (시행 후 4년)",
    "short": "2027년 5월 31일까지",
    "effective": "2025-05-20",
    "level": "official",
    "note": "부칙(법률 제19425호) 제2조, 2025.5.20 개정으로 2년에서 4년으로 연장. 만료 전에 피해자 결정을 받거나 신청한 사람에게는 만료 후에도 적용(부칙 제4조).",
    "sources": [
      {
        "name": "국가법령정보센터, 전세사기피해자 지원 및 주거안정에 관한 특별법 (시행 2026.10.2.)",
        "url": "https://www.law.go.kr/법령/전세사기피해자지원및주거안정에관한특별법"
      },
      {
        "name": "SBS Biz, 전세사기 특별법 2027년 5월 31일까지 연장",
        "url": "https://biz.sbs.co.kr/amp/article/20000232374"
      }
    ]
  },
  "kr-lease-fraud-scope": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "전세사기피해자 특별법 적용 대상 임차인",
    "value": "2025년 5월 31일 이전에 임대차계약을 최초로 체결한 임차인",
    "short": "2025년 5월 31일까지 처음 계약을 맺은 임차인",
    "effective": "2025-05-20",
    "level": "official",
    "note": "부칙(법률 제20956호, 2025.5.20) 제2조 적용범위 특례.",
    "sources": [
      {
        "name": "국가법령정보센터, 전세사기피해자 지원 및 주거안정에 관한 특별법 (시행 2026.10.2.)",
        "url": "https://www.law.go.kr/법령/전세사기피해자지원및주거안정에관한특별법"
      }
    ]
  },
  "kr-lease-fraud-deposit": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "전세사기피해자 결정 보증금 요건",
    "value": "5억 원 이하 (위원회가 2억 원 범위에서 상향 가능)",
    "short": "5억 원 이하",
    "level": "official",
    "note": "특별법 제3조 제1항 제2호. 대항력·확정일자(또는 임차권등기·전세권), 2인 이상 피해, 반환 의사 의심 사유 요건을 모두 갖추어야 하며 경매·공매가 끝난 임차인은 일부 요건이 빠진다. 반환보증으로 전액 반환이 가능하거나 최우선변제로 전액 보호되는 경우 제외(제2항).",
    "sources": [
      {
        "name": "국가법령정보센터, 전세사기피해자 지원 및 주거안정에 관한 특별법 (시행 2026.10.2.)",
        "url": "https://www.law.go.kr/법령/전세사기피해자지원및주거안정에관한특별법"
      }
    ]
  },
  "kr-lease-fraud-2026": {
    "topic": "lease",
    "market": "KR",
    "checked": "2026-10-18",
    "label": "전세사기피해자 특별법 2026년 5월 개정 일부 시행일",
    "value": "2026년 11월 12일 (공포 후 6개월)",
    "short": "2026년 11월 12일부터 시행된다",
    "effective": "2026-11-12",
    "level": "official",
    "note": "법률 제21634호(2026.5.12 공포). 공공주택사업자의 피해주택 매입 관련 개정은 공포일 시행, 제25조의8~제25조의12(최소보장피해자 최소지원금·선지급금 등) 등은 공포 후 6개월 경과일 시행. 날짜는 공포일에서 계산한 것이며 세부 지원 내용은 이 사이트에서 다루지 않았다.",
    "sources": [
      {
        "name": "국가법령정보센터, 전세사기피해자 지원 및 주거안정에 관한 특별법 (시행 2026.10.2.)",
        "url": "https://www.law.go.kr/법령/전세사기피해자지원및주거안정에관한특별법"
      }
    ]
  },
  "kr-ltv-regulated": {
    "topic": "mortgage",
    "market": "KR",
    "label": "LTV 상한: 규제지역 (무주택·처분조건부 1주택)",
    "value": "40%",
    "short": "40%",
    "effective": "2025-09-08",
    "checked": "2026-10-18",
    "level": "official",
    "note": "무주택자와 기존 주택 처분을 약정한 1주택자에게 적용한다. 2025.9.8 50%에서 40%로 낮아졌다. 2026.8.13 금융 종합대책에서 유지를 재확인했다.",
    "sources": [
      {
        "name": "정책브리핑, 2025.9.12 (가계부채 관리 강화 방안 보강 추가대책)",
        "url": "https://www.korea.kr/news/policyNewsView.do?newsId=148954140"
      },
      {
        "name": "금융위원회 보도자료, 2025.10.15 (주택시장 안정화를 위한 대출수요 관리 방안)",
        "url": "https://fsc.go.kr/no010101/85432"
      },
      {
        "name": "금융위원회 카드뉴스, 2026.8.13 (부동산 시장 안정을 위한 금융 종합대책)",
        "url": "https://fsc.go.kr/no040000?cnId=3374"
      }
    ]
  },
  "kr-ltv-nonregulated": {
    "topic": "mortgage",
    "market": "KR",
    "label": "LTV 상한: 비규제지역 (무주택·처분조건부 1주택)",
    "value": "70%",
    "short": "70%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2026.8.13 금융 종합대책에서 유지를 재확인했다.",
    "sources": [
      {
        "name": "금융위원회 보도자료, 2025.10.15 (주택시장 안정화를 위한 대출수요 관리 방안)",
        "url": "https://fsc.go.kr/no010101/85432"
      },
      {
        "name": "금융위원회 카드뉴스, 2026.8.13 (부동산 시장 안정을 위한 금융 종합대책)",
        "url": "https://fsc.go.kr/no040000?cnId=3374"
      }
    ]
  },
  "kr-ltv-firsthome": {
    "topic": "mortgage",
    "market": "KR",
    "label": "LTV 상한: 생애최초 주택구입",
    "value": "수도권·규제지역 70%(6개월 내 전입 의무), 그 밖 80%",
    "short": "수도권·규제지역에서 70%(6개월 안에 전입해야 한다), 그 밖에서는 80%까지 받는다",
    "effective": "2025-06-28",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2025.6.28 수도권·규제지역이 80%에서 70%로 낮아지고 전입 의무가 붙었다. 디딤돌·보금자리론에도 같은 비율을 쓴다.",
    "sources": [
      {
        "name": "금융위원회 보도자료, 2025.6.27 (수도권 중심의 가계부채 관리 강화 방안)",
        "url": "https://www.fsc.go.kr/no010101/84824"
      },
      {
        "name": "금융위원회 카드뉴스, 2026.8.13 (부동산 시장 안정을 위한 금융 종합대책)",
        "url": "https://fsc.go.kr/no040000?cnId=3374"
      }
    ]
  },
  "kr-mortgage-cap": {
    "topic": "mortgage",
    "market": "KR",
    "label": "주택구입 주담대 금액 상한: 수도권·규제지역",
    "value": "시가 15억 원 이하 6억 원, 15억 원 초과 25억 원 이하 4억 원, 25억 원 초과 2억 원",
    "short": "집값 15억 원 이하는 6억 원, 25억 원 이하는 4억 원, 그 위는 2억 원",
    "effective": "2025-10-16",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2025.6.28 수도권·규제지역에 6억 원 단일 상한이 생겼고, 2025.10.16 집값별로 나뉘었다. 정책대출은 자체 한도를 쓴다.",
    "sources": [
      {
        "name": "금융위원회 보도자료, 2025.6.27 (수도권 중심의 가계부채 관리 강화 방안)",
        "url": "https://www.fsc.go.kr/no010101/84824"
      },
      {
        "name": "금융위원회 보도자료, 2025.10.15 (주택시장 안정화를 위한 대출수요 관리 방안)",
        "url": "https://fsc.go.kr/no010101/85432"
      },
      {
        "name": "금융위원회 카드뉴스, 2026.8.13 (부동산 시장 안정을 위한 금융 종합대책)",
        "url": "https://fsc.go.kr/no040000?cnId=3374"
      },
      {
        "name": "금융위원회 보도자료, 2026.4.1 (2026년도 가계부채 관리방안)",
        "url": "https://www.fsc.go.kr/no010101/86606"
      }
    ]
  },
  "kr-mortgage-maturity": {
    "topic": "mortgage",
    "market": "KR",
    "label": "주담대 만기 상한: 수도권·규제지역",
    "value": "30년",
    "short": "30년 이내",
    "effective": "2025-06-28",
    "checked": "2026-10-18",
    "level": "official",
    "note": "종전에는 최장 30~40년이었다. 정책대출인 보금자리론은 별도 기준(최장 50년)을 쓴다.",
    "sources": [
      {
        "name": "금융위원회 보도자료, 2025.6.27 (수도권 중심의 가계부채 관리 강화 방안)",
        "url": "https://www.fsc.go.kr/no010101/84824"
      }
    ]
  },
  "kr-dti-regulated": {
    "topic": "mortgage",
    "market": "KR",
    "label": "DTI 상한: 규제지역",
    "value": "40%",
    "short": "40%",
    "checked": "2026-10-18",
    "level": "press",
    "note": "공식 원문에서 현행 수치를 직접 대조하지 못했다. 보금자리론·디딤돌 같은 정책대출은 DTI 60%를 쓰고 규제지역에서는 10%p를 뺀다.",
    "sources": [
      {
        "name": "글래스월렛 규제지역 LTV·DTI 정리",
        "url": "https://glasswallet.com/calculate/ltv-dti/regulated-area-ltv"
      }
    ]
  },
  "kr-dti-nonregulated": {
    "topic": "mortgage",
    "market": "KR",
    "label": "DTI 상한: 비규제지역",
    "value": "60%",
    "short": "60%",
    "checked": "2026-10-18",
    "level": "press",
    "note": "공식 원문에서 현행 수치를 직접 대조하지 못했다.",
    "sources": [
      {
        "name": "글래스월렛 규제지역 LTV·DTI 정리",
        "url": "https://glasswallet.com/calculate/ltv-dti/regulated-area-ltv"
      }
    ]
  },
  "kr-dsr-bank": {
    "topic": "mortgage",
    "market": "KR",
    "label": "차주단위 DSR 상한: 은행",
    "value": "40%",
    "short": "40%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2026.8.13 금융 종합대책에서 유지를 재확인했다.",
    "sources": [
      {
        "name": "금융위원회 카드뉴스, 2026.8.13 (부동산 시장 안정을 위한 금융 종합대책)",
        "url": "https://fsc.go.kr/no040000?cnId=3374"
      }
    ]
  },
  "kr-dsr-nonbank": {
    "topic": "mortgage",
    "market": "KR",
    "label": "차주단위 DSR 상한: 제2금융권",
    "value": "50%",
    "short": "50%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "저축은행, 보험사, 상호금융 등. 2026.8.13 금융 종합대책에서 유지를 재확인했다.",
    "sources": [
      {
        "name": "금융위원회 카드뉴스, 2026.8.13 (부동산 시장 안정을 위한 금융 종합대책)",
        "url": "https://fsc.go.kr/no040000?cnId=3374"
      }
    ]
  },
  "kr-dsr-scope": {
    "topic": "mortgage",
    "market": "KR",
    "label": "차주단위 DSR 적용 대상",
    "value": "총대출액 1억 원 초과 차주",
    "short": "모든 대출을 합친 금액이 1억 원을 넘는 사람",
    "effective": "2022-07-01",
    "checked": "2026-10-18",
    "level": "press",
    "note": "중도금대출, 이주비대출, 서민금융상품, 소액 대출 등은 DSR 계산에서 빠진다.",
    "sources": [
      {
        "name": "정책브리핑, 가계부채 관리 방안 Q&A (2021)",
        "url": "https://www.korea.kr/multi/visualNewsView.do?newsId=148894892"
      },
      {
        "name": "금융위원회 카드뉴스, 2026.8.13 (부동산 시장 안정을 위한 금융 종합대책)",
        "url": "https://fsc.go.kr/no040000?cnId=3374"
      }
    ]
  },
  "kr-stress-base": {
    "topic": "mortgage",
    "market": "KR",
    "label": "스트레스 DSR 3단계 기본 스트레스 금리",
    "value": "1.5%p (하한 1.5%p, 상한 3.0%p)",
    "short": "1.5%p",
    "effective": "2025-07-01",
    "checked": "2026-10-18",
    "level": "official",
    "note": "한도 계산에만 쓰고 실제 금리에는 붙지 않는다. 변동금리에 100%, 혼합형·주기형은 고정 기간에 따라 일부만 더한다. 신용대출은 잔액 1억 원 초과분에만 적용한다.",
    "sources": [
      {
        "name": "금융위원회 보도자료, 2025.5.20 (3단계 스트레스 DSR 시행방안)",
        "url": "https://www.fsc.go.kr/no010101/84617"
      },
      {
        "name": "금융위원회 보도자료, 2025.10.15 (주택시장 안정화를 위한 대출수요 관리 방안)",
        "url": "https://fsc.go.kr/no010101/85432"
      }
    ]
  },
  "kr-stress-capital": {
    "topic": "mortgage",
    "market": "KR",
    "label": "스트레스 금리 하한: 수도권·규제지역 주담대",
    "value": "3.0%p",
    "short": "3.0%p",
    "effective": "2025-10-16",
    "checked": "2026-10-18",
    "level": "official",
    "note": "1.5%p에서 3.0%p로 올렸다. 소급하지 않으며 중도금·이주비대출처럼 DSR이 적용되지 않는 대출은 빠진다.",
    "sources": [
      {
        "name": "금융위원회 보도자료, 2025.10.15 (주택시장 안정화를 위한 대출수요 관리 방안)",
        "url": "https://fsc.go.kr/no010101/85432"
      },
      {
        "name": "금융위원회 카드뉴스, 2025.10.24",
        "url": "https://fsc.go.kr/no040101?cnId=2914"
      }
    ]
  },
  "kr-ltv-multihome": {
    "topic": "mortgage",
    "market": "KR",
    "label": "다주택자 주택구입 주담대: 수도권·규제지역",
    "value": "LTV 0% (2주택 이상 보유자의 추가 구입)",
    "short": "LTV 0%, 곧 받을 수 없다",
    "effective": "2025-06-28",
    "checked": "2026-10-18",
    "level": "official",
    "note": "생활안정자금 목적 주담대도 다주택자는 금지이다.",
    "sources": [
      {
        "name": "금융위원회 보도자료, 2025.6.27 (수도권 중심의 가계부채 관리 강화 방안)",
        "url": "https://www.fsc.go.kr/no010101/84824"
      },
      {
        "name": "정책브리핑, 2025.9.12 (가계부채 관리 강화 방안 보강 추가대책)",
        "url": "https://www.korea.kr/news/policyNewsView.do?newsId=148954140"
      }
    ]
  },
  "kr-disposal-term": {
    "topic": "mortgage",
    "market": "KR",
    "label": "처분조건부 1주택자 기존 주택 처분 기한",
    "value": "6개월",
    "short": "6개월",
    "effective": "2025-06-28",
    "checked": "2026-10-18",
    "level": "official",
    "note": "종전 2년에서 줄었다. 약정하면 무주택자와 같은 LTV를 적용받는다.",
    "sources": [
      {
        "name": "금융위원회 보도자료, 2025.6.27 (수도권 중심의 가계부채 관리 강화 방안)",
        "url": "https://www.fsc.go.kr/no010101/84824"
      }
    ]
  },
  "kr-jeonse-1home-cap": {
    "topic": "mortgage",
    "market": "KR",
    "label": "1주택자 전세대출 한도: 수도권·규제지역",
    "value": "2억 원",
    "short": "수도권·규제지역에서 전세대출 한도가 2억 원",
    "effective": "2025-09-08",
    "checked": "2026-10-18",
    "level": "official",
    "note": "보증기관별로 2억~3억 원이던 것을 하나로 묶었다.",
    "sources": [
      {
        "name": "정책브리핑, 2025.9.12 (가계부채 관리 강화 방안 보강 추가대책)",
        "url": "https://www.korea.kr/news/policyNewsView.do?newsId=148954140"
      }
    ]
  },
  "kr-jeonse-dsr": {
    "topic": "mortgage",
    "market": "KR",
    "label": "1주택자 전세대출의 DSR 반영",
    "value": "수도권·규제지역 전세대출 이자상환분을 DSR에 반영",
    "short": "수도권·규제지역에서 받는 전세대출의 이자가 DSR에 들어간다",
    "effective": "2025-10-29",
    "checked": "2026-10-18",
    "level": "official",
    "note": "시행 뒤 새로 받는 전세대출부터 적용한다. 만기 연장은 제외, 증액은 신규로 본다. 무주택자 전세대출은 DSR에 넣지 않는다.",
    "sources": [
      {
        "name": "금융위원회 보도자료, 2025.10.15 (주택시장 안정화를 위한 대출수요 관리 방안)",
        "url": "https://fsc.go.kr/no010101/85432"
      },
      {
        "name": "금융위원회 카드뉴스, 2025.10.24",
        "url": "https://fsc.go.kr/no040101?cnId=2914"
      }
    ]
  },
  "kr-jeonse-guarantee": {
    "topic": "mortgage",
    "market": "KR",
    "label": "전세대출 보증비율",
    "value": "수도권·규제지역 80%, 그 밖 90%",
    "short": "수도권·규제지역 80%",
    "effective": "2025-07-21",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2025.7.21 수도권·규제지역이 90%에서 80%로 낮아졌다.",
    "sources": [
      {
        "name": "금융위원회 보도자료, 2025.6.27 (수도권 중심의 가계부채 관리 강화 방안)",
        "url": "https://www.fsc.go.kr/no010101/84824"
      },
      {
        "name": "금융위원회 카드뉴스, 2026.8.13 (부동산 시장 안정을 위한 금융 종합대책)",
        "url": "https://fsc.go.kr/no040000?cnId=3374"
      }
    ]
  },
  "kr-didimdol": {
    "topic": "mortgage",
    "market": "KR",
    "label": "디딤돌대출 주요 요건 (주택도시기금)",
    "value": "부부 합산 소득 6천만 원 이하(생애최초·2자녀 이상 7천만 원, 신혼 8,500만 원), 순자산 5.11억 원 이하 무주택 세대, 주택 5억 원 이하(신혼·2자녀 이상 6억 원), 한도 2억 원(생애최초 2.4억 원, 신혼·2자녀 이상 3.2억 원), LTV 70%(생애최초 80%, 수도권·규제지역 70%), DTI 60%",
    "short": "부부 합산 소득 6천만 원 이하인 무주택 세대가 5억 원 이하 집을 살 때 최대 2억 원까지 빌려주고, 생애최초·신혼·자녀 가구는 기준이 조금 넓다",
    "effective": "2025-06-28",
    "checked": "2026-10-18",
    "level": "official",
    "note": "한도는 2025.6.28 축소된 값이다(일반 2.5억→2억 원). 신생아 특례 기준은 따로 있다. 순자산 기준은 해마다 바뀐다(2026년 5.11억 원).",
    "sources": [
      {
        "name": "한국주택금융공사 디딤돌대출 안내",
        "url": "https://www.hf.go.kr/ko/sub01/sub01_02_01.do"
      },
      {
        "name": "주택도시기금 내집마련디딤돌대출",
        "url": "https://nhuf.molit.go.kr/FP/FP05/FP0503/FP05030101.jsp"
      },
      {
        "name": "금융위원회 보도자료, 2025.6.27 (수도권 중심의 가계부채 관리 강화 방안)",
        "url": "https://www.fsc.go.kr/no010101/84824"
      }
    ]
  },
  "kr-bogeumjari": {
    "topic": "mortgage",
    "market": "KR",
    "label": "보금자리론 주요 요건 (한국주택금융공사)",
    "value": "부부 합산 소득 7천만 원 이하(신혼 8,500만 원, 자녀 1명 9천만 원, 다자녀 1억 원), 무주택 또는 1주택, 주택 6억 원 이하, 한도 3.6억 원(생애최초 4.2억 원), LTV 아파트 70%, DTI 60%(규제지역 각 10%p 차감), 만기 10~50년",
    "short": "부부 합산 소득 7천만 원 이하이고 무주택 또는 1주택인 사람이 6억 원 이하 집을 살 때 최대 3.6억 원까지 빌려주며, 만기는 최장 50년이다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "규제지역에서는 LTV와 DTI에서 각각 10%p를 뺀다.",
    "sources": [
      {
        "name": "한국주택금융공사 보금자리론 안내",
        "url": "https://www.hf.go.kr/ko/sub01/sub01_01_01.do"
      },
      {
        "name": "금융위원회 카드뉴스, 2026.8.13 (부동산 시장 안정을 위한 금융 종합대책)",
        "url": "https://fsc.go.kr/no040000?cnId=3374"
      }
    ]
  },
  "kr-re-tax-acq-rate": {
    "topic": "re-tax",
    "market": "KR",
    "label": "주택 유상취득 취득세 표준세율 (지방세법 제11조제1항제8호)",
    "value": "취득당시가액 6억 원 이하 1%, 6억 초과~9억 이하 1~3% 비례(구간 내 계산식), 9억 초과 3%",
    "short": "6억 원 이하 1%, 9억 원 초과 3%, 그 사이는 값에 비례해 1~3%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "6억~9억 구간 세율은 (취득가액(억 원) × 2/3 − 3)%이며 소수점 다섯째 자리에서 반올림한다. 계산식 자체는 법령 본문의 그림으로 되어 있어 2차 안내로 대조했다. 지방교육세와 전용면적 85㎡ 초과 주택의 농어촌특별세가 따로 붙는다. 1세대 1주택 기준이며 다주택 중과는 kr-re-tax-acq-heavy.",
    "sources": [
      {
        "name": "법제처 국가법령정보센터, 지방세법 (시행 2026. 7. 1., 법률 제21308호)",
        "url": "https://www.law.go.kr/법령/지방세법"
      }
    ]
  },
  "kr-re-tax-acq-heavy": {
    "topic": "re-tax",
    "market": "KR",
    "label": "다주택·법인 주택 취득세 중과 (지방세법 제13조의2)",
    "value": "조정대상지역: 1세대 2주택째 8%, 3주택째 이상 12% / 조정대상지역 밖: 3주택째 8%, 4주택째 이상 12% / 법인 12%",
    "short": "조정대상지역에서 두 번째 집은 8%, 세 번째 집부터는 12%(조정대상지역 밖은 세 번째 8%, 네 번째부터 12%)",
    "checked": "2026-10-18",
    "level": "official",
    "note": "표준세율 4%에 중과기준세율(2%)의 2배 또는 4배를 더한 값이다. 일시적 2주택은 중과에서 빠진다. 수도권 시가표준액 1억 원 이하(지방 2억 원 이하) 주택 등은 중과에서 제외되며, 분양권·입주권·주택으로 과세되는 오피스텔도 주택 수에 넣는다. 2022년 말 정부가 낸 완화안은 법 개정으로 이어지지 않아 현행 조문이 그대로이다.",
    "sources": [
      {
        "name": "법제처 국가법령정보센터, 지방세법 (시행 2026. 7. 1., 법률 제21308호)",
        "url": "https://www.law.go.kr/법령/지방세법"
      },
      {
        "name": "법제처 국가법령정보센터, 지방세법 시행령 (시행 2026. 10. 1., 대통령령 제36736호)",
        "url": "https://www.law.go.kr/법령/지방세법시행령"
      }
    ]
  },
  "kr-re-tax-acq-temp2": {
    "topic": "re-tax",
    "market": "KR",
    "label": "취득세 일시적 2주택 처분 기간 (지방세법 시행령 제28조의5)",
    "value": "신규 주택 취득일부터 3년 (종전 주택과 신규 주택이 모두 조정대상지역이면 2년)",
    "short": "새집을 산 날부터 3년(두 집이 모두 조정대상지역이면 2년)",
    "effective": "2026-10-01",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2026. 9. 30. 개정, 2026. 10. 1. 시행. 시행 이후 납세의무가 성립하는 경우부터 적용하되, 2026. 8. 26. 이전에 매매계약을 체결하고 계약금을 지급한 사실이 확인되면 종전 규정(3년)을 따른다(부칙 제2조). 기간 안에 종전 주택을 팔지 않으면 중과세율과의 차액을 추징한다.",
    "sources": [
      {
        "name": "법제처 국가법령정보센터, 지방세법 시행령 (시행 2026. 10. 1., 대통령령 제36736호)",
        "url": "https://www.law.go.kr/법령/지방세법시행령"
      }
    ]
  },
  "kr-re-tax-acq-first": {
    "topic": "re-tax",
    "market": "KR",
    "label": "생애최초 주택 구입 취득세 감면 (지방세특례제한법 제36조의3)",
    "value": "본인·배우자 무주택, 취득당시가액 12억 원 이하, 거주 목적: 취득세 200만 원 한도 감면(소형 공동주택·도시형생활주택·인구감소지역 등은 300만 원), 2028. 12. 31.까지",
    "short": "생애 처음 집을 사면 12억 원 이하 주택에 한해 취득세를 200만 원(일부 소형·지방 주택 300만 원)까지 깎아 준다",
    "checked": "2026-10-18",
    "level": "official",
    "note": "산출세액이 한도 이하이면 면제, 넘으면 한도만큼 공제한다. 실거주 의무 등 사후 요건을 지키지 못하면 추징된다.",
    "sources": [
      {
        "name": "법제처 국가법령정보센터, 지방세특례제한법 제36조의3",
        "url": "https://www.law.go.kr/법령/지방세특례제한법"
      }
    ]
  },
  "kr-re-tax-prop-date": {
    "topic": "re-tax",
    "market": "KR",
    "label": "재산세·종합부동산세 과세기준일 (지방세법 제114조, 종합부동산세법 제3조)",
    "value": "매년 6월 1일",
    "short": "매년 6월 1일",
    "checked": "2026-10-18",
    "level": "official",
    "note": "이날 현재 사실상 소유자가 그해 재산세와 종합부동산세 전액의 납세의무자가 된다. 날짜에 따라 나누어 계산하지 않는다.",
    "sources": [
      {
        "name": "법제처 국가법령정보센터, 지방세법 (시행 2026. 7. 1., 법률 제21308호)",
        "url": "https://www.law.go.kr/법령/지방세법"
      },
      {
        "name": "법제처 국가법령정보센터, 종합부동산세법 (시행 2026. 1. 1.)",
        "url": "https://www.law.go.kr/법령/종합부동산세법"
      }
    ]
  },
  "kr-re-tax-prop-due": {
    "topic": "re-tax",
    "market": "KR",
    "label": "주택분 재산세 납기 (지방세법 제115조)",
    "value": "세액의 1/2은 7월 16~31일, 나머지 1/2은 9월 16~30일 (20만 원 이하면 조례로 7월에 한꺼번에)",
    "short": "7월과 9월에 절반씩",
    "checked": "2026-10-18",
    "level": "official",
    "note": "건축물분은 7월, 토지분은 9월에 낸다.",
    "sources": [
      {
        "name": "법제처 국가법령정보센터, 지방세법 (시행 2026. 7. 1., 법률 제21308호)",
        "url": "https://www.law.go.kr/법령/지방세법"
      }
    ]
  },
  "kr-re-tax-prop-rate": {
    "topic": "re-tax",
    "market": "KR",
    "label": "주택 재산세 세율 (지방세법 제111조, 제111조의2)",
    "value": "표준세율: 과세표준 6천만 원 이하 0.1%, 1억 5천만 원 이하 0.15%, 3억 원 이하 0.25%, 3억 원 초과 0.4% (누진) / 1세대 1주택(시가표준액 9억 원 이하) 특례세율: 0.05%, 0.1%, 0.2%, 0.35% (한시 특례, 2026. 12. 28.까지 성립하는 납세의무에 적용)",
    "short": "과세표준 구간에 따라 0.1~0.4%(공시가격 9억 원 이하 1세대 1주택은 2026년 12월 28일까지 성립하는 납세의무에 한해 한시로 0.05~0.35%)",
    "checked": "2026-10-18",
    "level": "press",
    "note": "세율 표는 법령 본문에서 그림으로 제공되어 숫자를 2차 안내로 대조했다. 1세대 1주택 특례세율 조문(제111조의2)은 2026. 12. 28.까지 성립하는 납세의무에만 유효하다고 법령에 적혀 있어, 2027년 이후 연장 여부를 다시 확인해야 한다. 이와 별도로 도시지역분과 지방교육세가 붙는다.",
    "sources": [
      {
        "name": "법제처 국가법령정보센터, 지방세법 (시행 2026. 7. 1., 법률 제21308호)",
        "url": "https://www.law.go.kr/법령/지방세법"
      },
      {
        "name": "glasswallet, 1세대 1주택 재산세 특례 가이드",
        "url": "https://glasswallet.com/calculate/property-tax/single-house/"
      }
    ]
  },
  "kr-re-tax-prop-fmv": {
    "topic": "re-tax",
    "market": "KR",
    "label": "재산세 주택 공정시장가액비율 (지방세법 시행령 제109조)",
    "value": "60% / 2026년 1세대 1주택: 시가표준액 3억 원 이하 43%, 3억 초과~6억 이하 44%, 6억 초과 45%",
    "short": "일반 60%, 1세대 1주택은 공시가격에 따라 43~45%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "법이 정한 범위는 주택 40~80%(1세대 1주택 30~70%)이고, 그 안에서 시행령으로 정한다. 1세대 1주택 특례 비율은 2026년 납세의무분에 대해 정한 것이며 해마다 다시 정한다(2026. 5. 29. 개정).",
    "sources": [
      {
        "name": "법제처 국가법령정보센터, 지방세법 (시행 2026. 7. 1., 법률 제21308호)",
        "url": "https://www.law.go.kr/법령/지방세법"
      },
      {
        "name": "법제처 국가법령정보센터, 지방세법 시행령 (시행 2026. 10. 1., 대통령령 제36736호)",
        "url": "https://www.law.go.kr/법령/지방세법시행령"
      }
    ]
  },
  "kr-re-tax-cpt-fmv": {
    "topic": "re-tax",
    "market": "KR",
    "label": "종합부동산세 주택분 공정시장가액비율 (종합부동산세법 시행령 제2조의4)",
    "value": "60%",
    "short": "60%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "법이 정한 범위는 60~100%이다. 2019~2021년에는 85~95%였다.",
    "sources": [
      {
        "name": "법제처 국가법령정보센터, 종합부동산세법 시행령 제2조의4",
        "url": "https://www.law.go.kr/법령/종합부동산세법시행령"
      },
      {
        "name": "국세청, 종합부동산세 세액계산 흐름도",
        "url": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2353&cntntsId=7735"
      }
    ]
  },
  "kr-re-tax-cpt-deduct": {
    "topic": "re-tax",
    "market": "KR",
    "label": "종합부동산세 주택분 공제 금액 (종합부동산세법 제8조)",
    "value": "1세대 1주택자 12억 원, 그 밖의 개인 9억 원, 다주택 등 법인 0원",
    "short": "1세대 1주택자 12억 원, 그 밖의 개인 9억 원",
    "checked": "2026-10-18",
    "level": "official",
    "note": "공시가격 합계에서 이 금액을 뺀다. 부부 공동명의 1주택자는 각자 9억 원씩 공제받거나 1세대 1주택자 방식을 신청해 고를 수 있다.",
    "sources": [
      {
        "name": "법제처 국가법령정보센터, 종합부동산세법 (시행 2026. 1. 1.)",
        "url": "https://www.law.go.kr/법령/종합부동산세법"
      },
      {
        "name": "국세청, 종합부동산세 세액계산 흐름도",
        "url": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2353&cntntsId=7735"
      }
    ]
  },
  "kr-re-tax-cpt-rate": {
    "topic": "re-tax",
    "market": "KR",
    "label": "종합부동산세 주택분 세율 (개인, 2023년 이후)",
    "value": "2주택 이하: 0.5%(3억 원 이하)~2.7%(94억 원 초과) 7단계 / 3주택 이상: 과세표준 12억 원까지 같고 그 위는 2.0~5.0%",
    "short": "2주택 이하 0.5~2.7%, 3주택 이상 0.5~5.0%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "구간: 3억, 6억, 12억, 25억, 50억, 94억 원. 2주택 이하 세율 0.5, 0.7, 1.0, 1.3, 1.5, 2.0, 2.7%. 3주택 이상 0.5, 0.7, 1.0, 2.0, 3.0, 4.0, 5.0%. 법인은 2.7% 또는 5.0% 단일세율.",
    "sources": [
      {
        "name": "국세청, 종합부동산세 세율",
        "url": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2354&cntntsId=7736"
      },
      {
        "name": "국세청, 종합부동산세 세액계산 흐름도",
        "url": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2353&cntntsId=7735"
      },
      {
        "name": "법제처 국가법령정보센터, 종합부동산세법 (시행 2026. 1. 1.)",
        "url": "https://www.law.go.kr/법령/종합부동산세법"
      }
    ]
  },
  "kr-re-tax-cpt-credit": {
    "topic": "re-tax",
    "market": "KR",
    "label": "종합부동산세 1세대 1주택자 세액공제 (종합부동산세법 제9조)",
    "value": "고령자: 만 60세 20%, 65세 30%, 70세 40% / 장기보유: 5년 20%, 10년 40%, 15년 50% / 합계 한도 80%",
    "short": "나이와 보유 기간에 따라 합쳐서 최대 80%까지",
    "checked": "2026-10-18",
    "level": "official",
    "note": "과세기준일 현재 나이와 보유 기간으로 판단한다. 세부담 상한은 직전 연도 세액의 150%이다.",
    "sources": [
      {
        "name": "법제처 국가법령정보센터, 종합부동산세법 (시행 2026. 1. 1.)",
        "url": "https://www.law.go.kr/법령/종합부동산세법"
      },
      {
        "name": "국세청, 종합부동산세 세액계산 흐름도",
        "url": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2353&cntntsId=7735"
      }
    ]
  },
  "kr-re-tax-cpt-due": {
    "topic": "re-tax",
    "market": "KR",
    "label": "종합부동산세 납부 기간 (종합부동산세법 제16조)",
    "value": "12월 1일~15일 (국세청 고지, 신고납부 선택 가능)",
    "short": "매년 12월 1일부터 15일 사이에",
    "checked": "2026-10-18",
    "level": "official",
    "note": "납부할 세액이 250만 원을 넘으면 6개월 안에 나누어 낼 수 있다.",
    "sources": [
      {
        "name": "법제처 국가법령정보센터, 종합부동산세법 (시행 2026. 1. 1.)",
        "url": "https://www.law.go.kr/법령/종합부동산세법"
      },
      {
        "name": "국세청, 종합부동산세 세액계산 흐름도",
        "url": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2353&cntntsId=7735"
      }
    ]
  },
  "kr-re-tax-cgt-exempt": {
    "topic": "re-tax",
    "market": "KR",
    "label": "1세대1주택 양도소득세 비과세 요건 (소득세법 제89조, 시행령 제154조)",
    "value": "양도일 현재 국내 1주택, 2년 이상 보유 (2017. 8. 3. 이후 취득 당시 조정대상지역에 있던 주택은 보유 기간 중 2년 이상 거주 추가)",
    "short": "세대가 국내에 집 한 채만 가지고 2년 이상 보유(조정대상지역에서 산 집은 2년 이상 거주까지)",
    "checked": "2026-10-18",
    "level": "official",
    "note": "양도가액 12억 원 초과분은 고가주택 계산(kr-re-tax-cgt-highprice). 주택에 딸린 토지는 도시지역 안 건물 정착 면적의 5배(수도권 주거·상업·공업지역 3배), 밖은 10배까지 포함한다. 세대 구성·보유 기간 계산의 예외가 많다.",
    "sources": [
      {
        "name": "국세청, 양도소득세 개요",
        "url": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2308&cntntsId=7707"
      },
      {
        "name": "법제처 국가법령정보센터, 소득세법 (시행 2026. 7. 1.)",
        "url": "https://www.law.go.kr/법령/소득세법"
      },
      {
        "name": "법제처 국가법령정보센터, 소득세법 시행령 (시행 2026. 10. 1., 대통령령 제36737호)",
        "url": "https://www.law.go.kr/법령/소득세법시행령"
      }
    ]
  },
  "kr-re-tax-cgt-highprice": {
    "topic": "re-tax",
    "market": "KR",
    "label": "고가주택 기준 (소득세법 제89조제1항제3호, 시행령 제160조)",
    "value": "양도 당시 실지거래가액 12억 원 초과",
    "short": "12억 원",
    "effective": "2021-12-08",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2021. 12. 8. 이후 양도분부터 9억 원에서 12억 원으로 올랐다. 과세 대상 양도차익 = 양도차익 × (양도가액 − 12억 원) ÷ 양도가액이며, 장기보유특별공제액도 같은 비율로 계산한다.",
    "sources": [
      {
        "name": "국세청, 양도소득세 개요",
        "url": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2308&cntntsId=7707"
      },
      {
        "name": "법제처 국가법령정보센터, 소득세법 (시행 2026. 7. 1.)",
        "url": "https://www.law.go.kr/법령/소득세법"
      },
      {
        "name": "법제처 국가법령정보센터, 소득세법 시행령 (시행 2026. 10. 1., 대통령령 제36737호)",
        "url": "https://www.law.go.kr/법령/소득세법시행령"
      }
    ]
  },
  "kr-re-tax-cgt-rate": {
    "topic": "re-tax",
    "market": "KR",
    "label": "양도소득세 기본세율 (소득세법 제55조, 제104조)",
    "value": "과세표준 1,400만 원 이하 6% ~ 10억 원 초과 45%, 8단계 누진",
    "short": "6~45%의 누진세율",
    "checked": "2026-10-18",
    "level": "official",
    "note": "구간: 1,400만 원 이하 6%, 5,000만 원 이하 15%(누진공제 126만 원), 8,800만 원 이하 24%(576만 원), 1.5억 원 이하 35%(1,544만 원), 3억 원 이하 38%(1,994만 원), 5억 원 이하 40%(2,594만 원), 10억 원 이하 42%(3,594만 원), 10억 원 초과 45%(6,594만 원). 양도소득 기본공제는 연 250만 원. 지방소득세가 세액의 10% 따로 붙는다.",
    "sources": [
      {
        "name": "국세청, 양도소득세 세율",
        "url": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2312&cntntsId=7711"
      }
    ]
  },
  "kr-re-tax-cgt-short": {
    "topic": "re-tax",
    "market": "KR",
    "label": "주택 단기 보유 양도소득세율 (소득세법 제104조)",
    "value": "보유 1년 미만 70%, 1년 이상 2년 미만 60%",
    "short": "1년 미만 70%, 2년 미만 60%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "조정대상지역 다주택 중과세율과 겹치면 세액이 큰 쪽을 적용한다. 미등기 양도는 70%.",
    "sources": [
      {
        "name": "국세청, 양도소득세 세율",
        "url": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2312&cntntsId=7711"
      },
      {
        "name": "법제처 국가법령정보센터, 소득세법 (시행 2026. 7. 1.)",
        "url": "https://www.law.go.kr/법령/소득세법"
      }
    ]
  },
  "kr-re-tax-cgt-ltd-gen": {
    "topic": "re-tax",
    "market": "KR",
    "label": "장기보유특별공제 일반 공제율 (소득세법 제95조제2항)",
    "value": "보유 3년 이상부터 연 2%씩, 3년 6% ~ 15년 이상 30%",
    "short": "보유 3년 6%부터 해마다 2%씩 늘어 최대 30%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2019. 1. 1. 이후 양도분부터 적용하는 율. 조정대상지역 다주택 중과 대상은 공제를 받지 못한다.",
    "sources": [
      {
        "name": "국세청, 장기보유특별공제율",
        "url": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2311&cntntsId=7710"
      }
    ]
  },
  "kr-re-tax-cgt-ltd-1h": {
    "topic": "re-tax",
    "market": "KR",
    "label": "장기보유특별공제 1세대 1주택(고가주택) 공제율 (소득세법 제95조제2항)",
    "value": "보유 3년 이상 연 4%(최대 40%) + 거주 2년 이상 연 4%(최대 40%), 합계 최대 80%",
    "short": "보유 기간 1년에 4%, 거주 기간 1년에 4%를 더해 최대 80%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "보유 3년 이상이면서 보유 중 거주 2년 이상이어야 이 공제율을 쓴다. 거주 2년 이상 3년 미만은 8%(보유 3년 이상인 경우에 한함). 요건을 못 채우면 일반 공제율로 계산한다.",
    "sources": [
      {
        "name": "국세청, 장기보유특별공제율",
        "url": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2311&cntntsId=7710"
      }
    ]
  },
  "kr-re-tax-cgt-temp2": {
    "topic": "re-tax",
    "market": "KR",
    "label": "양도소득세 일시적 2주택 특례 (소득세법 시행령 제155조제1항)",
    "value": "종전 주택 취득 후 1년 이상 지나 신규 주택 취득 + 신규 주택 취득일부터 3년 이내 종전 주택 양도 (종전 주택이 조정대상지역에 있는 상태에서 조정대상지역의 신규 주택을 취득한 경우 2년)",
    "short": "원래 집을 산 지 1년이 지나 새집을 사고, 새집을 산 날부터 3년(두 집 모두 조정대상지역이면 2년) 안에 원래 집을 판다",
    "effective": "2026-10-01",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2년 단축은 2026. 9. 30. 개정, 2026. 10. 1. 시행. 2026. 8. 4. 이후 조정대상지역 신규 주택을 취득하고 시행 이후 종전 주택을 파는 경우부터 적용하며, 2026. 8. 3.까지 취득했거나 매매계약 후 계약금을 지급한 경우는 종전(3년) 규정을 따른다(부칙 제2조). 종합부동산세의 일시적 2주택 특례도 같은 방향으로 바뀌어 2027. 6. 1. 납세의무분부터 적용된다(보도). 종전 주택 자체도 비과세 요건(보유·거주)을 갖춰야 한다.",
    "sources": [
      {
        "name": "법제처 국가법령정보센터, 소득세법 시행령 (시행 2026. 10. 1., 대통령령 제36737호)",
        "url": "https://www.law.go.kr/법령/소득세법시행령"
      },
      {
        "name": "정책브리핑, 조정대상지역 일시적 2주택 특례 '2년'으로 단축…내달 1일 시행 (2026. 9. 29.)",
        "url": "https://www.korea.kr/news/policyNewsView.do?newsId=148972735"
      },
      {
        "name": "더나은미래, 정부, 조정대상지역 2주택 처분기한 2년으로 단축...10월부터 시행 (2026. 9.)",
        "url": "https://futurechosun.com/archives/161436"
      }
    ]
  },
  "kr-re-tax-cgt-heavy": {
    "topic": "re-tax",
    "market": "KR",
    "label": "조정대상지역 다주택 양도소득세 중과 (소득세법 제104조제7항)",
    "value": "조정대상지역 주택 양도 시 1세대 2주택 기본세율 + 20%포인트, 3주택 이상 + 30%포인트, 장기보유특별공제 배제 (한시 배제 2026. 5. 9. 종료, 2026. 5. 10. 양도분부터 다시 적용)",
    "short": "조정대상지역의 집을 팔 때 2주택 세대는 기본세율에 20%포인트, 3주택 이상 세대는 30%포인트를 더하고 장기보유특별공제를 주지 않는다",
    "effective": "2026-05-10",
    "checked": "2026-10-18",
    "level": "official",
    "note": "2022. 5. 10.~2026. 5. 9. 양도하는 보유 2년 이상 주택은 기본세율을 적용했다(소득세법 시행령 제167조의3 등). 정부는 2026. 2. 12. 연장하지 않겠다고 발표했고, 2026. 5. 9.까지 매매계약을 하고 계약금을 받은 경우에 한한 경과 규정을 두었다. 장기임대주택, 지방 저가주택 등 중과 배제 주택이 따로 있다.",
    "sources": [
      {
        "name": "국세청, 양도소득세 세율",
        "url": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2312&cntntsId=7711"
      },
      {
        "name": "법제처 국가법령정보센터, 소득세법 (시행 2026. 7. 1.)",
        "url": "https://www.law.go.kr/법령/소득세법"
      },
      {
        "name": "법제처 국가법령정보센터, 소득세법 시행령 (시행 2026. 10. 1., 대통령령 제36737호)",
        "url": "https://www.law.go.kr/법령/소득세법시행령"
      },
      {
        "name": "정책브리핑, '다주택자 양도세 중과' 유예 5월 9일 종료…잔금일 최장 6개월 유예 (2026. 2. 12.)",
        "url": "https://www.korea.kr/news/policyNewsView.do?newsId=148959488"
      }
    ]
  },
  "kr-re-tax-cgt-filing": {
    "topic": "re-tax",
    "market": "KR",
    "label": "양도소득세 예정신고 기한 (소득세법 제105조)",
    "value": "양도일(대금청산일)이 속하는 달의 말일부터 2개월 이내",
    "short": "판 날(잔금일)이 속한 달의 말일부터 2개월 안",
    "checked": "2026-10-18",
    "level": "official",
    "note": "여러 건을 양도했으면 다음 해 5월 1~31일에 확정신고한다. 신고하지 않으면 무신고가산세 20%와 하루 0.022%의 납부지연가산세가 붙는다.",
    "sources": [
      {
        "name": "국세청, 양도소득세 개요",
        "url": "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2308&cntntsId=7707"
      }
    ]
  },
  "kr-sub-monthly-range": {
    "topic": "subscription",
    "market": "KR",
    "label": "주택청약종합저축 월 납입금 범위",
    "value": "2만~50만 원",
    "short": "매달 2만 원 이상 50만 원 이하",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 제9조제3항. 예치기준금액 최고한도(1,500만 원)까지는 그보다 많이 넣을(선납) 수 있으나, 선납은 24회분까지만 월납입금으로 인정한다(제10조).",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 (2026.6.15 시행본)",
        "url": "https://www.law.go.kr/법령/주택공급에관한규칙"
      }
    ]
  },
  "kr-sub-monthly-cap": {
    "topic": "subscription",
    "market": "KR",
    "label": "저축총액 산정 시 월 납입 인정 한도",
    "value": "25만 원",
    "short": "한 달에 25만 원",
    "effective": "2024-11-01",
    "checked": "2026-10-18",
    "level": "official",
    "note": "월납입금이 25만 원을 넘으면 25만 원으로 계산한다(주택공급에 관한 규칙 제10조제5항제1호). 국민주택(공공분양) 순차에서 저축총액을 비교할 때 쓴다. 이전에는 10만 원이었다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 (2026.6.15 시행본)",
        "url": "https://www.law.go.kr/법령/주택공급에관한규칙"
      },
      {
        "name": "뉴시스, 2024.10.15",
        "url": "https://mobile.newsis.com/view/NISX20241015_0002921319"
      }
    ]
  },
  "kr-sub-rate": {
    "topic": "subscription",
    "market": "KR",
    "label": "주택청약종합저축 이자율",
    "value": "연 2.3~3.1%(가입 기간별)",
    "short": "가입 기간에 따라 연 2.3%에서 3.1%",
    "effective": "2024-09-23",
    "checked": "2026-10-18",
    "level": "press",
    "note": "2024년 9월 23일 0.3%p 올린 값이다. 가장 높은 3.1%는 2년 이상 가입분에 적용한다. 2025~2026년에 다시 바뀌었다는 자료는 찾지 못했다. 이자율은 국토교통부 고시로 정하므로 은행 안내에서 확인한다.",
    "sources": [
      {
        "name": "파이낸셜뉴스, 2024.9.25",
        "url": "https://www.fnnews.com/news/202409250925372545"
      }
    ]
  },
  "kr-sub-deduction": {
    "topic": "subscription",
    "market": "KR",
    "label": "주택청약종합저축 소득공제",
    "value": "총급여 7,000만 원 이하, 연 납입 300만 원 한도의 40%(최대 120만 원)",
    "short": "총급여 7천만 원 이하 무주택 세대주(배우자 포함)가 연 300만 원까지 넣은 금액의 40%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "조세특례제한법 제87조제2항. 과세기간 중 주택을 소유하지 않은 세대의 세대주 또는 세대주의 배우자인 근로자가 2028년 12월 31일까지 납입한 금액에 적용한다. 다음 해 2월 말까지 은행에 무주택 확인서를 내야 한다. 주택 당첨 등 외의 사유로 중도해지하면 그해 납입분은 공제하지 않는다. 정부가 상시화를 추진한다는 보도가 있으나 확정 여부는 확인하지 못했다.",
    "sources": [
      {
        "name": "국가법령정보센터, 조세특례제한법 제87조 (2026.9.18 시행본)",
        "url": "https://www.law.go.kr/법령/조세특례제한법"
      }
    ]
  },
  "kr-sub-rank1": {
    "topic": "subscription",
    "market": "KR",
    "label": "청약 1순위 가입 기간·납입 기준",
    "value": "수도권 가입 1년·납입 12회, 그 밖 지역 6개월·6회, 투기과열지구·청약과열지역 2년·24회(민영주택은 횟수 대신 예치금)",
    "short": "수도권 1년, 지방 6개월, 규제지역 2년",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 제27조(국민주택)·제28조(민영주택) 제1항. 시·도지사는 수도권 24개월, 지방 12개월까지 늘려 공고할 수 있다. 투기과열지구·청약과열지역은 세대주이고 세대원 모두 5년 안에 당첨된 적이 없어야 하며, 민영주택은 2주택 이상 세대도 제외한다. 위축지역은 가입 1개월이면 된다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 (2026.6.15 시행본)",
        "url": "https://www.law.go.kr/법령/주택공급에관한규칙"
      }
    ]
  },
  "kr-sub-deposit": {
    "topic": "subscription",
    "market": "KR",
    "label": "민영주택 청약 예치기준금액",
    "value": "85㎡ 이하 300만(서울·부산)·250만(기타 광역시)·200만 원(그 밖), 102㎡ 이하 600만·400만·300만 원, 135㎡ 이하 1,000만·700만·400만 원, 모든 면적 1,500만·1,000만·500만 원",
    "short": "신청자 거주지와 면적에 따라 200만~1,500만 원",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 별표 2. 지역은 입주자모집공고일 현재 신청자의 주민등록상 거주지 기준이다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 별표 2 민영주택 청약 예치기준금액",
        "url": "https://www.law.go.kr/법령별표서식/(주택공급에 관한 규칙,20260615,별표2)"
      }
    ]
  },
  "kr-sub-points": {
    "topic": "subscription",
    "market": "KR",
    "label": "청약 가점 항목과 상한",
    "value": "무주택기간 32점, 부양가족 수 35점, 청약통장 가입기간 17점, 합계 84점 만점",
    "short": "84점 만점(무주택 32·부양가족 35·가입기간 17)",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 별표 1. 무주택기간은 1년 미만 2점에서 1년마다 2점씩 올라 15년 이상 32점, 부양가족은 0명 5점에서 1명마다 5점씩 6명 이상 35점, 가입기간은 6개월 미만 1점, 1년 미만 2점, 이후 1년마다 1점씩 15년 이상 17점이다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 별표 1 가점제 적용기준",
        "url": "https://www.law.go.kr/법령별표서식/(주택공급에 관한 규칙,20260615,별표1)"
      }
    ]
  },
  "kr-sub-spouse-bonus": {
    "topic": "subscription",
    "market": "KR",
    "label": "배우자 청약통장 가입기간 가점",
    "value": "배우자 가입기간의 50%를 점수로 바꿔 최대 3점, 가입기간 항목 합계는 17점까지",
    "short": "배우자 통장 기간의 절반, 최대 3점",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 별표 1 비고 2. 노부모 부양 특별공급에는 적용하지 않는다. 2024년 개정으로 도입되었다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 별표 1 가점제 적용기준",
        "url": "https://www.law.go.kr/법령별표서식/(주택공급에 관한 규칙,20260615,별표1)"
      }
    ]
  },
  "kr-sub-ratio-regulated": {
    "topic": "subscription",
    "market": "KR",
    "label": "규제지역 민영주택 가점제 비율",
    "value": "투기과열지구 기준 60㎡ 이하 40%, 60㎡ 초과 85㎡ 이하 70%, 85㎡ 초과 80%(청약과열지역의 85㎡ 초과는 50%)",
    "short": "면적에 따라 40~80%",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 제28조제2항·제4항. 청약과열지역(조정대상지역 중 과열지역)의 85㎡ 이하는 투기과열지구와 같다. 수도권 개발제한구역 해제 공공주택지구도 85㎡ 이하는 같은 비율이다. 나머지는 추첨한다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 (2026.6.15 시행본)",
        "url": "https://www.law.go.kr/법령/주택공급에관한규칙"
      }
    ]
  },
  "kr-sub-ratio-other": {
    "topic": "subscription",
    "market": "KR",
    "label": "비규제지역 민영주택 가점제 비율",
    "value": "85㎡ 이하는 40% 이하에서 시장·군수·구청장이 공고한 비율만 가점제(공고가 없으면 전부 추첨), 85㎡ 초과는 전부 추첨",
    "short": "85㎡ 이하 40% 이하, 85㎡ 초과 전부 추첨",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 제28조제2항제1호나목·제2호나목, 제4항. 이 경우에는 1주택 세대도 가점제 대상에 포함된다(제28조제6항 단서).",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 (2026.6.15 시행본)",
        "url": "https://www.law.go.kr/법령/주택공급에관한규칙"
      }
    ]
  },
  "kr-sub-lottery-nohome": {
    "topic": "subscription",
    "market": "KR",
    "label": "추첨 물량의 무주택자 우선 배정",
    "value": "추첨 물량의 75%를 무주택자끼리 먼저 추첨하고, 나머지는 무주택자와 1주택자가 함께, 그래도 남으면 1순위 전체가 추첨한다",
    "short": "추첨 물량의 75%를 무주택자에게 먼저",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 제28조제8항. 투기과열지구, 청약과열지역, 수도권, 광역시에서 추첨 대상자가 물량보다 많을 때 적용한다. 소수점 이하는 올린다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 (2026.6.15 시행본)",
        "url": "https://www.law.go.kr/법령/주택공급에관한규칙"
      }
    ]
  },
  "kr-sub-sp-newlywed": {
    "topic": "subscription",
    "market": "KR",
    "label": "신혼부부 특별공급 요건",
    "value": "혼인 7년 이내 무주택세대구성원, 월평균 소득 140%(맞벌이 160%) 이하 또는 부동산 자산 기준 이하. 민영 85㎡ 이하는 건설량 15%, 국민주택은 20% 범위",
    "short": "혼인 7년 이내, 소득 140%(맞벌이 160%) 이하",
    "effective": "2026-06-15",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 제41조. 소득은 전년도 도시근로자 가구당 월평균 소득 대비이다. 물량의 50%는 소득 100%(맞벌이 120%) 이하, 20%는 140%(160%) 이하에 먼저 공급하고 나머지는 자산 기준 충족자까지 추첨한다. 혼인기간 중 자녀가 있으면 1순위. 자산 기준은 건강보험 재산등급 29등급 금액 기준이다. 2026년 6월 15일 개정으로 일부 요건(제1항제1호마목)이 삭제되고 신생아 물량은 신생아 특별공급으로 정리되었다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 (2026.6.15 시행본)",
        "url": "https://www.law.go.kr/법령/주택공급에관한규칙"
      }
    ]
  },
  "kr-sub-sp-first": {
    "topic": "subscription",
    "market": "KR",
    "label": "생애최초 특별공급 요건",
    "value": "세대원 모두 집을 가진 적 없고, 5년 이상 소득세 납부, 혼인 중이거나 자녀가 있을 것(1인 가구는 60㎡ 이하만), 소득 국민주택 130%·민영 160% 이하 또는 자산 기준. 국민주택 20%, 민영 85㎡ 이하 17%(공공택지 외 7%) 범위",
    "short": "생애 첫 주택, 소득세 5년 납부, 소득 130~160% 이하",
    "effective": "2026-06-15",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 제43조. 국민주택은 1순위이면서 저축액 600만 원 이상이어야 한다. 1인 가구 등 미혼 무자녀자는 마지막 추첨 단계에서만 경쟁한다. 2026년 6월 15일 개정으로 일부 요건(제1항제5호)이 삭제되었다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 (2026.6.15 시행본)",
        "url": "https://www.law.go.kr/법령/주택공급에관한규칙"
      }
    ]
  },
  "kr-sub-sp-multi": {
    "topic": "subscription",
    "market": "KR",
    "label": "다자녀가구 특별공급 요건",
    "value": "미성년 자녀 2명 이상인 무주택세대구성원, 건설량의 10%(승인권자가 인정하면 15%) 범위",
    "short": "미성년 자녀 2명 이상",
    "effective": "2024-03-25",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 제40조. 2024년 3월 개정으로 자녀 기준이 3명에서 2명으로 낮아졌다. 공공 사업주체의 85㎡ 이하 주택은 소득 120% 이하 기준이 붙는다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 (2026.6.15 시행본)",
        "url": "https://www.law.go.kr/법령/주택공급에관한규칙"
      }
    ]
  },
  "kr-sub-sp-parents": {
    "topic": "subscription",
    "market": "KR",
    "label": "노부모 부양 특별공급 요건",
    "value": "65세 이상 직계존속을 3년 이상 같은 주민등록표에서 부양하는 1순위 무주택 세대주, 건설량의 3%(공공 사업주체 85㎡ 이하 5%) 범위",
    "short": "65세 이상 부모를 3년 이상 부양한 무주택 세대주",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 제46조. 민영주택은 가점제로 고른다. 피부양자의 배우자도 무주택이어야 한다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 (2026.6.15 시행본)",
        "url": "https://www.law.go.kr/법령/주택공급에관한규칙"
      }
    ]
  },
  "kr-sub-sp-newborn": {
    "topic": "subscription",
    "market": "KR",
    "label": "신생아 특별공급 요건",
    "value": "2세 미만 자녀(태아·입양 포함)가 있는 1순위 무주택세대구성원, 소득 국민주택 130%·민영 160% 이하 또는 자산 기준. 국민주택 15%, 민영 85㎡ 이하 10% 범위",
    "short": "2세 미만 자녀가 있는 무주택 세대",
    "effective": "2026-06-15",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 제35조의3(2026.6.15 전문개정). 민영주택 신생아 특별공급이 이때 따로 생겼다. 물량의 50%·20%를 소득이 낮은 순서로 먼저 공급하고 나머지는 추첨한다. 이 개정은 시행 이후 입주자모집공고 단지부터 적용한다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 (2026.6.15 시행본)",
        "url": "https://www.law.go.kr/법령/주택공급에관한규칙"
      },
      {
        "name": "아시아경제, 2026.6.14",
        "url": "https://www.asiae.co.kr/article/2026061412330505644"
      }
    ]
  },
  "kr-sub-sp-birth-extra": {
    "topic": "subscription",
    "market": "KR",
    "label": "출산 가구 특별공급 추가 기회",
    "value": "2024년 6월 19일 이후 출생한 자녀(태아·입양 포함)가 있으면 이미 특별공급을 받았어도 신생아·다자녀·신혼부부·노부모 특별공급을 한 번 더 신청할 수 있다",
    "short": "2024.6.19 이후 출생 자녀가 있으면 특별공급 한 번 더",
    "effective": "2025-03-31",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 제55조의3제3항. 집을 가진 경우에도 신청할 수 있으나 입주 전에 기존 주택을 처분해야 한다(제5항).",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 (2026.6.15 시행본)",
        "url": "https://www.law.go.kr/법령/주택공급에관한규칙"
      }
    ]
  },
  "kr-sub-payment": {
    "topic": "subscription",
    "market": "KR",
    "label": "분양 대금 납부 한도와 시기",
    "value": "계약금 20%(청약금 포함), 중도금 60%(계약금이 10% 이하면 70%) 이내, 첫 중도금은 계약 1개월 뒤, 잔금은 사용검사 뒤",
    "short": "계약금 20%·중도금 60% 이내",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 제60조. 중도금은 건축공정 기준 시점 전후로 각 2회 이상 나눠 받고, 기준 시점 전에는 중도금의 50%를 넘게 받을 수 없다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 (2026.6.15 시행본)",
        "url": "https://www.law.go.kr/법령/주택공급에관한규칙"
      }
    ]
  },
  "kr-sub-contract": {
    "topic": "subscription",
    "market": "KR",
    "label": "공급계약 체결 시기",
    "value": "당첨자 발표일부터 11일이 지난 뒤 3일 이상의 기간에",
    "short": "당첨자 발표 11일 뒤부터",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 제59조제2항. 이 사이에 사업주체가 부적격 여부를 확인한다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 (2026.6.15 시행본)",
        "url": "https://www.law.go.kr/법령/주택공급에관한규칙"
      }
    ]
  },
  "kr-sub-resale": {
    "topic": "subscription",
    "market": "KR",
    "label": "분양주택 전매제한 기간",
    "value": "투기과열지구·조정대상지역(과열) 수도권 3년·그 밖 1년, 분양가상한제 공공택지 수도권 3년·그 밖 1년, 그 밖 수도권 민간택지 과밀억제권역 1년·성장관리·자연보전권역 6개월, 지방 광역시 도시지역 6개월",
    "short": "수도권 규제지역 3년",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택법 제64조, 주택법 시행령 별표 3(2024.6.18 개정). 당첨일부터 세며, 둘 이상 해당하면 가장 긴 기간을 적용한다. 기간 안에 소유권이전등기를 마치면 기간이 지난 것으로 본다. 토지임대부 분양주택은 10년.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택법 (2026.9.8 시행본)",
        "url": "https://www.law.go.kr/법령/주택법"
      },
      {
        "name": "국가법령정보센터, 주택법 시행령 (2026.9.8 시행본) 제60조의2·별표 3",
        "url": "https://www.law.go.kr/법령/주택법시행령"
      }
    ]
  },
  "kr-sub-residence": {
    "topic": "subscription",
    "market": "KR",
    "label": "분양가상한제 주택 거주의무",
    "value": "최초 입주가능일부터 3년 안에 입주, 거주 기간은 분양가가 인근 시세의 80% 미만이면 공공택지 5년·민간택지 3년, 80% 이상 100% 미만이면 3년·2년",
    "short": "수도권 분양가상한제 주택 2~5년 실거주",
    "effective": "2024-03-19",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택법 제57조의2, 시행령 제60조의2. 수도권 분양가상한제 주택과 토지임대부 분양주택에 적용한다. 2024년 3월 개정으로 '최초 입주가능일부터 3년 이내' 입주하도록 시작 시점을 늦출 수 있게 되었다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택법 (2026.9.8 시행본)",
        "url": "https://www.law.go.kr/법령/주택법"
      },
      {
        "name": "국가법령정보센터, 주택법 시행령 (2026.9.8 시행본) 제60조의2·별표 3",
        "url": "https://www.law.go.kr/법령/주택법시행령"
      }
    ]
  },
  "kr-sub-rewin": {
    "topic": "subscription",
    "market": "KR",
    "label": "재당첨 제한 기간",
    "value": "분양가상한제 주택·투기과열지구 10년, 청약과열지역 7년, 토지임대부 5년, 그 밖 국민주택 등은 면적·지역에 따라 1~5년",
    "short": "당첨일부터 최장 10년",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 제54조. 당첨자의 세대 전체에 적용한다. 국민주택 등 85㎡ 이하는 과밀억제권역 5년·그 밖 3년, 85㎡ 초과는 3년·1년이다. 비규제지역 민영주택은 제한 대상 주택에서 빠진다.",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 (2026.6.15 시행본)",
        "url": "https://www.law.go.kr/법령/주택공급에관한규칙"
      }
    ]
  },
  "kr-sub-ineligible": {
    "topic": "subscription",
    "market": "KR",
    "label": "부적격 당첨자의 청약 제한",
    "value": "당첨일부터 수도권 1년, 그 밖 지역 6개월(투기과열지구·청약과열지역 1년), 위축지역 3개월 동안 다른 분양주택에 당첨될 수 없다",
    "short": "수도권 1년, 지방 6개월",
    "checked": "2026-10-18",
    "level": "official",
    "note": "주택공급에 관한 규칙 제58조제3항. 소명 기간(7일 이상, 제52조제3항)에 자격을 증명하지 못하면 당첨이 취소된다. 고친 점수로도 당첨선 이상이면 당첨을 유지한다(제58조제4항).",
    "sources": [
      {
        "name": "국가법령정보센터, 주택공급에 관한 규칙 (2026.6.15 시행본)",
        "url": "https://www.law.go.kr/법령/주택공급에관한규칙"
      }
    ]
  }
};

