import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PressHero from '../components/sections/press/PressHero'
import Podcast from '../components/sections/press/Podcast'
import ArticlesAndProfiles from '../components/sections/press/ArticlesAndProfiles'
import OfficialCitations from '../components/sections/press/OfficialCitations'
import Media from '../components/sections/home/Media'

const page = () => {
  return (
    <div className='bg-[#F7F4F1]'>
      <Header />
      <PressHero />
      <Podcast />
      <ArticlesAndProfiles />
      <OfficialCitations />
      <Media />
      <Footer />
    </div>
  )
}

export default page
