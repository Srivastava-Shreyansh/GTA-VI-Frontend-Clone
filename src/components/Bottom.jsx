import { ArrowDown } from 'lucide-react';

const Bottom = () => {
  return (
    <div className="btmbar text-white absolute bottom-0 left-0 z-[30] w-full px-4 sm:px-10 py-6 sm:py-12 bg-gradient-to-t from-black to-transparent flex justify-between items-end">
      <div className="flex gap-2 items-center mb-0">
        <ArrowDown className="text-3xl sm:text-5xl animate-bounce" />
        <h3 className="text-lg sm:text-xl font-[Helvetica] uppercase tracking-wider">Scroll Down</h3>
      </div>
      <div>
        <img className="h-[60px] sm:h-[90px] object-contain drop-shadow-lg" src="/ps5.png" alt="PS5|XBOX" />
      </div>
    </div>
  )
}

export default Bottom