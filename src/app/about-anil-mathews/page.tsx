import React from 'react'
import AboutHero from '../components/sections/about/AboutHero'
import Idea from '../components/sections/about/Idea'
import Building from '../components/sections/about/Building'
import Principles from '../components/sections/about/Principles'
import OffTheClock from '../components/sections/about/OffTheClock'
import Media from '../components/sections/home/Media'
import Footer from '../components/layout/Footer'

const page = () => {
  return (
    <div className='bg-[#F7F4F1]'>
      <AboutHero />
      <Idea />
      <Building />
      <Principles />
      <OffTheClock />
      <Media />
      <Footer />
    </div>
  )
}

export default page
