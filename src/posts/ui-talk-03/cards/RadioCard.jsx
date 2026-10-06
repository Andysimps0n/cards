import { TermCard } from "./TermCard.jsx";
import { RadioMock } from "../mocks.jsx";

export function RadioCard() {
  return (
    <TermCard
      name="RadioCard"
      page="06"
      mock={<RadioMock />}
      stage="UI 용어 ④"
      term="Radio Button"
      pron="[라디오 버튼]"
      mean="여러 개 중 딱 하나만 고르는 동그라미예요."
      when="배송 방법처럼 하나만 골라야 할 때 써요."
      before={'"하나 누르면 다른 게 풀리는 동그라미 만들어줘"'}
      after={<>"결제 방법은 <b>Radio Button</b>으로 하나만 고르게 해줘"</>}
      tip={<>동그라미는 하나만, 네모는 여러 개. 모양으로 기억해요.</>}
      wrapName
    />
  );
}
