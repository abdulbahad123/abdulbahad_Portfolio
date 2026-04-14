import { useEffect, useState } from 'react';

const roles = ['Frontend Developer', 'Full stack Developer'];

/* Generic animated button with left→right sweep on click */
export function SweepButton({ href, onClick, children, className = '', style = {} }) {
  const [sweeping, setSweeping] = useState(false);
  const handleClick = (e) => {
    setSweeping(true);
    setTimeout(() => setSweeping(false), 600);
    if (onClick) onClick(e);
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={handleClick} style={style}
      className={`btn-sweep ${sweeping ? 'sweeping' : ''} ${className}`}>
      {children}
    </Tag>
  );
}

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const [dlAnim, setDlAnim] = useState(false);

  useEffect(() => {
    const full = roles[roleIdx];
    if (typing) {
      if (displayed.length < full.length) {
        const t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx(p => (p + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  const handleDownload = () => {
    setDlAnim(true);
    setTimeout(() => setDlAnim(false), 1200);
    /* Creates a dummy CV download — replace '/resume.pdf' with real file */
    const a = document.createElement('a');
    a.href = '/resume.pdf';
    a.download = 'Sameer_Ahamath_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Radial glow overlays */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 700px 600px at -5% 55%, rgba(124,58,237,0.28) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 500px 400px at 105% 60%, rgba(59,130,246,0.16) 0%, transparent 70%)' }} />

      {/* Floating dash lines like reference */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className="absolute pointer-events-none select-none"
          style={{
            left: `${10 + i * 18}%`,
            top: `${30 + (i % 3) * 20}%`,
            width: '50px', height: '2px',
            background: 'linear-gradient(90deg,rgba(124,58,237,0.4),transparent)',
            transform: 'rotate(-45deg)',
            animation: `dashMove ${3 + i * 0.7}s ease-in-out ${i * 0.4}s infinite`,
          }} />
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col px-6 max-w-5xl w-full ml-0 md:ml-24"
        style={{ marginTop: '60px' }}>
        {/* Hello(); greeting */}
        <p className="font-mono text-white text-xl md:text-2xl mb-2"
          style={{ animation: 'slideUp 0.5s ease 0.1s both' }}>
          Hello(); I'm
        </p>

        {/* Name - gradient large */}
        <h1 className="font-grotesk font-black leading-none mb-2"
          style={{ animation: 'slideUp 0.5s ease 0.25s both', fontSize: 'clamp(3.5rem,10vw,8rem)' }}>
          <span className="shimmer-text">Abdul Bahad.</span>
        </h1>

        {/* Role title */}
        <h2 className="font-grotesk font-black text-white leading-tight mb-5"
          style={{ animation: 'slideUp 0.5s ease 0.4s both', fontSize: 'clamp(2rem,6vw,5rem)' }}>
          {displayed}<span className="cursor-blink text-violet-400">|</span>
        </h2>

        {/* Description */}
        <p className="font-grotesk text-white/60 max-w-md text-sm leading-relaxed mb-2"
          style={{ animation: 'slideUp 0.5s ease 0.55s both' }}>
          Full Stack Developer skilled in React.js, Tailwind CSS, Node.js, Express.js, MySQL, and MongoDB — building scalable and production-ready web applications.
        </p>


        {/* CTA buttons */}
        <div className="flex flex-wrap items-center gap-4"
          style={{ animation: 'slideUp 0.5s ease 0.8s both' }}>
          {/* Let's Talk — sweep fill */}
          <SweepButton
            href="#contact"
            className="font-mono text-sm tracking-widest px-7 py-3 rounded-md text-white"
            style={{ background: 'linear-gradient(135deg,#7C3AED,#3B82F6)', boxShadow: '0 0 24px #7c3aed55' }}>
            Let's Talk! →
          </SweepButton>

          {/* Download Resume */}
          <button
            onClick={handleDownload}
            className={`btn-fill-hover font-mono text-sm tracking-widest px-7 py-3 rounded-md text-white/80 flex items-center gap-2 ${dlAnim ? 'downloading' : ''}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              className={dlAnim ? 'dl-icon-anim' : ''}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {dlAnim ? 'Downloading...' : 'Download CV'}
          </button>

          {/* Settings / gear icon */}
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:border-violet hover:text-white transition-all duration-300 cursor-pointer"
            style={{ background: 'rgba(124,58,237,0.06)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Coordinates bottom-right */}
      <div className="absolute bottom-8 right-8 font-mono text-xs text-white/20 tracking-wider select-none">
        LAT: 13.08° N · LNG: 80.27° E
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'bounce 2s infinite' }}>
        <span className="font-mono text-xs text-white/25 tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-violet/50 to-transparent" />
      </div>
    </section>
  );
}
