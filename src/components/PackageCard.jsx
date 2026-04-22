import { Link } from "react-router-dom";

export function PackageCard({ item }) {
  return (
    <article className="surface-card hover-lift flex h-full flex-col p-6">
      <p className="eyebrow">{item.packageLabel}</p>
      <h3 className="card-title mt-3">
        {item.title}
      </h3>
      <p className="card-copy mt-3">{item.summary}</p>

      <div className="mt-6 space-y-5">
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/44">Included</div>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-white/74">
            {item.included.map((entry) => (
              <li key={entry} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"></span>
                <span>{entry}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/44">Sample size</div>
            <p className="mt-2 text-sm leading-6 text-white/72">{item.sampleSizes}</p>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/44">Deliverables</div>
            <p className="mt-2 text-sm leading-6 text-white/72">{item.deliverables}</p>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/44">Coverage</div>
            <p className="mt-2 text-sm leading-6 text-white/72">{item.demographicCoverage}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link to={item.path} className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[rgba(255,255,255,0.78)]">
          View package details
          <span className="text-[var(--accent)]">›</span>
        </Link>
      </div>
    </article>
  );
}
