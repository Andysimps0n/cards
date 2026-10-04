import { ZoneCard } from "./ZoneCard.jsx";
import { FaqMock } from "../mocks.jsx";

export function FaqCard() {
  return (
    <ZoneCard
      name="FaqCard"
      page="07"
      mock={<FaqMock />}
      stage="구역 ⑤"
      term="FAQ Section"
      pron="[자주 묻는 질문]"
      wrapName
      mean="자주 묻는 질문을 모아 둔 구역이에요."
      when="같은 질문을 반복해서 받을 때, 페이지 아래쪽에 모아 둬요."
      before={'"자주 묻는 질문 쭉 적어 두는 칸 만들어줘"'}
      after={<>"페이지 아래에 <b>FAQ Section</b>을 넣어줘"</>}
      tip={<>질문은 4탄 <b>Accordion</b>으로 하나씩 펼치는 경우가 많아요.</>}
    />
  );
}
