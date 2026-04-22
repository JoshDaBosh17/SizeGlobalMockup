import { Link } from "react-router-dom";

export function CTASection({ eyebrow, title, body, primaryLabel, primaryTo, secondaryLabel, secondaryTo }) {
  return (
    <section className="section-shell">
      <div className="surface-card relative overflow-hidden px-6 py-8 md:px-10 md:py-12">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(214,43,43,0.14),transparent_68%)]"></div>
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-3">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section-title max-w-3xl">
              {title}
            </h2>
            <p className="section-copy max-w-2xl">{body}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to={primaryTo} className="btn-primary">
              {primaryLabel}
            </Link>
            <Link to={secondaryTo} className="btn-secondary">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
