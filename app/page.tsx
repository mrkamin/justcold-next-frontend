import HeroTitle from "./components/HeroTitle";
import Navbar from "./components/Navbar";
import NavUpperHead from "./components/NavUpperHead";
import Video from "./components/Video";


export default function Home() {
  return (
    <div className="relative">
      <NavUpperHead />
      <Navbar />
      <Video />
      <HeroTitle />
    </div>
  );
}
