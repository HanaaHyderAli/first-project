import React from 'react'
import { Link } from "react-router-dom";
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


const Reviews = () => {
  return (
    <div>
      <div>
        <div className="relative mx-auto lg:px-20 px-4 text-center mt-19">
          <div className="text-7xl font-extrabold p-8">
            We're Here Today 'Cos of You!
          </div>
          <div className="p-6 text-slate-600 mb-9">
            A Few Sweet Words From Our Clients
          </div>
          <div className="hidden lg:block">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            navigation
            pagination={{ clickable: true }}
            autoplay
            effect="coverflow"
            slidesPerView={3}
            spaceBetween={50}
            
            
          >
            <SwiperSlide>
              <div className="bg-slate-200  rounded-xl  relative mx-auto py-16">
                <p className="font-medium font-cur">
                  "We are buying from them for the last 10 years but never faced
                  any quality and price hike issues."
                </p>
                <p className="pt-8 text-gray-500 text-xl">Sarath Kumar</p>
                <p className="text-gray-500 font-thin">Purchasing Executive</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slate-200  rounded-xl  relative mx-auto pt-16 px-7 border-2 min-h-[311px]">
                <p className="font-medium font-cur">
                  "I appreciate the teams efforts in excellent follow-up and
                  speedy deliveries."
                </p>
                <p className="pt-8 text-gray-500 text-xl">Krishnamurthy</p>
                <p className="text-gray-500 font-thin">Nesto</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slate-200  rounded-xl  relative mx-auto pt-16 px-7 border-2 min-h-[311px]">
                <p className="font-medium font-cur">
                  "They have a huge inventory of products that are sourced from
                  quality vendors."
                </p>
                <p className="pt-8 text-gray-500 text-xl">Ahmed Kutty</p>
                <p className="text-gray-500 font-thin">Kuttichira</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slate-200  rounded-xl  relative mx-auto pt-14 px-7 border-2 min-h-[311px]">
                <p className="font-medium font-cur">
                  “KP Agencies has been our go-to distributor for MTR and
                  Fruitoman products. Always timely, reliable, and transparent —
                  it's a pleasure doing business with them!”
                </p>
                <p className="pt-8 text-gray-500 text-xl"> Ravi M.</p>
                <p className="text-gray-500 font-thin"> Supermarket Owner</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slate-200  rounded-xl  relative mx-auto pt-16 px-7 border-2 min-h-[311px]">
                <p className="font-medium font-cur">
                  “Exceptional service and consistent supply. KP Agencies
                  understands the market and delivers quality products every
                  time.”
                </p>
                <p className="pt-8 text-gray-500 text-xl">Nisha K.</p>
                <p className="text-gray-500 font-thin">Retail Chain Buyer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slate-200  rounded-xl  relative mx-auto pt-16 px-7 border-2 min-h-[311px]">
                <p className="font-medium font-cur">
                  “The team at KP Agencies is highly professional and
                  responsive. They helped us scale our FMCG section with
                  top-selling items from MTR and Fruitoman's.”
                </p>
                <p className="pt-8 text-gray-500 text-xl">Ahmed S</p>
                <p className="text-gray-500 font-thin">Grocery Store Manager</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slate-200  rounded-xl  relative mx-auto pt-16 px-7 border-2 min-h-[311px]">
                <p className="font-medium font-cur">
                  “A trustworthy partner in the food distribution business. Their curated product mix and dependable logistics make them stand out.”
                </p>
                <p className="pt-8 text-gray-500 text-xl">Latha R.</p>
                <p className="text-gray-500 font-thin"> Wholesale Dealer</p>
              </div>
            </SwiperSlide>
          </Swiper></div>

          <div className="block lg:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCube]}
            navigation
            pagination={{ clickable: true }}
            autoplay
            effect="cube"
            slidesPerView={1}
            
            
          >
            <SwiperSlide>
              <div className="bg-slate-200  rounded-xl  relative mx-auto py-16">
                <p className="font-medium font-cur">
                  "We are buying from them for the last 10 years but never faced
                  any quality and price hike issues."
                </p>
                <p className="pt-8 text-gray-500 text-xl">Sarath Kumar</p>
                <p className="text-gray-500 font-thin">Purchasing Executive</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slate-200  rounded-xl  relative mx-auto pt-16 px-7 border-2 min-h-[311px]">
                <p className="font-medium font-cur">
                  "I appreciate the teams efforts in excellent follow-up and
                  speedy deliveries."
                </p>
                <p className="pt-8 text-gray-500 text-xl">Krishnamurthy</p>
                <p className="text-gray-500 font-thin">Nesto</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slate-200  rounded-xl  relative mx-auto pt-16 px-7 border-2 min-h-[311px]">
                <p className="font-medium font-cur">
                  "They have a huge inventory of products that are sourced from
                  quality vendors."
                </p>
                <p className="pt-8 text-gray-500 text-xl">Ahmed Kutty</p>
                <p className="text-gray-500 font-thin">Kuttichira</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slate-200  rounded-xl  relative mx-auto pt-14 px-7 border-2 min-h-[311px]">
                <p className="font-medium font-cur">
                  “KP Agencies has been our go-to distributor for MTR and
                  Fruitoman products. Always timely, reliable, and transparent —
                  it's a pleasure doing business with them!”
                </p>
                <p className="pt-8 text-gray-500 text-xl"> Ravi M.</p>
                <p className="text-gray-500 font-thin"> Supermarket Owner</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slate-200  rounded-xl  relative mx-auto pt-16 px-7 border-2 min-h-[311px]">
                <p className="font-medium font-cur">
                  “Exceptional service and consistent supply. KP Agencies
                  understands the market and delivers quality products every
                  time.”
                </p>
                <p className="pt-8 text-gray-500 text-xl">Nisha K.</p>
                <p className="text-gray-500 font-thin">Retail Chain Buyer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slate-200  rounded-xl  relative mx-auto pt-16 px-7 border-2 min-h-[311px]">
                <p className="font-medium font-cur">
                  “The team at KP Agencies is highly professional and
                  responsive. They helped us scale our FMCG section with
                  top-selling items from MTR and Fruitoman's.”
                </p>
                <p className="pt-8 text-gray-500 text-xl">Ahmed S</p>
                <p className="text-gray-500 font-thin">Grocery Store Manager</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slate-200  rounded-xl  relative mx-auto pt-16 px-7 border-2 min-h-[311px]">
                <p className="font-medium font-cur">
                  “A trustworthy partner in the food distribution business. Their curated product mix and dependable logistics make them stand out.”
                </p>
                <p className="pt-8 text-gray-500 text-xl">Latha R.</p>
                <p className="text-gray-500 font-thin"> Wholesale Dealer</p>
              </div>
            </SwiperSlide>
          </Swiper></div>

        
        </div>
      </div>
    </div>
  )
}

export default Reviews
