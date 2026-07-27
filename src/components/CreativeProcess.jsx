import React from 'react';

const CreativeProcess = () => {
  const steps = [
    {
      num: "01",
      title: "Concept",
      subtitle: "SCENE INT: MOOD",
      desc: "Discussing script tones with the Director, compiling visual journals, and deciding reference films (A24/classic cinema).",
      sketch: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <circle cx="50" cy="50" r="30" />
          <path d="M50,20 L50,80" />
          <path d="M20,50 L80,50" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
          <path d="M30,30 L70,70" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Shot Listing",
      subtitle: "SHOT: FRAME DESIGN",
      desc: "Mapping camera placements, storyboard frames, lens specifications, and designing camera movement paths (dolly/crane/gimbal).",
      sketch: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <rect x="15" y="20" width="70" height="60" rx="3" />
          <line x1="25" y1="35" x2="75" y2="35" />
          <line x1="25" y1="50" x2="75" y2="50" />
          <line x1="25" y1="65" x2="55" y2="65" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Location Scout",
      subtitle: "SCOUT: LIGHT STUDY",
      desc: "Sun tracking at coordinates to map natural lighting angles, checking power grids, and determining camera rigging logistics.",
      sketch: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <circle cx="50" cy="40" r="20" />
          <line x1="50" y1="10" x2="50" y2="20" />
          <line x1="50" y1="60" x2="50" y2="90" />
          <line x1="10" y1="50" x2="90" y2="50" />
          <path d="M20,75 Q50,60 80,75" />
        </svg>
      )
    },
    {
      num: "04",
      title: "Lighting Setup",
      subtitle: "LIGHT: MOOD PLAN",
      desc: "Plotting lighting grids, diffuse panels, bounce angles, choosing lighting brands (Aputure/Nanlite), and testing color gels.",
      sketch: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <circle cx="50" cy="30" r="15" />
          <line x1="50" y1="45" x2="50" y2="85" />
          <line x1="35" y1="85" x2="65" y2="85" />
          <path d="M35,30 L20,25" />
          <path d="M65,30 L80,25" />
          <path d="M50,15 L50,5" />
        </svg>
      )
    },
    {
      num: "05",
      title: "Production",
      subtitle: "ROLL: CAPTURE",
      desc: "Executing the vision on set. Directing camera crews, managing focus pullers, and shooting frames with precision.",
      sketch: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <rect x="15" y="25" width="45" height="40" rx="3" />
          <polygon points="60,45 85,30 85,60" />
          <circle cx="37" cy="45" r="8" />
        </svg>
      )
    },
    {
      num: "06",
      title: "Color Grading",
      subtitle: "GRADE: COLOR LOOK",
      desc: "Color matching, custom LUT engineering in DaVinci Resolve, balancing exposure, and painting the final cinematic look.",
      sketch: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <circle cx="40" cy="50" r="25" />
          <circle cx="60" cy="50" r="25" />
          <path d="M50,28 L50,72" strokeDasharray="3,3" />
        </svg>
      )
    },
    {
      num: "07",
      title: "Final Delivery",
      subtitle: "RENDER: RELEASE",
      desc: "Exporting high-quality renders in specialized aspect ratios (DCI 4K, cinemascope) for theater screens and festivals.",
      sketch: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <rect x="20" y="20" width="60" height="60" rx="6" />
          <polygon points="43,38 65,50 43,62" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="relative py-24 px-6 md:px-12 bg-charcoal dark-paper-texture border-b border-charcoal/10 text-ivory">
      
      {/* Torn paper edges top & bottom */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-transparent torn-edge-top opacity-10"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-20 relative">
          <span className="font-handwritten text-2xl text-kodak block mb-1">Visual Engineering</span>
          <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-white uppercase">
            Creative Process
          </h2>
          <p className="font-mono text-[10px] tracking-widest text-white/50 uppercase mt-2">
            The Storyboard Pipeline
          </p>
          <div className="w-16 h-[2px] bg-kodak mx-auto mt-4"></div>
        </div>

        {/* Storyboard Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col relative group">
              
              {/* Storyboard Frame Box */}
              <div 
                className="bg-white text-charcoal border-2 border-charcoal p-5 flex flex-col justify-between aspect-video rounded-sm relative shadow-md group-hover:border-kodak transition-all duration-300"
                style={{ borderRadius: '2px' }}
              >
                
                {/* Viewfinder crosshairs inside box */}
                <div className="absolute top-2 left-2 text-[8px] font-mono text-charcoal/40">
                  {step.num} // {step.subtitle}
                </div>
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-film-red"></div>

                <div className="flex-1 flex items-center justify-center text-charcoal/50 group-hover:text-kodak-orange transition-colors">
                  {step.sketch}
                </div>

                <div className="flex justify-between items-end border-t border-charcoal/10 pt-2 text-[9px] font-mono text-charcoal/50 uppercase">
                  <span>SCALE: 1.0</span>
                  <span>CAM A</span>
                </div>

              </div>

              {/* Step Description */}
              <div className="mt-4">
                <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-kodak transition-colors">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-white/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Hand-drawn connecting arrow (Hidden on mobile/grid transitions) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[25%] -right-6 w-8 h-8 text-kodak/30 pointer-events-none select-none z-20" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full animate-pulse">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CreativeProcess;
