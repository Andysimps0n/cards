import { TermCard } from "./TermCard.jsx";
import { ChipMock } from "../mocks.jsx";

export function ChipCard() {
  return (
    <TermCard
      name="ChipCard"
      page="06"
      mock={<ChipMock />}
      stage="UI 용어 ④"
      term="Chip"
      pron="[칩]"
      mean="고른 조건을 작은 태그로 보여 주고 x로 지우는 칸이에요."
      when="Filter로 고른 조건을 한눈에 보고 쉽게 지울 때 써요."
      before={'"고른 조건을 작은 네모에 넣고 x로 지우게 해줘"'}
      after={<>"고른 Filter는 <b>Chip</b>으로 보여 주고 x로 지우게 해줘"</>}
      tip={<><b>Chip</b>은 눌러서 지워요. <b>Badge</b>는 상태만 보여 주고 보통 못 지워요.</>}
    />
  );
}
