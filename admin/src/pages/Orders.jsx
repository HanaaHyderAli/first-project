import React from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { useEffect } from "react";
import { toast } from "react-toastify";
import orderpic from "../assets/order.jpg";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    console.log(token);
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.success) {
     
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event,orderId)=>{
  try {
    const response= await axios.post(backendUrl+'/api/order/status', {orderId,status:event.target.value},{ headers: { Authorization: `Bearer ${token}` } })
    if(response.data.success){
      await fetchAllOrders()
    }
  } catch (error) {
    console.log(error)
    toast.error(error.message);
  }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);
  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {orders.map((order, index) => (
          <div className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 item-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700" key={index}>
            <img className="w-12" src={orderpic} alt="order" />
            <div>
              <div>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} x {item.quantity}
                      </p>
                    );
                  } else {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} x {item.quantity},
                      </p>
                    );
                  }
                })}
              </div>
              <p className="mt-3 mb-2 font-medium">{order.address.firstName + " " + order.address.firstName}</p>
              <div>
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    " ," +
                    order.address.state +
                    " ," +
                    order.address.country +
                    " ," +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p className="text-sm sm:text-[15px]">Items:{order.items.length}</p>
              <p className="mt-3">Method:{order.paymentMethod}</p>
              <p>Payment:{order.payment?'Done':'Pending'}</p>
              
              <p>Date:{new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className="text-sm sm:text-15px">{currency}{order.amount}</p>
            <select value={order.status} onChange={(event)=>statusHandler(event,order._id)} className="p-2 font-semibold m-15">
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out For delivery">Out For delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
