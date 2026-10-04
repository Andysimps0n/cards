import { SectionCard } from "./SectionCard.jsx";
import { BreadcrumbMock } from "../mocks.jsx";

export function BreadcrumbCard() {
  return (
    <SectionCard
      name="Breadcrumb"
      page="05"
      layout="side"
      mock={<BreadcrumbMock />}
      stage="구역 ③"
      term="Breadcrumb"
      pron="[브레드크럼]"
      mean={<>지금 페이지까지 온 <b>길</b>을 보여주는 줄이에요.</>}
      when="쇼핑몰처럼 메뉴가 여러 단계로 깊어질 때 써요."
      before={'"메뉴 밑에 지금 어디 있는지 작게 쭉 나오는 거 있잖아"'}
      after={<>"Header 아래에 {"'홈 > 상의 > 니트'"} <b>Breadcrumb</b>을 넣고, 누르면 그 페이지로 가게 해줘"</>}
    />
  );
}
