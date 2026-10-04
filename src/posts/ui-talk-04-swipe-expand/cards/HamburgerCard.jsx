import { TermCard } from "./TermCard.jsx";
import { HamburgerMock } from "../mocks.jsx";

export function HamburgerCard() {
  return (
    <TermCard
      name="HamburgerCard"
      page="07"
      mock={<HamburgerMock />}
      stage="UI 용어 ⑤"
      term="Hamburger Menu"
      pron="[햄버거 메뉴]"
      mean="줄 세 개 아이콘을 눌러 여는 메뉴예요."
      when="화면이 좁아 메뉴를 접어 둘 때 써요."
      before={'"왼쪽 위에 줄 세 개 있는 버튼 만들어줘"'}
      after={<>"모바일 메뉴는 <b>Hamburger Menu</b>로 열어줘"</>}
      tip={<><b>Hamburger Menu</b>는 아이콘, 1탄의 <b>Drawer</b>는 옆에서 열리는 판이에요.</>}
      wrapName
    />
  );
}
