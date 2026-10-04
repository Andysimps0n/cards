import { SectionCard } from "./SectionCard.jsx";
import { HeaderMock } from "../mocks.jsx";

export function HeaderCard() {
  return (
    <SectionCard
      name="Header"
      page="03"
      layout="side"
      mock={<HeaderMock />}
      stage="구역 ①"
      term="Header"
      pron="[헤더]"
      mean={<>웹페이지 <b>맨 위</b>에 늘 있는 구역이에요.</>}
      when="로고와 메뉴처럼, 어느 페이지에서든 보여야 할 것을 둘 때 써요."
      items={[
        {
          n: "1",
          t: "어디서든 길 찾기",
          d: <>로고를 누르면 홈으로,<br />메인 메뉴로 원하는<br />페이지에 바로 가요</>,
        },
        {
          n: "2",
          t: "자주 쓰는 행동",
          d: <>검색, 로그인, 장바구니처럼<br />자주 누르는 버튼을<br />모아둬요</>,
        },
      ]}
    />
  );
}
