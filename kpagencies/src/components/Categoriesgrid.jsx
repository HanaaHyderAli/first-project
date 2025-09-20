import React from 'react'
import { assets } from '../assets/assets'
import { Link } from "react-router-dom";

const Categoriesgrid = () => {
  return (
    <div>
      <div className="bg-slate-200 mt-14 pt-12 border-2 border-slate-500 shadow-slate-500 shadow-md">
        <div className="relative mx-auto lg:px-20 px-4 ">
          <div className="flex justify-around flex-row items-center sm:p-16 p-5">
            <h2 className="sm:text-3xl text-xl font-bold text-slate-600 categoryhead playwrite-hu ">
              Our Categories
            </h2>
            <p className="sm:max-w-[40%] max-w-[60%] text-lg  text-red-900">
              We specialize in wholesale trading of premium food products from{" "}
              <b>Fruitomans</b> and <b>MTR Foods</b> , trusted by homes and
              businesses across the region
            </p>
          </div>
          <div className="categcont grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
            <div className="group">
              <div className="flex flex-col items-center relative group group-hover:scale-110 transition-transform duration-300 ease-linear">
                <img
                  src={assets.spices}
                  className="h-[250px] w-[350px] rounded-tl-3xl "
                />
                <h3 className="w-[350px] bg-orange-400 p-2 rounded-br-3xl text-center font-semibold playwrite-hu">
                  Spices & Masalas
                </h3>
                <div className="hidden group-hover:flex absolute h-full w-[350px] bg-slate-300 opacity-80 text-center items-center flex-col justify-evenly rounded-tl-3xl rounded-br-3xl">
                  <p>
                    Authentic Indian spice blends from MTR—including Sambar
                    Powder, Rasam Powder, Garam Masala, and more—perfect for
                    traditional South Indian cooking.
                  </p>
                  <Link to="/products?subcategory=Spices "  className="font-bold text-orange-800 underline">See More</Link>
                  
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex flex-col items-center relative group group-hover:scale-110 transition-transform duration-300 ease-linear">
                <img
                  src={assets.ready}
                  className="h-[250px] w-[350px] rounded-tl-3xl"
                />
                <h3 className="w-[350px] bg-orange-400 p-2 rounded-br-3xl text-center font-semibold playwrite-hu">
                  Ready-to-eat Meals
                </h3>
                <div className="hidden group-hover:flex absolute h-full w-[350px] bg-slate-300 opacity-80 text-center items-center flex-col justify-evenly rounded-tl-3xl rounded-br-3xl">
                  <p>
                    Convenient and tasty MTR ready meals like Upma, Poha, Rajma,
                    and Pongal. Just heat and serve—ideal for busy households.
                  </p>
                   <Link to="/products?subcategory=Ready "  className="font-bold text-orange-800 underline">See More</Link>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex flex-col items-center relative group group-hover:scale-110 transition-transform duration-300 ease-linear">
                <img
                  src={assets.jam}
                  className="h-[250px] w-[350px] rounded-tl-3xl"
                />
                <h3 className="w-[350px] bg-orange-400 p-2 rounded-br-3xl text-center font-semibold playwrite-hu">
                  Jams & Fruit Spreads
                </h3>
                <div className="hidden group-hover:flex absolute h-full w-[350px] bg-slate-300 opacity-80 text-center items-center flex-col justify-evenly rounded-tl-3xl rounded-br-3xl">
                  <p>
                    Delicious Fruitoman jams in flavors like mixed fruit,
                    pineapple, and mango—made with real fruit for a wholesome
                    breakfast companion.
                  </p>
                   <Link to="/products?subcategory=Jams "  className="font-bold text-orange-800 underline">See More</Link>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex flex-col items-center relative group group-hover:scale-110 transition-transform duration-300 ease-linear">
                <img
                  src={assets.pickles}
                  className="h-[250px] w-[350px] rounded-tl-3xl"
                />
                <h3 className="w-[350px] bg-orange-400 p-2 rounded-br-3xl text-center font-semibold playwrite-hu">
                  Pickles & Condiments
                </h3>
                <div className="hidden group-hover:flex absolute h-full w-[350px] bg-slate-300 opacity-80 text-center items-center flex-col justify-evenly rounded-tl-3xl rounded-br-3xl">
                  <p>
                    Flavor-packed Indian pickles and chutneys from MTR and
                    Fruitoman to spice up any meal.
                  </p>
                   <Link to="/products?subcategory=Pickles "  className="font-bold text-orange-800 underline">See More</Link>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex flex-col items-center relative group group-hover:scale-110 transition-transform duration-300 ease-linear">
                <img
                  src={assets.batter}
                  className="h-[250px] w-[350px] rounded-tl-3xl"
                />
                <h3 className="w-[350px] bg-orange-400 p-2 rounded-br-3xl text-center font-semibold playwrite-hu">
                  Instant Mixes & Batter
                </h3>
                <div className="hidden group-hover:flex absolute h-full w-[350px] bg-slate-300 opacity-80 text-center items-center flex-col justify-evenly rounded-tl-3xl rounded-br-3xl">
                  <p>
                    Easy-to-make dosa, idli, vada, and rava dosa mixes from MTR
                    for consistent taste and texture at home.
                  </p>
                   <Link to="/products?subcategory=Instant "  className="font-bold text-orange-800 underline">See More</Link>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex flex-col items-center relative group group-hover:scale-110 transition-transform duration-300 ease-linear">
                <img
                  src={assets.squashes}
                  className="h-[250px] w-[350px] rounded-tl-3xl"
                />
                <h3 className="w-[350px]  bg-orange-400 p-2 rounded-br-3xl text-center font-semibold playwrite-hu">
                  Squashes & Syrups
                </h3>
                <div className="hidden group-hover:flex absolute h-full w-[350px] bg-slate-300 opacity-80 text-center items-center flex-col justify-evenly rounded-tl-3xl rounded-br-3xl">
                  <p>
                    Refreshing Fruitoman drink concentrates like orange squash,
                    lemon barley, and rose syrup—perfect for cool beverages.
                  </p>
                  <Link to="/products?subcategory=Squashes"  className="font-bold text-orange-800 underline">See More</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-14 text-center">
            <Link to="/products">
              <p className=" inline-block border-2 p-3 border-black bg-orange-400 hover:bg-slate-400 rounded-3xl m-5">
                See all categories
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categoriesgrid
