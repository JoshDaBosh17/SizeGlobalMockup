import { Link } from "react-router-dom";
import { CTASection } from "../components/CTASection";
import { DatasetSnapshot } from "../components/DatasetSnapshot";
import { DemographicCard } from "../components/DemographicCard";
import { ScanStage } from "../components/ScanStage";
import { SectionHeading } from "../components/SectionHeading";
import { categories } from "../data/siteData";

export function CategoryPage({ categoryKey }) {
  const category = categories[categoryKey];
  const models = category.dual
    ? [
        { type: category.type, mirrored: true },
        { type: category.type, mirrored: false },
      ]
    : [{ type: category.type }];

  return (
    <div className="space-y-24 pb-24 pt-8 md:space-y-28 md:pb-32 md:pt-14">
      <section className="section-shell grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
        <div className="space-y-6">
          <p className="eyebrow">{category.label} dataset</p>
          <h1 className="page-hero-title max-w-[11ch]">
            {category.heroTitle}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-white/70">{category.heroBody}</p>

          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              {category.ctaPrimary}
            </Link>
            <Link to="/packages" className="btn-secondary">
              Compare Packages
            </Link>
          </div>
        </div>

        <ScanStage
          title={category.stageTitle}
          models={models}
        />
      </section>

      <section className="section-shell">
        <DatasetSnapshot category={category} />
      </section>

      <section className="section-shell space-y-10">
        <SectionHeading
          eyebrow="Demographic coverage"
          title="Ancestry, gender, and age representation stay visible on every anatomy page."
          description="The mockup uses visual demographic blocks instead of plain metadata so the datasets feel transparent and credible."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {category.demographics.map((group) => (
            <DemographicCard key={group.title} title={group.title} subtitle={group.subtitle} rows={group.rows} />
          ))}
        </div>
      </section>

      <section className="section-shell space-y-10">
        <SectionHeading
          eyebrow="Applications"
          title={`${category.label} data for fit-sensitive product development.`}
          description="The applications are framed as practical destinations for the dataset rather than generic marketing categories."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {category.applications.map((item) => (
            <article key={item.title} className="surface-card p-6">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-copy mt-3">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Commercial path"
        title={category.ctaTitle}
        body={category.ctaBody}
        primaryLabel={category.ctaPrimary}
        primaryTo="/contact"
        secondaryLabel={category.ctaSecondary}
        secondaryTo="/packages"
      />
    </div>
  );
}
