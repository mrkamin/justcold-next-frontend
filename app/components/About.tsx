"use client"
import AOS from 'aos'
import Image from "next/image"
import { FaAngleDoubleRight } from "react-icons/fa"

import "aos/dist/aos.css";
import { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    AOS.init({
      duration:  800,
    })
  }, [])
  return (
    <div className="w-full" data-aos="fade-up">
    <div className="grid grid-cols-1 h-[100%] lg:grid-cols-2 w-full lg:w-[90%] gap-5 p-5"
    >
      <div className="h-[60vh] grid grid-cols-[5%_15%_15%_5%_10%_10%_3%_3%_14%_14%_3%_3%] 
      grid-rows-[2%_10%_10%_2%_19%_19%_2%_10%_8%_2%_14%_2%]">
  <div className="col-start-1 col-end-7 row-start-1 row-end-10 bg-green-900">
  <Image 
    src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742709911/WhatsApp_Image_2024-10-12_at_01.24.50_af9ef241_vjlgzi.jpg" 
    alt="AboutImage" 
    width={500} 
    height={100}
    className="h-[100%] w-full object-cover"
  />
  </div>
  <div className="col-start-8 col-end-12 row-start-2 row-end-4
                  bg-gradient-to-r from-[#001f3f] to-[#24b8eb] 
                  flex flex-col rounded-[0.5rem] place-items-center justify-center text-white">
    <h1 className="text-2xl font-bold">10 +</h1>
    <p>Work Experience</p>
  </div>
  <div className="col-start-2 col-end-4 row-start-11 
                  row-end-12 place-items-center w-full">
      <Image src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742710425/justcold-high-resolution-logo_w8hh6u.png" 
              alt="AboutPnglogo"
              width={500} 
    height={600}
    objectFit="cover"
    className="rounded-[0.5rem] h-[100%]" />
  </div>
  <div className="col-start-5 col-end-13 row-start-5 row-end-13 
                  border-t-[10px] border-l-[10px] rounded-[5px] border-white">
    <video
        className="inset-0 w-full h-[100%] object-cover"
        src="https://res.cloudinary.com/dagjuuf4v/video/upload/v1742707733/WhatsApp_Video_2024-10-12_at_01.25.00_0a522a28_crrcnf.mp4"
        controls
        autoPlay
        loop
        muted
      />
  </div>
     </div>
      <div className="flex flex-col gap-3 p-5">
        <h1 className="text-xl font-bold ">About Us</h1>
        <h3 className="font-bold">Professional expertise in Referigeration.</h3>
        <p className="text-gray-500">Here at JustCold Referigeration, we 
            believe in professionalism, and keeping 
            standards high, explaining everything 
            clearly ensuring confidence. we&apos;ll spend as 
            much time as necessary to successfully
            complete any job, leaving clients understanding
            things better, feeling better, at ease, and 
            happy with their decision to entrust JustCold
            Referigeration with one of their most valuable 
            assets. just some of our services:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="flex gap-3">
                <FaAngleDoubleRight />
                <h1>building Cold Room</h1>
            </div>
            <div className="flex gap-3">
                <FaAngleDoubleRight />
                <h1>building Cold Room</h1>
            </div>
            <div className="flex gap-3">
                <FaAngleDoubleRight />
                <h1>building Cold Room</h1>
            </div> 
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
