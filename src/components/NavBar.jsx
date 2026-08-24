import React from 'react'

const NavBar = () => {
  return (
  <div className="navbar absolute top-0 left-0 z-[10] w-full px-5 sm:px-10 py-6 sm:py-10">
            <div className="logo flex gap-4 sm:gap-7">
            <div className="lines flex flex-col gap-[10px] sm:gap-[15px]">
            <div className="line w-10 sm:w-15 h-1.5 sm:h-2 bg-white">
            <div className="line w-6 sm:w-9 h-1.5 sm:h-2 bg-white">
              <div className="line w-3 sm:w-5 h-1.5 sm:h-2 bg-white">
              </div>
              <h3 className="text-2xl sm:text-4xl -mt-[6px] sm:-mt-[8px] leading-none text-white">Rockstar</h3>
              <h3 className="text-2xl sm:text-4xl -mt-[6px] sm:-mt-[8px] leading-none text-white">Games</h3>
            </div>
            </div>
            </div>
            </div>
            </div>
  )
}

export default NavBar