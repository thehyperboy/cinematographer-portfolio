import React from 'react';

const BehindTheCamera = () => {
  return (
    <section id="bts" className="relative py-24 px-6 md:px-12 paper-texture border-b border-charcoal/10 overflow-hidden">
      
      {/* Background visual annotations */}
      <div className="absolute top-10 right-10 text-charcoal/5 font-mono text-[8vw] select-none uppercase pointer-events-none font-bold">
        MOODBOARD 5219
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 relative">
          <span className="font-handwritten text-3xl text-film-red block mb-1">Behind the Scenes</span>
          <h2 className="text-5xl font-serif font-black tracking-tight text-charcoal">
            BEHIND THE CAMERA
          </h2>
          <p className="font-mono text-[10px] tracking-widest text-charcoal/50 uppercase mt-2">
            Set Moments, Blueprints, & Visual Scrapnotes
          </p>
          <div className="w-20 h-[3px] bg-kodak mx-auto mt-3"></div>
        </div>

        {/* Collage Layout: Grid on mobile, absolute overlays on desktop */}
        <div className="relative min-h-0 lg:min-h-[750px] grid grid-cols-1 md:grid-cols-2 lg:block gap-8 items-start">
          
          {/* Item 1: Set Photo (Polaroid style) */}
          <div 
            className="bg-white p-3 shadow-md border border-charcoal/5 rotate-[2deg] hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-300 lg:absolute lg:top-4 lg:left-8 lg:w-72 cursor-grab active:cursor-grabbing"
            style={{ borderRadius: '2px' }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 masking-tape -rotate-1 opacity-90"></div>
            <img 
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=500&q=80" 
              alt="BTS Set" 
              className="w-full aspect-[4/3] object-cover border border-black/10"
              loading="lazy"
            />
            <div className="mt-3 font-handwritten text-lg text-charcoal text-center">
              Night shoot - 3am setup 🎥
            </div>
          </div>

          {/* Item 2: Lighting Diagram (Vector blueprint sheet) */}
          <div 
            className="bg-slate-900 p-6 shadow-lg border-2 border-dashed border-white/20 -rotate-[3deg] hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-300 lg:absolute lg:top-8 lg:right-16 lg:w-96 text-emerald-400 font-mono text-xs cursor-grab active:cursor-grabbing"
            style={{ borderRadius: '4px' }}
          >
            <div className="absolute -top-3 right-6 w-20 h-6 masking-tape rotate-6 opacity-75"></div>
            <div className="border-b border-emerald-500/20 pb-2 mb-4 flex justify-between items-center text-[10px] uppercase">
              <span>Setup: Scene 12 - Interior</span>
              <span>DOP: Srinivas</span>
            </div>
            
            {/* Vector style lighting plot diagram */}
            <div className="h-44 border border-emerald-500/10 rounded flex items-center justify-center relative bg-slate-950/60 overflow-hidden mb-3">
              {/* Backlight ray */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-emerald-500/20 flex items-center justify-center bg-emerald-500/5">
                <span className="text-[8px] text-emerald-300">SUBJECT</span>
              </div>
              
              {/* Key Light */}
              <div className="absolute bottom-8 left-12 flex flex-col items-center">
                <div className="w-8 h-4 bg-orange-500/20 border border-orange-500 rounded-sm text-[7px] text-orange-400 flex items-center justify-center">KEY</div>
                <div className="w-[1px] h-8 bg-orange-500/30 border-dashed border-l mt-1 rotate-[40deg] origin-top"></div>
              </div>

              {/* Camera Icon */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-[1px] h-10 bg-emerald-500/30 border-dashed border-l mb-1"></div>
                <div className="w-10 h-6 bg-emerald-500/20 border border-emerald-500 rounded text-[8px] flex items-center justify-center font-bold text-white">CAM</div>
              </div>

              {/* Fill light */}
              <div className="absolute bottom-10 right-12 flex flex-col items-center">
                <div className="w-8 h-4 bg-emerald-500/20 border border-emerald-500 rounded-sm text-[7px] flex items-center justify-center">FILL</div>
                <div className="w-[1px] h-8 bg-emerald-500/30 border-dashed border-l mt-1 -rotate-[40deg] origin-top"></div>
              </div>
            </div>

            <p className="text-[10px] text-emerald-400/70 leading-relaxed font-sans">
              * Note: Diffuse the key light through a 8x8 silent grid. Keep fill at 2.5 stops under the key to maintain mood.
            </p>
          </div>

          {/* Item 3: Ripped Notepad Shot List */}
          <div 
            className="bg-yellow-50/90 p-6 shadow-md border border-yellow-200 rotate-[-1deg] hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-300 lg:absolute lg:top-72 lg:left-96 lg:w-80 text-charcoal font-handwritten text-base cursor-grab active:cursor-grabbing"
            style={{ 
              borderRadius: '0 0 10px 10px',
              backgroundImage: 'linear-gradient(#fefcbf 1.1px, transparent 1.1px)',
              backgroundSize: '100% 1.6rem',
              lineHeight: '1.6rem'
            }}
          >
            <div className="absolute -top-3 left-4 w-16 h-6 masking-tape rotate-[-12deg] opacity-80"></div>
            <div className="font-mono text-[9px] uppercase tracking-wider text-charcoal/50 border-b border-yellow-200 pb-1 mb-2 font-bold">
              Shot List - Scene 04
            </div>
            <div className="pl-4 pt-1">
              <p className="line-through opacity-50">✓ 4.1 - Wide Master (Tracking)</p>
              <p>4.2 - OTS Protagonist (Low Angle)</p>
              <p>4.3 - Extreme CU (Eye Reflection)</p>
              <p className="line-through opacity-50">✓ 4.4 - Insert (Handheld Lens Flare)</p>
              <p className="text-film-red font-bold">⚠️ Fix keylight spill on BG! </p>
            </div>
          </div>

          {/* Item 4: Rig Gear Still */}
          <div 
            className="bg-white p-3 shadow-lg border border-charcoal/5 -rotate-[2deg] hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-300 lg:absolute lg:bottom-4 lg:left-12 lg:w-80 cursor-grab active:cursor-grabbing"
            style={{ borderRadius: '2px' }}
          >
            <div className="absolute -top-2 right-12 w-20 h-5 masking-tape rotate-[-5deg] opacity-80"></div>
            <img 
              src="https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?auto=format&fit=crop&w=500&q=80" 
              alt="Camera Rig" 
              className="w-full aspect-video object-cover border border-black/10 grayscale contrast-120"
              loading="lazy"
            />
            <div className="mt-3.5 flex justify-between items-center text-[10px] font-mono text-charcoal/60 uppercase">
              <span>RIG ID: A7-RIG-04</span>
              <span>LENS: HELIOS 58mm</span>
            </div>
          </div>

          {/* Item 5: Production Ticket Note */}
          <div 
            className="bg-orange-100 p-6 border-2 border-dashed border-orange-300 shadow-md rotate-[4deg] hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-300 lg:absolute lg:bottom-8 lg:right-28 lg:w-72 font-mono text-xs text-orange-950 cursor-grab active:cursor-grabbing"
            style={{ borderRadius: '12px 6px 14px 8px' }}
          >
            <div className="absolute -top-3 left-10 w-24 h-6 masking-tape -rotate-3 opacity-90"></div>
            <div className="text-[10px] border-b border-orange-200 pb-1 mb-2 font-bold">LENS FILTER NOTES</div>
            <ul className="space-y-1">
              <li>• Use 1/4 Glimmerglass for skin</li>
              <li>• ND 0.9 + Polarizer on water</li>
              <li>• Vintage anamorphic flares at F2</li>
              <li className="text-film-red font-bold font-handwritten text-sm mt-3 rotate-[-2deg]">
                Keep it organic!
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BehindTheCamera;
