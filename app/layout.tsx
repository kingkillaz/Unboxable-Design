import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import Nav from '../components/Nav'
import BackgroundParticles from '../components/BackgroundParticles'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })

export const metadata: Metadata = {
  title: 'Unboxable Design — Premium Creative Studio',
  description: 'Award-winning branding, visual identity, and digital design. Built to be seen. Designed to be remembered.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <BackgroundParticles />
        <Nav />
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <div className="footer-logo">UNBOXABLE<span className="gold">.</span></div>
                <p className="footer-tagline">
                  A premium creative studio crafting brands that command attention and endure.
                </p>
              </div>
              <div>
                <div className="footer-col-title">Navigate</div>
                <Link href="/portfolio" className="footer-link">Portfolio</Link>
                <Link href="/services" className="footer-link">Services</Link>
                <Link href="/about" className="footer-link">About</Link>
                <Link href="/contact" className="footer-link">Contact</Link>
              </div>
              <div>
                <div className="footer-col-title">Connect</div>
                <a href="mailto:hello@unboxabledesign.com" className="footer-link">hello@unboxabledesign.com</a>
                <a href="https://instagram.com/unboxabledesign" className="footer-link" target="_blank" rel="noopener noreferrer">@unboxabledesign</a>
              </div>
            </div>
            <div className="footer-bottom">
              <span className="footer-copy">© 2025 Unboxable Design. All rights reserved.</span>
              <span className="footer-copy">Design Without Limits.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
