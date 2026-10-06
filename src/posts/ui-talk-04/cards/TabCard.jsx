import { TermCard } from "./TermCard.jsx";
import { TabMock } from "../mocks.jsx";

export function TabCard() {
  return (
    <TermCard
      name="TabCard"
      page="03"
      mock={<TabMock />}
      stage="UI 용어 ①"
      term="Tab"
      pron="[탭]"
      mean="같은 자리에서 내용을 바꿔 보는 칸이에요."
      when="한 화면에서 카테고리를 나눠 볼 때 써요."
      before={'"같은 자리에서 내용만 바꿔 보는 칸 만들어줘"'}
      after={<>"상품 분류는 <b>Tab</b>으로 나눠줘"</>}
      tip={<><b>Tab</b>은 옆으로 바꾸고, <b>Accordion</b>은 아래로 펼쳐요.</>}
    />
  );
}
