import React from 'react';

const FilmGrainOverlay = () => {
  return (
    <>
      {/* Film Grain overlay */}
      <div className="film-grain pointer-events-none" aria-hidden="true"></div>
      
      {/* Floating Light Leak Elements */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-screen opacity-20">
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-film-red via-transparent to-transparent blur-[120px] animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-kodak-orange via-transparent to-transparent blur-[150px] animate-pulse" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-[40%] left-[60%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-[#6C9A8B]/30 via-transparent to-transparent blur-[100px] animate-pulse" style={{ animationDuration: '25s' }}></div>
      </div>
    </>
  );
};

export default FilmGrainOverlay;
