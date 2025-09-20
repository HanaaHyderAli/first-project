import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import CartData from "../components/CartData";

const Cart = () => {
  const { product, currency, cartItems,updateQuantity ,navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    if (product.length>0){
    const tempData = [];
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        tempData.push({
          _id: items,
          quantity: cartItems[items],
        });
      }
    }
    setCartData(tempData);}
  }, [cartItems,product]);

  return (
    <div className=" lg:px-20 px-4 mb-16">
      <div className="text-4xl font-bold text-amber-800 text-center m-5 pb-14 playwrite-hu">
        My Cart
      </div>
      {cartData.map((item, index) => {
        const productData = product.find((product) => product._id === item._id);
        return (
          <div
            key={index}
            className=" border-t border-b border-b-gray-300 border-t-gray-300 flex flex-row lg:gap-56  items-center justify-between pb-5"
          >
            <div className="flex flex-row  p-5 lg:gap-17  lg:min-w-[380px] min-w-[300px]">
              <img src={productData.image} className="w-25" />
              <div className="flex flex-col justify-center gap-5">
                <p className="text-xl font-extrabold text-amber-800">
                  {productData.name}
                </p>
                <p>
                  {currency}
                  {productData.price}
                </p>
              </div>
            </div>
            <input onChange={(e)=>e.target.value===''||e.target.value==='0'?null:updateQuantity(item._id,Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className="border text-center max-w-15  py-1 mt-5"/>
            <img src={assets.deleteicon} onClick={()=>updateQuantity(item._id,0)} className="w-5 mt-5 cursor-pointer"/>
          </div>
        );
      })}
      <div className="flex flex-col  items-end " >
        <CartData/>
        <div className="m-7"><button onClick={()=>navigate('/place-order')} className=" text-white bg-black p-4 rounded-2xl hover:bg-gray-400">PROCEED TO CHECKOUT</button></div>
      </div>
    </div>
  );
};

export default Cart;
