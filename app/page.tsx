import About from "./components/About";
import GetReady from "./components/GetReady";
import Navbar from "./components/Navbar";
import NavUpperHead from "./components/NavUpperHead";
import OurServices from "./components/OurServices";
import PricingPremiumSection from "./components/PriceingPremiumSection";
import Testemonials from "./components/Testemonials";
import Video from "./components/Video";
import Footer from "./components/Footer";


export default function Home() {

  return (
    <div className="">
      <NavUpperHead />
      <Navbar />
      <Video />
      <About />
      <OurServices />
      <GetReady />
      <Testemonials />
      <PricingPremiumSection />
      <Footer />
    </div>
  );
}
