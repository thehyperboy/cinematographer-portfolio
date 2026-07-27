import React from 'react';
import { BookOpen, Briefcase } from 'lucide-react';

const EducationExperience = () => {
  const educationItems = [
    {
      school: "FTII Pune (Film & Television Institute of India)",
      degree: "Post Graduate Diploma in Cinematography",
      specialization: "Feature Film Lighting & Advanced Camera Operations",
      years: "2019 – 2022"
    },
    {
      school: "LV Prasad Film & TV Academy",
      degree: "Bachelor of Fine Arts (BFA) in Filmmaking",
      specialization: "Visual Storytelling, Editing, & Composition",
      years: "2016 – 2019"
    }
  ];

  const experienceItems = [
    {
      role: "Freelance Cinematographer / DOP",
      years: "2023 – Present",
      projects: ["Commercial DOP", "Music Videos", "Wedding Films", "Short Films", "Documentaries", "Corporate Films"],
      notes: "Operating Sony FX3, BMPCC 6K, and DJI RS4. Specializing in anamorphic lensing and high-dynamic-range lighting."
    },
    {
      role: "Assistant Camera Operator",
      years: "2022 – 2023",
      projects: ["Regional Feature Films", "National Ad Campaigns"],
      notes: "Supported Lead DOPs. Focus-pulling, rigging heavy camera setups, color profile calibration (S-Log3, Log-C)."
    }
  ];

  return (
    <section id="career" className="relative py-24 px-6 md:px-12 bg-charcoal dark-paper-texture border-b border-charcoal/10 text-ivory">
      
      {/* Torn paper edges top & bottom */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-transparent torn-edge-top opacity-10"></div>
      
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 relative">
          <span className="font-handwritten text-2xl text-kodak-orange block mb-1">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-white">
            BACKGROUND & HISTORY
          </h2>
          <div className="w-16 h-[2px] bg-kodak mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Education (Notebook Paper Layout) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-6 h-6 text-kodak" />
              <h3 className="font-serif text-2xl uppercase tracking-wider text-white">Education</h3>
            </div>

            {/* Notebook Container */}
            <div className="notebook-paper p-8 text-charcoal rounded-lg relative overflow-hidden flex-1 border border-black/10">
              {/* Binder spiral rings (Top/Side decoration) */}
              <div className="absolute top-2 left-6 flex space-x-12 select-none pointer-events-none opacity-80" aria-hidden="true">
                <div className="w-4 h-4 bg-gray-400 rounded-full border border-gray-600 shadow-inner flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
                <div className="w-4 h-4 bg-gray-400 rounded-full border border-gray-600 shadow-inner flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
                <div className="w-4 h-4 bg-gray-400 rounded-full border border-gray-600 shadow-inner flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
              </div>

              {/* Notebook Content */}
              <div className="pl-12 pt-4">
                <div className="border-b border-gray-300 pb-2 mb-4 font-mono text-[10px] text-gray-500 uppercase tracking-widest flex justify-between">
                  <span>Class: Cinematography Theory</span>
                  <span>Date: 2026</span>
                </div>

                {educationItems.map((edu, index) => (
                  <div key={index} className="mb-10 last:mb-0">
                    <p className="font-handwritten text-2xl text-film-red font-bold leading-tight">
                      ✏️ {edu.school}
                    </p>
                    <p className="font-sans font-semibold text-sm text-charcoal/90 mt-1 uppercase tracking-wide">
                      Degree: {edu.degree}
                    </p>
                    <p className="font-sans text-xs text-charcoal/70 italic mt-0.5">
                      Spec: {edu.specialization}
                    </p>
                    <p className="font-mono text-xs text-kodak-orange font-bold mt-1">
                      Years: {edu.years}
                    </p>
                    {index < educationItems.length - 1 && (
                      <div className="h-[1px] bg-gray-200 my-6 border-dashed border-t"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience (Vintage Production Slate Cards) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-6 h-6 text-film-green" />
              <h3 className="font-serif text-2xl uppercase tracking-wider text-white">Experience</h3>
            </div>

            {/* Slate Cards List */}
            <div className="space-y-8 flex-1 flex flex-col justify-between">
              {experienceItems.map((exp, index) => (
                <div 
                  key={index} 
                  className="bg-charcoal-light border border-white/10 rounded-lg p-6 relative overflow-hidden hover:border-kodak/30 transition-all duration-300 flex-1 flex flex-col justify-between"
                  style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}
                >
                  
                  {/* Vintage Production Card Header */}
                  <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
                    <div>
                      <span className="font-mono text-[9px] text-kodak uppercase tracking-widest">DOP Job Log</span>
                      <h4 className="font-serif text-2xl text-white font-bold tracking-tight">{exp.role}</h4>
                    </div>
                    <span className="font-mono text-xs bg-white/10 text-white px-2 py-0.5 rounded-full font-bold">
                      {exp.years}
                    </span>
                  </div>

                  {/* Creative Production Labels */}
                  <div className="my-2">
                    <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-2">Scope of Projects</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((proj, pIdx) => (
                        <span 
                          key={pIdx} 
                          className="font-handwritten text-sm text-kodak px-2 py-0.5 border border-kodak/20 rounded rotate-[-1deg] hover:rotate-[1deg] transition-all bg-black/30 select-none"
                        >
                          ✓ {proj}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Production notes */}
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-start gap-3">
                    <div className="font-mono text-[10px] text-white/30 uppercase mt-1">Notes:</div>
                    <p className="font-sans text-xs italic text-white/70 leading-relaxed">
                      {exp.notes}
                    </p>
                  </div>

                  {/* Decorative tape corner / label stamp */}
                  <div className="absolute -bottom-2 -right-4 w-20 h-8 masking-tape rotate-[-25deg] opacity-60 flex items-center justify-center text-[8px] font-mono font-bold text-charcoal select-none">
                    APPROVED
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default EducationExperience;
