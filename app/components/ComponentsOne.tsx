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
        <GetReady />
          <Testemonials />
          <PricingPremiumSection />
           <Footer />
    </>
  )
}

export default ComponentsOne
