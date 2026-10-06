import { ZoneCard } from "./ZoneCard.jsx";
import { CardGridMock } from "../mocks.jsx";

export function CardGridCard() {
  return (
    <ZoneCard
      name="CardGridCard"
      page="05"
      mock={<CardGridMock />}
      stage="구역 ③"
      term="Card Grid"
      pron="[카드 그리드]"
      wrapName
      mean="카드를 바둑판처럼 늘어놓은 구역이에요."
      when="상품, 기능, 후기처럼 같은 모양의 칸을 여러 개 보여줄 때 써요."
      before={'"네모 칸을 바둑판처럼 쭉 늘어놓아줘"'}
      after={<>"기능 소개는 <b>Card Grid</b>로 3열로 해줘"</>}
      tip={<>한 장만 있으면 Card, 여러 장을 격자로 놓으면 <b>Card Grid</b>예요.</>}
    />
  );
}
