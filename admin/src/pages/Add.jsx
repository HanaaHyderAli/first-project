import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import axios from 'axios'
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({token}) => {

  const [image,setImage]=useState(false);
  const [name,setName]=useState("");
  const [description,setDescription]=useState("");
  const [ingredients,setIngredients]=useState("");
  const [price,setPrice]=useState("");
  const [category,setCategory]=useState("Fruitomans");
  const [subCategory,setSubCategory]=useState("Jams");
  const [size,setSize]=useState("");
  const [bestseller,setBestseller]=useState(false);



  const onSubmitHandler=async (e) =>{
  e.preventDefault();
  try{
    const formData= new FormData()
    formData.append("name",name)
    formData.append("description",description)
    formData.append("ingredients",ingredients)
    formData.append("price",price)
    formData.append("category",category)
    formData.append("subCategory",subCategory)
    formData.append("bestseller",bestseller)
    formData.append("size",size)
     image && formData.append("image",image)

    const  response= await axios.post(backendUrl + "/api/product/add", formData,{headers:{token}})

    if(response.data.success){
      toast.success(response.data.message)
      setName('')
      setDescription('')
      setIngredients('')
      setImage(false)
      setPrice('')
      
    }
    else{toast.error(response.data.message)}
  }
  catch(error){
    console.log(error)
    toast.error(error.message)
  }
  }







  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Upload Image</p>

        <div className={`border ${image?"":"px-5 py-20"}`}>
          <label htmlFor="image">
            {!image? <IoCloudUploadOutline className="w-[200px]" />:<img className="w-[200px]" src={URL.createObjectURL(image)} />}
            
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden></input>
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
         onChange={(e)=>setName(e.target.value)}
         value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
        ></input>
      </div>

      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
        onChange={(e)=>setDescription(e.target.value)}
         value={description}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
        ></textarea>
      </div>

      <div className="w-full">
        <p className="mb-2">Product ingredients</p>
        <textarea
        onChange={(e)=>setIngredients(e.target.value)}
         value={ingredients}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
        ></textarea>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div >
          <p className="mb-2">Product category</p>
          <select onChange={(e)=>setCategory(e.target.value)}
         className="w-full px-3 py-2">
            <option value="Fruitomans">Fruitomans</option>
            <option value="MTR">MTR</option>
          </select>
        </div>

        <div >
          <p className="mb-2">Product subCategory</p>
          <select onChange={(e)=>setSubCategory(e.target.value)} className="w-full px-3 py-2">
            <option value="Spices">Spices And Masalas</option>
            <option value="Ready">Ready to eat Meals</option>
            <option value="Jams">Jams and fruit spreads</option>
            <option value="Pickles">Pickles and Condiments</option>
            <option value="Instant">Instant mixes and batter</option>
            <option value="Squashes">Squashes and syrup</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder="25" />
        </div>
      </div>
     
      <div className="w-full">
        <p className="mb-2">Product Size</p>
        <input
         onChange={(e)=>setSize(e.target.value)} value={size}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
        ></input>
      </div>

      <div className="flex gap-2 mt-2">
        <input onChange={(e)=>setBestseller(prev=>!prev)} checked={bestseller} type="checkbox" id="bestseller"/>
        <label className="cursor-pointer" htmlFor="bestseller">Add to bestseller</label>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">ADD</button>
    </form>
  );
};

export default Add;
