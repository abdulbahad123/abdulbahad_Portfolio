const experiences = [
  {
    role: 'FullStack Developer',
    company: 'wezan technologies',
    location: 'onsite , chennai , india',
    dates: 'Nov 2025 — Present',
    bullets: [
      'Architected and deployed 3+ production web apps using React + Node.js with RESTful APIs',
      'Reduced client page load times by 40% through code-splitting and lazy loading strategies',
      'Built Express & MongoDB APIs handling 10k+ daily requests with JWT auth and RBAC',
      'Implemented full deployment pipelines with CI/CD on Vercel and Railway platforms',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'PHP'],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Horizonium solution',
    location: 'onsit , Trichy,india',
    dates: 'Feb 2026 — Mar 2026',
    bullets: [
      'Developed responsive web applications using React.js with reusable component-based architecture, building dynamic UIs consumed by RESTful API services built with Node.js and Express.js',
      'Modelled and managed MongoDB collections with optimized schemas ensuring scalable and efficient data handling for user management, service listings, and contact workflows across the production platform',
    ],
    tags: ['React.js', 'tailwind css', 'js', 'css'],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'jamal mohamed college ',
    location: 'trichy',
    dates: 'Jun 2023 — Dec 2023',
    bullets: [
      'Developed responsive UI components using React and Tailwind CSS for SaaS clients',
      'Collaborated with design team to achieve 95+ Lighthouse performance scores',
      'Integrated third-party payment gateways including Razorpay and Stripe',
    ],
    tags: ['React', 'Tailwind CSS', 'Figma', 'REST APIs'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="absolute left-0 top-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto relative">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-14 reveal">
          <h2 className="code-heading text-3xl md:text-4xl font-bold">
            <span className="grad-text">&lt;/</span>
            <span className="text-white">Experience</span>
            <span className="grad-text">&gt;</span>
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,rgba(124,58,237,0.5),transparent)' }} />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gradient line — positioned precisely */}
          <div className="absolute"
            style={{
              left: '20px',
              top: '12px',
              bottom: '12px',
              width: '2px',
              background: 'linear-gradient(to bottom, #7C3AED, #3B82F6 50%, transparent)',
            }} />

          <div className="flex flex-col gap-10" style={{ paddingLeft: '56px' }}>
            {experiences.map(({ role, company, location, dates, bullets, tags }, idx) => (
              <div key={company + role} className={`relative reveal delay-${(idx + 1) * 100}`}>

                {/* Circle on the timeline — fixed to left edge */}
                <div
                  className="absolute flex items-center justify-center"
                  style={{
                    left: '-44px',
                    top: '14px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '2px solid #7C3AED',
                    background: '#0D0B1A',
                    boxShadow: '0 0 14px #7c3aed99',
                    zIndex: 2,
                  }}
                >
                  <div style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: 'linear-gradient(135deg,#7C3AED,#3B82F6)',
                  }} />
                </div>

                {/* Card */}
                <div className="exp-card p-6 tilt-card">
                  {/* Top row: role + dates */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h3 className="font-grotesk font-bold text-xl grad-text">{role}</h3>
                    <span className="font-mono text-xs text-white/40 tracking-wider whitespace-nowrap pt-1">{dates}</span>
                  </div>

                  {/* Company */}
                  <p className="font-grotesk text-white font-semibold text-sm mb-5">
                    {company}
                    {location && <span className="text-white/40 font-normal"> · {location}</span>}
                  </p>

                  {/* Bullet points — properly spaced */}
                  <ul className="space-y-3 mb-5">
                    {bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="shrink-0 mt-[5px]" style={{
                          width: '6px', height: '6px', borderRadius: '50%',
                          background: 'linear-gradient(135deg,#7C3AED,#3B82F6)',
                          display: 'block', flexShrink: 0,
                        }} />
                        <span className="font-grotesk text-sm text-white/80 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tags.map(t => (
                      <span key={t} className="pill-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
