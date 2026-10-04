import { Cover } from "./cards/Cover.jsx";
import { Chat } from "./cards/Chat.jsx";
import { HeroCard } from "./cards/HeroCard.jsx";
import { CtaCard } from "./cards/CtaCard.jsx";
import { CardGridCard } from "./cards/CardGridCard.jsx";
import { BannerCard } from "./cards/BannerCard.jsx";
import { FaqCard } from "./cards/FaqCard.jsx";
import { Summary } from "./cards/Summary.jsx";
import { Ending } from "./cards/Ending.jsx";

/* 이 배열 순서가 미리보기 스크롤 순서이자 export 순서입니다. */
export const cards = [
  { id: "01", label: "cover", Card: Cover },
  { id: "02", label: "chat", Card: Chat },
  { id: "03", label: "Hero Section", Card: HeroCard },
  { id: "04", label: "CTA", Card: CtaCard },
  { id: "05", label: "Card Grid", Card: CardGridCard },
  { id: "06", label: "Banner", Card: BannerCard },
  { id: "07", label: "FAQ Section", Card: FaqCard },
  { id: "08", label: "summary", Card: Summary },
  { id: "09", label: "ending", Card: Ending },
];
