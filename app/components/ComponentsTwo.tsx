import React from 'react'
import Video from './Video'
import About from './About'
import OurServices from './OurServices'
import GetReady from './GetReady'
import Testemonials from './Testemonials'
import PricingPremiumSection from './PriceingPremiumSection'
import Footer from './Footer'

const ComponentsTwo = () => {
  return (
    <div className='relative top-[-118]'>
        <Video />
        <About />
        <OurServices />
        <div className='relative top-60'>
          <GetReady />
          <Testemonials />
          <PricingPremiumSection />
        </div>
        <div className='relative top-30'>
        <Footer />
        </div>
    </div>
  )
}

export default ComponentsTwo
