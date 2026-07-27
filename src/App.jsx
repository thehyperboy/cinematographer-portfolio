import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Mail, MessageSquare } from 'lucide-react';
import FilmGrainOverlay from './components/FilmGrainOverlay';
import Hero from './components/Hero';
import About from './components/About';

import EquipmentSkills from './components/EquipmentSkills';
import InstagramWork from './components/InstagramWork';

import CreativeProcess from './components/CreativeProcess';
import Footer from './components/Footer';

function App() {
  const [shutterOpen, setShutterOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);

  // Close dropdown on click outside
  useEffect(() => {
    if (!contactDropdownOpen) return;
    const handleOutsideClick = (e) => {
      if (!e.target.closest('#nav-btn-contact') && !e.target.closest('.contact-dropdown')) {
        setContactDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [contactDropdownOpen]);

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
            <a href="#work" className="hover:text-kodak-orange transition-colors">Recent Works</a>
            <a href="#process" className="hover:text-kodak-orange transition-colors font-bold text-film-red">Process</a>
          </nav>
          <div className="relative">
            <button 
              onClick={() => setContactDropdownOpen(!contactDropdownOpen)}
              className="px-4 py-2 bg-charcoal text-white font-mono text-[9px] uppercase tracking-widest font-black rounded hover:bg-kodak hover:text-charcoal transition-all flex items-center gap-1.5"
              id="nav-btn-contact"
            >
              <span>Get In Touch</span>
              <span className={`transition-transform duration-200 text-[8px] ${contactDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            
            {contactDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-48 bg-white border border-charcoal/10 shadow-xl rounded-md overflow-hidden z-50 flex flex-col font-mono text-[10px] uppercase tracking-wider text-charcoal contact-dropdown"
                style={{ borderRadius: '8px' }}
              >
                {/* Book a Shoot Section */}
                <div className="px-3 py-1.5 bg-ivory text-[8px] font-bold text-charcoal/40 border-b border-charcoal/5">
                  Book a Shoot
                </div>
                <a 
                  href="https://wa.me/917993082040?text=Hi%20Srinivas,%20I%20would%20like%20to%20book%20a%20shoot%20with%20you!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 hover:bg-kodak/25 transition-colors border-b border-charcoal/5 flex items-center gap-2.5 font-bold"
                  onClick={() => setContactDropdownOpen(false)}
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>via WhatsApp</span>
                </a>
                <a 
                  href="mailto:chintusrinivas020@gmail.com?subject=Book%20a%20Shoot" 
                  className="px-4 py-2 hover:bg-kodak/25 transition-colors border-b border-charcoal/5 flex items-center gap-2.5 font-bold"
                  onClick={() => setContactDropdownOpen(false)}
                >
                  <Mail className="w-3.5 h-3.5 text-rose-600" />
                  <span>via Email</span>
                </a>

                {/* Let's Collaborate Section */}
                <div className="px-3 py-1.5 bg-ivory text-[8px] font-bold text-charcoal/40 border-b border-charcoal/5">
                  Let's Collaborate
                </div>
                <a 
                  href="https://wa.me/917993082040?text=Hi%20Srinivas,%20I'm%20interested%20in%20collaborating%20with%20you!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 hover:bg-kodak/25 transition-colors border-b border-charcoal/5 flex items-center gap-2.5 font-bold"
                  onClick={() => setContactDropdownOpen(false)}
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>via WhatsApp</span>
                </a>
                <a 
                  href="mailto:chintusrinivas020@gmail.com?subject=Collaboration%20Inquiry" 
                  className="px-4 py-2 hover:bg-kodak/25 transition-colors flex items-center gap-2.5 font-bold"
                  onClick={() => setContactDropdownOpen(false)}
                >
                  <Mail className="w-3.5 h-3.5 text-rose-600" />
                  <span>via Email</span>
                </a>
              </div>
            )}
          </div>
        </header>

        {/* Portfolio Sections */}
        <Hero />
        <About />

        <EquipmentSkills />
        <InstagramWork />

        <CreativeProcess />
        <Footer />
      </main>

    </div>
  );
}

export default App;
