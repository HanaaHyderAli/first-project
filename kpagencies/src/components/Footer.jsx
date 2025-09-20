import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
     <div className="bg-black p-2 footer">
        <div className="relative mx-auto lg:px-20 px-4 pt-28">
            <div className="flex flex-row justify-between">
                <div className="footlogo"><img src={assets.logo} className="h-[80px]"/></div>

                <div className="flex flex-col items-start">
                 <h4 className="text-orange-100 pb-9 underline underline-offset-8 ">General Links</h4>
                 <Link to='/'><p className="text-orange-100">HOME</p></Link>
                 <Link to='/products'><p className="text-orange-100">PRODUCTS</p></Link>
                 <Link to='/aboutus'><p className="text-orange-100">ABOUT US</p></Link>
                 <Link to='/careers'><p className="text-orange-100">CAREERS</p></Link>
                

                </div>
              
                <div className="flex flex-col items-start">
                    <h4 className="text-orange-100 pb-9 underline underline-offset-8">Terms</h4>
                 <a className="text-orange-100 " href="#">Terms and Conditions</a>
                 <a className="text-orange-100 " href="#">Privacy Policy</a>
                 


                </div>
                <div className="md:flex flex-col items-start w-[15%] hidden">
                 <h4 className="text-orange-100 pb-9 underline underline-offset-8">Get in Touch with us</h4>
                 <p className="text-orange-100" id="address">KP Agencies food trading, Idiyangara P.O Box 673001, Calicut, Kerala, India</p>

                </div>
            </div>
            
            <div className="md:hidden block pt-32 w-[30%]">
                <h4 className="text-orange-100 pb-9 underline underline-offset-8">Get in Touch with us</h4>
                <p className="text-orange-100" id="address">KP Agencies food trading, Idiyangara P.O Box 673001, Calicut, Kerala, India</p>

               </div>
            
            <div className="text-orange-100 pt-64">&#169; 2025 www.kpagencies.com.All rights reserved</div>
            
        </div>
    </div>
    </div>
  )
}

export default Footer
