import { SectionCard } from "./SectionCard.jsx";
import { FooterParts } from "../mocks.jsx";

export function FooterPartsCard() {
  return (
    <SectionCard
      name="FooterParts"
      page="07"
      layout="wide"
      mock={<FooterParts />}
      stage="구역 ⑤"
      term="Footer 속 단골들"
      when="회사·서비스 정보를 한곳에 모아 보여줄 때 써요."
      items={[
        { n: "1", t: "사이트맵 링크", d: "주요 페이지 링크 모음" },
        { n: "2", t: "회사 정보", d: "상호, 주소, 연락처 등" },
        { n: "3", t: <>약관 및 개인정보방침</>, d: "서비스 규칙과 개인정보 안내" },
        { n: "4", t: "SNS 아이콘", d: "공식 계정으로 가는 링크" },
        { n: "5", t: "뉴스레터 구독", d: "이메일로 소식 받기 신청" },
      ]}
    />
  );
}
