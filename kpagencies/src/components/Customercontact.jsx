import React from 'react'
import { Link } from 'react-router-dom'

const Customercontact = () => {
  return (
    <div className="relative mx-auto lg:px-20 px-4 text-center"> 
        <div className="pt-36 text-8xl font-extrabold">
            What are you waiting for?
          </div>
          <div className="text-8xl font-extrabold pt-11">
            Get in touch with us now.
          </div>
          <div className="my-32 flex flex-row justify-evenly items-center">
            <Link to="/contactus">
              <p className="bg-black md:p-6 p-4 text-yellow-50 shadow-gray-500 shadow-2xl hover:bg-gray-500 rounded-3xl">
                BECOME A SUPPLIER
              </p>
            </Link>
            <Link to="/contactus">
              <p className="bg-black md:p-6 p-4 text-yellow-50 shadow-gray-500 shadow-2xl hover:bg-gray-500 rounded-3xl">
                BECOME A CUSTOMER
              </p>
            </Link>
          </div>
    </div>
  )
}

export default Customercontact
