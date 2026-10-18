// 실전 용어. 장 본문의 <h3><a href="#/term/ID">…</a></h3>가 이 목록을 가리키며, 제목 옆에 한자와 영어가 붙는다.
// econ: 경제학습에서 같은 개념을 설명하는 카드 id (있을 때만).
window.GLOSSARY = [
  { id: "deposit", chapter: "common-1", title: "투자자예탁금", hanja: "投資者預託金", en: "investor deposits",
    one: "주식을 사려고 증권 계좌에 넣어 둔 돈이다. 증권회사는 이 돈을 자기 재산과 따로 맡겨 둔다." },
  { id: "session", chapter: "common-1", title: "정규시장", hanja: "正規市場", en: "regular trading session",
    one: "한국거래소가 주식을 정식으로 사고파는 기본 시간대이다. 시작과 마감 가격은 모아 둔 주문으로 한 번에 정한다." },
  { id: "ats", chapter: "common-1", title: "대체거래소", hanja: "代替去來所", en: "alternative trading system, ATS",
    one: "한국거래소 말고 상장 주식을 사고팔 수 있는 또 하나의 시장이다. 우리나라에서는 넥스트레이드가 2025년 3월 문을 열었다." },
  { id: "tick", chapter: "common-1", title: "호가 단위", hanja: "呼價單位", en: "tick size",
    one: "주문 가격을 부를 수 있는 한 칸의 크기이다. 주가가 높을수록 칸이 커진다." },
  { id: "limit", chapter: "common-1", title: "가격제한폭", hanja: "價格制限幅", en: "daily price limit",
    one: "하루 동안 주가가 움직일 수 있는 위아래 끝이다. 위 끝을 상한가, 아래 끝을 하한가라고 한다." },
  { id: "order", chapter: "common-1", title: "지정가 주문/시장가 주문", hanja: "指定價 注文/市場價 注文", en: "limit order / market order",
    one: "값을 정해 두고 그 값이나 더 유리한 값에만 사고파는 주문과, 값을 묻지 않고 지금 맞는 값에 바로 사고파는 주문이다." },
  { id: "execution", chapter: "common-1", title: "체결", hanja: "締結", en: "execution",
    one: "사려는 주문과 팔려는 주문이 가격에서 맞아 거래가 성사되는 일이다. 돈과 주식이 실제로 옮겨 가는 결제와는 다르다." },
  { id: "settle-date", chapter: "common-1", title: "결제일", hanja: "決濟日", en: "settlement date",
    one: "체결된 거래의 돈과 주식이 실제로 옮겨 가는 날이다. 한국 주식은 거래한 날부터 2영업일 뒤이다.", econ: "t183" },
  { id: "tx-tax", chapter: "common-1", title: "증권거래세", hanja: "證券去來稅", en: "securities transaction tax",
    one: "주식을 팔 때 판 금액에 붙는 세금이다. 이익이 났는지와 상관없이 낸다." },
  { id: "commission", chapter: "common-1", title: "거래 수수료", hanja: "去來 手數料", en: "brokerage commission",
    one: "주식을 사고팔 때 증권회사에 내는 값이다. 증권회사와 주문 경로마다 다르다." }
];
