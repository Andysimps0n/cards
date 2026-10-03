import { TermCard } from "./TermCard.jsx";

export function DrawerCard() {
  return (
    <TermCard
      name="DrawerCard"
      page="05"
      mock="drawer"
      stage="UI 용어 ③"
      term="Drawer"
      pron="[드로어]"
      mean="옆에서 서랍처럼 밀려 나오는 메뉴예요."
      when="다른 화면으로 가는 메뉴를 한곳에 모아 둘 때 써요."
      feats={["옆에서 스르륵", "햄버거 버튼 짝꿍", "메뉴 모음"]}
      before={'"왼쪽 위에 줄 세 개 있는 버튼 누르면 옆에서 메뉴가 쭉 나오게 해줘"'}
      after={<>"햄버거 버튼을 누르면 왼쪽에서 <b>Drawer</b>가 열리고 메뉴 목록이 보이게 해줘"</>}
    />
  );
}
