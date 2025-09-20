import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Productitem from './Productitem';

const RelatedProducts = ({category,subcategory}) => {
    const {product} = useContext(ShopContext);
    const [related,setRelated]=useState([])


    useEffect(()=>{
        if (product.length>0){
            let productsCopy= product.slice();
            productsCopy=productsCopy.filter((item)=>category===item.category);
            productsCopy=productsCopy.filter((item)=>subcategory===item.subcategory);
          setRelated(productsCopy.slice(0,5));
        }
    },[product]
    )
  return (
    <div className='mb-32'>
        <div className='text-4xl mt-36 mb-7'>Related Products</div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 space-y-8 space-x-8'>
            {related.map((item,index)=>(
                <Productitem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
            ))
            }
        </div>
      </div>
  )
}

export default RelatedProducts
