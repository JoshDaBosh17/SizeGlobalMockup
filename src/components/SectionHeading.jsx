export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const titleWidth = align === "center" ? "mx-auto max-w-4xl" : "max-w-3xl";
  const textWidth = align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl";

  return (
    <div className={`space-y-3 ${alignment}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`section-title ${titleWidth}`}>
        {title}
      </h2>
      {description ? <p className={`section-copy ${textWidth}`}>{description}</p> : null}
    </div>
  );
}
