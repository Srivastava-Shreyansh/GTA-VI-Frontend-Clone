import React from 'react'

const SecondPage = () => {
  const click = () => {
    window.open("https://www.rockstargames.com/VI", "_blank")
  }

  return (
    <div className="w-full min-h-screen bg-black flex flex-col md:flex-row items-center justify-center p-8 md:p-16 lg:p-24 relative overflow-hidden">
      {/* Left Column: Lucia Visual */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center h-[40vh] md:h-full order-1 md:order-1 mb-8 md:mb-0 z-10">
        <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-[100px] z-0"></div>
        <img className="relative z-10 w-full h-full object-contain max-w-xs md:max-w-lg drop-shadow-[0_0_35px_rgba(245,158,11,0.25)]" src="/imag.png" alt="Lucia" />
      </div>
      
      {/* Right Column: Copy & CTA */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center order-2 md:order-2 z-10 relative">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase text-white leading-tight">
          Still Running,<br />Not Hunting!
        </h1>
        <p className="mt-6 text-lg sm:text-xl font-[Helvetica] text-gray-300 max-w-xl">
          Grand Theft Auto VI returns players to Vice City and the surrounding state of Leonida, delivering an expansive, next-generation open world with unprecedented visual detail.
        </p>
        <p className="mt-4 text-lg sm:text-xl font-[Helvetica] text-gray-300 max-w-xl">
          The story follows criminal duo Lucia and Jason across vibrant beaches, murky swamplands, and dense neon streets, blending modern social satire with chaotic, high-stakes crime.
        </p>
        <p className="mt-4 text-lg sm:text-xl font-[Helvetica] text-gray-300 max-w-xl">
          Launching on PS5 and Xbox Series X|S, the game stands as one of the most anticipated releases in entertainment history, set to redefine open-world gaming.
        </p>
        <button
          className="mt-10 bg-amber-500 hover:bg-amber-400 text-black font-black uppercase tracking-wider text-xl sm:text-2xl px-8 py-4 rounded-md transition-all active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
          onClick={click}>
          Pre-Order Now
        </button>
      </div>
    </div>
  )
}

export default SecondPage