import React from 'react';
import { Star, Award } from 'lucide-react';

const AwardsTestimonials = () => {
  const awards = [
    {
      title: "Best Cinematography",
      festival: "Independent Film Festival",
      film: "Echoes of Silence",
      year: "2024",
      ticketNo: "TKT-2024-88A"
    },
    {
      title: "Official Selection",
      festival: "Short Film Awards",
      film: "Echoes of Silence",
      year: "2024",
      ticketNo: "TKT-2024-12C"
    },
    {
      title: "Winner: Best Visuals",
      festival: "48 Hour Film Challenge",
      film: "Midnight Run",
      year: "2023",
      ticketNo: "TKT-2023-04B"
    }
  ];

  const testimonials = [
    {
      quote: "Srinivas has an incredible eye for light and shadows. He transformed simple scripts into breathtaking cinematic moments. His dedication to testing lenses before production makes all the difference.",
      author: "Siddharth Gurung",
      role: "Narrative Director",
      color: "bg-yellow-100 border-yellow-200 text-yellow-950",
      rotation: "rotate-[-2deg]"
    },
    {
      quote: "Working with Srinivas on our commercial campaign was seamless. He designed a high-contrast lighting plot that elevated the product's visual presence. A true visual craftsman.",
      author: "Aditi Rao",
      role: "Creative Director, Vibe Agency",
      color: "bg-emerald-100 border-emerald-200 text-emerald-950",
      rotation: "rotate-[3deg]"
    },
    {
      quote: "His technical rigging knowledge coupled with his visual speed on set saved our schedule twice. The documentary landscapes he captured are absolutely emotional.",
      author: "Rahul Sen",
      role: "Lead Producer",
      color: "bg-rose-100 border-rose-200 text-rose-950",
      rotation: "rotate-[-1deg]"
    }
  ];

  return (
    <section id="awards-testimonials" className="relative py-24 px-6 md:px-12 paper-texture border-b border-charcoal/10 overflow-hidden">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Awards & Festivals (Cinema Ticket Styles) */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex items-center gap-2.5 mb-8">
            <Award className="w-6 h-6 text-film-red" />
            <h2 className="font-serif text-3xl uppercase tracking-wider text-charcoal">Awards & Festivals</h2>
          </div>

          <div className="space-y-6 flex-1 flex flex-col justify-center">
            {awards.map((award, idx) => (
              <div 
                key={idx}
                className="cinema-ticket bg-[#FFD43B] text-charcoal border border-charcoal/10 px-8 py-5 flex items-center justify-between shadow-md relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300"
                style={{ borderRadius: '4px' }}
                id={`award-ticket-${idx}`}
              >
                {/* Left Ticket Notch */}
                <div className="absolute left-[-13px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F7F4EC] border-r border-charcoal/10 pointer-events-none" aria-hidden="true"></div>
                {/* Right Ticket Notch */}
                <div className="absolute right-[-13px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F7F4EC] border-l border-charcoal/10 pointer-events-none" aria-hidden="true"></div>

                {/* Main Ticket Info */}
                <div className="flex-1 pl-2 pr-6">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-charcoal/45 block mb-1">
                    OFFICIAL CINEMA TICKET // ADMIT ONE
                  </span>
                  <h3 className="font-serif text-xl font-bold tracking-tight text-charcoal leading-none">
                    {award.title}
                  </h3>
                  <p className="font-sans text-xs font-semibold text-charcoal/70 mt-1">
                    {award.festival} — <span className="italic">{award.film}</span>
                  </p>
                </div>

                {/* Ticket Stub (Dashed Divider Line) */}
                <div className="h-full border-l border-dashed border-charcoal/30 mx-4 pointer-events-none" aria-hidden="true"></div>

                {/* Stub Info */}
                <div className="text-right font-mono pr-2">
                  <span className="text-[8px] block text-charcoal/45 uppercase">YEAR</span>
                  <span className="text-sm font-bold text-charcoal">{award.year}</span>
                  <span className="text-[7px] block text-charcoal/50 mt-1 uppercase tracking-tight font-semibold">
                    {award.ticketNo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Testimonials (Sticky Notes Style) */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex items-center gap-2 mb-8">
            <div className="flex text-yellow-500">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 className="font-serif text-3xl uppercase tracking-wider text-charcoal">Testimonials</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {testimonials.map((test, idx) => (
              <div 
                key={idx}
                className={`sticky-note p-6 border rounded shadow-sm hover:shadow-md hover:rotate-0 transition-transform duration-300 relative ${test.color} ${test.rotation}`}
                style={{ 
                  borderRadius: '0 0 30px 4px', 
                  transformOrigin: 'top left'
                }}
                id={`testimonial-note-${idx}`}
              >
                {/* Simulated push pin / tape at top center */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-6 bg-white/40 masking-tape -rotate-3 opacity-90"></div>

                {/* Star rating */}
                <div className="flex gap-0.5 text-orange-500 mb-3" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, sIdx) => (
                    <Star key={sIdx} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Feedback Quote */}
                <p className="font-handwritten text-lg leading-snug mb-4">
                  "{test.quote}"
                </p>

                {/* Author Info */}
                <div className="border-t border-black/5 pt-2 flex justify-between items-center font-mono text-[9px] uppercase tracking-wider text-black/55">
                  <span className="font-bold">{test.author}</span>
                  <span>{test.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AwardsTestimonials;
