export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className="container">
        <div className="hero">
          <div>
            <div className="hero-badge fade1">
              <span className="hero-badge-dot" />
              Premium Creative Studio
            </div>
            <h1 className="hero-title fade2">
              DESIGN<br />
              <span className="gold-text">WITHOUT</span><br />
              LIMITS.
            </h1>
            <p className="hero-sub fade3">
              We craft brands that command attention, identities that endure, and visuals that leave a lasting impression.
            </p>
            <div className="hero-actions fade4">
              <a href="/portfolio" className="btn btn-primary">Explore Our Work</a>
              <a href="/contact" className="btn btn-ghost">Start a Project</a>
            </div>
            <div className="stats-row fade5">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="section">
        <div className="container">
          <div className="section-tag">What We Do</div>
          <h2 className="section-title">Studio Services</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            Every engagement is bespoke. We go deep so your brand goes far.
          </p>
          <div className="grid">
            <div className="card">
              <div className="card-icon">◈</div>
              <h3>Logo Design</h3>
              <p>Distinctive marks built for recognition across every medium — from billboard to favicon.</p>
            </div>
            <div className="card">
              <div className="card-icon">◉</div>
              <h3>Brand Identity</h3>
              <p>Complete visual systems: typography, colour, tone of voice, and everything in between.</p>
            </div>
            <div className="card">
              <div className="card-icon">▣</div>
              <h3>Social Media Design</h3>
              <p>Premium content designed to stop the scroll and build a recognisable presence.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a href="/services" className="btn btn-ghost">View All Services</a>
          </div>
        </div>
      </div>

      {/* TRUSTED BY */}
      <div className="container" style={{ paddingBottom: 80 }}>
        <div className="section-tag" style={{ justifyContent: 'center', marginBottom: 32 }}>Trusted By</div>
        <div className="logo-strip">
          <div>Apex Studio</div>
          <div>Lumière Co.</div>
          <div>Vortex Media</div>
          <div>Crest Group</div>
          <div>Noir Label</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="section-tag" style={{ justifyContent: 'center' }}>Ready?</div>
        <h2 className="section-title">Let&apos;s build something<br />unforgettable.</h2>
        <p className="section-sub" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
          Tell us about your project and we&apos;ll come back with a plan within 48 hours.
        </p>
        <a href="/contact" className="btn btn-primary">Get in Touch</a>
      </div>
    </>
  );
}
