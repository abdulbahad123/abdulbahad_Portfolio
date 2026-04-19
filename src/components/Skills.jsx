import { useEffect, useRef } from 'react';

/* ── Skill data ── */
const skills = [
  { color: '#61dafb', svg: <img src='/assets/skills/react-js-icon-B2YyJmxM.png' alt="react js " /> },
  { color: '#68a063', svg: <img src="/assets/skills/nodejs.png " alt="" /> },
  { color: '#4db33d', svg: <img src="/assets/skills/MongoDB-CzrTCLas.png" alt="" /> },
  { color: '#f7df1e', svg: <img src="/assets/skills/js-Bu6ZFjaT.png" alt="" /> },
  { color: '#3178c6', svg: <img src="/assets/skills/typescript-icon-removebg-preview.png" alt="" /> },
  { color: '#e34f26', svg: <img src="/assets/skills/html-5-CKyDEyeN.png" alt="" /> },
  { color: '#264de4', svg: <img src="/assets/skills/css-icon-removebg-preview.png" alt="" /> },
  { color: '#38bdf8', svg: <img src="/assets/skills/tailwind.png" alt="" /> },
  { color: '#f05032', svg: <img src="/assets/skills/github-6980894_640-B6f_48iH.png" alt="" /> },
  { color: '#c084fc', svg: <img src="/assets/skills/express.png" alt="" /> },
  { color: '#a259ff', svg: <img src="/assets/skills/figma-icon-removebg-preview.png" alt="" /> },
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

