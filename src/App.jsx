import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import FilmGrainOverlay from './components/FilmGrainOverlay';
import Hero from './components/Hero';
import About from './components/About';
import EducationExperience from './components/EducationExperience';
import EquipmentSkills from './components/EquipmentSkills';
import InstagramWork from './components/InstagramWork';
import CinematicGallery from './components/CinematicGallery';
import BehindTheCamera from './components/BehindTheCamera';
import CreativeProcess from './components/CreativeProcess';
import AwardsTestimonials from './components/AwardsTestimonials';
import Footer from './components/Footer';

function App() {
  const [shutterOpen, setShutterOpen] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Shutter loader delay
    const timer = setTimeout(() => {
      setShutterOpen(true);
    }, 1200);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-kodak selection:text-charcoal bg-ivory text-charcoal">
      
      {/* Film Grain & Light Leaks Overlay */}
      <FilmGrainOverlay />

      {/* Shutter Click Page Loader Transition */}
      <div 
        className={`fixed inset-0 bg-charcoal z-[999] flex flex-col items-center justify-center text-ivory transition-transform duration-[1000ms] cubic-bezier(0.85, 0, 0.15, 1) origin-top pointer-events-none ${
          shutterOpen ? 'translate-y-[-100%]' : 'translate-y-0'
        }`}
      >
        <div className="flex flex-col items-center select-none">
          {/* Shutter Blade Icon shape */}
          <div className="w-16 h-16 rounded-full border-4 border-ivory/20 flex items-center justify-center mb-4 relative animate-spin" style={{ animationDuration: '3s' }}>
            <div className="absolute w-[2px] h-8 bg-ivory/80 top-0 origin-bottom transform rotate-0"></div>
            <div className="absolute w-[2px] h-8 bg-ivory/80 top-0 origin-bottom transform rotate-[45deg]"></div>
            <div className="absolute w-[2px] h-8 bg-ivory/80 top-0 origin-bottom transform rotate-[90deg]"></div>
            <div className="absolute w-[2px] h-8 bg-ivory/80 top-0 origin-bottom transform rotate-[135deg]"></div>
            <div className="absolute w-[2px] h-8 bg-ivory/80 top-0 origin-bottom transform rotate-[180deg]"></div>
            <div className="absolute w-[2px] h-8 bg-ivory/80 top-0 origin-bottom transform rotate-[225deg]"></div>
            <div className="absolute w-[2px] h-8 bg-ivory/80 top-0 origin-bottom transform rotate-[270deg]"></div>
            <div className="absolute w-[2px] h-8 bg-ivory/80 top-0 origin-bottom transform rotate-[315deg]"></div>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-kodak">
            Opening Shutter
          </span>
          <span className="font-mono text-[9px] text-ivory/40 uppercase tracking-widest mt-1">
            Loading Visual Journal
          </span>
        </div>
      </div>

      {/* Main Layout Container */}
      <main className="relative z-10 flex flex-col w-full">
        {/* Navigation / Header */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-ivory/75 backdrop-blur-md border-b border-charcoal/5 px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="font-serif text-2xl font-black uppercase tracking-tight text-charcoal">
            Srinivas.
          </a>
          <nav className="hidden sm:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest text-charcoal/70">
            <a href="#about" className="hover:text-kodak-orange transition-colors">About</a>
            <a href="#career" className="hover:text-kodak-orange transition-colors">Experience</a>
            <a href="#work" className="hover:text-kodak-orange transition-colors">Recent Works</a>
            <a href="#gallery" className="hover:text-kodak-orange transition-colors">Stills</a>
            <a href="#bts" className="hover:text-kodak-orange transition-colors">BTS</a>
            <a href="#process" className="hover:text-kodak-orange transition-colors font-bold text-film-red">Process</a>
          </nav>
          <a 
            href="#contact" 
            className="px-4 py-2 bg-charcoal text-white font-mono text-[9px] uppercase tracking-widest font-black rounded hover:bg-kodak hover:text-charcoal transition-all"
            id="nav-btn-contact"
          >
            Get In Touch
          </a>
        </header>

        {/* Portfolio Sections */}
        <Hero />
        <About />
        <EducationExperience />
        <EquipmentSkills />
        <InstagramWork />
        <CinematicGallery />
        <BehindTheCamera />
        <CreativeProcess />
        <AwardsTestimonials />
        <Footer />
      </main>

    </div>
  );
}

export default App;
