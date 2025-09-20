
import productModel from '../models/productModel.js';
import cloudinary from '../config/cloudinary.js'



const addProduct =async(req,res)=>{

try{
  const {name,description, price, category,subCategory,size,bestseller,ingredients}=req.body
   if(!req.file){
    return res.status(400).json({message:'no image uploaded'});
   }
   

   

        const result= await cloudinary.uploader.upload(req.file.path,{resource_type:'image'});
        const imageUrl=result.secure_url;
    
   

   const productData={
    name,description,ingredients,category,subCategory,price:Number(price),size,
    bestseller:bestseller==="true"?true:false,
    image:imageUrl,date:Date.now()
   }

   const product =new productModel(productData);
   await product.save()

   res.json({ success: true, message:"product added"})
}
catch(error){
 console.log(error);
    res.json({success:false,message:error.message})
}
}

const listProducts =async(req,res)=>{

try{
    const products =await productModel.find({});
    res.json({success:true,products})
}
 catch(error){
 console.log(error);
    res.json({success:false,message:error.message})
}   
}


const removeProduct =async(req,res)=>{

try{
    await productModel.findByIdAndDelete(req.body.id)
     res.json({success:true,message:"product removed"})
}
 catch(error){
 console.log(error);
    res.json({success:false,message:error.message})
}
    
}


const singleProduct =async(req,res)=>{
try{

    const {productId}=req.body
    const product= await productModel.findById(productId)
      res.json({success:true,product})
}
 catch(error){
 console.log(error);
    res.json({success:false,message:error.message})
}

    
}

export {listProducts,addProduct,removeProduct,singleProduct}