import { ScanStage } from "./ScanStage";

export function DatasetSnapshot({ category }) {
  const models = category.dual
    ? [
        { type: category.type, mirrored: true },
        { type: category.type, mirrored: false },
      ]
    : [{ type: category.type }];

  const disclosureItems = [
    {
      title: "What is included",
      content: (
        <ul className="space-y-3">
          {category.included.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-white/74">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Deliverables",
      content: (
        <ul className="space-y-3">
          {category.deliverables.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-white/74">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Demographics",
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-7 text-white/72">{category.demographicCoverage}</p>
          <div className="grid gap-2 text-xs uppercase tracking-[0.2em] text-white/38 md:grid-cols-3">
            {category.demographics.map((group) => (
              <div key={group.title} className="rounded-full border border-white/8 px-3 py-2 text-center">
                {group.title}
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <article className="surface-card overflow-hidden p-4 md:p-5">
      <div className="grid gap-5 lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch">
        <div className="lg:border-r lg:border-white/8 lg:pr-5">
          <ScanStage
            title={category.stageTitle}
            models={models}
            landscape
            embedded
          />
        </div>

        <div className="flex flex-col gap-5 lg:pl-1">
          <div className="border-b border-white/8 pb-5">
            <p className="eyebrow">Integrated package</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68 md:text-[0.96rem]">{category.overviewBody}</p>
          </div>

          <div className="space-y-0">
            {disclosureItems.map((item) => (
              <details key={item.title} className="disclosure">
                <summary className="disclosure-summary">
                  <span className="font-medium text-white">{item.title}</span>
                  <span className="disclosure-icon">+</span>
                </summary>
                <div className="disclosure-panel">{item.content}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
