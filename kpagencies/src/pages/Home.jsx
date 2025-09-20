import React from 'react'
 
import Banner from '../components/Banner'
import Categoriesgrid from '../components/Categoriesgrid'
import Reviews from '../components/Reviews'
import Bestseller from '../components/Bestseller'
import Customercontact from '../components/Customercontact'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Banner/>
      <Categoriesgrid/>
      
      <Reviews/>
      <Bestseller/>
      <Customercontact/>
    </div>
  )
}

export default Home
