const projects = [
  {
    name: 'Apex Luxury Brand',
    tag: 'Brand Identity',
    bg: 'radial-gradient(circle at 30% 40%, rgba(212,175,55,0.18) 0%, transparent 55%), radial-gradient(circle at 75% 70%, rgba(180,140,20,0.1) 0%, transparent 40%), linear-gradient(135deg, #140e00 0%, #0d0800 100%)',
  },
  {
    name: 'Noir Automotive',
    tag: 'Visual Direction',
    bg: 'radial-gradient(circle at 60% 30%, rgba(180,180,200,0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(212,175,55,0.06) 0%, transparent 40%), linear-gradient(135deg, #070710 0%, #050508 100%)',
  },
  {
    name: 'Lumière Poster Series',
    tag: 'Print Design',
    bg: 'radial-gradient(circle at 50% 20%, rgba(212,175,55,0.14) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(212,100,55,0.06) 0%, transparent 35%), linear-gradient(135deg, #120a00 0%, #0a0600 100%)',
  },
  {
    name: 'Crest Packaging',
    tag: 'Packaging',
    bg: 'radial-gradient(circle at 25% 60%, rgba(212,175,55,0.12) 0%, transparent 50%), radial-gradient(circle at 70% 25%, rgba(150,120,30,0.08) 0%, transparent 40%), linear-gradient(135deg, #0e0e00 0%, #080800 100%)',
  },
  {
    name: 'Vortex Digital Brand',
    tag: 'Brand Identity',
    bg: 'radial-gradient(circle at 40% 50%, rgba(80,120,200,0.08) 0%, transparent 50%), radial-gradient(circle at 75% 20%, rgba(212,175,55,0.1) 0%, transparent 40%), linear-gradient(135deg, #04040e 0%, #020208 100%)',
  },
  {
    name: 'Soleil Social Campaign',
    tag: 'Social Media',
    bg: 'radial-gradient(circle at 60% 40%, rgba(212,175,55,0.16) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(212,130,30,0.08) 0%, transparent 40%), linear-gradient(135deg, #150f00 0%, #0c0800 100%)',
  },
];

export default function Portfolio() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="container">
        <div className="page-hero">
          <div className="section-tag fade1">Selected Work</div>
          <h1 className="page-title fade2">
            Brands we&apos;ve<br />
            <span className="gold-text">helped</span><br />
            define.
          </h1>
          <p className="hero-sub fade3" style={{ marginBottom: 0 }}>
            A curated selection of projects spanning identity, direction, and design. Every piece tells a story.
          </p>
        </div>
      </div>

      {/* PORTFOLIO GRID */}
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((p) => (
              <div key={p.name} className="portfolio-card">
                <div className="portfolio-card-bg" style={{ background: p.bg }} />
                <div className="portfolio-card-label">{p.tag}</div>
                <div className="portfolio-card-overlay">
                  <div className="portfolio-card-tag">{p.tag}</div>
                  <div className="portfolio-card-name">{p.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="section-tag" style={{ justifyContent: 'center' }}>Next Up</div>
        <h2 className="section-title">Your brand could<br />be here.</h2>
        <p className="section-sub" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
          We&apos;re selective with who we work with. If your brand is ready to level up, let&apos;s talk.
        </p>
        <a href="/contact" className="btn btn-primary">Start a Project</a>
      </div>
    </>
  );
}
