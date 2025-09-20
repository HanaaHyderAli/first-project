import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Productitem from "./Productitem";
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

const Bestseller = () => {
  const { product } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  console.log(product)
  useEffect(() => {
    const best = product.filter((item) => item.bestseller);
    setBestSeller(best.slice());
  }, [product]);

  console.log("besttype",bestSeller)

  return (
    <div
      className="lg:px-20 px-4 bg-amber-50 py-10 mt-19 border shadow-md shadow-gray-600 shadow-
    
    "
    >
      <h2 className="text-5xl font-bold text-amber-700 categoryhead text-center p-5 text-shadow-gray-600/50 text-shadow-md playwrite-hu ">
        BestSeller
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {bestSeller.map((item, index) => (
          <SwiperSlide key={index} className="m-8">
            <Productitem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Bestseller;
