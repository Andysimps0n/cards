const PATHS = {
  scroll:    '<path d="M28 22h44c6 0 9 4 9 9v4H37"/><path d="M28 22c-6 0-9 4-9 9s3 9 9 9h9v38c0 5-4 8-9 8"/><path d="M37 40v38c0 5 4 8 9 8h26c5 0 9-3 9-8V35"/><path d="M48 54h22M48 66h16"/>',
  magnifier: '<circle cx="43" cy="43" r="22"/><path d="M59 59l20 20"/><path d="M33 38c2-5 6-8 11-8"/>',
  cloud:     '<path d="M28 70c-9 0-15-6-15-14s7-14 15-13c2-10 10-17 21-17 11 0 19 8 20 18 8 0 14 6 14 13s-6 13-14 13z"/><path d="M50 44l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/>',
  telescope: '<path d="M18 52l52-22 7 16-52 22z"/><path d="M70 30l8-4 7 16-8 4"/><path d="M44 58l-10 26M50 56l10 28"/><path d="M14 54l4 9"/>',
  key:       '<circle cx="34" cy="50" r="15"/><circle cx="34" cy="50" r="5"/><path d="M49 50h36M72 50v12M82 50v9"/>',
  flag:      '<path d="M28 88V14"/><path d="M28 18c12-6 22 6 34 0s16-2 20 0v30c-4-2-8-6-20 0s-22-6-34 0"/>',
  dice:      '<rect x="20" y="20" width="60" height="60" rx="14"/><circle cx="37" cy="37" r="4"/><circle cx="63" cy="63" r="4"/><circle cx="50" cy="50" r="4"/><circle cx="63" cy="37" r="4"/><circle cx="37" cy="63" r="4"/>',
  compass:   '<circle cx="50" cy="50" r="34"/><path d="M50 22l9 28-9 28-9-28z"/><path d="M50 10v6M50 84v6M10 50h6M84 50h6"/>',
  star:      '<path d="M50 14l10 23 25 2-19 16 6 25-22-14-22 14 6-25-19-16 25-2z"/>',
  x:         '<path d="M30 30l40 40M70 30L30 70"/>',
  pin:       '<path d="M50 88s-26-26-26-46a26 26 0 0 1 52 0c0 20-26 46-26 46z"/><circle cx="50" cy="42" r="9"/>',
  map:       '<path d="M14 24l22-8 28 10 22-8v58l-22 8-28-10-22 8z"/><path d="M36 16v58M64 26v58"/>',
  arrow:     '<path d="M14 52c20-6 46-6 66-2"/><path d="M66 36l16 14-18 12"/>',
};

export function Icon({ name, color = "var(--ink)", stroke = 6, className, style }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      fill="none"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#wax-stroke)"
      dangerouslySetInnerHTML={{ __html: PATHS[name] || "" }}
    />
  );
}

export function iconMarkup(name) {
  return PATHS[name] || "";
}
