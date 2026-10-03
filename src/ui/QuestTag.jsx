import { SERIES } from "./series.js";
import { iconMarkup } from "./Icon.jsx";

export function Badge({ series = "talk" }) {
  const icon = SERIES[series]?.icon || "scroll";
  return (
    <svg viewBox="0 0 140 140">
      <path d="M70 8c30 0 60 22 62 58 2 36-26 66-62 66S6 106 8 70 38 8 70 8z" fill="var(--p)" filter="url(#wax)" />
      <path d="M70 18c26 0 51 20 52 50 1 30-22 55-52 55S17 100 18 70 44 18 70 18z" fill="none" stroke="var(--p-deep)" strokeWidth="4" strokeDasharray="2 9" strokeLinecap="round" filter="url(#wax-stroke)" />
      <g
        transform="translate(22 22) scale(.96)"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#wax-stroke)"
        dangerouslySetInnerHTML={{ __html: iconMarkup(icon) }}
      />
    </svg>
  );
}

export function QuestTag({ series = "talk", showType = true }) {
  const s = SERIES[series] || SERIES.talk;
  return (
    <div className="quest-tag">
      <div className="badge"><Badge series={series} /></div>
      <div className="meta">
        <span className="qname">{s.name}</span>
        {showType && <span className="qtype">{s.type}</span>}
      </div>
    </div>
  );
}
