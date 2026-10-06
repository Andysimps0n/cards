import { SectionCard } from "./SectionCard.jsx";
import { FooterMock } from "../mocks.jsx";

export function FooterCard() {
  return (
    <SectionCard
      name="Footer"
      page="06"
      layout="side"
      mock={<FooterMock />}
      stage="구역 ④"
      term="Footer"
      pron="[푸터]"
      mean={<>웹페이지 <b>맨 아래</b>에 늘 있는 구역이에요.</>}
      when="회사 정보처럼, 모든 페이지 맨 밑에 꼭 남길 내용을 둘 때 써요."
      items={[
        {
          n: "1",
          t: "다음 길 안내",
          d: <>끝까지 내려온 사람에게<br />다른 페이지로 가는<br />길을 보여줘요.</>,
        },
        {
          n: "2",
          t: "정보 제공",
          d: <>회사 정보, 약관, 연락처로<br />신뢰도를 높여요.<br /></>,
        },
      ]}
    />
  );
}
