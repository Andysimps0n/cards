import { TermCard } from "./TermCard.jsx";

export function BottomSheetCard() {
  return (
    <TermCard
      name="BottomSheetCard"
      page="04"
      mock="sheet"
      stage="UI 용어 ②"
      term="Bottom Sheet"
      pron="[바텀 시트]"
      mean="화면 아래에서 올라오는 창이에요."
      when="필터처럼, 잠깐 고르고 다시 닫을 때 써요."
      feats={["아래에서 쓱", "모바일 단골", "반만 올라와도 OK"]}
      before={'"화면 아래에서 올라오는 창 있잖아, 반쯤만 올라오는 거"'}
      after={<>"필터 버튼을 누르면 필터 옵션이 담긴 <b>Bottom Sheet</b>를 화면 절반 높이로 띄워줘"</>}
    />
  );
}
