import { TermCard } from "./TermCard.jsx";
import { PaginationMock } from "../mocks.jsx";

export function PaginationCard() {
  return (
    <TermCard
      name="PaginationCard"
      page="06"
      mock={<PaginationMock />}
      stage="UI 용어 ④"
      term="Pagination"
      pron="[페이지네이션]"
      mean="1, 2, 3처럼 페이지 번호로 나눠 보는 칸이에요."
      when="목록이 길어서 여러 장으로 나눌 때 써요."
      before={'"아래쪽에 1, 2, 3 숫자 넣어줘"'}
      after={<>"상품 목록은 <b>Pagination</b>으로 나눠줘"</>}
      tip={<><b>Pagination</b>은 페이지를 고르고, 무한 스크롤은 내리면 더 나와요.</>}
    />
  );
}
