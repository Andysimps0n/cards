import { TermCard } from "./TermCard.jsx";
import { CarouselMock } from "../mocks.jsx";

export function CarouselCard() {
  return (
    <TermCard
      name="CarouselCard"
      page="05"
      mock={<CarouselMock />}
      stage="UI 용어 ③"
      term="Carousel"
      pron="[캐러셀]"
      mean="옆으로 넘겨 보는 배너나 슬라이드예요."
      when="홈 배너처럼 여러 장을 한 자리에서 넘길 때 써요."
      before={'"배너는 옆으로 넘겨 보게 해줘"'}
      after={<>"메인 배너는 <b>Carousel</b>로 넘겨 보게 해줘"</>}
      tip={<>자동으로 넘어가게 하려면 "<b>Carousel</b>을 자동 재생으로"라고 말해요.</>}
    />
  );
}
