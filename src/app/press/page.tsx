import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PressHero from '../components/sections/press/PressHero'
import Podcast from '../components/sections/press/Podcast'

const page = () => {
  return (
    <div className='bg-[#F7F4F1]'>
      <Header />
      <PressHero />
      <Podcast />
      <Footer />
    </div>
  )
}

export default page
