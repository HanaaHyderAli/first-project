import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  EffectCube,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div>
       <div className=" lg:px-20 px-4">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCube]}
                navigation
                pagination={{ clickable: true }}
                autoplay
                effect="cube"
              >
                <SwiperSlide>
                  <div className="flex lg:flex-row  flex-col-reverse justify-center items-center border-2 bg-stone-200 rounded-4xl h-[350px] lg:h-[460px] ">
                    <div className=" lg:w-[50%]">
                      <h2 className="playwrite-hu font-extrabold overflow-hidden lg:text-3xl text-wrap text-orange-800 text-center leading-loose ">
                        Delivering trusted food brands to your doorstep
                      </h2>
                    </div>
      
                    <img
                      src={assets.fruitomtr}
                      className="lg:w-[50%] rounded-4xl overflow-hidden" />
                  </div>
                </SwiperSlide>
      
                <SwiperSlide>
                  <div>
                    <div className="flex lg:flex-row h-[350px]  flex-col-reverse justify-center items-center border-2 bg-white rounded-4xl lg:h-[460px]">
                      <div className=" lg:w-[50%]">
                        <h2 className="playwrite-hu lg:w-[70%] mx-auto overflow-hidden lg:text-2xl text-wrap text-red-700 text-center leading-loose ">
                          Bringing the essence of fruits to your kitchen with quality
                          sauces, jams, pickles and beverages
                        </h2>
                      </div>
      
                      <img
                        src={assets.fruitoman}
                        className="overflow-hidden lg:h-[440px]  rounded-4xl" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex lg:flex-row h-[350px]  flex-col-reverse justify-center items-center border-2 bg-orange-100 rounded-4xl lg:h-[460px] overflow-hidden">
                      <div className=" lg:w-[50%]">
                        <h2 className="playwrite-hu w-[70%] mx-auto overflow-hidden lg:text-2xl text-neutral-600 text-wrap  text-center leading-loose ">
                          Authentic Indian flavors, ready to serve- explore a wide
                          range of instant meals, snacks, and spice mixes
                        </h2>
                      </div>
      
                      <img
                        src={assets.mtr}
                        className="overflow-hidden lg:h-[460px] min-h-[220px] lg:w-[50%] rounded-4xl" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex lg:flex-row   flex-col-reverse justify-center items-center bg-amber-50 border-2 rounded-4xl h-[350px] lg:h-[460px] overflow-hidden">
                      <div className=" w-[50%] lg:block hidden">
                        <h2 className="playwrite-hu lg:w-[70%] mx-auto overflow-hidden lg:text-2xl text-red-600 text-wrap  text-center leading-loose ">
                          Explore Quality & Flavor with MTR and Fruitoman's - Trusted
                          Brands for Every Kitchen
                        </h2>
                      </div>
      
                      <img
                        src={assets.fruito2}
                        className="  lg:h-[480px] lg:w-[50%] rounded-4xl" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="border-2  h-[350px] py-24 lg:h-[460px] rounded-4xl bg-white">
                    <img src={assets.certi} className=" w-[80%] mx-auto relative" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
      
      
      
      
      
      
          </div>
    
  )
}

export default Hero
