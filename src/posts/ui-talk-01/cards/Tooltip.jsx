import { TermCard } from "./TermCard.jsx";

export function TooltipCard() {
  return (
    <TermCard
      name="TooltipCard"
      page="07"
      mock="tooltip"
      stage="UI 용어 ⑤"
      term="Tooltip"
      pron="[툴팁]"
      mean="마우스를 올리면 뜨는 작은 설명 말풍선이에요."
      when="아이콘만 보면 무슨 뜻인지 헷갈릴 때 써요."
      feats={["마우스 올리면", "키보드 포커스도", "벗어나면 사라짐"]}
      before={'"물음표 아이콘에 마우스 올리면 작은 말풍선으로 설명 나오게 해줘"'}
      after={<>"비밀번호 옆 물음표 아이콘에 hover나 focus하면 '8자 이상 입력해주세요' <b>Tooltip</b>을 보여줘"</>}
    />
  );
}
