import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

import {useNavigate} from "react-router-dom";

export const ShopContext= createContext();

const ShopContextProvider = (props)=> {


    const currency ='₹';
    const delivery_fee='10';
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const[cartItems,setCartItems]=useState({});
    const [product,setProduct]=useState([]);
    const [token,setToken]=useState('');
    const navigate= useNavigate();

    const addToCart= async(itemId)=>{
      let cartData= structuredClone(cartItems);
    if(cartData[itemId]){
      cartData[itemId] +=1;
      toast.success("Product Added")
    }
    else{
      cartData[itemId]={};
      cartData[itemId] =1;
      toast.success("Product Added")

    }
  setCartItems(cartData);
  

  if(token){
    try {
      console.log("calling:", `${backendUrl}/api/cart/add`);
      await axios.post(backendUrl+ '/api/cart/add',{itemId},{headers:{Authorization:`Bearer ${token}`}})
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
}
   
  const getCartCount=()=>{
    let totalCount=0;
     for(const item in cartItems){
       totalCount+=cartItems[item];}
      return totalCount;
  }
   
  const updateQuantity= async(itemId,quantity)=>{
    let cartData= structuredClone(cartItems);
    cartData[itemId]=quantity;
    setCartItems(cartData);
  
    if(token){
    try {
      await axios.post(backendUrl+ '/api/cart/update',{itemId,quantity},{headers:{Authorization:`Bearer ${token}`}})
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  }


   const getCartAmount=()=>{
    let totalAmount=0;
    
    for(const items in cartItems){
      let itemInfo=product.find((product)=>product._id===items);
      if(itemInfo){
        totalAmount+=itemInfo.price * cartItems[items];
      }
    } return totalAmount;
   }

   
   const getProductsData=async()=>{
    try {
      const response = await axios.get(backendUrl+'/api/product/list');
      if(response.data.success){
        setProduct(response.data.products)
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      
     console.log(error)
     toast.error(error.message)
    }
   }

   const getUserCart = async (token)=>{
    try {
      const response = await axios.post(backendUrl+'/api/cart/get',{},{headers:{Authorization:`Bearer ${token}`}})
      if(response.data.success){
        setCartItems(response.data.cartData)
      }
    } catch (error) {
      console.log(error)
     toast.error(error.message)
    }
   }
   useEffect(()=>{getProductsData()},[]
  )
  
   useEffect(()=>{
    if (!token&&localStorage.getItem('token')){
      setToken(localStorage.getItem('token'))
      getUserCart(localStorage.getItem('token'))
      }
   },[])

    const value={product,
          currency, delivery_fee,cartItems,addToCart,getCartCount, updateQuantity,getCartAmount,navigate,backendUrl,token,setToken,setCartItems
    }

    return(
  <ShopContext.Provider value={value}>
    {props.children}
  </ShopContext.Provider>

    )
}

export default ShopContextProvider;

