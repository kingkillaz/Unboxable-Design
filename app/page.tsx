
import BackgroundParticles from '../components/BackgroundParticles';
export default function Home(){
  return <>
    <BackgroundParticles />
<nav className="nav"><a href="/">Home</a><a href="/portfolio">Portfolio</a><a href="/services">Services</a><a href="/about">About</a><a href="/contact">Contact</a></nav>

<div className="container hero">
<div>
<div className="hero-badge">Premium Creative Studio</div>
<h1 style={{
fontSize:"clamp(4rem,10vw,8rem)",fontWeight:900,lineHeight:.9,letterSpacing:"-0.04em",margin:0}}>
DESIGN<br/>
<span style={{background:"linear-gradient(to right,#fef08a,#facc15,#a16207)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
WITHOUT
</span><br/>
LIMITS.
</h1>

<p style={{fontSize:'22px',maxWidth:'700px'}}>
Built to be seen. Designed to be remembered.
</p>

<div className="gold-divider"></div>

<a className="btn" href="/portfolio">Explore Our Work</a>
</div>
</div>

<div className="container">
<h2>Trusted By</h2>
<div className="logo-strip">
<div>BRAND ONE</div><div>BRAND TWO</div><div>BRAND THREE</div><div>BRAND FOUR</div>
</div>
</div>

<div className="container">
<h2>Services</h2>
<div className="grid">
<div className="card"><h3>Logo Design</h3><p>Distinctive visual marks built for recognition.</p></div>
<div className="card"><h3>Brand Identity</h3><p>Complete systems that define your brand.</p></div>
<div className="card"><h3>Social Media Design</h3><p>Premium content designed to capture attention.</p></div>
</div>
</div>
</>}
