import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 700);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top btn-sweep ${visible ? 'visible' : ''} ${clicked ? 'sweeping' : ''}`}
      aria-label="Back to top"
      title="Back to top"
    >
      {/* Arrow up icon with bounce anim on click */}
      <svg
        width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        className={clicked ? 'dl-icon-anim' : ''}
        style={{ transform: 'rotate(180deg)' }}
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
