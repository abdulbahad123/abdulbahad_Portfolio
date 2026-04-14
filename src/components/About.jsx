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
                I build scalable full-stack development
                with clean, responsive user interfaces.
              </p>
            </div>

            <div className="ml-7 space-y-4">
              <p className="font-grotesk text-white/80 leading-relaxed">
                I have skilled on {' '}
                <span className="text-white font-semibold">React, Node.js, MongoDB, MySQL,php , figma , javascript</span> and{' '}
                <span className="text-white font-semibold">Express.js</span>.
              </p>
              <p className="font-grotesk text-white/80 leading-relaxed">

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
                <img src="./src/assets/bahad.jpg" alt="abdul bahad" />

              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
