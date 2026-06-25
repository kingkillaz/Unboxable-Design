export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="container">
        <div className="page-hero">
          <div className="section-tag fade1">Our Story</div>
          <h1 className="page-title fade2">
            The studio<br />
            <span className="gold-text">behind</span> the<br />
            work.
          </h1>
          <p className="hero-sub fade3" style={{ marginBottom: 0 }}>
            Unboxable Design is a boutique creative studio obsessed with the craft of branding. We believe great design isn&apos;t decoration — it&apos;s strategy made visible.
          </p>
        </div>
      </div>

      {/* MISSION */}
      <div className="section">
        <div className="container">
          <div className="section-tag">Mission</div>
          <p className="about-mission">
            We exist to give ambitious brands <em>an identity worth remembering</em>. Through deliberate craft, bold thinking, and relentless refinement, we turn ideas into visual systems that <em>outlast trends</em> and <em>command respect</em>.
          </p>
          <div className="gold-divider" style={{ marginTop: 48 }} />
        </div>
      </div>

      {/* VALUES */}
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-tag">What We Stand For</div>
          <h2 className="section-title">Our Values</h2>
          <div className="grid-2" style={{ marginTop: 40 }}>
            <div className="card">
              <div className="card-icon">◈</div>
              <h3>Bold by Default</h3>
              <p>We don&apos;t design to blend in. Every decision is made to stand out in a world drowning in sameness.</p>
            </div>
            <div className="card">
              <div className="card-icon">◉</div>
              <h3>Refined to the Detail</h3>
              <p>The space between letters, the weight of a line, the shade of a colour — everything matters. We sweat the small stuff so you don&apos;t have to.</p>
            </div>
            <div className="card">
              <div className="card-icon">▲</div>
              <h3>Purposeful, Always</h3>
              <p>Beauty without function is decoration. Every visual choice we make serves a strategic purpose tied to your goals.</p>
            </div>
            <div className="card">
              <div className="card-icon">◇</div>
              <h3>Built to Last</h3>
              <p>We design for ten years, not ten months. Timeless work that grows with your brand rather than needing a rebrand every season.</p>
            </div>
          </div>
        </div>
      </div>

      {/* APPROACH */}
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-tag">How We Work</div>
          <h2 className="section-title">The Unboxable Approach</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            We work with a small roster of clients at a time, ensuring every project gets our full attention and best thinking.
          </p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-num">01</div>
              <div className="step-title">Discovery</div>
              <p className="step-desc">Deep dive into your brand, market, audience, and ambitions to find the real brief beneath the brief.</p>
            </div>
            <div className="process-step">
              <div className="step-num">02</div>
              <div className="step-title">Strategy</div>
              <p className="step-desc">We define your positioning, personality, and visual direction before a single pixel is drawn.</p>
            </div>
            <div className="process-step">
              <div className="step-num">03</div>
              <div className="step-title">Creation</div>
              <p className="step-desc">Craft, refine, and craft again. We present considered concepts, not a wall of options.</p>
            </div>
            <div className="process-step">
              <div className="step-num">04</div>
              <div className="step-title">Delivery</div>
              <p className="step-desc">Full production-ready files, guidelines, and ongoing support to ensure your brand launches perfectly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="section-tag" style={{ justifyContent: 'center' }}>Work With Us</div>
        <h2 className="section-title">Ready to build<br />something great?</h2>
        <p className="section-sub" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
          We take on a limited number of projects each quarter. Reach out early.
        </p>
        <a href="/contact" className="btn btn-primary">Start a Conversation</a>
      </div>
    </>
  );
}
