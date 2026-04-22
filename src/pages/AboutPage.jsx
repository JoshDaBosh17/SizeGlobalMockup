import { CTASection } from "../components/CTASection";
import { ScanStage } from "../components/ScanStage";
import { SectionHeading } from "../components/SectionHeading";
import { aboutResources, methodologyPillars, methodologySteps } from "../data/siteData";

export function AboutPage() {
  return (
    <div className="space-y-24 pb-24 pt-8 md:space-y-28 md:pb-32 md:pt-14">
      <section className="section-shell grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
        <div className="space-y-6">
          <p className="eyebrow">About / methodology</p>
          <h1 className="page-hero-title max-w-[11ch]">
            Scientific rigor, transparent coverage, and repeatable dataset packaging.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-white/70">
            SIZEGlobal is positioned around real human subjects, anthropometric rigor, and transparent methodology so teams can make better global fit decisions with more confidence.
          </p>
        </div>

        <ScanStage
          title="Methodology overview"
          models={[
            { type: "head" },
            { type: "hand", mirrored: true },
            { type: "ear" },
          ]}
        />
      </section>

      <section className="section-shell space-y-10">
        <SectionHeading
          eyebrow="Core principles"
          title="A methodology story that feels credible without becoming academic clutter."
          description="The about page balances scientific trust with a modern product presentation."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {methodologyPillars.map((item) => (
            <article key={item.title} className="surface-card p-6">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-copy mt-3">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-10">
        <SectionHeading
          eyebrow="Process"
          title="A repeatable path from human subjects to design-ready datasets."
          description="Each step is presented as part of a deliberate system rather than hidden technical overhead."
        />

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {methodologySteps.map((item) => (
            <article key={item.step} className="surface-card p-6">
              <div className="card-index">{item.step}</div>
              <h3 className="card-title mt-3">{item.title}</h3>
              <p className="card-copy mt-3">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-10">
        <SectionHeading
          eyebrow="Resources"
          title="Publications, methodology notes, and contact pathways can live here."
          description="This keeps the methodology page useful for technical reviewers without losing the premium catalog feel."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {aboutResources.map((item) => (
            <article key={item.title} className="surface-card p-6">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-copy mt-3">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Contact"
        title="Discuss methodology, package scope, or a sample review."
        body="The site keeps the transition from scientific credibility to commercial inquiry smooth, with clear contact paths for technical and purchasing conversations."
        primaryLabel="Contact SIZEGlobal"
        primaryTo="/contact"
        secondaryLabel="View Packages"
        secondaryTo="/packages"
      />
    </div>
  );
}
