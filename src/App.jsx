import { useEffect } from 'react';
import ParticlesBg  from './components/ParticlesBg';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import About        from './components/About';
import Skills       from './components/Skills';
import Experience   from './components/Experience';
import Projects     from './components/Projects';
import Contact      from './components/Contact';
import BackToTop    from './components/BackToTop';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen relative" style={{background:'#0D0B1A'}}>
      {/* Global animated particle constellation */}
      <ParticlesBg />

      <div className="relative" style={{zIndex:1}}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <BackToTop />
      </div>
    </div>
  );
}
