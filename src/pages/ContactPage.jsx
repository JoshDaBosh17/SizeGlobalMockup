import { contactPaths, purchaseSteps } from "../data/siteData";
import { SectionHeading } from "../components/SectionHeading";

export function ContactPage() {
  return (
    <div className="space-y-24 pb-24 pt-8 md:space-y-28 md:pb-32 md:pt-14">
      <section className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="space-y-6">
          <p className="eyebrow">Contact</p>
          <h1 className="page-hero-title max-w-[10ch]">
            A clear commercial path for evaluating and purchasing the data.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-white/70">
            Request a package sheet, sample scan, or commercial quote for heads, hands, ears, or a combined bundle. The contact flow is designed to feel precise, direct, and premium.
          </p>
        </div>

        <div className="surface-card p-6 md:p-8">
          <p className="eyebrow">Primary contact</p>
          <h2 className="contact-address mt-3">
            contact@sizeglobal.com
          </h2>
          <p className="section-copy mt-4 max-w-2xl">
            Use email to request sample scans, review package contents, confirm demographic coverage, or discuss whether a 500-subject, 1000-subject, or custom bundle is the right fit.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:contact@sizeglobal.com?subject=SIZEGlobal%20Dataset%20Inquiry" className="btn-primary">
              Start an inquiry
            </a>
            <a href="mailto:contact@sizeglobal.com?subject=SIZEGlobal%20Sample%20Request" className="btn-secondary">
              Request a sample
            </a>
          </div>
        </div>
      </section>

      <section className="section-shell space-y-10">
        <SectionHeading
          eyebrow="Contact routes"
          title="Choose the conversation that matches your stage."
          description="The mockup keeps the commercial options simple and visible instead of hiding them behind generic contact language."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {contactPaths.map((item) => (
            <article key={item.title} className="surface-card p-6">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-copy mt-3">{item.body}</p>
              <a
                href={`mailto:contact@sizeglobal.com?subject=${encodeURIComponent(`SIZEGlobal ${item.cta}`)}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[rgba(255,255,255,0.8)]"
              >
                {item.cta}
                <span className="text-[var(--accent)]">›</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-10">
        <SectionHeading
          eyebrow="Purchase flow"
          title="A straightforward path from sample review to full dataset purchase."
          description="This section makes the commercial process feel deliberate and product-led."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {purchaseSteps.map((item) => (
            <article key={item.step} className="surface-card p-6">
              <div className="card-index">{item.step}</div>
              <h3 className="card-title mt-3">{item.title}</h3>
              <p className="card-copy mt-3">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
