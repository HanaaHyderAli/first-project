import jwt from 'jsonwebtoken'

const adminAuth=async(req,res,next)=>{
  try{
    const authHeader=req.headers["authorization"];
    console.log("hello")
    if(!authHeader){
        return res.json({success:false,message:"not authorized login"})
    }
    const token=authHeader.split(" ")[1];
    if(!token){
       return res.json({success:false,message:"token missing"})
    }
    
    const token_decode =jwt.verify(token,process.env.JWT_SECRET);

    if(token_decode!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
        return res.json({success:false,message:"Not Authorised"})
    }
next()
  }
  catch(error){
    console.log(error);
    res.json({success:false,message:error.message})
  }

}

export default adminAuth