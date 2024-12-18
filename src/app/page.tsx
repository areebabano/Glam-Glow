import React from 'react'
import HeroSection from '../components/HeroSection'
import NewProducts from '../components/NewArrival'
import FeedbackSection from '../components/FeedbackSection' 
import Footer from '../components/Footer'
import ProductDetailsPage from './product/[id]/page'
import SpecialOfferBanner from '../components/SpecialOfferBanner'
// import { cartProvider } from './context/CartContext'

const Home = () => {
  return (
    <main>
      <div >
      <HeroSection />
      <SpecialOfferBanner/>
      </div>
      <div className='products-container mx-auto max-w-[1200px] px-4 md:px-6 lg:px-4 mb-0 flex flex-wrap justify-center sm:justify-start font-serif'>
      <NewProducts />
      {/* <ProductDetailsPage/> */}
      </div>
      {/* Feedback section 
      <div className='py-12'>
        <FeedbackSection/>
      </div> */}
      {/* <div>
        <Footer/>
      </div> */}
    </main>
  )
}

export default Home

