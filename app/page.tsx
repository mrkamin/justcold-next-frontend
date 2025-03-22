import About from "./components/About";
import HeroTitle from "./components/HeroTitle";
import Navbar from "./components/Navbar";
import NavUpperHead from "./components/NavUpperHead";
import OurServices from "./components/OurServices";
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
    </div>
  );
}
