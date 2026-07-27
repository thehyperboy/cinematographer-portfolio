import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stickers = [
    { 
      id: 'email', 
      label: 'Email Me', 
      value: 'srinivas.dop@gmail.com', 
      icon: <Mail className="w-5 h-5 text-film-red" />, 
      color: 'bg-red-50 border-film-red/30 text-film-red', 
      rotation: '-rotate-3',
      href: 'mailto:srinivas.dop@gmail.com'
    },
    { 
      id: 'phone', 
      label: 'Call Me', 
      value: '+91 99887 76655', 
      icon: <Phone className="w-5 h-5 text-film-green" />, 
      color: 'bg-emerald-50 border-film-green/30 text-film-green', 
      rotation: 'rotate-2',
      href: 'tel:+919988776655'
    },
    { 
      id: 'instagram', 
      label: 'Instagram', 
      value: '@vibewithsrinivas_', 
      icon: <Instagram className="w-5 h-5 text-pink-600" />, 
      color: 'bg-pink-50 border-pink-200 text-pink-700', 
      rotation: 'rotate-4',
      href: 'https://www.instagram.com/vibewithsrinivas_?utm_source=qr'
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 paper-texture border-b border-charcoal/10 overflow-hidden">
      
      {/* Background sketches & metadata */}
      <div className="absolute top-10 right-10 text-charcoal/5 font-mono text-[8vw] select-none uppercase pointer-events-none font-bold">
        KODAK 500T
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Polaroid Portrait & Doodles */}
        <div className="lg:col-span-5 flex justify-center relative">
          
          {/* Background sketches around polaroid */}
          <div className="absolute inset-0 pointer-events-none select-none z-0" aria-hidden="true">
            {/* Camera doodle top-left */}
            <svg className="absolute -top-12 -left-4 text-charcoal/30 w-24 h-24" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="20" y="35" width="60" height="40" rx="5" />
              <circle cx="50" cy="55" r="15" />
              <circle cx="35" cy="45" r="3" />
              <rect x="35" y="25" width="30" height="10" />
              <path d="M72,35 L72,30 C72,28 75,28 75,30 L75,35" />
            </svg>
            
            {/* Light rays/aperture doodle bottom-right */}
            <svg className="absolute -bottom-8 -right-12 text-charcoal/20 w-32 h-32" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="50" cy="50" r="30" strokeDasharray="3,3" />
              <line x1="50" y1="10" x2="50" y2="90" />
              <line x1="10" y1="50" x2="90" y2="50" />
              <line x1="21.7" y1="21.7" x2="78.3" y2="78.3" />
              <line x1="21.7" y1="78.3" x2="78.3" y2="21.7" />
              <text x="54" y="25" className="font-mono text-[9px]">EXP. 24mm</text>
              <text x="54" y="80" className="font-mono text-[9px]">T-STOP 1.5</text>
            </svg>

            {/* Film Roll doodle bottom-left */}
            <svg className="absolute bottom-0 -left-12 text-charcoal/25 w-24 h-24" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="25" y="20" width="50" height="60" rx="8" />
              <circle cx="50" cy="40" r="10" />
              <path d="M25,30 H15 C10,30 10,45 15,45 H25" />
              <path d="M25,60 H15 C10,60 10,75 15,75 H25" />
              <text x="32" y="52" className="font-handwritten text-xs">ISO 800</text>
            </svg>
          </div>

          {/* Polaroid Frame */}
          <div className="polaroid-frame relative z-10 w-[320px] sm:w-[360px] rotate-[-2deg] hover:rotate-[1deg] hover:scale-105 transition-all duration-500 ease-in-out cursor-grab active:cursor-grabbing">
            
            {/* Masking tape top center */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-36 h-8 masking-tape -rotate-3 z-20 flex items-center justify-center border-x border-black/10">
              <span className="text-[10px] font-mono tracking-widest text-charcoal/60 uppercase">ORIGINAL COPY</span>
            </div>

            {/* Masking tape bottom-right tag */}
            <div className="absolute -bottom-4 right-2 w-20 h-6 bg-kodak/80 backdrop-blur-sm shadow border border-black/10 -rotate-12 z-20 flex items-center justify-center">
              <span className="text-[9px] font-mono tracking-tight text-charcoal font-bold">KODAK 2026</span>
            </div>

            {/* Photo Container */}
            <div className="w-full aspect-square bg-[#1B1B1B] overflow-hidden border border-black/10 mb-6 relative">
              <img 
                src="/srinivas_portrait.jpg" 
                alt="Portrait of Srinivas" 
                className="w-full h-full object-cover grayscale contrast-110 sepia-[15%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Handwritten Label */}
            <div className="text-center">
              <p className="font-handwritten text-3xl text-charcoal font-bold">
                Srinivas.
              </p>
              <p className="font-mono text-[10px] tracking-wider text-charcoal/50 mt-1 uppercase">
                Director of Photography // Hyderabad
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Heading, Bio, & Contact Stickers */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="relative mb-6">
            <span className="font-handwritten text-3xl text-film-red block mb-1">Meet the filmmaker</span>
            <h2 className="text-5xl sm:text-6xl font-serif font-black tracking-tight text-charcoal">
              HELLO!
            </h2>
            <div className="w-20 h-[3px] bg-kodak mt-2"></div>
          </div>

          <div className="space-y-6 text-charcoal/80 font-sans leading-relaxed text-base sm:text-lg">
            <p>
              Hi, I'm <strong className="font-semibold text-charcoal">Srinivas</strong>, a passionate cinematographer dedicated to transforming stories into visually unforgettable experiences.
            </p>
            <p>
              From intimate short films to commercial productions, I believe every frame should evoke emotion. My work focuses on natural lighting, cinematic composition, camera movement, visual storytelling, and creating immersive imagery that stays with the audience long after the credits roll.
            </p>
            <p className="italic font-serif text-charcoal/70 pl-4 border-l-2 border-kodak">
              "I don't just capture moments—I craft emotions, one frame at a time."
            </p>
          </div>

          {/* Contact Stickers Grid */}
          <div className="mt-12">
            <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-charcoal/50 mb-6">
              Connect / Sticker Board
            </h3>
            
            <div className="flex flex-wrap gap-4">
              {stickers.map((sticker) => (
                <a
                  key={sticker.id}
                  href={sticker.href}
                  target={sticker.id !== 'email' && sticker.id !== 'phone' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2.5 px-4 py-2 bg-white rounded-lg border-2 border-charcoal/10 shadow-sm font-mono text-xs uppercase tracking-wider font-semibold hover:shadow-md hover:-translate-y-1 hover:rotate-0 transition-all duration-300 ${sticker.rotation} ${sticker.color}`}
                  style={{ borderRadius: '12px 14px 11px 15px' }}
                  id={`sticker-${sticker.id}`}
                >
                  {sticker.icon}
                  <span>{sticker.label}:</span>
                  <span className="font-bold opacity-80">{sticker.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
