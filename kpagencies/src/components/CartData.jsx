import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const CartData = () => {
  const { currency, delivery_fee, getCartAmount} = useContext(ShopContext);
 
  
  return (
    <div className="flex flex-col gap-1 lg:w-lg w-sm mt-5">
      <div className="text-2xl my-3 text-amber-800 playwrite-hu"> Cart Totals</div>
      <div className="flex flex-row justify-between   border-b border-b-gray-200 p-2">
        <div>Subtotal</div>
        <div>
          {currency}
          {getCartAmount()}.00
        </div></div>

        <div className="flex flex-row justify-between  border-b border-b-gray-200 p-2">
          <div>Shipping Fee</div>
          <div>
            {currency}
            {delivery_fee}.00
          </div></div>
          <div className="flex flex-row justify-between   border-b border-b-gray-200 p-2">
            <div className="text-xl">Total</div>
            <div  className="text-xl">
              {currency}
              {getCartAmount() === 0 ? 0 : getCartAmount()+Number(delivery_fee)}.00
            </div>
          </div>
          
        
      </div>
    
  );
};

export default CartData;
