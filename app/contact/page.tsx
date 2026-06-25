export default function Contact() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="container">
        <div className="page-hero">
          <div className="section-tag fade1">Let&apos;s Talk</div>
          <h1 className="page-title fade2">
            Start your<br />
            <span className="gold-text">next</span><br />
            project.
          </h1>
          <p className="hero-sub fade3" style={{ marginBottom: 0 }}>
            Tell us what you&apos;re building and we&apos;ll come back with a tailored plan within 48 hours.
          </p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-grid">
            {/* FORM */}
            <div>
              <div className="section-tag" style={{ marginBottom: 32 }}>Send a Message</div>
              <form>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="form-field">
                    <label className="form-label">First Name</label>
                    <input className="form-input" type="text" placeholder="Alex" />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Last Name</label>
                    <input className="form-input" type="text" placeholder="Johnson" />
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label">Email Address</label>
                  <input className="form-input" type="email" placeholder="alex@company.com" />
                </div>
                <div className="form-field">
                  <label className="form-label">Service</label>
                  <select className="form-select">
                    <option value="" disabled>Select a service...</option>
                    <option>Logo Design</option>
                    <option>Brand Identity</option>
                    <option>Social Media Design</option>
                    <option>Packaging Design</option>
                    <option>Brand Guidelines</option>
                    <option>Visual Direction</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="form-field">
                  <label className="form-label">Tell Us About Your Project</label>
                  <textarea
                    className="form-textarea"
                    placeholder="What are you building? What do you need? Any context that will help us understand your vision..."
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                  Send Message
                </button>
              </form>
            </div>

            {/* INFO */}
            <div className="contact-info">
              <div className="section-tag" style={{ marginBottom: 32 }}>Get in Touch</div>
              <div className="contact-info-item">
                <div className="contact-icon">✉</div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <a href="mailto:hello@unboxabledesign.com" className="contact-info-value" style={{ transition: 'color 0.2s' }}>
                    hello@unboxabledesign.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">◎</div>
                <div>
                  <div className="contact-info-label">Instagram</div>
                  <a href="https://instagram.com/unboxabledesign" target="_blank" rel="noopener noreferrer" className="contact-info-value">
                    @unboxabledesign
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">◷</div>
                <div>
                  <div className="contact-info-label">Response Time</div>
                  <div className="contact-info-value">Within 48 hours</div>
                </div>
              </div>
              <div className="contact-info-item" style={{ borderBottom: 'none' }}>
                <div className="contact-icon">◈</div>
                <div>
                  <div className="contact-info-label">Project Start</div>
                  <div className="contact-info-value">Available Q3 2025</div>
                </div>
              </div>

              <div style={{
                marginTop: 48,
                padding: '28px',
                background: 'rgba(212,175,55,0.04)',
                border: '1px solid rgba(212,175,55,0.12)',
                borderRadius: 16,
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>
                  A note on process
                </div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
                  We work with a small number of clients at a time to ensure every project gets our full attention. The sooner you reach out, the sooner we can schedule your slot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
