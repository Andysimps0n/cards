import { TermCard } from "./TermCard.jsx";
import { AccordionMock } from "../mocks.jsx";

export function AccordionCard() {
  return (
    <TermCard
      name="AccordionCard"
      page="04"
      mock={<AccordionMock />}
      stage="UI 용어 ②"
      term="Accordion"
      pron="[아코디언]"
      mean="누르면 아래로 펼쳐지는 목록이에요."
      when="FAQ처럼 질문을 접어 두고 필요할 때 열어 볼 때 써요."
      before={'"누르면 아래로 내용이 나오는 목록 만들어줘"'}
      after={<>"자주 묻는 질문은 <b>Accordion</b>으로 접어 줘"</>}
      tip={<>한 칸만 열어 두고 싶으면 "<b>Accordion</b>은 하나만 열리게"라고 말해요.</>}
    />
  );
}
