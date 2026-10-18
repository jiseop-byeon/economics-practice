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
  }
};
