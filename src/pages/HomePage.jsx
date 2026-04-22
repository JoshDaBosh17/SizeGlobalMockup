import { Link } from "react-router-dom";
import { CTASection } from "../components/CTASection";
import { ScanStage } from "../components/ScanStage";
import { SectionHeading } from "../components/SectionHeading";
import { productFeatures } from "../data/siteData";

export function HomePage() {
  return (
    <div className="space-y-24 pb-24 pt-8 md:space-y-32 md:pb-32 md:pt-14">
      <section className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <p className="eyebrow">Design for Diversity</p>
          <h1 className="page-hero-title max-w-[11ch]">
            Global fit starts with real human data.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-white/70">
            SIZEGlobal offers high-resolution 3D scan bundles and statistics tables across heads, hands, and ears. The catalog is designed for medical, wearable, sports, entertainment, and product teams making fit decisions with real population coverage.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/packages" className="btn-primary">
              Explore Data Packages
            </Link>
            <Link to="/contact" className="btn-secondary">
              Request a Sample
            </Link>
          </div>
        </div>

        <ScanStage
          title="Heads, Hands, and Ears"
          models={[
            { type: "hand", mirrored: true },
            { type: "head" },
            { type: "ear" },
          ]}
        />
      </section>

      <section className="section-shell">
        <div className="surface-card grid gap-8 p-8 md:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="space-y-4">
            <p className="eyebrow">Design for Diversity</p>
            <h2 className="max-w-2xl text-lg font-semibold leading-snug tracking-[-0.02em] text-white md:text-[1.35rem]">
              1000 high-resolution 3D scan bundles and statistics tables built for precise global fit.
            </h2>
          </div>

          <div className="space-y-5 text-[0.97rem] leading-8 text-white/68 md:text-base">
            <p>
              1000 high-resolution 3D scan bundles and statistics tables of Black, White, and Chinese
              ancestry for applications in the medical, sports, entertainment, and tech wearables
              industry.
            </p>
            <p>
              By sampling diverse populations from the world&apos;s three largest economies, the United
              States, China, and Europe, our datasets capture the scientifically significant
              variations in body sizes and shapes required to create precise product fit.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="surface-card grid gap-8 p-8 md:p-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <div className="space-y-3">
            <p className="eyebrow">100% Real People</p>
            <h2 className="section-title max-w-md">
              The world&apos;s largest and most diverse 3D scan database for fit-critical design.
            </h2>
          </div>

          <div className="space-y-5 text-[0.97rem] leading-8 text-white/68 md:text-base">
            <p>
              SIZEGlobal is the fusion of scientific precision and cultural diversity, home to the
              world&apos;s first global database of high-resolution 3D scan bundles and statistics
              tables.
            </p>
            <p>
              Our scans and statistics are meticulously gathered from individual scans of 100% real
              people, one person at a time, without the use of AI, algorithms, or guesswork.
              Continuously active in the field, we add new datasets and cultivate fresh knowledge.
            </p>
            <p>
              Over the past 20 years, we have painstakingly constructed the world&apos;s largest and
              most diverse 3D scan database of head, ear, and hand shapes to fit all your customers
              no matter where they live. Whether you need statistics, scans, or digital and
              physical models, SIZEGlobal has what you need.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell space-y-10">
        <SectionHeading
          eyebrow="Product Features"
          title="Built for global coverage, scientific confidence, and straightforward commercial use."
          description="A compact overview of the qualities that make the dataset practical for design, engineering, and fit decisions."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {productFeatures.map((item) => (
            <article key={item.title} className="surface-card p-6">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-copy mt-3">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Contact / purchase"
        title="Request a package sheet, sample scan, or commercial quote."
        body="Whether the project needs heads, hands, ears, or a combined fit library, the commercial path stays clear: review the scope, confirm the coverage, and purchase the right dataset."
        primaryLabel="Contact SIZEGlobal"
        primaryTo="/contact"
        secondaryLabel="Browse Packages"
        secondaryTo="/packages"
      />
    </div>
  );
}
