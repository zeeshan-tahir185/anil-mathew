import React from 'react'
import VenturesHero from '../components/sections/ventures/VenturesHero'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import VentureStudio from '../components/sections/ventures/VentureStudio'
import PreviousVentures from '../components/sections/ventures/PreviousVentures'
import SelectedAcquisitions from '../components/sections/ventures/SelectedAcquisitions'
import SelectedInvestments from '../components/sections/ventures/SelectedInvestments'
import OperatingBelief from '../components/sections/ventures/OperatingBelief'

const page = () => {
  return (
    <div className='bg-[#F7F4F1]'>
      <Header />
      <VenturesHero />
      <VentureStudio />
      <PreviousVentures />
      <SelectedAcquisitions />
      <SelectedInvestments />
      <OperatingBelief />
      <Footer />
    </div>
  )
}

export default page
