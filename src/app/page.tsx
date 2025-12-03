import React from 'react'
import HomeHero from './components/sections/home/HomeHero'
import Partners from './components/sections/home/Partners'
import Vision from './components/sections/home/Vision'
import StartSwitch from './components/sections/home/StartSwitch'
import Media from './components/sections/home/Media'
import Footer from './components/layout/Footer'

const page = () => {
  return (
    <div className='bg-[#F7F4F1]'>
      <HomeHero />
      <Partners />
      <Vision />
      <StartSwitch />
      <Media />
      <Footer />
    </div>
  )
}

export default page
