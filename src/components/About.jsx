import { useState } from 'react';

/* Reusable sweep button */
function SweepBtn({ href, onClick, children, className, style }) {
  const [sweeping, setSweeping] = useState(false);
  const handle = (e) => {
    setSweeping(true);
    setTimeout(() => setSweeping(false), 600);
    if (onClick) onClick(e);
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={handle} className={`btn-sweep ${sweeping ? 'sweeping' : ''} ${className || ''}`} style={style}>
      {children}
    </Tag>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Code-style heading */}
        <div className="flex items-center gap-4 mb-12 reveal">
          <h2 className="code-heading text-3xl md:text-4xl font-bold">
            <span className="grad-text">&lt;/</span>
            <span className="text-white">AboutMe</span>
            <span className="grad-text">&gt;</span>
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,rgba(124,58,237,0.5),transparent)' }} />
        </div>

        <div className="grid md:grid-cols-[1fr_260px] gap-12 items-start">
          {/* Left: Bio text */}
          <div className="reveal delay-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="mt-2 w-3 h-3 rounded-full shrink-0"
                style={{ background: 'linear-gradient(135deg,#7C3AED,#3B82F6)', boxShadow: '0 0 12px #7c3aed88', animation: 'pulseGlow 2s ease-in-out infinite' }} />
              <p className="font-grotesk text-white text-lg leading-relaxed">
                Hi, I am <span className="grad-text font-bold">Abdul Bahad</span> from Chennai.
                I build scalable full-stack products that balance strong backend engineering
                with clean, responsive user interfaces.
              </p>
            </div>

            <div className="ml-7 space-y-4">
              <p className="font-grotesk text-white/80 leading-relaxed">
                My core stack includes{' '}
                <span className="text-white font-semibold">React, Node.js, MongoDB, MySQL,</span> and{' '}
                <span className="text-white font-semibold">Express.js</span>.
                I have delivered production systems across e-commerce, SaaS, and AI utility domains.
              </p>
              <p className="font-grotesk text-white/80 leading-relaxed">
                I enjoy owning complete development cycles — from architecture to deployment —
                with a focus on secure authentication, reusable components, and reliable
                third-party integrations such as Stripe, Brevo, and OpenAI APIs.
              </p>
            </div>

            {/* Action buttons */}
            <div className="ml-7 mt-8 flex flex-wrap gap-3">
              <SweepBtn
                href="#contact"
                className="font-mono text-sm tracking-wider px-6 py-2.5 rounded-md text-white"
                style={{ background: 'linear-gradient(135deg,#7C3AED,#3B82F6)', boxShadow: '0 0 20px #7c3aed44' }}>
                Hire Me →
              </SweepBtn>
              <SweepBtn
                href="#projects"
                className="font-mono text-sm tracking-wider px-6 py-2.5 rounded-md text-white/80 btn-fill-hover">
                View Work
              </SweepBtn>
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="reveal delay-200 flex flex-col items-center gap-4">
            <div className="avatar-border rounded-lg w-52 h-60 flex items-center justify-center overflow-hidden"
              style={{ background: 'rgba(124,58,237,0.08)' }}>
              <div className="flex flex-col items-center gap-3 text-white/25">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <span className="font-mono text-xs tracking-widest text-white/15">AVATAR</span>
              </div>
            </div>

            <a href="https://github.com/" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-violet/40 hover:border-violet text-white/50 hover:text-white transition-all duration-300"
              style={{ background: 'rgba(124,58,237,0.15)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
