import { Cover } from "./cards/Cover.jsx";
import { Chat } from "./cards/Chat.jsx";
import { PageMapCard } from "./cards/PageMapCard.jsx";
import { HeaderCard } from "./cards/HeaderCard.jsx";
import { HeaderPartsCard } from "./cards/HeaderPartsCard.jsx";
import { FooterCard } from "./cards/FooterCard.jsx";
import { FooterPartsCard } from "./cards/FooterPartsCard.jsx";
import { Summary } from "./cards/Summary.jsx";
import { Ending } from "./cards/Ending.jsx";

/* 이 배열 순서가 미리보기 스크롤 순서이자 export 순서입니다. */
export const cards = [
  { id: "01", label: "cover", Card: Cover },
  { id: "02", label: "chat", Card: Chat },
  { id: "03", label: "지도 펼치기", Card: PageMapCard },
  { id: "04", label: "Header", Card: HeaderCard },
  { id: "05", label: "Header 해부", Card: HeaderPartsCard },
  { id: "06", label: "Footer", Card: FooterCard },
  { id: "07", label: "Footer 해부", Card: FooterPartsCard },
  { id: "08", label: "summary", Card: Summary },
  { id: "09", label: "ending", Card: Ending },
];
