import { TermCard } from "./TermCard.jsx";
import { SortMock } from "../mocks.jsx";

export function SortCard() {
  return (
    <TermCard
      name="SortCard"
      page="05"
      mock={<SortMock />}
      stage="UI 용어 ③"
      term="Sort"
      pron="[소트]"
      mean="순서만 바꾸는 칸이에요."
      when="최신순, 낮은 가격순처럼 줄만 바꿀 때 써요."
      before={'"최신순이랑 낮은 가격순으로 줄 세우게 해줘"'}
      after={<>"목록은 <b>Sort</b>로 최신순을 고르게 해줘"</>}
      tip={<><b>Sort</b>는 개수가 그대로, <b>Filter</b>는 조건에 안 맞는 걸 빼요.</>}
    />
  );
}
