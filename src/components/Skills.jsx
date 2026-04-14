import { useEffect, useRef } from 'react';

/* ── Skill data ── */
const skills = [
  { name: 'React', color: '#61dafb', svg: <img src='./src/assets/skills/react-js-icon-B2YyJmxM.png' alt="react js " /> },
  { name: 'Node.js', color: '#68a063', svg: <svg viewBox="0 0 24 24" width="26" height="26" fill="#68a063"><path d="M12 1.85l-9 5.2v10.4l9 5.2 9-5.2V7.05z" opacity=".2" /><path d="M12 1.85l-9 5.2v10.4l9 5.2 9-5.2V7.05L12 1.85zm7 14.7L12 20.3l-7-3.75V8.25L12 4.5l7 3.75v8.3z" /><text x="12" y="15.5" textAnchor="middle" fontSize="6" fill="#68a063" fontWeight="bold" fontFamily="monospace">N</text></svg> },
  { name: 'MongoDB', color: '#4db33d', svg: <svg viewBox="0 0 32 32" width="26" height="26"><path d="M16 2c-2 6-6 9-6 15s2.5 9 6 11c3.5-2 6-5 6-11S18 8 16 2z" fill="#4db33d" /><line x1="16" y1="24" x2="16" y2="30" stroke="#a8c7fa" strokeWidth="1.5" /></svg> },
  { name: 'JavaScript', color: '#f7df1e', svg: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="28" height="28" x="2" y="2" fill="#f7df1e" rx="2" /><text x="16" y="24" textAnchor="middle" fontSize="14" fill="#000" fontWeight="bold" fontFamily="monospace">JS</text></svg> },
  { name: 'TypeScript', color: '#3178c6', svg: <svg viewBox="0 0 32 32" width="28" height="28"><rect width="28" height="28" x="2" y="2" fill="#3178c6" rx="2" /><text x="16" y="24" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold" fontFamily="monospace">TS</text></svg> },
  { name: 'HTML5', color: '#e34f26', svg: <svg viewBox="0 0 32 32" width="26" height="26"><polygon points="4,2 28,2 26,28 16,31 6,28" fill="#e34f26" /><text x="16" y="21" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="bold" fontFamily="monospace">HTML</text></svg> },
  { name: 'CSS3', color: '#264de4', svg: <svg viewBox="0 0 32 32" width="26" height="26"><polygon points="4,2 28,2 26,28 16,31 6,28" fill="#264de4" /><text x="16" y="21" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold" fontFamily="monospace">CSS</text></svg> },
  { name: 'Tailwind', color: '#38bdf8', svg: <svg viewBox="0 0 32 32" width="28" height="28"><path d="M16 6C11 6 8 8.5 7 13.5c1.5-2 3-2.75 4.5-2.25C12.37 11.6 13.13 12.4 14 13.25 15.5 14.8 17.25 16.5 21 16.5c5 0 8-2.5 9-7.5-1.5 2-3 2.75-4.5 2.25-.87-.35-1.63-1.15-2.5-2C21.5 7.7 19.75 6 16 6zm-9 10.5C2 16.5-1 19 0 24c1.5-2 3-2.75 4.5-2.25C5.37 22.1 6.13 22.9 7 23.75 8.5 25.3 10.25 27 14 27c5 0 8-2.5 9-7.5-1.5 2-3 2.75-4.5 2.25-.87-.35-1.63-1.15-2.5-2C14.5 18.2 12.75 16.5 9 16.5z" fill="#38bdf8" /></svg> },
  { name: 'Git', color: '#f05032', svg: <svg viewBox="0 0 32 32" width="26" height="26" fill="#f05032"><circle cx="24" cy="8" r="4" /><circle cx="8" cy="8" r="4" /><circle cx="8" cy="24" r="4" /><line x1="8" y1="8" x2="24" y2="8" stroke="#f05032" strokeWidth="2" /><line x1="8" y1="8" x2="8" y2="24" stroke="#f05032" strokeWidth="2" /><line x1="24" y1="8" x2="8" y2="24" stroke="#f05032" strokeWidth="2" /></svg> },
  { name: 'Express', color: '#c084fc', svg: <svg viewBox="0 0 32 32" width="28" height="28"><text x="4" y="20" fontSize="9" fill="#c084fc" fontWeight="bold" fontFamily="monospace">EXP</text><line x1="4" y1="23" x2="28" y2="23" stroke="#c084fc" strokeWidth="1.5" /></svg> },
  { name: 'Figma', color: '#a259ff', svg: <svg viewBox="0 0 32 32" width="24" height="24"><rect x="10" y="2" width="12" height="10" rx="5" fill="#f24e1e" /><rect x="10" y="22" width="12" height="8" rx="0 0 5 5" fill="#0acf83" /><circle cx="22" cy="17" r="5" fill="#1abcfe" /><rect x="10" y="12" width="12" height="10" fill="#a259ff" /><rect x="10" y="12" width="6" height="10" fill="#ff7262" /></svg> },
  { name: 'Docker', color: '#2496ed', svg: <svg viewBox="0 0 32 32" width="28" height="28" fill="#2496ed"><rect x="2" y="14" width="5" height="4" rx=".5" /><rect x="8" y="14" width="5" height="4" rx=".5" /><rect x="14" y="14" width="5" height="4" rx=".5" /><rect x="14" y="8" width="5" height="4" rx=".5" /><rect x="8" y="8" width="5" height="4" rx=".5" /></svg> },
  { name: 'Vite', color: '#bd34fe', svg: <svg viewBox="0 0 32 32" width="26" height="26"><polygon points="16,2 30,28 2,28" fill="none" stroke="#bd34fe" strokeWidth="1.5" /><line x1="16" y1="10" x2="16" y2="22" stroke="#ffd62e" strokeWidth="2.5" strokeLinecap="round" /></svg> },
  { name: 'MySQL', color: '#00758f', svg: <svg viewBox="0 0 32 32" width="26" height="26"><ellipse cx="16" cy="8" rx="10" ry="4" fill="#00758f" /><path d="M6 8v16c0 2.2 4.5 4 10 4s10-1.8 10-4V8" fill="#00758f" opacity=".4" /><ellipse cx="16" cy="8" rx="10" ry="4" fill="none" stroke="#00aaba" strokeWidth="1" /></svg> },
  { name: 'REST API', color: '#c084fc', svg: <svg viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="#c084fc" strokeWidth="1.5"><rect x="2" y="8" width="10" height="6" rx="1" /><rect x="20" y="8" width="10" height="6" rx="1" /><rect x="11" y="20" width="10" height="6" rx="1" /><line x1="12" y1="11" x2="20" y2="11" /><line x1="16" y1="14" x2="16" y2="20" /></svg> },
];

/* Positions scattered across the section */
const positions = [
  { top: '8%', left: '8%' }, { top: '12%', left: '28%' }, { top: '5%', left: '50%' },
  { top: '10%', left: '72%' }, { top: '8%', left: '88%' }, { top: '30%', left: '5%' },
  { top: '35%', left: '22%' }, { top: '28%', left: '42%' }, { top: '32%', left: '62%' },
  { top: '30%', left: '82%' }, { top: '55%', left: '12%' }, { top: '58%', left: '35%' },
  { top: '52%', left: '55%' }, { top: '57%', left: '75%' }, { top: '54%', left: '92%' },
];

const floatAnims = [
  'float-slow', 'float-med', 'float-fast', 'float-slow', 'float-med',
  'float-fast', 'float-slow', 'float-med', 'float-fast', 'float-slow',
  'float-med', 'float-fast', 'float-slow', 'float-med', 'float-fast',
];
const delays = [0, 0.8, 1.6, 0.4, 1.2, 2, 0.6, 1.4, 0.2, 1.8, 0.9, 1.5, 0.3, 2.1, 0.7];

export default function Skills() {
  /* Canvas overlay to draw connecting lines between circles */
  const canvasRef = useRef(null);
  const circleRefs = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centers = circleRefs.current.map(el => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        const pr = canvas.parentElement.getBoundingClientRect();
        return {
          x: r.left - pr.left + r.width / 2,
          y: r.top - pr.top + r.height / 2,
        };
      }).filter(Boolean);

      for (let i = 0; i < centers.length; i++) {
        for (let j = i + 1; j < centers.length; j++) {
          const dx = centers[i].x - centers[j].x;
          const dy = centers[i].y - centers[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 280) {
            const alpha = (1 - d / 280) * 0.25;
            ctx.strokeStyle = `rgba(124,58,237,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(centers[i].x, centers[i].y);
            ctx.lineTo(centers[j].x, centers[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden" style={{ minHeight: '700px' }}>
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />

      {/* Canvas lines overlay */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} />

      <div className="relative max-w-7xl mx-auto" style={{ zIndex: 2 }}>
        {/* Heading */}
        <div className="flex items-center gap-4 mb-8 reveal">
          <h2 className="code-heading text-3xl md:text-4xl font-bold">
            <span className="grad-text">&lt;/</span>
            <span className="text-white">Skills</span>
            <span className="grad-text">&gt;</span>
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,rgba(124,58,237,0.5),transparent)' }} />
        </div>

        {/* Scattered floating skill circles */}
        <div className="relative" style={{ height: '560px' }}>
          {skills.map(({ name, svg }, i) => (
            <div
              key={name}
              ref={el => circleRefs.current[i] = el}
              className={`absolute skill-circle flex flex-col items-center justify-center gap-1.5 cursor-default animate-${floatAnims[i]}`}
              style={{
                width: '78px',
                height: '78px',
                top: positions[i % positions.length].top,
                left: positions[i % positions.length].left,
                animationDelay: `${delays[i]}s`,
                zIndex: 2,
              }}
              title={name}
            >
              {svg}
              <span className="font-mono text-[8px] text-white/50 tracking-wider text-center leading-tight px-1">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
