import React from 'react';
import { Instagram, ArrowUpRight, Film, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const InstagramWork = () => {
  const instagramUrl = "https://www.instagram.com/vibewithsrinivas_?utm_source=qr";

  const posts = [
    {
      id: 1,
      image: "/echoes_of_silence.jpg",
      caption: "Echoes of Silence (2024)",
      rotation: "-rotate-3",
      aspect: "aspect-[4/3]",
      href: "https://www.instagram.com/reel/DVVyNvIgVAf/?igsh=MWR0cGdpd2UyOGZsMw=="
    },
    {
      id: 2,
      image: "/chasing_shadows.jpg",
      caption: "Chasing Shadows - Noir (2025)",
      rotation: "rotate-2",
      aspect: "aspect-square",
      href: "https://www.instagram.com/reel/DSaTRe6AcJp/?igsh=YW01ZG4zZzJmdnI="
    },
    {
      id: 3,
      image: "/dust_and_dreams.jpg",
      caption: "Dust & Dreams - Docu (2023)",
      rotation: "-rotate-1",
      aspect: "aspect-[4/3]",
      href: "https://www.instagram.com/reel/DSrWq2_gckh/?igsh=YWI1NmdoNHJsbmwx"
    }
  ];

  return (
    <section id="work" className="relative py-24 px-6 md:px-12 paper-texture border-b border-charcoal/10 overflow-hidden">
      
      {/* Background Annotation */}
      <div className="absolute top-10 left-10 text-charcoal/5 font-mono text-[8vw] select-none uppercase pointer-events-none font-bold">
        INSTAGRAM FEED
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="font-handwritten text-3xl text-film-red block mb-1">Step Behind the Lens</span>
          <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-charcoal uppercase">
            RECENT WORKS
          </h2>
          <div className="w-16 h-[3px] bg-kodak mt-3 mx-auto"></div>
          <p className="font-sans text-charcoal/70 mt-6 text-sm md:text-base leading-relaxed">
            I post my latest cinematic frames, commercial showreels, color grading breakdowns, and live set behind-the-scenes on Instagram.
          </p>
        </div>

        {/* Polaroid/Film Strip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center mb-16">
          {posts.map((post) => (
            <motion.a
              key={post.id}
              href={post.href || instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {/* Polaroid Frame */}
              <div 
                className={`bg-white p-4 pb-6 shadow-md hover:shadow-xl border border-charcoal/5 transition-all duration-300 relative ${post.rotation}`}
                style={{ borderRadius: '2px' }}
              >
                {/* Masking tape on top corner of each polaroid */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 masking-tape opacity-80 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>

                {/* Photo container */}
                <div className={`w-full ${post.aspect} bg-[#1B1B1B] overflow-hidden border border-black/5 relative`}>
                  <img 
                    src={post.image} 
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white bg-charcoal/80 p-2 rounded-full transform scale-90 group-hover:scale-100 transition-all duration-300">
                      <Instagram className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Handwritten Caption */}
                <div className="mt-4 text-center">
                  <p className="font-handwritten text-xl text-charcoal font-bold leading-none">
                    {post.caption}
                  </p>
                  <p className="font-mono text-[9px] tracking-wider text-charcoal/40 mt-1 uppercase flex items-center justify-center gap-1">
                    <span>View post</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button Block */}
        <div className="text-center">
          <motion.a 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-charcoal text-white hover:bg-kodak hover:text-charcoal font-mono text-xs uppercase tracking-widest font-black rounded shadow-lg transform transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            id="instagram-work-cta"
          >
            <Instagram className="w-4 h-4" />
            <span>Vibe with Srinivas on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </div>

      </div>
      
    </section>
  );
};

export default InstagramWork;
