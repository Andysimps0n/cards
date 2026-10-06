import { TermCard } from "./TermCard.jsx";
import { SearchBarMock } from "../mocks.jsx";

export function SearchBarCard() {
  return (
    <TermCard
      name="SearchBarCard"
      page="03"
      mock={<SearchBarMock />}
      stage="UI 용어 ①"
      term="Search Bar"
      pron="[서치 바]"
      mean="검색어를 입력하는 칸이에요."
      when="목록에서 원하는 걸 글자로 찾을 때 써요."
      before={'"위에 검색어 넣는 칸 만들어줘"'}
      after={<>"상품 목록 위에 <b>Search Bar</b>를 넣어줘"</>}
      tip={<>치다 보면 추천이 뜨면 <b>Search Bar</b> + <b>Autocomplete</b>예요.</>}
    />
  );
}
