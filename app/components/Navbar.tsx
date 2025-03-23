"use client"
import { useState } from 'react';
import { SvgLogo } from '../svg'
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-full absolute z-40 top-[2re] bg-transparent p-4">
      <nav className="w-full lg:w-[80%] flex justify-between items-center text-white"
      >
        <div className='z-20'>
          <SvgLogo />
        </div>
        <div>
        <button className='md:hidden text-white z-50 relative'
                onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <div className={`fixed md:static pt-25 pb-5 px-2 md:px-0 md:pb-0 md:pt-0 top-0 left-0 w-full 
                         bg-[rgba(0,0,0,0.9)] md:bg-transparent transition-transform duration-300 ease-in-out 
                         ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                         md:flex md:gap-5 md:items-center`}
        >
          <ul className="flex flex-col gap-5 p-5 md:p-0 md:flex-row md:gap-2 lg:gap-4">
            <li className='hover:text-gray-300 cursor-pointer'>Home</li>
            <li className='hover:text-gray-300 cursor-pointer'>Services</li>
            <li className='hover:text-gray-300 cursor-pointer'>About Us</li>
            <li className='hover:text-gray-300 cursor-pointer'>Gallery</li>
            <li className='hover:text-gray-300 cursor-pointer'>Testimonials</li>
            <li className='hover:text-gray-300 cursor-pointer'>Contact</li>
          </ul>
          <button className="bg-[#24b8eb] text-white py-2 lg:p-2 rounded-lg hover:bg-blue-600
                             transition">
            Get a Free Estimation
          </button>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
