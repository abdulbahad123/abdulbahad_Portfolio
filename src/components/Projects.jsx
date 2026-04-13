import { useState } from 'react';

/* ── Sweep button ── */
function SweepBtn({ href, children, className, style }) {
  const [sw, setSw] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer"
      onClick={() => { setSw(true); setTimeout(() => setSw(false), 600); }}
      className={`btn-sweep ${sw ? 'sweeping' : ''} ${className || ''}`}
      style={style}>
      {children}
    </a>
  );
}

/* ── Browser Mockup ── */
function BrowserMockup({ url, gradient, content }) {
  return (
    <div className="browser-wrap w-full">
      {/* Chrome bar */}
      <div className="browser-chrome">
        <span className="browser-dot" style={{ background: '#FF5F57' }} />
        <span className="browser-dot" style={{ background: '#FEBC2E' }} />
        <span className="browser-dot" style={{ background: '#28C840' }} />
        <div className="flex-1 ml-3 h-5 rounded-sm flex items-center px-2"
          style={{ background: 'rgba(255,255,255,0.05)' }}>
          <span className="font-mono text-[9px] text-white/30 truncate">{url}</span>
        </div>
      </div>
      {/* Content area */}
      <div className="browser-body" style={{ background: gradient, minHeight: '180px', position: 'relative', overflow: 'hidden' }}>
        {content}
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg,rgba(255,255,255,0.03) 0,rgba(255,255,255,0.03) 1px,transparent 1px,transparent 28px),repeating-linear-gradient(90deg,rgba(255,255,255,0.03) 0,rgba(255,255,255,0.03) 1px,transparent 1px,transparent 28px)',
          }} />
      </div>
    </div>
  );
}

