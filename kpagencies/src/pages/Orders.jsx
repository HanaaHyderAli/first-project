import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const { backendUrl,token, currency } = useContext(ShopContext);
  const [orderData,setOrderData]=useState([])
 
 const loadOrderData=async()=>{
  try {
    
    if(!token){
      return null
    }
    
    const response= await axios.post(backendUrl+'/api/order/userorders',{},{headers:{Authorization:`Bearer ${token}`}})
    if(response.data.success){
      let allOrdersItem=[]
      response.data.orders.map((order)=>{
        order.items.map((item)=>{
          item['status']=order.status
          item['payment']=order.payment
          item['paymentMethod']=order.paymentMethod
          item['date']=order.date
          allOrdersItem.push(item)
        })
      })
      setOrderData(allOrdersItem.reverse())
    }
  } catch (error) {
    
  }
 }
 useEffect(() => {
   loadOrderData()
 }, [token])
 

  return (
    <div className="lg:px-20 px-4 mb-44">
      <div>
        <h2 className="text-2xl text-amber-800 my-7 playwrite-hu"> My orders</h2>
      </div>
      <div>
        {orderData.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row justify-between border-b border-b-gray-300 p-4">
              <div className="flex lg:flex-row flex-col gap-2  items-center">
                <img src={item.image} className="lg:w-25 w-18" />
                <div className="flex flex-col lg:w-md">
                  <p className="lg:text-xl text-amber-700">{item.name}</p>
                  <div className="flex flex-row gap-2">
                    <p>
                      {currency}
                      {item.price}
                    </p>
                    <p>Quantity:{item.quantity}</p>
                  </div>
                  <p className="text-gray-500">Date:{new Date(item.date).toDateString()}</p>
                  <p className="text-gray-500">Payment:{item.paymentMethod}</p>
                </div>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                <p>{item.status}</p>
              </div>
              <div onClick={loadOrderData} className="flex items-center"><button className="border border-gray-400 p-2 cursor-pointer ">Track order</button></div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
