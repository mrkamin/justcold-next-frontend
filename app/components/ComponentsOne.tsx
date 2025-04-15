import About from './About'
import Footer from './Footer'
import GetReady from './GetReady'
import Navbar from './Navbar'
import NavUpperHead from './NavUpperHead'
import OurServices from './OurServices'
import PricingPremiumSection from './PriceingPremiumSection'
import Testemonials from './Testemonials'
import Video from './Video'


const ComponentsOne = () => {
  return (
    <>
      <NavUpperHead />
      <Navbar />
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
    </>
  )
}

export default ComponentsOne
