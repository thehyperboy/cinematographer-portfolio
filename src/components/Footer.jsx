import React from 'react';
import { ArrowRight, Film, Sun, Coffee } from 'lucide-react';

const Footer = () => {
  const funFacts = [
    { icon: <Film className="w-4 h-4 text-film-red" />, text: "Every frame tells a story." },
    { icon: <Sun className="w-4 h-4 text-kodak-orange" />, text: "Obsessed with golden hour light." },
    { icon: <Film className="w-4 h-4 text-film-green" />, text: "Loves shooting on vintage lenses." },
    { icon: <Coffee className="w-4 h-4 text-[#8C6239]" />, text: "Coffee fuels every production." }
  ];

  return (
    <footer id="contact" className="relative py-20 px-6 md:px-12 bg-charcoal dark-paper-texture text-ivory overflow-hidden">
      
      {/* Torn paper edges top */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-transparent torn-edge-top opacity-15"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Fun Facts Row (Sticky notes / board labels style) */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <h3 className="font-mono text-[10px] tracking-widest text-white/40 uppercase mb-6 text-center">
            Visual Journal // Fun Notes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {funFacts.map((fact, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 rounded px-4 py-3.5 flex items-center gap-3 rotate-[-1deg] hover:rotate-0 hover:border-kodak/30 transition-all duration-300"
                style={{ borderRadius: '6px 4px 5px 8px' }}
                id={`fun-fact-${idx}`}
              >
                {fact.icon}
                <span className="font-handwritten text-base text-white/90">{fact.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Large Cinematic CTA */}
        <div className="text-center max-w-4xl mx-auto mb-20 z-10 relative">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-kodak font-bold block mb-4">
            Start a Production
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-white uppercase leading-none mb-10">
            Let's tell stories <br /> through cinema.
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="mailto:chintusrinivas020@gmail.com?subject=Book%20a%20Shoot" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-kodak text-charcoal font-mono text-xs uppercase tracking-widest font-black rounded hover:bg-[#FFD43B]/80 shadow-lg transform hover:-translate-y-0.5 transition-all"
              id="cta-book"
            >
              <span>Book a Shoot</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a 
              href="mailto:chintusrinivas020@gmail.com?subject=Collaboration%20Inquiry" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border-2 border-white/30 text-white font-mono text-xs uppercase tracking-widest font-black rounded hover:border-white hover:bg-white/5 transition-all"
              id="cta-collab"
            >
              <span>Let's Collaborate</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom (Signature & Copyrights) */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Signature Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-handwritten text-4xl text-white font-bold select-none rotate-[-2deg]">
              Srinivas
            </h3>
            <p className="font-mono text-[9px] tracking-widest text-white/40 uppercase mt-2">
              Cinematographer // Capturing stories one frame at a time.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex gap-8 text-[10px] font-mono text-white/50 uppercase tracking-widest">
            <a href="#work" className="hover:text-kodak transition-colors">Works</a>
            <a href="#about" className="hover:text-kodak transition-colors">About</a>
            <a href="#gear-skills" className="hover:text-kodak transition-colors">Gear</a>
            <a href="#process" className="hover:text-kodak transition-colors">Process</a>
          </div>

          {/* Credits */}
          <div className="text-center md:text-right font-mono text-[9px] text-white/35">
            <p>© {new Date().getFullYear()} Srinivas. All Rights Reserved.</p>
            <p className="mt-1">Designed as an Editorial Scrapbook Journal.</p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
