import { TermCard } from "./TermCard.jsx";
import { ToggleMock } from "../mocks.jsx";

export function ToggleCard() {
  return (
    <TermCard
      name="ToggleCard"
      page="04"
      mock={<ToggleMock />}
      stage="UI 용어 ②"
      term="Toggle"
      pron="[토글]"
      mean="켜짐과 꺼짐을 바로 바꾸는 스위치예요."
      when="알림, 다크 모드처럼 누르는 즉시 적용되는 설정에 써요."
      before={'"옆으로 밀리는 동그란 버튼 만들어줘"'}
      after={<>"알림 설정을 <b>Toggle</b>로 바꿔줘"</>}
      tip={<><b>Toggle</b>은 누르면 바로 적용, <b>Checkbox</b>는 저장을 눌러야 적용돼요.</>}
    />
  );
}