/* ── Project data ── */
const projects = [
  {
    name: 'OilfyB2B Marketplace',
    status: 'LIVE',
    url: 'oilfy.com',
    liveUrl: '#',
    repoUrl: '#',
    bullets: [
      'Architected a full B2B marketplace platform with JWT authentication, role-protected routes, and a dynamic product catalog for industrial suppliers',
      'Integrated Stripe payment gateway with server-side order validation and a GitHub-based CI/CD pipeline deploying React frontend to Vercel and Express backend to Render',
    ],
    tags: ['React', 'Node.js', 'MySQL', 'Bootstrap', 'Stripe API'],
    gradient: 'linear-gradient(135deg, #0f1e3d 0%, #1a3a6e 50%, #0d2a5e 100%)',
    mockupContent: (
      <div className="p-4 h-full flex flex-col gap-2">
        {/* Fake navbar */}
        <div className="flex items-center justify-between px-3 py-2 rounded"
          style={{ background: 'rgba(255,255,255,0.06)' }}>
          <div className="w-16 h-2 rounded" style={{ background: 'rgba(255,255,255,0.2)' }} />
          <div className="flex gap-2">
            {['Home', 'Products', 'Blog'].map(l => (
              <div key={l} className="w-10 h-1.5 rounded" style={{ background: 'rgba(255,255,255,0.12)' }} />
            ))}
          </div>
        </div>
        {/* Hero banner */}
        <div className="flex-1 rounded flex items-center justify-between px-4 py-3 mt-1"
          style={{ background: 'rgba(41,74,160,0.5)' }}>
          <div className="flex flex-col gap-1.5">
            <div className="w-28 h-3 rounded" style={{ background: 'rgba(255,255,255,0.7)' }} />
            <div className="w-20 h-2 rounded" style={{ background: 'rgba(255,255,255,0.4)' }} />
            <div className="w-14 h-5 rounded mt-1" style={{ background: '#3B82F6' }} />
          </div>
          <div className="w-20 h-16 rounded" style={{ background: 'rgba(255,255,255,0.1)' }} />
        </div>
        {/* Product grid row */}
        <div className="flex gap-2 mt-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex-1 h-8 rounded" style={{ background: 'rgba(255,255,255,0.06)' }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    name: 'Customer Form Notifier',
    status: 'BUILT',
    url: 'formnotifier.app',
    liveUrl: '#',
    repoUrl: '#',
    bullets: [
      'End-to-end form submission system with MySQL database, JWT authentication, and a React frontend for authenticated multi-step form collection',
      'Implemented automated admin email notifications via Nodemailer triggered on every new form submission with full error handling',
    ],
    tags: ['React', 'Node.js', 'MySQL', 'Nodemailer', 'JWT'],
    gradient: 'linear-gradient(135deg, #1a0d3d 0%, #2d1470 50%, #1a0d4a 100%)',
    mockupContent: (
      <div className="p-4 h-full flex flex-col gap-3 justify-center">
        <div className="w-24 h-3 rounded" style={{ background: 'rgba(167,139,250,0.6)' }} />
        <div className="flex flex-col gap-2">
          {['Full Name', 'Email Address', 'Message'].map(f => (
            <div key={f} className="flex flex-col gap-1">
              <div className="w-16 h-1.5 rounded" style={{ background: 'rgba(255,255,255,0.2)' }} />
              <div className="w-full h-6 rounded border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(124,58,237,0.3)' }} />
            </div>
          ))}
          <div className="w-20 h-7 rounded mt-1" style={{ background: 'linear-gradient(90deg,#7C3AED,#3B82F6)' }} />
        </div>
      </div>
    ),
  },
  {
    name: 'Blueprint Portfolio',
    status: 'LIVE',
    url: 'sameer.dev',
    liveUrl: '#',
    repoUrl: '#',
    bullets: [
      'Built a Living Blueprint aesthetic single-page portfolio with React + Tailwind CSS, canvas-based particle constellation background, and IntersectionObserver scroll animations',
      'Implemented floating skill orbit cards, shimmer text effects, 3D tilt hover, and a left-to-right button sweep animation for premium UX',
    ],
    tags: ['React', 'Tailwind CSS', 'Vite', 'Canvas API'],
    gradient: 'linear-gradient(135deg, #020b18 0%, #041525 50%, #071e33 100%)',
    mockupContent: (
      <div className="p-4 h-full flex flex-col items-center justify-center gap-3">
        <div className="font-mono text-[10px] text-white/30">// DEVELOPER_PROFILE.blueprint</div>
        <div className="font-grotesk font-black text-white text-2xl tracking-tight">SAMEER.</div>
        <div className="w-24 h-px" style={{ background: 'linear-gradient(90deg,#7C3AED,#3B82F6)' }} />
        <div className="flex gap-2">
          <div className="px-3 py-1 rounded text-[8px] font-mono" style={{ background: 'linear-gradient(90deg,#7C3AED,#3B82F6)' }}>HIRE ME</div>
          <div className="px-3 py-1 rounded text-[8px] font-mono border border-white/20">VIEW WORK</div>
        </div>
      </div>
    ),
  },
  {
    name: 'Dev Dashboard Pro',
    status: 'BUILT',
    url: 'dashboard.sameer.dev',
    liveUrl: '#',
    repoUrl: '#',
    bullets: [
      'Unified developer productivity dashboard aggregating GitHub repos, deployed app metrics, and task boards into a real-time interface',
      'Used WebSocket connections for live data streaming and implemented GitHub OAuth for secure third-party API access',
    ],
    tags: ['React', 'Express', 'WebSockets', 'GitHub API', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #0a1628 0%, #0f2040 50%, #0a1830 100%)',
    mockupContent: (
      <div className="p-3 h-full flex flex-col gap-2">
        {/* Fake sidebar + main */}
        <div className="flex gap-2 flex-1">
          <div className="w-12 flex flex-col gap-2 pt-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-full h-3 rounded" style={{ background: 'rgba(59,130,246,0.15)' }} />
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="grid grid-cols-3 gap-1.5">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-8 rounded flex flex-col justify-between p-1"
                  style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <div className="w-full h-1 rounded" style={{ background: 'rgba(59,130,246,0.3)' }} />
                  <div className="w-8 h-2 rounded" style={{ background: 'rgba(255,255,255,0.3)' }} />
                </div>
              ))}
            </div>
            <div className="flex-1 rounded" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(59,130,246,0.1)' }} />
          </div>
        </div>
      </div>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute right-0 bottom-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-14 reveal">
          <h2 className="code-heading text-3xl md:text-4xl font-bold">
            <span className="grad-text">&lt;/</span>
            <span className="text-white">Projects</span>
            <span className="grad-text">&gt;</span>
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,rgba(124,58,237,0.5),transparent)' }} />
        </div>

        {/* Cards - stacked full-width, split layout */}
        <div className="flex flex-col gap-8">
          {projects.map(({ name, status, url, liveUrl, repoUrl, bullets, tags, gradient, mockupContent }, idx) => (
            <div
              key={name}
              className={`exp-card tilt-card p-0 overflow-hidden reveal delay-${(idx % 3) * 100 + 100}`}
            >
              <div className="flex flex-col lg:flex-row">
                {/* ── Left: text content ── */}
                <div className="flex-1 p-7 flex flex-col gap-4"
                  style={{ background: 'rgba(124,58,237,0.03)' }}>
                  {/* Status badge */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-widest px-2.5 py-1 rounded"
                      style={{
                        border: `1px solid ${status === 'LIVE' ? '#7C3AED' : 'rgba(255,255,255,0.15)'}`,
                        color: status === 'LIVE' ? '#C084FC' : 'rgba(255,255,255,0.35)',
                        background: status === 'LIVE' ? 'rgba(124,58,237,0.12)' : 'transparent',
                      }}>
                      {status === 'LIVE' ? '● LIVE' : '○ BUILT'}
                    </span>
                  </div>

                  {/* Project name */}
                  <h3 className="font-grotesk font-bold text-2xl text-white leading-snug">{name}</h3>

                  {/* Bullets */}
                  <ul className="space-y-3 flex-1">
                    {bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="shrink-0 mt-[7px]"
                          style={{
                            width: '6px', height: '6px', borderRadius: '50%',
                            background: 'linear-gradient(135deg,#7C3AED,#3B82F6)',
                            display: 'block',
                          }} />
                        <span className="font-grotesk text-sm text-white/75 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tags.map(t => <span key={t} className="pill-tag">{t}</span>)}
                  </div>

                  {/* Action links */}
                  <div className="flex items-center gap-4 pt-2">
                    <SweepBtn
                      href={liveUrl}
                      className="font-grotesk text-sm font-semibold flex items-center gap-1.5 px-4 py-2 rounded-md"
                      style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', color: '#C084FC' }}>
                      Live view →
                    </SweepBtn>
                    <a href={repoUrl} className="font-mono text-xs text-white/40 hover:text-white transition-colors tracking-wider">
                      View Source ↗
                    </a>
                  </div>
                </div>

                {/* ── Right: browser mockup ── */}
                <div className="lg:w-[45%] p-5 flex items-center"
                  style={{ background: 'rgba(0,0,0,0.2)' }}>
                  <BrowserMockup url={url} gradient={gradient} content={mockupContent} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
