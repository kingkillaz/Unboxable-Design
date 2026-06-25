export default function Services() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="container">
        <div className="page-hero">
          <div className="section-tag fade1">What We Offer</div>
          <h1 className="page-title fade2">
            Services built<br />
            for <span className="gold-text">ambitious</span><br />
            brands.
          </h1>
          <p className="hero-sub fade3" style={{ marginBottom: 0 }}>
            From a single mark to a full brand world — we do the work that makes you unforgettable.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="section">
        <div className="container">
          <div className="section-tag">Core Offerings</div>
          <h2 className="section-title">What We Do</h2>
          <div className="grid-2" style={{ marginTop: 40 }}>
            <div className="card">
              <div className="card-icon">◈</div>
              <h3>Logo Design</h3>
              <p>A logo is the cornerstone of your brand. We create distinctive marks — wordmarks, monograms, emblems — built to work everywhere from a business card to a billboard.</p>
            </div>
            <div className="card">
              <div className="card-icon">◉</div>
              <h3>Brand Identity</h3>
              <p>Complete visual systems that define your brand: logo suite, colour palette, typography, imagery style, and usage rules that keep everything consistent.</p>
            </div>
            <div className="card">
              <div className="card-icon">▣</div>
              <h3>Social Media Design</h3>
              <p>Scroll-stopping content templates, profile aesthetics, and campaign visuals that make your social presence unmistakable and professional.</p>
            </div>
            <div className="card">
              <div className="card-icon">◇</div>
              <h3>Packaging Design</h3>
              <p>Tactile brand experiences that sell on shelf and unbox beautifully. From concept to print-ready, we handle the full process.</p>
            </div>
            <div className="card">
              <div className="card-icon">▲</div>
              <h3>Brand Guidelines</h3>
              <p>A living document that teaches anyone — from your team to your printers — how to use your brand correctly, consistently, and confidently.</p>
            </div>
            <div className="card">
              <div className="card-icon">⊕</div>
              <h3>Visual Direction</h3>
              <p>Art direction for campaigns, photography briefs, and creative concept development. We define the vision so every piece of content feels cohesive.</p>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-tag">How It Works</div>
          <h2 className="section-title">Our Process</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            A clear, collaborative process from first call to final file.
          </p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-num">01</div>
              <div className="step-title">Discovery Call</div>
              <p className="step-desc">30 minutes to understand your brand, goals, audience, and what success looks like for you.</p>
            </div>
            <div className="process-step">
              <div className="step-num">02</div>
              <div className="step-title">Proposal & Brief</div>
              <p className="step-desc">We send a tailored proposal with scope, timeline, and investment. Once agreed, we write the creative brief.</p>
            </div>
            <div className="process-step">
              <div className="step-num">03</div>
              <div className="step-title">Design & Refine</div>
              <p className="step-desc">We present initial concepts, gather your feedback, and refine until we&apos;ve nailed it. Two rounds of revisions included.</p>
            </div>
            <div className="process-step">
              <div className="step-num">04</div>
              <div className="step-title">Final Delivery</div>
              <p className="step-desc">Production-ready files in all formats, a brand guide, and a handover call to make sure you&apos;re set up for success.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="section-tag" style={{ justifyContent: 'center' }}>Get Started</div>
        <h2 className="section-title">Tell us about<br />your project.</h2>
        <p className="section-sub" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
          We&apos;d love to hear what you&apos;re building. Drop us a message and we&apos;ll come back within 48 hours.
        </p>
        <a href="/contact" className="btn btn-primary">Get in Touch</a>
      </div>
    </>
  );
}
