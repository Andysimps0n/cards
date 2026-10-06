import { ZoneCard } from "./ZoneCard.jsx";
import { BannerMock } from "../mocks.jsx";

export function BannerCard() {
  return (
    <ZoneCard
      name="BannerCard"
      page="06"
      mock={<BannerMock />}
      stage="구역 ④"
      term="Banner"
      pron="[배너]"
      mean="페이지 중간중간에 들어가는 가로 띠 공지·광고예요."
      when="이벤트, 공지처럼 본문 흐름 사이에 짧게 알릴 때 써요."
      before={'"중간에 가로로 긴 광고 띠 넣어줘"'}
      after={<>"본문 중간에 <b>Banner</b>로 이벤트 안내를 넣어줘"</>}
      tip={<><b>Hero</b>는 맨 위 큰 첫인상, <b>Banner</b>는 중간중간 끼워 넣는 띠예요.</>}
    />
  );
}
