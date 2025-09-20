import React from "react";
import { assets } from "../assets/assets";

const Aboutus = () => {
  return (
    <div className=" lg:px-30 px-4">
      <div>
        <h2 className="text-3xl text-amber-800 my-7 text-center playwrite-hu"> About Us</h2>
      </div>
      <div className="flex lg:flex-row flex-col pt-5">
       
        <img src={assets.fruitomtr} className="w-lg rounded-3xl" />
        <div className="m-5">
          <p className="text-center m-2">
            Founded in the year 2000 by K.P. Aboobacker, KP Agencies began its
            journey in the bustling heart of Halwa Bazar, Calicut, with a clear
            mission — to deliver high-quality, trusted food products to
            retailers and customers across the region. What started as a humble
            distribution outlet has grown over the past two decades into a
            well-respected name in the FMCG (Fast-Moving Consumer Goods) sector,
            known for reliability, integrity, and excellence in service.
          </p>
          <p className="text-center m-2">
            With over 20 years of industry experience, KP Agencies has
            established itself as a leading distributor of renowned brands such
            as MTR and Fruitoman’s. These brands are household names, celebrated
            for their commitment to quality, taste, and tradition — values that
            perfectly align with our own.
          </p>
          <p className="text-center m-2">
        At KP Agencies, we understand that success in distribution is not just
        about delivering products, but about building relationships. We pride
        ourselves on maintaining strong, long-term partnerships with retailers,
        wholesalers, and supermarket chains by offering timely delivery,
        competitive pricing, and personalized service. Our deep roots in the
        local market allow us to respond quickly to shifting customer needs
        while maintaining the highest standards of professionalism.
      </p>
        </div>
      </div>
      <p className=" m-5  mt-2 text-xl playwrite-hu text-center p-12 text-amber-700 text-shadow-lg text-shadow-gray-400/50">
        From ready-to-eat meals and traditional South Indian mixes by MTR to
        Fruitoman’s delicious jams, squashes, sauces, and condiments, KP
        Agencies ensures that only the best products reach your shelves.
      </p>

      <div className="bg-amber-50 rounded-3xl p-2 shadow-lg shadow-black m-4"><h2 className="playwrite-hu my-5 text-xl text-amber-700 text-center">Our Strengths:</h2>
      <ul className=" m-5 text-center">
        <li >Established Distributor of MTR and Fruitoman’s products</li>
        <li >Headquartered in Calicut, with reach across Kerala and beyond</li>
        <li>Efficient supply chain management and logistics</li>
        <li >
          A trusted partner to supermarkets, grocery stores, and wholesale
          dealers
        </li >
        <li >
          Committed to customer satisfaction and ethical business practices
        </li>
      </ul></div>
      
      
      <div className="bg-gray-200 rounded-3xl p-2 shadow-lg shadow-black m-4">
        <h2 className="playwrite-hu my-5 text-xl text-amber-700 text-center">Our Vision:</h2>
        <p className=" m-5 text-center">
          To be a leading force in FMCG distribution, offering quality products
          and unmatched service while upholding our core values of trust,
          consistency, and customer focus.
        </p>
      </div>
      <div className="bg-amber-50 rounded-3xl p-2 shadow-lg shadow-black m-4">
        <h2 className="playwrite-hu my-5 text-xl text-amber-700 text-center">Our Mission:</h2>
        <p className=" m-5 text-center">
          To connect households with quality food products through a seamless,
          dependable supply chain that benefits both brands and businesses.
        </p>
      </div>
      <p className="mb-26 mt-2 text-2xl playwrite-hu text-center p-12 text-amber-700 text-shadow-lg text-shadow-gray-400/80">
        Whether you’re a new retailer or a long-standing client, KP Agencies is
        here to serve as your dependable distribution partner — rooted in
        tradition, driven by excellence.
      </p>
    </div>
  );
};

export default Aboutus;
