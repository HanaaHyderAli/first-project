import React, { useContext, useState } from 'react'
import CartData from '../components/CartData'
import { assets, product } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const PlaceOrder = () => {
  const {navigate, backendUrl, token, cartItems,setCartItems,getCartAmount,delivery_fee,product} = useContext(ShopContext);
  const[method,setMethod]= useState('cod');
  const[formData,setFormData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  });

  const onChangeHandler=(e)=>{
      const name = e.target.name
      const value=e.target.value

      setFormData(data=>({...data,[name]:value}))
  }


  const initPay=(order)=>{
     const options={
      key:import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount:order.amount,
      currency:order.currency,
      name:'Order Payment',
      description:'Order Payment',
      order_id:order.id,
      receipt:order.receipt,
      handler:async(response)=>{
        try {
          const {data}= await axios.post(backendUrl+'/api/order.verifyRazorpay',response,{headers:{Authorization:`Bearer ${token}`}})
          if(data.success){
            navigate('/orders')
            setCartItems({})
          }
        } catch (error) {
          console.log(error)
          toast.error(error)
        }
      }
     }
     const rzp= new window.Razorpay(options)
     rzp.open()
  }
  
  const onSubmitHandler=async(e)=>{
    e.preventDefault()
  try {
    let orderItems=[]

    for (const productId in cartItems){
      if(cartItems[productId]>0){
        const itemInfo=structuredClone(product.find(product=>product._id===productId));
        if(itemInfo){
          itemInfo.quantity=cartItems[productId];
          orderItems.push(itemInfo);
        }
      }
    }

    let orderData={
      address:formData,
      items:orderItems,
      amount:getCartAmount()+delivery_fee
    }
     console.log("orderData",orderData)

    switch(method){
      case 'cod':
        const response= await axios.post(backendUrl+'/api/order/place',orderData,{headers:{Authorization:`Bearer ${token}`}})
        
        if(response.data.success){
          setCartItems({})
          navigate('/orders')
        }else{
          toast.error(response.data.message)
        }
        break;
      

      case 'stripe':
       const responseStripe= await axios.post(backendUrl+'/api/order/stripe',orderData,{headers:{Authorization:`Bearer ${token}`}})
      if(responseStripe.data.success){
        const {session_url}=responseStripe.data
        window.location.replace(session_url)
      }else{
        toast.error(responseStripe.data.message)
      }
       break;
      


    case 'razorpay':

      const responseRazorpay= await axios.post(backendUrl+'/api/order/razorpay',orderData,{headers:{Authorization:`Bearer ${token}`}})
       if(responseRazorpay.data.success){
        initPay(responseRazorpay.data.order)
       }

    break;



      default:
        break;

    }

  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }

  }
  
  
  return (
    <form  onSubmit={onSubmitHandler} className="flex lg:flex-row flex-col lg:px-20 px-4 justify-between">
      
      <div className='flex flex-col gap-2 pb-32'>
          <h2 className='text-2xl text-amber-800 my-4 playwrite-hu'> Delivery Information</h2>
          <div className='flex flex-row gap-2'>
            <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} type='text' placeholder='First name' className='p-2 border border-gray-400 w-54'/> 
             <input required onChange={onChangeHandler} name='lastName' value={formData.lastName}  type='text' placeholder='Last name' className='p-2 border border-gray-400 w-54'/>
          </div>
          <input required onChange={onChangeHandler} name='email' value={formData.email}  type='email' placeholder='Email address' className='p-2 border border-gray-400'/>
          <input required onChange={onChangeHandler} name='street' value={formData.street}  type='text' placeholder='Street' className='p-2 border border-gray-400 '/>
          <div className='flex flex-row gap-2'>
            <input required onChange={onChangeHandler} name='city' value={formData.city}  type='text' placeholder='City' className='p-2 border border-gray-400 w-54'/> 
             <input required onChange={onChangeHandler} name='state' value={formData.state}  type='text' placeholder='State' className='p-2 border border-gray-400 w-54'/>
          </div>
          <div className='flex flex-row gap-2'>
            <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode}  type='number' placeholder='Zip code' className='p-2 border border-gray-400 w-54'/> 
             <input required onChange={onChangeHandler} name='country' value={formData.country}  type='text' placeholder='Country' className='p-2 border border-gray-400 w-54'/>
          </div>
          <input required onChange={onChangeHandler} name='phone' value={formData.phone}  type='phone' placeholder='Phone' className='p-2 border border-gray-400 '/>
      </div>

      <div>
        <CartData/>
        <h2 className='text-2xl text-amber-800 mt-10 mb-4 playwrite-hu'> Payment Method</h2>
        
        <div className='flex flex-row gap-2'>
          <div onClick={()=>setMethod('stripe')} className={`border  px-4 cursor-pointer flex flex-row items-center gap-2 ${(method==='stripe')?"border-black":"border-gray-300"}`}>
           <div className={`h-3 w-3  rounded-full ${(method==='stripe')?"bg-green-500":"bg-gray-200"}`}></div>
           <img src={assets.stripe} className='w-[80px] h-[50px]'/>
          </div>
          
          
          <div  onClick={()=>setMethod('razorpay')} className={`border  px-4 cursor-pointer flex flex-row items-center gap-2 ${(method==='razorpay')?"border-black":"border-gray-300"}`}>
           <div className={`h-3 w-3 ${(method==='razorpay')?"bg-green-500":"bg-gray-200"} rounded-full`}></div>
           <img src={assets.razorpay} className='w-[100px] h-[40px]'/>
          </div>
          
          <div onClick={()=>setMethod('cod')} className={`border  px-4 cursor-pointer flex flex-row items-center gap-2 ${(method==='cod')?"border-black":"border-gray-300"}`}>
           <div className={`h-3 w-3 ${(method==='cod')?"bg-green-500":"bg-gray-200"} rounded-full`}></div>
           <div className=' text-xl'> Cash on Delivery</div>
          </div>
        </div>

        <div className="m-7"><button type='submit'  className=" text-white bg-black p-4 rounded-2xl hover:bg-gray-400">PLACE ORDER</button></div>
      </div>
        
    </form>
  )
}

export default PlaceOrder
