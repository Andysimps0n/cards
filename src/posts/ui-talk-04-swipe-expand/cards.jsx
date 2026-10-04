import { Cover } from "./cards/Cover.jsx";
import { Chat } from "./cards/Chat.jsx";
import { TabCard } from "./cards/TabCard.jsx";
import { AccordionCard } from "./cards/AccordionCard.jsx";
import { CarouselCard } from "./cards/CarouselCard.jsx";
import { PaginationCard } from "./cards/PaginationCard.jsx";
import { HamburgerCard } from "./cards/HamburgerCard.jsx";
import { Summary } from "./cards/Summary.jsx";
import { Ending } from "./cards/Ending.jsx";

/* 이 배열 순서가 미리보기 스크롤 순서이자 export 순서입니다. */
export const cards = [
  { id: "01", label: "cover", Card: Cover },
  { id: "02", label: "chat", Card: Chat },
  { id: "03", label: "Tab", Card: TabCard },
  { id: "04", label: "Accordion", Card: AccordionCard },
  { id: "05", label: "Carousel", Card: CarouselCard },
  { id: "06", label: "Pagination", Card: PaginationCard },
  { id: "07", label: "Hamburger Menu", Card: HamburgerCard },
  { id: "08", label: "summary", Card: Summary },
  { id: "09", label: "ending", Card: Ending },
];
