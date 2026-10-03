export function Post({ name, pillar = "ui", page, total = "09", className = "", children }) {
  return (
    <section className={`post ${className}`} data-pillar={pillar} aria-label={name}>
      <svg className="grain" width="100%" height="100%">
        <rect width="100%" height="100%" filter="url(#paper-grain)" />
      </svg>
      {children}
      <div className="footer">
        <span>@crayon.sure</span>
        <span className="pg">{page} / {total}</span>
      </div>
    </section>
  );
}
