import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState, setCurrentState]=useState('Login');
  const {token,setToken, navigate,backendUrl} =useContext(ShopContext)
  
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');



  const OnSubmitHandler= async(e)=>{
    e.preventDefault();
    try {

      console.log("hi")
      if(currentState==='Sign Up'){
        const response = await axios.post(backendUrl+'/api/user/register',{name,email,password})
        
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
          toast.success(response.data.message)
        }else{
          toast.error(response.data.message)
        }
      }else{
        const response = await axios.post(backendUrl+'/api/user/login',{email,password})
        
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
          toast.success(response.data.message)
        }else{
          toast.error(response.data.message)
        }
      }


      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])
  return (
    <form onSubmit={OnSubmitHandler}  className='flex flex-col items-center gap-2 mb-25'>
      <h2 className="text-3xl text-amber-800 my-7 playwrite-hu">{currentState}</h2>
      {currentState==='Login'?"":<input type='text'onChange={(e)=>setName(e.target.value)} value={name} placeholder='Name' className='border border-gray-500 p-2 lg:w-md w-sm'/>}
      
      <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Email' className='border border-gray-500 p-2 lg:w-md w-sm'/>
      <input type='password' onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Password' className='border border-gray-500 p-2 lg:w-md w-sm'/>
      <div className='flex flex-row lg:w-md w-sm justify-between'>
        {currentState==='Login'?<button className='cursor-pointer'>Forgot your password?</button>:""}
      {currentState==='Login'?<button  onClick={()=>setCurrentState('Sign Up')}  className='cursor-pointer'>Create Account</button>:<button onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login here</button>}
      </div>
      {currentState==='Login'?<button type='submit' className='bg-black text-white px-7 py-2 mt-5 rounded-3xl cursor-pointer hover:bg-gray-600 '>Log in</button>:<button type='submit' className='bg-black text-white px-7 py-2 mt-5 rounded-3xl cursor-pointer hover:bg-gray-600 '>Sign up</button>}
    </form>
  )
}

export default Login
