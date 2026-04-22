import { CTASection } from "../components/CTASection";
import { PackageCard } from "../components/PackageCard";
import { ScanStage } from "../components/ScanStage";
import { SectionHeading } from "../components/SectionHeading";
import { packageCatalog, packageComparison } from "../data/siteData";

export function PackagesPage() {
  return (
    <div className="space-y-24 pb-24 pt-8 md:space-y-28 md:pb-32 md:pt-14">
      <section className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="space-y-6">
          <p className="eyebrow">Data packages</p>
          <h1 className="page-hero-title max-w-[11ch]">
            Productized scan bundles for heads, hands, ears, or the full library.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-white/70">
            Each package combines high-resolution 3D scan bundles, statistics tables, demographic coverage, and commercial deliverables so the purchase path feels clear and premium.
          </p>
        </div>

        <ScanStage
          title="Commercial package overview"
          models={[
            { type: "head" },
            { type: "hand", mirrored: true },
            { type: "ear" },
          ]}
        />
      </section>

      <section className="section-shell space-y-10">
        <SectionHeading
          eyebrow="Package catalog"
          title="Choose a focused anatomy dataset or a combined fit library."
          description="The cards below are productized around deliverables, demographic coverage, and fit-sensitive use cases."
        />

        <div className="grid gap-6 xl:grid-cols-2">
          {packageCatalog.map((item) => (
            <PackageCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="section-shell space-y-10">
        <SectionHeading
          eyebrow="Comparison"
          title="Which package is best for which industry or product category?"
          description="The comparison section keeps the package guidance practical and commercially useful."
        />

        <div className="surface-card overflow-hidden">
          <div className="hidden grid-cols-[1.1fr_0.9fr_0.9fr_1.3fr] gap-4 border-b border-white/8 px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-white/42 md:grid">
            <div>Industry / use case</div>
            <div>Best fit</div>
            <div>Support</div>
            <div>Why</div>
          </div>
          {packageComparison.map((row) => (
            <div
              key={row.industry}
              className="grid gap-4 border-b border-white/8 px-6 py-5 text-sm text-white/72 last:border-none md:grid-cols-[1.1fr_0.9fr_0.9fr_1.3fr]"
            >
              <div className="font-semibold text-white">{row.industry}</div>
              <div>{row.best}</div>
              <div>{row.support}</div>
              <div className="leading-7">{row.reason}</div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Purchase path"
        title="Need help choosing between 500, 1000, or a custom bundle?"
        body="Use the contact flow to request a sample scan, review deliverables, and align the right package with the industry and fit decisions that matter most."
        primaryLabel="Contact SIZEGlobal"
        primaryTo="/contact"
        secondaryLabel="View Methodology"
        secondaryTo="/about"
      />
    </div>
  );
}
