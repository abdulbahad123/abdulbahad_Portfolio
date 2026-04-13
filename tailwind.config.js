/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: { DEFAULT: '#0D0B1A', 800: '#13111C', 700: '#1A1830', 600: '#221F3A' },
        violet: { DEFAULT: '#7C3AED', light: '#9F67FA', dim: '#4C1D95' },
        purple: { DEFAULT: '#9333EA', light: '#C084FC' },
        blue: { DEFAULT: '#3B82F6', light: '#60A5FA' },
        pink: { DEFAULT: '#EC4899' },
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'float-slow':   'floatSlow 8s ease-in-out infinite',
        'float-med':    'floatMed 6s ease-in-out infinite',
        'float-fast':   'floatFast 4s ease-in-out infinite',
        'spin-slow':    'spin 12s linear infinite',
        'spin-reverse': 'spinRev 10s linear infinite',
        'pulse-glow':   'pulseGlow 3s ease-in-out infinite',
        'orbit':        'orbit 20s linear infinite',
        'blink':        'blink 1s step-end infinite',
        'slide-up':     'slideUp 0.7s ease forwards',
        'draw-line':    'drawLine 1.4s ease forwards',
      },
      keyframes: {
        floatSlow: { '0%,100%': { transform:'translateY(0px) rotate(0deg)' }, '50%': { transform:'translateY(-20px) rotate(3deg)' } },
        floatMed:  { '0%,100%': { transform:'translateY(0px) rotate(0deg)' }, '50%': { transform:'translateY(-14px) rotate(-3deg)' } },
        floatFast: { '0%,100%': { transform:'translateY(0px)' }, '50%': { transform:'translateY(-8px)' } },
        spinRev:   { from: { transform:'rotate(360deg)' }, to: { transform:'rotate(0deg)' } },
        pulseGlow: { '0%,100%': { boxShadow:'0 0 10px #7c3aed44' }, '50%': { boxShadow:'0 0 30px #7c3aed99, 0 0 60px #9333ea44' } },
        orbit:     { from:{ transform:'rotate(0deg) translateX(120px) rotate(0deg)' }, to:{ transform:'rotate(360deg) translateX(120px) rotate(-360deg)' } },
        blink:     { '0%,100%':{ opacity:1 }, '50%':{ opacity:0 } },
        slideUp:   { from:{ opacity:0, transform:'translateY(28px)' }, to:{ opacity:1, transform:'translateY(0)' } },
        drawLine:  { from:{ width:'0%' }, to:{ width:'100%' } },
      },
    },
  },
  plugins: [],
}
