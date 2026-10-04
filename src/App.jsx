import { useEffect } from "react";
import { Filters } from "./ui/Filters.jsx";
import { cards as talk01 } from "./posts/ui-talk-01/cards.jsx";
import { cards as talk02 } from "./posts/ui-talk-02-header-footer/cards.jsx";
import { cards as talk03 } from "./posts/ui-talk-03-inputs/cards.jsx";
import { cards as talk04 } from "./posts/ui-talk-04-swipe-expand/cards.jsx";

const POSTS = {
  "ui-talk-01": talk01,
  "ui-talk-02-header-footer": talk02,
  "ui-talk-03-inputs": talk03,
  "ui-talk-04-swipe-expand": talk04,
};

export function App() {
  const params = new URLSearchParams(location.search);
  const post = params.get("post") || "ui-talk-01";
  const only = params.get("card");
  const cards = POSTS[post] || talk01;
  const shown = only ? cards.filter((card) => card.id === only) : cards;

  useEffect(() => {
    document.body.dataset.mode = only ? "export" : "preview";
  }, [only]);

  return (
    <>
      <Filters />
      <div className="strip">
        {shown.map(({ id, label, Card }) => (
          <div key={id}>
            {!only && <div className="label">{id} · {label}</div>}
            <Card />
          </div>
        ))}
      </div>
    </>
  );
}
