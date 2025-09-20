import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {getCartCount, navigate,token,setToken,setCartItems} = useContext(ShopContext);
  const [isOpen,setIsOpen]=useState(false);
  
  const logout=()=>{
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <div className="flex justify-between items-center py-12 lg:px-20 px-4 relative">
      <Link to="/">
        <img src={assets.logo} width="80px" height="120px" />
      </Link>
      <ul className="headbar  flex-row gap-20 hidden  lg:flex">
        <NavLink to="/" className="group">
          <p className="navi text-black font-serif font  group-hover:text-amber-600">
            HOME
          </p>
          <hr className="h-1 w-10 bg-amber-400 mt-3 rounded-3xl border-0 hidden"></hr>
        </NavLink>

        <NavLink to="/aboutus" className="group">
          <p className="navi text-black font-serif font  group-hover:text-amber-600">
            ABOUT US
          </p>
          <hr className="h-1 w-10 bg-amber-400 mt-3 rounded-3xl border-0 hidden"></hr>
        </NavLink>

        <NavLink to="/products" className="group">
          <p className="navi text-black font-serif font  group-hover:text-amber-600">
            PRODUCTS
          </p>
          <hr className="h-1 w-10 bg-amber-400 mt-3 rounded-3xl border-0 hidden"></hr>
        </NavLink>

        <NavLink to="/careers" className="group">
          <p className="navi text-black font-serif font  group-hover:text-amber-600">
            CAREERS
          </p>
          <hr className="h-1 w-10 bg-amber-400 mt-3 rounded-3xl border-0 hidden"></hr>
        </NavLink>

        <NavLink to="/contactus" className="group">
          <p className="navi text-black font-serif font  group-hover:text-amber-600">
            CONTACT US
          </p>
          <hr className="h-1 w-10 bg-amber-400 mt-3 rounded-3xl border-0 hidden"></hr>
        </NavLink>
      </ul>



      <div className="flex flex-row gap-9 relative">
        <div onClick={()=> setIsOpen(!isOpen)} className="group cursor-pointer relative ">
          <img onClick={()=>token? null: navigate('/login')} src={assets.user} width="25px" /></div>
          {isOpen && token ? 
            <div className=" absolute top-6 z-50 dropdown-menu  pt-2">
            <div className="flex flex-col p-2 gap-2 w-24 border-2  border-slate-100 bg-amber-50">
              <Link to="/login"> <p className="fw  hover:text-amber-600 ">My Profile</p></Link>
              <Link to="/orders"><p className="fw  hover:text-amber-600">Orders</p></Link>
              <p onClick={logout} className="fw  hover:text-amber-600"> Logout</p>
            </div>
          </div>:''
          }
          
        
        <Link to="/mycart" className="relative">
          <img src={assets.cart} width="30px" />
          <p className="absolute  right-[-5px] bottom-[-5px] text-[13px] text-white px-1
         text-center bg-amber-950 rounded-full">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu}
          width="20px"
          className="lg:hidden block cursor-pointer"
        />
      </div>

      <div
        className={`fixed top-0 right-0 bottom-0  h-full z-50 transition-all bg-amber-50 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex items-center cursor-pointer gap-1">
            <img
              onClick={() => setVisible(false)}
              src={assets.left}
              width="20px"
            />
            <p className="text-slate-500 font-extrabold">Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-slate-200 text-sm"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-slate-200"
            to="/aboutus"
          >
            ABOUT US
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-slate-200"
            to="/products"
          >
            PRODUCTS{" "}
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-slate-200"
            to="/careers"
          >
            CAREERS{" "}
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-slate-200"
            to="/contactus"
          >
            CONTACT US{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
