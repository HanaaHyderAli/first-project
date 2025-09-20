import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div>
     
      <div className="h-20 md:h-40 w-[100%] relative overflow-x-hidden mt-9">
        <div className="gradient absolute left-0 z-50 h-full w-[150px] md:w-[250px] "></div>
        <img
          src={assets.banner}
          loading="lazy"
          className="h-20 md:h-40 min-w-[400%] md:min-w-[200%] products absolute"
        />
        <div className="gradient2 absolute right-0 z-50 h-full w-[150px]  md:w-[250px]"></div>
      </div>
    </div>
  )
}

export default Banner
