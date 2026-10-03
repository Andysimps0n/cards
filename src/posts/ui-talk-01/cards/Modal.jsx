import { TermCard } from "./TermCard.jsx";

export function ModalCard() {
  return (
    <TermCard
      name="ModalCard"
      page="03"
      mock="modal"
      stage="UI 용어 ①"
      term="Modal"
      pron="[모달]"
      mean="화면 가운데에 뜨는 창이에요."
      when="삭제처럼, 하던 일을 멈추고 확인받아야 할 때 써요."
      feats={["화면 가운데", "뒤가 어두워져요", "닫아야 다음으로"]}
      before={'"화면 가운데에 창 하나 띄우고, 뒤는 회색으로 덮어서 못 누르게 해줘"'}
      after={<>"삭제 버튼을 누르면 '정말 삭제할까요?' 확인 <b>Modal</b>을 띄워줘. 배경은 dim 처리해줘"</>}
    />
  );
}
