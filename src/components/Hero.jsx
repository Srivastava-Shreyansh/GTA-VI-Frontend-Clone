import React from 'react'

const Hero = () => {
  return (
    <div className="imagediv relative h-screen w-full overflow-hidden">
      <img
        className="bg absolute rotate-[5deg] inset-0 z-0 h-full w-full object-cover scale-[1.3]"
        src="/bgupd.png"
        alt="background"
      />

      {/* Responsive layout text scaling */}
      <div className="text text-white flex flex-col gap-1 sm:gap-3 absolute top-[20%] md:top-5 left-1/2 scale-[0.8] sm:scale-[1.2] lg:scale-[1.4] rotate-[10deg] w-max z-10 pointer-events-none">
        <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] -ml-8 sm:-ml-30 md:-ml-65 leading-none drop-shadow-2xl">grand</h1>
        <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] -ml-2 sm:-ml-20 md:-ml-40 leading-none drop-shadow-2xl">theft</h1>
        <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] -ml-8 sm:-ml-30 md:-ml-65 leading-none drop-shadow-2xl">auto</h1>
      </div>

      <img
        className="character absolute -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg] z-20 h-[60vh] sm:h-[80vh] md:h-screen w-auto object-contain pointer-events-none"
        src="/boybg.png"
        alt="Jason"
      />
    </div>
  )
}

export default Hero