export function DemographicCard({ title, subtitle, rows }) {
  return (
    <article className="surface-card h-full p-6">
      <div className="space-y-2">
        <h3 className="card-title">{title}</h3>
        <p className="card-copy text-white/58">{subtitle}</p>
      </div>

      <div className="mt-8 space-y-5">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="mb-2 flex items-center justify-between gap-4 text-sm">
              <span className="text-white/72">{row.label}</span>
              <span className="font-semibold text-white">{row.value}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/8">
              <div className="demographic-fill h-full rounded-full" style={{ width: `${row.value}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
