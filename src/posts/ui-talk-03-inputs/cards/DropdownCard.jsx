import { TermCard } from "./TermCard.jsx";
import { DropdownMock } from "../mocks.jsx";

export function DropdownCard() {
  return (
    <TermCard
      name="DropdownCard"
      page="03"
      mock={<DropdownMock />}
      stage="UI 용어 ①"
      term="Dropdown"
      pron="[드롭다운]"
      mean="누르면 목록이 펼쳐지고 하나를 고르는 칸이에요."
      when="고를 게 많아서 화면에 다 펼치기 어려울 때 써요."
      before={'"누르면 밑으로 목록 나오는 박스 만들어줘"'}
      after={<>"지역 선택은 <b>Dropdown</b>으로 해줘"</>}
      tip={<>고를 게 몇 개뿐이면 다 펼쳐 둔 <b>Radio Button</b>이 더 편할 수 있어요.</>}
    />
  );
}
