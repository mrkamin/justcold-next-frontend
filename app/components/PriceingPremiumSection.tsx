import Image from "next/image";
import { useEffect, useState } from "react";
import {BiLike } from "react-icons/bi";
import { FaMedal } from "react-icons/fa6";
import { IoLeafOutline } from "react-icons/io5";
import { LuRefrigerator } from "react-icons/lu";
import { TbLicense } from "react-icons/tb";

const smPositions = [
  { top: 270, left: 25 },
  { top: 160, left: 35 },
  { top: 50, left: 50 },
  { top: 160, left: 65 },
  { top: 270, left: 75 },
];

const mdPositions = [
  { top: 220, left: 15 },
  { top: 50, left: 30 },
  { top: 240, left: 50 },
  { top: 50, left: 70 },
  { top: 220, left: 85 },
];

const lgPositions = [
  { top: 45, left: 10 },
  { top: 80, left: 30 },
  { top: 90, left: 50 },
  { top: 80, left: 70 },
  { top: 45, left: 90 },
];



const items = [
  {
    idx:1,
    icon: <LuRefrigerator className="h-16 w-10" />,
    title: "Advance Technology & Process",
    color: "#1f1f60", // Customize color as needed
  },
  {
    idx: 2,
    icon: <BiLike className="w-10 h-18" />,
    title: "100% Customer Satisfaction Guarantee",
    color: "#1e7bbd", // Customize color as needed
  },
  {
    idx: 3,
    icon: <FaMedal className="h-16 w-10" />,
    title: "Over 10 Years of Experience",
    color: "#4db5ff", // Customize color as needed
  },
  {
    idx: 4,
    icon: <IoLeafOutline className="h-16 w-10" />,
    title: "Safe & Eco-Friendly Cleaning Methods",
    color: "#1e7bbd", // Customize color as needed
  },
  {
    idx:5,
    icon: <TbLicense className="h-16 w-10" />,
    title: "Licensed & Insured Professionals",
    color: "#1f1f60", // Customize color as needed
  },
];


const PricingPremiumSection = () => {
  const [positions, setPositions] = useState(lgPositions);

  useEffect(() => {
    const updatPositions = () => {
      const width = window.innerWidth;
      if (width <768) {
        setPositions(smPositions);
      }else if (width < 992) {
        setPositions(mdPositions)
      }else{
        setPositions(lgPositions)
      }
    };
    if (typeof window !== "undefined") {
      updatPositions();
      window.addEventListener("resize", updatPositions);
    }
    return () => window.removeEventListener("resize", updatPositions);
    
  }, [])
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
        <div className="items-container relative w-[100%] md:w-[80%] h-[350px] lg:h-[100px] flex flex-col items-center">
  {/* SVG Line */}
  <div className="md:hidden w-[40%] h-[350px] ">
            <Image src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1744285656/curve.png" 
              alt="curve line" 
              width={4000} height={20}
              className="h-[30px]"/>
          </div>
  <div className="lg:hidden w-[80%] h-[350px] md:h-[200px]">
            <Image src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1744285656/curve.png" 
              alt="curve line" 
              width={4000} height={20}
              className="h-[30px] md:h-[50px]"/>
          </div>
          <div className="w-full h-[350px] md:h-[200px] lg:h-[100px]">
            <Image src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1744285656/curve.png" 
              alt="curve line" 
              width={4000} height={20}
              className="h-[30px] md:h-[50px] lg:h-[80px]"/>
          </div>
          {/* Icons Over Line - using grid or flex with justify-around */}
          
          
          {items.map(({ icon, title, color }, idx) => {
  const { top, left } = positions[idx]; // pull position for each icon

  return (
    <div
      key={idx}
      className="flex flex-col items-center text-center pointer-events-auto absolute w-[160px] h-[120px]"
      style={{
        top: `${top}px`,
        left: `${left}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="w-16 h-16 rounded-full bg-white border-2 flex items-center justify-center"
        style={{ color: color }}
      >
        {icon}
      </div>
      <h3 className="text-sm md:text-base font-semibold text-gray-800 mt-2">
        {title}
      </h3>
    </div>
  );
})}

  </div>
          </div>

    
    );
  }
  
  export default PricingPremiumSection;