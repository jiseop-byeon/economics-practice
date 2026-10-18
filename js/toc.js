// 목차. status: "ready" 읽을 수 있음 / "planned" 쓸 예정. market: 시장별 규칙을 주로 다루면 "KR" 또는 "US".
window.PARTS = [
  { id: "common", name: "공통 실무", line: "어느 상품이든 먼저 아는 것. 주문이 체결되어 돈이 옮겨 가기까지, 그리고 그 사이에 빠져나가는 비용." },
  { id: "stocks", name: "주식", line: "거래소 규칙, 공시와 재무제표 읽기, 값을 매기는 기본 방법." },
  { id: "bonds", name: "채권", line: "개인이 채권을 사는 길, 수익률과 가격의 계산, 금리와 신용의 위험." },
  { id: "derivatives", name: "선물과 옵션", line: "계약 하나의 크기, 증거금과 매일의 정산, 원금보다 크게 잃는 구조." },
  { id: "realestate", name: "부동산", line: "서류 읽기, 계약 절차, 보증금 보호, 대출 규제, 사고 보유하고 파는 단계의 세금." },
  { id: "crypto", name: "가상자산", line: "거래소와 보관, 이용자 보호 법제, 사라질 수 있는 위험, 세금." },
  { id: "risk", name: "위험 관리", line: "수익률을 제대로 재고, 잃을 수 있는 폭을 미리 알고, 기록으로 돌아본다." },
  { id: "reading", name: "자료 읽기", line: "발표 일정, 공시, 리포트를 읽는 순서." },
  { id: "cases", name: "사고와 분쟁 사례", line: "실제로 사람들이 돈을 잃은 방식. 금융감독원 분쟁조정 사례에서 배운다." },
  { id: "us", name: "미국 시장", line: "한국과 다른 거래 시간, 가격 장치, 결제, 공시, 세금." }
];

