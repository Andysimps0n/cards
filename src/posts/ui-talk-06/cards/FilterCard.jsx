import { TermCard } from "./TermCard.jsx";
import { FilterMock } from "../mocks.jsx";

export function FilterCard() {
  return (
    <TermCard
      name="FilterCard"
      page="04"
      mock={<FilterMock />}
      stage="UI 용어 ②"
      term="Filter"
      pron="[필터]"
      mean="조건에 맞는 것만 남기는 칸이에요."
      when="가격대, 색상처럼 조건으로 걸러 볼 때 써요."
      before={'"가격대랑 색상으로 맞는 것만 남기게 해줘"'}
      after={<>"상품은 <b>Filter</b>로 가격대와 색상을 고르게 해줘"</>}
      tip={<><b>Filter</b>는 빼기, <b>Sort</b>는 줄 세우기예요.</>}
    />
  );
}
