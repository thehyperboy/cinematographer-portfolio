import React from 'react';
import { Camera, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const EquipmentSkills = () => {
  const gearItems = [
    { name: "Sony FX3", type: "Primary Cinema Camera", spec: "10-bit 4:2:2, 120fps, S-Log3/S-Cinetone" },
    { name: "Sony A7IV", type: "B-Cam & Stills", spec: "33MP, 10-bit 4K video, hybrid shooting" },
    { name: "Blackmagic Pocket 6K", type: "RAW Cinematic Rig", spec: "Super 35 sensor, Blackmagic RAW, EF mount" },
    { name: "DJI RS4 Pro", type: "Camera Gimbal Stabilization", spec: "ActiveTrack Pro, LiDAR focusing support" },
    { name: "DJI Mini 4 Pro", type: "Cinematic Drone", spec: "4K60 HDR, vertical shooting, 10-bit D-Log M" },
    { name: "Sigma Art Lenses", type: "Prime Lens Set", spec: "24mm, 35mm, 50mm, 85mm F1.4 bokeh" },
    { name: "Nanlite Forza Lights", type: "Studio Light Setups", spec: "Forza 500 & 60B bi-color, softboxes, spot lenses" },
    { name: "Rode Wireless GO II", type: "Production Audio Setup", spec: "Dual channel, on-board recording, lavs" }
  ];

  const skillTags = [
    "Visual Storytelling", "Lighting Design", "Camera Operation", "Composition", 
    "Color Theory", "Drone Cinematography", "Steadicam", "Gimbal Operation", 
    "Lens Selection", "Blocking", "Production Planning", "Shot Design", 
    "Natural Lighting", "Studio Lighting", "Cinematic Framing"
  ];

  return (
    <section id="gear-skills" className="relative py-24 px-6 md:px-12 paper-texture border-b border-charcoal/10 overflow-hidden">
      
      {/* Decorative exposure scale at bottom right */}
      <div className="absolute bottom-10 right-10 text-charcoal/20 select-none hidden md:block" aria-hidden="true">
        <div className="flex flex-col items-center">
          <div className="flex gap-1.5 h-10 items-end">
            <div className="w-0.5 h-4 bg-charcoal/60"></div>
            <div className="w-0.5 h-4 bg-charcoal/60"></div>
            <div className="w-0.5 h-6 bg-charcoal/80 relative">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-mono font-bold">-1</span>
            </div>
            <div className="w-0.5 h-4 bg-charcoal/60"></div>
            <div className="w-0.5 h-4 bg-charcoal/60"></div>
            <div className="w-[1px] h-8 bg-film-red relative">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-mono font-bold text-film-red">0</span>
            </div>
            <div className="w-0.5 h-4 bg-charcoal/60"></div>
            <div className="w-0.5 h-4 bg-charcoal/60"></div>
            <div className="w-0.5 h-6 bg-charcoal/80 relative">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-mono font-bold">+1</span>
            </div>
            <div className="w-0.5 h-4 bg-charcoal/60"></div>
            <div className="w-0.5 h-4 bg-charcoal/60"></div>
          </div>
          <span className="font-mono text-[9px] tracking-widest uppercase text-charcoal/50 mt-1">Light Meter</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Equipment Tags (Cardboard Camera Gear Tags) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center gap-2.5 mb-8">
            <Camera className="w-6 h-6 text-kodak-orange" />
            <h2 className="font-serif text-3xl uppercase tracking-wider text-charcoal">Equipment & Gear</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gearItems.map((gear, idx) => (
              <div 
                key={idx}
                className="bg-white border-2 border-charcoal/10 rounded p-5 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:border-kodak-orange/30 transition-all duration-300 group"
                style={{ borderRadius: '4px 6px 4px 6px' }}
                id={`gear-tag-${idx}`}
              >
                {/* Tag Ring decoration */}
                <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-ivory border border-charcoal/20 flex items-center justify-center pointer-events-none" aria-hidden="true">
                  <div className="w-1.5 h-1.5 rounded-full bg-charcoal/40"></div>
                </div>

                <div>
                  <span className="font-mono text-[8px] tracking-widest text-charcoal/40 uppercase block mb-1">
                    Equipment ID #{idx + 101}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-charcoal leading-tight group-hover:text-kodak-orange transition-colors">
                    {gear.name}
                  </h3>
                  <p className="font-sans text-xs font-semibold text-charcoal/60 mt-1">
                    {gear.type}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-charcoal/5 font-mono text-[10px] text-charcoal/50 flex items-center justify-between">
                  <span>SPEC: {gear.spec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Skills (Torn Paper Tags with hover animation) */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="flex items-center gap-2.5 mb-8">
            <Layers className="w-6 h-6 text-film-green" />
            <h2 className="font-serif text-3xl uppercase tracking-wider text-charcoal">Skills & Craft</h2>
          </div>

          <div className="bg-white border border-charcoal/10 rounded-lg p-6 flex-1 flex flex-col justify-between shadow-inner">
            <div>
              <p className="font-sans text-sm text-charcoal/70 mb-6 leading-relaxed">
                Visual engineering requires mastering mechanical tools as well as creative concepts. Below are key technical and storytelling skills I practice on every production.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {skillTags.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -4, rotate: 1 }}
                    className="cursor-default px-3 py-1.5 bg-ivory border border-charcoal/20 shadow-sm text-xs font-handwritten font-bold text-charcoal flex items-center"
                    style={{ 
                      borderRadius: '8px 15px 9px 12px',
                      transform: `rotate(${(idx % 3 === 0 ? -1.5 : (idx % 2 === 0 ? 1 : 2))}deg)`
                    }}
                    id={`skill-tag-${idx}`}
                  >
                    <span>✦ {skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Polaroid note footer inside skills box */}
            <div className="mt-8 pt-4 border-t border-charcoal/5 flex justify-between items-center text-charcoal/40 font-mono text-[9px]">
              <span>CRAFT: CINEMATOGRAPHY</span>
              <span className="font-handwritten text-xs text-film-red font-bold rotate-[-3deg]">
                storyboard & block
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EquipmentSkills;
