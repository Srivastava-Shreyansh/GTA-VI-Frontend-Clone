const JasonSpotlight = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col md:flex-row items-center justify-center p-8 md:p-16 lg:p-24 relative overflow-hidden">
      {/* Left Column: Copy & CTA */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center z-10 relative order-2 md:order-1">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase text-white leading-tight">
          TRUST &<br />SURVIVAL
        </h1>
        <p className="mt-6 text-lg sm:text-xl font-[Helvetica] text-gray-300 max-w-xl">
          A former operative navigating the chaotic underworld of Leonida. Jason relies on his sharp tactical instincts, unmatched getaway driving skills, and raw survival tactics to stay one step ahead of the law and rival factions.
        </p>
        
        <div className="mt-8 flex flex-col gap-4 font-[Helvetica]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
            <span className="text-gray-200 text-lg sm:text-xl font-bold tracking-widest uppercase">Tactical Combat</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
            <span className="text-gray-200 text-lg sm:text-xl font-bold tracking-widest uppercase">Getaway Driving</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
            <span className="text-gray-200 text-lg sm:text-xl font-bold tracking-widest uppercase">Covert Operations</span>
          </div>
        </div>

        <button
          className="mt-10 bg-amber-500 hover:bg-amber-400 text-black font-black uppercase tracking-wider text-xl sm:text-2xl px-8 py-4 rounded-md transition-all active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
          onClick={() => window.open("https://www.rockstargames.com/VI", "_blank")}>
          Pre-Order Now
        </button>
      </div>

      {/* Right Column: Jason Visual */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center h-[40vh] md:h-full order-1 md:order-2 mb-8 md:mb-0 z-10">
        <div className="absolute inset-0 bg-cyan-500/15 rounded-full blur-[120px] z-0"></div>
        <img className="relative z-10 w-full h-full object-contain max-w-xs md:max-w-lg drop-shadow-[0_0_35px_rgba(6,182,212,0.25)]" src="/boybg.png" alt="Jason" />
      </div>
    </div>
  )
}

export default JasonSpotlight
