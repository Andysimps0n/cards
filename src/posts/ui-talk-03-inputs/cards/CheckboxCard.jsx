import { TermCard } from "./TermCard.jsx";
import { CheckboxMock } from "../mocks.jsx";

export function CheckboxCard() {
  return (
    <TermCard
      name="CheckboxCard"
      page="05"
      mock={<CheckboxMock />}
      stage="UI 용어 ③"
      term="Checkbox"
      pron="[체크박스]"
      mean="여러 개를 동시에 고르는 네모 칸이에요."
      when="관심사, 약관 동의처럼 하나 이상 고를 때 써요."
      before={'"체크 표시 들어가는 네모 만들어줘"'}
      after={<>"관심 분야는 <b>Checkbox</b>로 여러 개 고르게 해줘"</>}
      tip={<>여러 개 고르면 <b>Checkbox</b>, 하나만 고르면 <b>Radio Button</b>이에요.</>}
    />
  );
}
