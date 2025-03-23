import About from "./components/About";
import GetReady from "./components/GetReady";
import HeroTitle from "./components/HeroTitle";
import Navbar from "./components/Navbar";
import NavUpperHead from "./components/NavUpperHead";
import OurServices from "./components/OurServices";
import Testemonials from "./components/Testemonials";
import Video from "./components/Video";


export default function Home() {
  return (
    <div className="relative">
      <NavUpperHead />
      <Navbar />
      <Video />
      <HeroTitle />
      <About />
      <OurServices />
      <GetReady />
      <Testemonials />
    </div>
  );
}
