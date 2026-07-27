import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Static placeholder data for the scrolling film strip
  const filmStills = [
    { id: 1, title: "Golden Hour", url: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?auto=format&fit=crop&w=500&q=80" },
    { id: 2, title: "Neon Nights", url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80" },
    { id: 3, title: "Desert Shadow", url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80" },
    { id: 4, title: "Rainy Streets", url: "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?auto=format&fit=crop&w=500&q=80" },
    { id: 5, title: "The Portrait", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80" },
    { id: 6, title: "Mist & Mountains", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-16 pb-8 overflow-hidden paper-texture border-b border-charcoal/10">
      
      {/* Viewfinder Overlays & Marks */}
      <div className="absolute inset-8 border border-charcoal/10 pointer-events-none flex flex-col justify-between p-4" aria-hidden="true">
        {/* Top Corners */}
        <div className="flex justify-between w-full">
          <div className="w-8 h-8 border-t-2 border-l-2 border-charcoal/60"></div>
          <div className="text-xs font-mono text-charcoal/60 tracking-wider">REC ● 24FPS</div>
          <div className="w-8 h-8 border-t-2 border-r-2 border-charcoal/60"></div>
        </div>
        
        {/* Center Crosshair */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-charcoal/30 viewfinder-crosshair"></div>
        
        {/* Bottom Corners */}
        <div className="flex justify-between w-full items-end">
          <div className="w-8 h-8 border-b-2 border-l-2 border-charcoal/60"></div>
          <div className="text-xs font-mono text-charcoal/60 tracking-wider">ISO 400 | S: 1/50 | F2.8</div>
          <div className="w-8 h-8 border-b-2 border-r-2 border-charcoal/60"></div>
        </div>
      </div>

      {/* Decorative Scribbles & Markings */}
      <div className="absolute top-[15%] left-[10%] text-charcoal/20 select-none hidden md:block" aria-hidden="true">
        <svg width="100" height="80" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10,70 Q40,30 90,10" />
          <path d="M80,10 L90,10 L90,20" />
          <text x="10" y="78" className="font-handwritten text-sm">Focus Plane</text>
        </svg>
      </div>

      <div className="absolute top-[20%] right-[12%] text-charcoal/20 select-none hidden md:block" aria-hidden="true">
        <div className="border border-charcoal/20 rounded p-2 text-xs font-mono">
          <div className="font-bold">LUT: KODAK_5219</div>
          <div>EXPOSURE: +0.3EV</div>
        </div>
      </div>

      {/* Top Header Label */}
      <div className="text-center w-full z-10 px-4">
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-charcoal/60">Portfolio Visual Journal</span>
        <div className="h-[1px] w-20 bg-charcoal/20 mx-auto mt-2"></div>
      </div>

      {/* Large Typography Title Section */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 z-10 my-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Masking tape on top of the title */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-6 masking-tape -rotate-2 select-none z-20 flex items-center justify-center">
            <span className="text-[10px] font-mono tracking-wider text-charcoal/70">SCENE 01 / TAKE 01</span>
          </div>

          <h1 className="text-7xl sm:text-9xl md:text-[13rem] font-serif uppercase tracking-tight text-charcoal leading-none select-none">
            Srinivas
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl font-serif italic tracking-wide text-charcoal/80 mt-2"
        >
          CINEMATOGRAPHER
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 px-4 py-2 border-y border-charcoal/20 max-w-xl"
        >
          <p className="text-xs sm:text-sm font-mono tracking-widest text-charcoal/70 uppercase">
            Capturing Light • Framing Stories • Creating Emotion Through Every Frame
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Film Strip */}
      <div className="w-full bg-charcoal py-4 z-10 relative overflow-hidden shadow-2xl">
        {/* Film Strip Sprocket Holes (Top) */}
        <div className="absolute top-1 left-0 right-0 flex justify-around opacity-40 select-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="w-2.5 h-3.5 bg-ivory rounded-sm"></div>
          ))}
        </div>

        {/* Scrolling Images Container */}
        <div className="flex whitespace-nowrap overflow-x-hidden my-3 relative py-2 border-y border-ivory/20">
          <div className="flex animate-scroll-left space-x-6 min-w-full">
            {/* Map two sets of data to enable seamless loop */}
            {[...filmStills, ...filmStills].map((still, idx) => (
              <div
                key={idx}
                className="inline-block relative w-48 sm:w-64 h-32 sm:h-40 bg-charcoal-light flex-shrink-0 group overflow-hidden border-x-4 border-charcoal-dark shadow-inner"
              >
                <img
                  src={still.url}
                  alt={still.title}
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-in-out"
                  loading="lazy"
                />
                {/* Viewfinder focus box */}
                <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                  <div className="w-2 h-2 border border-white/80"></div>
                </div>
                <div className="absolute bottom-2 left-2 bg-black/70 text-white font-mono text-[9px] px-1 rounded uppercase tracking-wider">
                  STILL #{still.id} // {still.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Film Strip Sprocket Holes (Bottom) */}
        <div className="absolute bottom-1 left-0 right-0 flex justify-around opacity-40 select-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="w-2.5 h-3.5 bg-ivory rounded-sm"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
