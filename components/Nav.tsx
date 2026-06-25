'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        UNBOXABLE<span className="gold">.</span>
      </Link>
      <div className="nav-links">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`nav-link${pathname === href ? ' nav-link-active' : ''}`}
          >
            {label}
          </Link>
        ))}
        <Link href="/contact" className="btn-nav">Get Started</Link>
      </div>
    </nav>
  );
}
