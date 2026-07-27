import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const CinematicGallery = () => {
  const [shutterIdx, setShutterIdx] = useState(null);

  const galleryStills = [
    { id: 101, title: "Golden Silhouette", ratio: "aspect-[4/3]", url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80", tag: "EXP #12 - S-Cinetone" },
    { id: 102, title: "Cyber Neon", ratio: "aspect-[16/9]", url: "https://images.unsplash.com/photo-1542204172-e7052809f852?auto=format&fit=crop&w=600&q=80", tag: "EXP #08 - LogC" },
    { id: 103, title: "Lens Flare Story", ratio: "aspect-[3/4]", url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80", tag: "EXP #22 - 35mm Prime" },
    { id: 104, title: "Classic Projection", ratio: "aspect-[16/9]", url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80", tag: "EXP #19 - Tri-X B&W" },
    { id: 105, title: "Theater Atmosphere", ratio: "aspect-[4/3]", url: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80", tag: "EXP #03 - Kodak 500T" },
    { id: 106, title: "Visual Storyboard", ratio: "aspect-[3/2]", url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80", tag: "EXP #15 - Vintage Cine" }
  ];

  const handleMouseEnter = (idx) => {
    // Shutter animation trigger
    setShutterIdx(idx);
    setTimeout(() => {
      setShutterIdx(null);
    }, 450); // duration matching the click flash
  };

  return (
    <section id="gallery" className="relative py-24 px-6 md:px-12 bg-charcoal dark-paper-texture border-b border-charcoal/10 text-ivory">
      
      {/* Torn paper edges top & bottom */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-transparent torn-edge-top opacity-10"></div>
      
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16 relative">
          <span className="font-handwritten text-2xl text-kodak block mb-1">Visual Archive</span>
          <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-white uppercase">
            Cinematic Gallery
          </h2>
          <p className="font-mono text-[10px] tracking-widest text-white/50 uppercase mt-2">
            Stills & Prints from the Darkroom
          </p>
          <div className="w-16 h-[2px] bg-kodak mx-auto mt-4"></div>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-8 space-y-8">
          {galleryStills.map((still, idx) => (
            <div 
              key={still.id}
              className="break-inside-avoid relative inline-block w-full bg-white p-3.5 shadow-xl hover:shadow-2xl border border-white/10 group cursor-crosshair transition-transform duration-500 hover:scale-[1.01] overflow-hidden"
              style={{ 
                borderRadius: '3px',
                transform: `rotate(${(idx % 2 === 0 ? -1 : 1.2)}deg)`
              }}
              onMouseEnter={() => handleMouseEnter(idx)}
              id={`gallery-item-${idx}`}
            >
              
              {/* Printed Film Image Container */}
              <div className={`relative w-full overflow-hidden bg-black/90 ${still.ratio}`}>
                <img 
                  src={still.url} 
                  alt={still.title}
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-95 sepia-[5%] group-hover:scale-105 transition-all duration-700 ease-out group-hover:brightness-100 group-hover:contrast-100 group-hover:sepia-0"
                  loading="lazy"
                />

                {/* Shutter Animation Overlay */}
                <div 
                  className={`absolute inset-0 bg-white transition-opacity duration-300 pointer-events-none z-20 ${
                    shutterIdx === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Camera shutter grid lines on hover */}
                <div className="absolute inset-2 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                  <div className="w-full h-[1px] bg-white/20"></div>
                  <div className="h-full w-[1px] bg-white/20 absolute"></div>
                  <div className="w-12 h-12 rounded-full border border-white/30 absolute"></div>
                </div>

                {/* Camera lens click indicator */}
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <Camera className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* White Print Margin Label */}
              <div className="mt-3.5 flex justify-between items-center text-charcoal font-mono text-[9px] uppercase tracking-wider">
                <span className="font-bold">{still.title}</span>
                <span className="font-handwritten text-xs text-film-red font-bold normal-case tracking-normal">
                  {still.tag}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CinematicGallery;
