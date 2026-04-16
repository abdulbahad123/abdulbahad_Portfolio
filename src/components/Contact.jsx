const contactLinks = [
  {
    id: 'github', href: 'https://github.com/',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" /></svg>,
  },
  {
    id: 'linkedin', href: 'https://linkedin.com/',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
  },
  {
    id: 'email', href: 'mailto:sameer@example.com',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" /></svg>,
  },
  {
    id: 'twitter', label: 'TWITTER', href: 'https://twitter.com/',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative">
      {/* Glow */}
      <div className="absolute inset-x-0 bottom-0 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 800px 400px at 50% 100%, rgba(124,58,237,0.2) 0%, transparent 70%)' }} />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative">
        {/* Heading */}
        <div className="flex items-center gap-4 w-full mb-10 reveal">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(270deg,rgba(124,58,237,0.5),transparent)' }} />
          <h2 className="code-heading text-2xl md:text-3xl font-bold whitespace-nowrap">
            <span className="grad-text">&lt;/</span>
            <span className="text-white">Contact</span>
            <span className="grad-text">&gt;</span>
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,rgba(124,58,237,0.5),transparent)' }} />
        </div>

        {/* Big CTA */}
        <h3 className="font-grotesk font-black text-5xl md:text-7xl text-white mb-3 reveal delay-100">
          READY TO BUILD
        </h3>
        <p className="font-grotesk font-light text-2xl md:text-3xl tracking-widest mb-10 reveal delay-200 grad-text">
          SOMETHING GREAT TOGETHER?
        </p>

        {/* Divider */}
        <div className="w-64 h-px mb-12 overflow-hidden reveal delay-200">
          <div className="h-full draw-line" style={{ background: 'linear-gradient(90deg,#7C3AED,#3B82F6)', animationDelay: '0.5s' }} />
        </div>

        {/* Social circles */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 reveal delay-300">
          {contactLinks.map(({ id, label, href, icon }) => (
            <a key={id} id={`contact-${id}`} href={href} target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 group" aria-label={label}>
              <div className="w-14 h-14 rounded-full border border-white/15 flex items-center justify-center
                              text-white/50 group-hover:text-white transition-all duration-300"
                style={{}
                }
                onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg,#7C3AED,#3B82F6)'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.boxShadow = '0 0 24px #7c3aed66'; }}
                onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.borderColor = ''; e.currentTarget.style.boxShadow = ''; }}>
                {icon}
              </div>
              <span className="font-mono text-[10px] text-white/30 tracking-widest group-hover:text-white/70 transition-colors">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* Send message button */}
        <a href="mailto:sameer@example.com"
          className="font-mono text-sm tracking-widest px-10 py-4 rounded text-white transition-all duration-300 hover:scale-105 mb-20 reveal delay-400"
          style={{ background: 'linear-gradient(135deg,#7C3AED,#3B82F6)', boxShadow: '0 0 24px #7c3aed44' }}>
          [ SEND MESSAGE → ]
        </a>

        <div className="w-full h-px mb-8" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <p className="font-mono text-xs text-white/20 tracking-widest">
          © 2026 SAMEER AHAMATH — ALL RIGHTS RESERVED — REV 1.0
        </p>
      </div>
    </section>
  );
}
