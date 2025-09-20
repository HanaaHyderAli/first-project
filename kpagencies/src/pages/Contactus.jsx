import React from 'react'

const Contactus = () => {
  const OnSubmitHandler= async(e)=>{
    e.preventDefault();
  }
  return (
    <form onSubmit={OnSubmitHandler} className='flex items-center justify-center lg:px-20 px-4'>
       <div className='flex flex-col gap-2 pb-32'>
          <h2 className='text-2xl text-amber-800 my-4 playwrite-hu text-center'> Contact Us</h2>
          <div className='flex flex-row gap-2'>
            <input type='text' placeholder='First name' className='p-2 border border-gray-400 lg:w-54'/> 
             <input type='text' placeholder='Last name' className='p-2 border border-gray-400 w-54'/>
          </div>
          <input type='email' placeholder='Email address' className='p-2 border border-gray-400'/>
          <input type='phone' placeholder='Phone' className='p-2 border border-gray-400 '/>
          <input type='text' placeholder='Nature of Business' className='p-2 border border-gray-400 '/>
          <input type='text' placeholder='Subject' className='p-2 border border-gray-400 '/>
          <textarea  rows={10} placeholder='Your Message' className='p-2 border border-gray-400 '/>
          
          <button className='bg-black p-2 text-white hover:bg-gray-400'>SEND</button>
          
      </div>

    </form>
  )
}

export default Contactus
