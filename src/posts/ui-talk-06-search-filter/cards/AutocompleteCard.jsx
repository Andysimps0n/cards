import { TermCard } from "./TermCard.jsx";
import { AutocompleteMock } from "../mocks.jsx";

export function AutocompleteCard() {
  return (
    <TermCard
      name="AutocompleteCard"
      page="07"
      mock={<AutocompleteMock />}
      stage="UI 용어 ⑤"
      term="Autocomplete"
      pron="[오토컴플리트]"
      mean="입력하는 중에 아래에 추천 검색어가 뜨는 칸이에요."
      when="검색어를 다 치기 전에 비슷한 말을 추천할 때 써요."
      before={'"치면 밑에 추천 검색어가 뜨게 해줘"'}
      after={<>"Search Bar에 <b>Autocomplete</b>를 붙여 줘"</>}
      tip={<><b>Autocomplete</b>는 치면서 추천, 3탄 <b>Dropdown</b>은 정해진 목록에서 고르기예요.</>}
      wrapName
    />
  );
}
