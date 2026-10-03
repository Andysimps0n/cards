import { SectionCard } from "./SectionCard.jsx";
import { HeaderParts } from "../mocks.jsx";

export function HeaderPartsCard() {
  return (
    <SectionCard
      name="HeaderParts"
      page="05"
      layout="wide"
      mock={<HeaderParts />}
      stage="구역 ③"
      term="Header 속 단골들"
      when="자주 쓰는 기능을 맨 위에 모아 둘 때 이 부품들을 써요."
      items={[
        { n: "1", t: "로고", d: "누르면 홈으로" },
        { n: "2", t: "메뉴 (GNB)", d: "모든 페이지 공통 메인 메뉴" },
        { n: "3", t: "검색", d: "사이트 안에서 찾기" },
        { n: "4", t: "로그인 버튼", d: "내 계정으로 들어가기" },
        { n: "5", t: "햄버거 메뉴", d: "모바일에서 메뉴를 접어둔 버튼" },
      ]}
      tipLabel="＋ 응용"
      tip={<><b>Sticky Header</b><span className="hf-tip-desc">: 스크롤해도 맨 위에 붙어 따라오는 Header</span></>}
    />
  );
}
