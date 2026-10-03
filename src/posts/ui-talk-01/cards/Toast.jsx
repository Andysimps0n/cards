import { TermCard } from "./TermCard.jsx";

export function ToastCard() {
  return (
    <TermCard
      name="ToastCard"
      page="06"
      mock="toast"
      stage="UI 용어 ④"
      term="Toast"
      pron="[토스트]"
      mean="잠깐 떴다가 저절로 사라지는 알림이에요."
      when="저장처럼, 결과를 짧게 알려 주고 지나갈 때 써요."
      feats={["짧은 한 줄", "몇 초 뒤 사라짐", "화면을 안 막아요"]}
      before={'"저장하면 아래에 작은 글씨가 잠깐 나왔다가 없어지게 해줘"'}
      after={<>"저장이 끝나면 '저장되었습니다' <b>Toast</b>를 하단에 3초 동안 띄워줘"</>}
    />
  );
}
