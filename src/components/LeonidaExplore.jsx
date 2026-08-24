const LeonidaExplore = () => {
  const locations = [
    {
      title: "Vice City Metro",
      desc: "Art Deco nightlife & coastal strip",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Grassrivers",
      desc: "Airboats & murky swamplands",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Port Gellhorn",
      desc: "Industrial docks & underground drag strips",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
    }
  ]

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center p-8 md:p-16 lg:p-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="z-10 text-center mb-16 relative">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase text-white tracking-wide">
          Explore Leonida
        </h1>
        <p className="mt-4 text-xl font-[Helvetica] text-gray-400">
          A world of unprecedented scale and detail.
        </p>
      </div>

      <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl relative">
        {locations.map((loc, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-6 flex flex-col justify-end min-h-[400px] transition-all duration-500 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] cursor-pointer">
            <img src={loc.image} alt={loc.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h2 className="text-3xl font-bold text-white uppercase">{loc.title}</h2>
              <p className="text-lg text-gray-300 font-[Helvetica] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{loc.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 mt-16 flex gap-5 items-center relative mb-16">
        <button
          className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-black uppercase tracking-wider text-xl px-10 py-4 rounded-full transition-all duration-300 cursor-pointer"
          onClick={() => window.open("https://youtu.be/QdBZY2fkU-0?si=lq1VUZxFiKEiOeJH", "_blank")}>
          Watch Trailer 1
        </button>

        <button
          className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-black uppercase tracking-wider text-xl px-10 py-4 rounded-full transition-all duration-300 cursor-pointer"
          onClick={() => window.open("https://youtu.be/VQRLujxTm3c?si=D3BIzJumN_l74vYT", "_blank")}>
          Watch Trailer 2
        </button>
      </div>
      
      {/* Footer Line */}
      <div className="absolute flex flex-col gap-2 bottom-6 text-center w-full z-10">
        <p className="text-gray-500 text-sm font-[Helvetica]">&copy; Copyright 2026. All rights reserved.</p>
        <p className="text-gray-500 text-sm font-[Helvetica]">Made with &hearts; by <span className='text-amber-500 font-bold text-xl'>SENSEI_SS</span></p>
      </div>
    </div>
  )
}

export default LeonidaExplore
