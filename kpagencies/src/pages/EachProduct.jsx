import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "../components/RelatedProducts";

const EachProduct = () => {
  const { productId } = useParams();
  const { product,currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);

  const fetchProductData = async () => {
    product.map((item) => {
      if (item._id === productId) {
        setProductData(item);
       
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, product]);
  return productData ? (
    <div className="lg:px-20 px-10">
    <div className="flex lg:flex-row flex-col mb-14">
      <h2 className="text-4xl text-amber-700 my-2 lg:hidden">{productData.name}</h2>
        <p className="font-sans font-extrabold text-xl my-2  lg:hidden">{currency}{productData.price}</p>
     
      <div className="lg:w-[50%] flex justify-center my-8">
        <img src={productData.image} className="lg:w-[450px] lg:h-[500px] w-[300px] hover:scale-120 transition-transform ease-in-out" />
      </div>
      <div className="flex flex-col lg:w-[30%]">
        <h2 className="text-6xl text-amber-700 my-2 hidden lg:block">{productData.name}</h2>
        <p className="font-sans font-extrabold text-2xl my-2 hidden lg:block">{currency}{productData.price}</p>
        <p className="text-gray-800 my-2">{productData.description}</p>
        <p className="text-gray-800 my-2">Ingredients: {productData.ingredients}</p>
        <div className="flex my-2"><p className="border bg-gray-200 p-2">{productData.size}</p></div>
        <div className="flex my-5 justify-center"><button onClick={()=>addToCart(productData._id)} className="bg-black text-white p-5 px-7 rounded-3xl hover:bg-gray-700 cursor-pointer">Add to Cart</button></div>
        
         <div className="border border-gray-200 w-full my-2"></div>
        <p className="mt-2 text-gray-500">100% Original product</p>
        <p className=" text-gray-500">Cash on delivery is available</p>
       `  `
      </div>
      
    </div>
    <RelatedProducts category={productData.category} subcategory={productData.subcategory}/></div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default EachProduct;
