import { useState, useEffect } from 'react';

/* Nav link labels in </Tag> style */
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'AboutMe', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(`#${e.target.id}`); }),
      { threshold: 0.35 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'navbar-glass' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo orb */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 shrink-0">
            <div className="absolute inset-0 rounded-full border border-violet/50"
              style={{ animation: 'spin 12s linear infinite' }} />
            <div className="absolute inset-1 rounded-full border border-blue-400/30"
              style={{ animation: 'spin 8s linear infinite reverse' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full"
                style={{ background: 'linear-gradient(135deg,#7C3AED,#3B82F6)' }} />
            </div>
          </div>
          <span className="font-grotesk font-black text-white tracking-[0.2em] text-sm">abdul bahad</span>
        </div>

        {/* Desktop nav — code-style </Label> tags */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href;
            return (
              <a
                key={href}
                href={href}
                onClick={() => setActive(href)}
                className={`font-mono text-xs px-3 py-2 rounded transition-all duration-300 ${isActive
                    ? 'text-white'
                    : 'text-white/40 hover:text-white/80'
                  }`}
              >
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle"
                    style={{ background: 'linear-gradient(135deg,#7C3AED,#3B82F6)', marginBottom: '1px' }} />
                )}
                <span className="grad-text">&lt;/</span>
                <span className={isActive ? 'text-white font-bold' : ''}>{label}</span>
                <span className="grad-text">&gt;</span>
                {isActive && (
                  <div className="h-0.5 mt-1 w-full draw-line rounded"
                    style={{ background: 'linear-gradient(90deg,#7C3AED,#3B82F6)' }} />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px w-4 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            style={{ background: 'linear-gradient(90deg,#7C3AED,#3B82F6)' }} />
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden navbar-glass border-t border-violet/10 px-6 py-4 flex flex-col gap-3">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href}
              onClick={() => { setActive(href); setMenuOpen(false); }}
              className="font-mono text-xs text-white/60 hover:text-white transition-colors py-1">
              <span className="grad-text">&lt;/</span>{label}<span className="grad-text">&gt;</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
