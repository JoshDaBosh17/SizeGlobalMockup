function getModelLayout(models, compact, landscape) {
  if (models.length === 1) {
    if (landscape) {
      return ["w-[30%] md:w-[34%] -translate-y-1"];
    }
    return ["w-[42%] md:w-[44%]"];
  }

  if (models.length === 2) {
    if (landscape) {
      return ["w-[21%] md:w-[24%] -translate-x-10 rotate-[-7deg]", "w-[21%] md:w-[24%] translate-x-10 rotate-[7deg]"];
    }
    return compact
      ? ["w-[24%] md:w-[28%] -translate-x-8 rotate-[-7deg]", "w-[24%] md:w-[28%] translate-x-8 rotate-[7deg]"]
      : ["w-[26%] md:w-[30%] -translate-x-12 rotate-[-8deg]", "w-[26%] md:w-[30%] translate-x-12 rotate-[8deg]"];
  }

  return compact
    ? [
        "w-[24%] md:w-[26%] -translate-x-16 translate-y-8 rotate-[-12deg]",
        "w-[38%] md:w-[40%] translate-y-3",
        "w-[20%] md:w-[22%] translate-x-16 -translate-y-8 rotate-[10deg]",
      ]
    : [
        "w-[24%] md:w-[26%] -translate-x-20 translate-y-12 rotate-[-10deg]",
        "w-[42%] md:w-[44%] translate-y-4",
        "w-[20%] md:w-[22%] translate-x-20 -translate-y-10 rotate-[10deg]",
      ];
}

function PlaceholderBars({ widths }) {
  return (
    <div className="space-y-2" aria-hidden="true">
      {widths.map((width, index) => (
        <div key={`${width}-${index}`} className="placeholder-line" style={{ width }}></div>
      ))}
    </div>
  );
}

export function ScanStage({
  title,
  models,
  compact = false,
  landscape = false,
  embedded = false,
}) {
  const layout = getModelLayout(models, compact, landscape);
  const stageClass = compact
    ? "min-h-[320px] p-5"
    : landscape
      ? "min-h-[320px] p-4 md:min-h-[342px] md:p-5"
      : "min-h-[520px] p-6 md:p-8";
  const modelAreaClass = landscape
    ? "absolute inset-x-0 bottom-[4.2rem] top-11 flex items-center justify-center md:top-13 md:bottom-[4.7rem]"
    : "absolute inset-x-0 bottom-6 top-10 flex items-center justify-center";
  const statsCardClass = landscape
    ? "stats-card absolute right-3 top-3 w-[188px] max-w-[48vw] md:right-4 md:top-4 md:w-[210px]"
    : "stats-card absolute right-0 top-4 w-[220px] max-w-[52vw] md:right-2 md:top-8 md:w-[250px]";
  const noteCardClass = landscape
    ? "stats-card absolute bottom-3 left-3 max-w-[60%] md:bottom-4 md:left-4 md:max-w-[54%]"
    : "stats-card absolute bottom-0 left-0 max-w-[260px]";
  const stageSurfaceClass = embedded ? "scan-stage scan-stage-embedded" : "scan-stage";
  const placeholderCount = Math.max(1, models.length);

  return (
    <div className={`${stageSurfaceClass} ${stageClass}`} aria-label={title}>
      <div className="scan-grid" aria-hidden="true"></div>
      <div className="scan-ring scan-ring-large" aria-hidden="true"></div>
      <div className="scan-ring scan-ring-small" aria-hidden="true"></div>

      <div className="relative z-10 h-full">
        <div className="relative h-full">
          <div className={modelAreaClass}>
            <div className="placeholder-well" aria-hidden="true"></div>
            {Array.from({ length: placeholderCount }).map((_, index) => (
              <div
                key={`placeholder-${index}`}
                className={`placeholder-slab absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${layout[index]}`}
                aria-hidden="true"
              >
                <div className="placeholder-slab-inner">
                  <PlaceholderBars widths={landscape ? ["64%", "48%", "58%"] : ["70%", "52%", "62%"]} />
                </div>
              </div>
            ))}
          </div>

          <div className={noteCardClass}>
            <PlaceholderBars widths={["72%", "56%", "66%"]} />
          </div>

          <div className={statsCardClass}>
            <PlaceholderBars widths={["68%", "84%", "78%", "60%"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
