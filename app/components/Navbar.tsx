import { SvgLogo } from '../svg'

const Navbar = () => {
  return (
    <div className="flex flex-col items-center w-full absolute z-20 top-[2rem] bg-[rgba(0,0,0,0.3)]">
      <nav className="w-full md:w-[90%] lg:w-[75%] flex justify-between items-center text-white">
        <SvgLogo />
        <div className="flex gap-5 items-center">
          <ul className="flex gap-3">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Gallery</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Get a Free Estimation
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
