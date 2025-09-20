import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const Productitem = ({id,image,name,price}) => {
    const {currency}= useContext(ShopContext)
  return (
    <Link className='text-black cursor-pointer ' to={`/product/${id}`}>
        <div className='overflow-hidden '>
            <img className='hover:scale-110 transition ease-in-out w-[200px] h-[200px] items-center' src={image}/>
        </div>
          <p className='pt-3 pb-1 text-center'>{name}</p>
          <p className=' text-center'>{currency}{price}</p>
    </Link>
  )
}

export default Productitem

