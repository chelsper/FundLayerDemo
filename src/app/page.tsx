import Link from "next/link";

const platformPillars = [
  {
    title: "Custom data architecture",
    body: "Model households, organizations, campaigns, credits, and fundraising structure around how the nonprofit actually operates."
  },
  {
    title: "Rules-driven automation",
    body: "Turn salutation logic, soft credits, giving levels, and constituency rules into reusable infrastructure instead of manual cleanup."
  },
  {
    title: "Integration-ready foundation",
    body: "Expose clean workflows through APIs so finance tools, forms, and operational systems stay connected."
  }
];

const productAreas = [
  "Dashboard with fundraising activity and workflow shortcuts",
  "Constituent records with relationships, addresses, and household logic",
  "Gift management for campaigns, crediting, pledges, and receipts",
  "Configurable rules engine explaining how nonprofit logic is enforced"
];

const problemPoints = [
  "Rigid systems that force teams to adapt to the software",
  "Disconnected tools and inconsistent constituent data",
  "Manual cleanup around recognition, reporting, and hierarchy rules",
  "Workflows that hide logic instead of operationalizing it"
];

export default function HomePage() {
  return (
    <main className="landing-shell">
      <section className="landing-hero-panel">
        <header className="landing-topbar">
          <div className="brand-lockup">
            <div className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <p className="eyebrow">Nonprofit CRM Platform</p>
              <strong>FundLayer</strong>
            </div>
          </div>
          <div className="landing-topbar-actions">
            <Link href="/login" className="button-link secondary-link button-compact">
              View Demo
            </Link>
            <a href="mailto:hello@fundlayer.app?subject=Request%20Demo%20Access" className="button-link button-compact">
              Request Demo Access
            </a>
          </div>
        </header>

        <div className="landing-hero-grid">
          <div className="landing-hero-copy">
            <p className="eyebrow">Rules-Driven CRM Infrastructure</p>
            <h1>Replace rigid nonprofit systems with software that fits how your team works.</h1>
            <p className="landing-lead">
              FundLayer is a configurable CRM platform built for nonprofit workflows, donor logic, and reporting.
            </p>
            <div className="landing-cta-row">
              <a href="mailto:hello@fundlayer.app?subject=Request%20Demo%20Access" className="button-link">
                Request Demo Access
              </a>
              <Link href="/login" className="button-link secondary-link">
                Enter Product Demo
              </Link>
            </div>
            <div className="landing-proof-strip">
              <span>Custom nonprofit workflows</span>
              <span>Operational rules engine</span>
              <span>Believable product demo</span>
            </div>
          </div>

          <aside className="landing-hero-card">
            <p className="eyebrow">Why It Matters</p>
            <div className="landing-problem-list">
              {problemPoints.map((point) => (
                <div key={point} className="landing-problem-item">
                  <span className="landing-problem-dot" aria-hidden="true" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="landing-section">
        <div className="landing-section-heading">
          <p className="eyebrow">Platform</p>
          <h2>Built around how organizations actually work.</h2>
          <p className="muted">
            FundLayer is not a nonprofit website with a demo attached. It is a product layer and a working CRM
            environment designed to show how configurable infrastructure can replace manual operations.
          </p>
        </div>
        <div className="landing-pillar-grid">
          {platformPillars.map((pillar) => (
            <article key={pillar.title} className="landing-pillar-card">
              <p className="eyebrow">Core Capability</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section landing-section-split">
        <article className="landing-feature-card">
          <p className="eyebrow">Product Demo</p>
          <h2>A realistic CRM interface powered by a real-world structure.</h2>
          <ul className="landing-feature-list">
            {productAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </article>

        <article className="landing-feature-card landing-rules-card">
          <p className="eyebrow">Rules Engine</p>
          <h2>The differentiator is the logic behind the interface.</h2>
          <p>
            FundLayer is designed to explain and enforce nonprofit logic like soft credits, giving levels, constituency
            hierarchy, addressee rules, and data validation through configurable rules instead of scattered workarounds.
          </p>
          <div className="landing-rule-tags">
            <span>Soft credits</span>
            <span>Giving levels</span>
            <span>Households</span>
            <span>Salutations</span>
            <span>Validation</span>
          </div>
        </article>
      </section>

      <section className="landing-footer-cta">
        <div>
          <p className="eyebrow">Next Step</p>
          <h2>See how nonprofit systems should actually work.</h2>
        </div>
        <div className="landing-cta-row">
          <a href="mailto:hello@fundlayer.app?subject=Request%20Demo%20Access" className="button-link">
            Request Demo Access
          </a>
          <Link href="/login" className="button-link secondary-link">
            Open Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