window.CHAPTERS = [
  { id: "common-1", part: "common", status: "ready", title: "주식 한 주를 사면 일어나는 일", dek: "주문 버튼을 누른 순간부터 판 돈을 찾기까지. 거래 시간, 가격의 울타리, 결제일, 그리고 팔 때 빠져나가는 세금을 한 거래로 따라간다." },
  { id: "common-2", part: "common", status: "planned", title: "주문의 종류와 체결 순서", dek: "지정가와 시장가, 가격 우선과 시간 우선, 단일가매매와 접속매매." },
  { id: "common-3", part: "common", status: "planned", title: "수수료와 세금을 빼고 남는 돈", dek: "거래 비용이 수익률을 얼마나 깎는지, 자주 사고팔 때 어떻게 쌓이는지." },
  { id: "common-4", part: "common", status: "planned", title: "보호가 미치는 곳과 미치지 않는 곳", dek: "예금보험, 투자자예탁금 보호, 설명 의무와 적합성 원칙. 원금을 지켜 주는 것과 아닌 것." },

  { id: "stocks-1", part: "stocks", status: "planned", title: "가격의 울타리: 가격제한폭, 변동성완화장치, 서킷브레이커", dek: "주가가 한쪽으로 쏠릴 때 거래소가 거는 장치들." },
  { id: "stocks-2", part: "stocks", status: "planned", title: "공시 읽기", dek: "전자공시시스템에서 사업보고서와 주요사항보고서를 찾고 읽는 순서." },
  { id: "stocks-3", part: "stocks", status: "planned", title: "재무제표 세 장", dek: "재무상태표, 손익계산서, 현금흐름표가 서로 어떻게 이어지는지." },
  { id: "stocks-4", part: "stocks", status: "planned", title: "값을 매기는 기본 방법", dek: "PER, PBR, 배당수익률, 현금흐름 할인. 숫자가 말해 주는 것과 말해 주지 않는 것." },
  { id: "stocks-5", part: "stocks", status: "planned", title: "배당, 증자, 분할이 주가에 남기는 흔적", dek: "배당락과 권리락, 유상증자와 무상증자, 액면분할." },
  { id: "stocks-6", part: "stocks", status: "planned", title: "ETF의 구조", dek: "지수를 따라가는 방법, 괴리와 추적 오차, 레버리지와 인버스 상품이 오래 들고 있으면 어긋나는 이유." },
  { id: "stocks-7", part: "stocks", status: "planned", title: "공매도와 신용거래", dek: "빌려서 파는 거래와 빌려서 사는 거래의 규칙과 위험." },

  { id: "bonds-1", part: "bonds", status: "planned", title: "개인이 채권을 사는 길", dek: "장내와 장외, 증권사 창구, 발행시장과 유통시장." },
  { id: "bonds-2", part: "bonds", status: "planned", title: "수익률과 가격의 계산", dek: "표면금리, 만기수익률, 산 값에 따라 달라지는 실제 수익." },
  { id: "bonds-3", part: "bonds", status: "planned", title: "금리 위험과 듀레이션", dek: "금리가 1%포인트 움직일 때 채권 값이 얼마나 움직이는지." },
  { id: "bonds-4", part: "bonds", status: "planned", title: "신용등급과 스프레드", dek: "등급이 낮은 채권이 더 많은 이자를 주는 이유와 그 대가." },
  { id: "bonds-5", part: "bonds", status: "planned", title: "채권의 세금", dek: "이자에 붙는 세금과 매매차익의 처리." },

  { id: "derivatives-1", part: "derivatives", status: "planned", title: "선물 계약 하나의 크기", dek: "거래 단위와 승수. 작은 증거금 뒤에 있는 큰 계약 금액." },
  { id: "derivatives-2", part: "derivatives", status: "planned", title: "증거금과 매일의 정산", dek: "개시증거금, 유지증거금, 추가 증거금 요구, 반대매매." },
  { id: "derivatives-3", part: "derivatives", status: "planned", title: "만기와 최종 결제", dek: "만기일에 무슨 일이 일어나는지, 다음 만기로 옮기는 비용." },
  { id: "derivatives-4", part: "derivatives", status: "planned", title: "옵션의 손익 구조", dek: "콜과 풋, 산 쪽과 판 쪽. 판 쪽의 손실이 열려 있는 이유." },
  { id: "derivatives-5", part: "derivatives", status: "planned", title: "원금보다 크게 잃는 과정", dek: "레버리지가 손익을 키우는 계산을 한 거래로 따라간다." },
  { id: "derivatives-6", part: "derivatives", status: "planned", title: "개인 투자자가 들어가기 전의 요건", dek: "사전 교육, 모의거래, 기본 예탁금 제도." },

  { id: "realestate-1", part: "realestate", status: "planned", title: "등기부 읽기", dek: "갑구와 을구, 소유권과 근저당. 계약 전에 반드시 보는 칸." },
  { id: "realestate-2", part: "realestate", status: "planned", title: "건축물대장과 토지이용계획", dek: "위반건축물, 용도, 지을 수 있는 것과 없는 것." },
  { id: "realestate-3", part: "realestate", status: "planned", title: "매매 계약 절차", dek: "가계약, 계약금, 중도금, 잔금, 등기 이전까지." },
  { id: "realestate-4", part: "realestate", status: "planned", title: "임대차와 보증금 보호", dek: "전입신고와 확정일자, 대항력과 우선변제, 보증보험." },
  { id: "realestate-5", part: "realestate", status: "planned", title: "대출 규제", dek: "LTV, DSR, 스트레스 DSR이 실제 대출 한도를 어떻게 정하는지." },
  { id: "realestate-6", part: "realestate", status: "planned", title: "사고, 보유하고, 파는 단계의 세금", dek: "취득세, 재산세와 종합부동산세, 양도소득세." },
  { id: "realestate-7", part: "realestate", status: "planned", title: "청약", dek: "청약통장, 가점과 추첨, 특별공급." },

  { id: "crypto-1", part: "crypto", status: "planned", title: "가상자산 거래소의 구조", dek: "원화 마켓, 실명 계좌, 거래소가 가진 장부와 블록체인 위의 기록." },
  { id: "crypto-2", part: "crypto", status: "planned", title: "이용자 보호 법제", dek: "가상자산이용자보호법이 보호하는 것과 보호하지 않는 것." },
  { id: "crypto-3", part: "crypto", status: "planned", title: "지갑과 보관", dek: "거래소 보관과 개인 지갑, 개인 키를 잃으면 생기는 일." },
  { id: "crypto-4", part: "crypto", status: "planned", title: "사라질 수 있는 위험", dek: "상장폐지, 해킹, 프로젝트 중단." },
  { id: "crypto-5", part: "crypto", status: "planned", title: "가상자산의 세금", dek: "과세 제도의 현재 상태와 일정." },

  { id: "risk-1", part: "risk", status: "planned", title: "수익률을 제대로 재기", dek: "단순 수익률과 연환산, 복리, 세후, 물가를 뺀 실질 수익률." },
  { id: "risk-2", part: "risk", status: "planned", title: "변동성과 최대 낙폭", dek: "얼마나 흔들리는지, 최악에 얼마나 떨어졌는지." },
  { id: "risk-3", part: "risk", status: "planned", title: "분산의 효과와 한계", dek: "함께 움직이는 정도와, 위기 때 함께 떨어지는 이유." },
  { id: "risk-4", part: "risk", status: "planned", title: "한 자산에 넣는 비중", dek: "잃어도 버틸 수 있는 크기를 먼저 정하는 계산." },
  { id: "risk-5", part: "risk", status: "planned", title: "재조정과 기록", dek: "비중을 다시 맞추는 이유, 매매 일지와 복기." },

  { id: "reading-1", part: "reading", status: "planned", title: "경제지표 발표 일정", dek: "언제 무엇이 발표되고, 시장은 무엇과 비교해 움직이는지." },
  { id: "reading-2", part: "reading", status: "planned", title: "리포트 읽는 순서", dek: "목표주가와 의견보다 먼저 보는 가정과 숫자." },

  { id: "cases-1", part: "cases", status: "planned", title: "불완전판매", dek: "설명을 제대로 듣지 못하고 산 상품, 분쟁조정에서 무엇이 갈렸나." },
  { id: "cases-2", part: "cases", status: "planned", title: "리딩방과 투자 사기", dek: "되풀이되는 수법과 확인 방법." },
  { id: "cases-3", part: "cases", status: "planned", title: "레버리지 손실 사례", dek: "빚과 파생상품으로 원금보다 크게 잃은 과정." },

  { id: "us-1", part: "us", status: "planned", market: "US", title: "미국 주식을 사면 일어나는 일", dek: "환전, 거래 시간, 결제, 그리고 한국에서 내는 세금. 1장의 한국 거래와 나란히 놓고 본다." },
  { id: "us-2", part: "us", status: "planned", market: "US", title: "미국의 가격 장치", dek: "하루 가격제한폭이 없는 대신 있는 장치들." },
  { id: "us-3", part: "us", status: "planned", market: "US", title: "EDGAR로 공시 읽기", dek: "10-K, 10-Q, 8-K." },
  { id: "us-4", part: "us", status: "planned", market: "US", title: "해외주식의 세금", dek: "양도소득세 신고, 배당 원천징수, 환율이 세금에 미치는 영향." }
];
