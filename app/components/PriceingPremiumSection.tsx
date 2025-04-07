import {BiLike } from "react-icons/bi";
import { FaMedal } from "react-icons/fa6";
import { IoLeafOutline } from "react-icons/io5";
import { LuRefrigerator } from "react-icons/lu";
import { TbLicense } from "react-icons/tb";

const PricingPremiumSection = () => {
    return (
      <div className="w-full flex flex-col gap-5 items-center pb-10 mb-20">
        {/* Heading */}
        <div className="place-items-center flex flex-col gap-2">
      <h2 className="section-title place-items-center text-[#1f1f38] px-2">
      Affordable Pricing for Premium Cold Room Care
      </h2>
        <svg className="" height="10" viewBox="0 0 180 10">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#002F6C" />
              <stop offset="100%" stopColor="#24B8EB" />
            </linearGradient>
          </defs>
          <path d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5 T120,5 T140,5 T160,5 T180,5 T200,5" stroke="url(#gradient)" strokeWidth="2" fill="none" />
        </svg>
      </div>
        {/* Subheading */}
        <p className="text-center text-gray-600 w-full md:w-[80%] lg:w-[50%]">
          Why choose inexperience? Trust JustCold Referigeration & Maintainence will
          competitively satisfy all of your Referigeration needs.
        </p>
  
        {/* Container for the line and items */}
        <div className="relative w-[80%] flex items-center justify-between">
          {/* Horizontal line (behind icons) */}
          <div className="flex flex-col gap-20">
          <svg width={`100%`} height="100" viewBox="0 0 2000 100" className="">
  <defs>
    <linearGradient id="gradientArc" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1f1f38" />
      <stop offset="50%" stop-color="#4db5ff" />
      <stop offset="100%" stop-color="#1f1f38" />
    </linearGradient>
  </defs>
  <path
    d="M 0 0 A 1100 130 0 0 0 2000 0"
    fill="none"
    stroke="url(#gradientArc)"
    stroke-width="5"
    className="bg-green-900"
  />
          </svg>
          <svg width={`100%`} height="100" viewBox="0 0 2000 100" className="lg:hidden">
  <defs>
    <linearGradient id="gradientArc" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1f1f38" />
      <stop offset="50%" stop-color="#4db5ff" />
      <stop offset="100%" stop-color="#1f1f38" />
    </linearGradient>
  </defs>
  <path
    d="M 0 0 A 1100 130 0 0 0 2000 0"
    fill="none"
    stroke="url(#gradientArc)"
    stroke-width="5"
    className="bg-green-900"
  />
          </svg>
          <svg width={`100%`} height="100" viewBox="0 0 2000 100" className="md:hidden">
  <defs>
    <linearGradient id="gradientArc" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1f1f38" />
      <stop offset="50%" stop-color="#4db5ff" />
      <stop offset="100%" stop-color="#1f1f38" />
    </linearGradient>
  </defs>
  <path
    d="M 0 0 A 1100 130 0 0 0 2000 0"
    fill="none"
    stroke="url(#gradientArc)"
    stroke-width="5"
    className="bg-green-900"
  />
          </svg>
          </div>
          {/* Item 1 */}
          <div className="absolute top-[80%] left-[0%] md:top-[8%] md:left-[20%] lg:top-[0%] lg:left-[0%] flex 
                          flex-col items-center text-center 
                          w-1/5 px-2">
            {/* Icon wrapper */}
            <div className=" z-10 w-16 h-16 bg-white 
                             text-[#1f1f60] flex items-center  
                             justify-center border-2 rounded-full mb-3
                             "
            >
              <LuRefrigerator className="h-16 w-10" />
            </div>
            {/* Title */}
            <h3 className="font-semibold text-md md:text-lg text-gray-800">
              Advance Technology &amp; Process
            </h3>
          </div>
  
          {/* Item 2 */}
          <div className="absolute top-[40%] left-[70%] md:top-[71%] md:left-[10%] lg:top-[24%] lg:left-[20%] flex flex-col items-center text-center w-1/5 px-2">
            <div className="z-10 w-16 h-16 bg-white 
                             text-[#1e7bbd] flex items-center  
                             justify-center border-2 rounded-full mb-3
                             ">
              {/* Your icon */}
              <BiLike className="w-10 h-18" />
            </div>
            <h3 className="font-semibold text-md md:text-lg text-gray-800">
              100% Customer Satisfaction Guarantee
            </h3>
          </div>
  
          {/* Item 3 */}
          <div className=" absolute top-[5%] left-[40%] md:top-[75%] md:left-[40%] lg:top-[30%] lg:left-[40%] flex flex-col items-center text-center w-1/5 px-2">
            <div className="z-10 w-16 h-16 bg-white 
                             text-[#4db5ff] flex items-center  
                             justify-center border-2 rounded-full mb-3
                             ">
              {/* Your icon */}
              <FaMedal className="h-16 w-10" />
            </div>
            <h3 className="font-semibold text-md md:text-lg text-gray-800">
              Over 10 Years of Experience
            </h3>
          </div>
  
          {/* Item 4 */}
          <div className="absolute top-[40%] left-[10%] md:top-[71%] md:left-[70%] lg:top-[24%] lg:left-[60%] flex flex-col items-center text-center w-1/5 px-2">
            <div className="z-10 w-16 h-16 bg-white 
                             text-[#1e7bbd] flex items-center  
                             justify-center border-2 rounded-full mb-3
                             ">
              {/* Your icon */}
              <IoLeafOutline className="h-16 w-10"/>
            </div>
            <h3 className="font-semibold text-md md:text-lg text-gray-800">
              Safe &amp; Eco-Friendly Cleaning Methods
            </h3>
          </div>
  
          {/* Item 5 */}
          <div className="absolute top-[80%] left-[80%] md:top-[8%] md:left-[60%] left-[] lg:top-[0%] lg:left-[80%] flex flex-col items-center text-center w-1/5 px-2">
            <div className="z-10 w-16 h-16 bg-white 
                             text-[#1f1f60] flex items-center  
                             justify-center border-2 rounded-full mb-3
                             ">
              {/* Your icon */}
              <TbLicense className="h-16 w-10"/>
            </div>
            <h3 className="font-semibold text-md md:text-lg text-gray-800">
              Licensed &amp; Insured Professionals
            </h3>
          </div>
        </div>
      </div>
    );
  }
  
  export default PricingPremiumSection;