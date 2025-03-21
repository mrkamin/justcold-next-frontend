import Image from "next/image"
import { FaAngleDoubleRight } from "react-icons/fa"
import AboutImage from './assets/WhatsApp Image 2024-10-12 at 01.24.50_74210af3.jpg';
import AboutPngLogo from './assets/justcold-high-resolution-logo-transparent (1).png';

const About = () => {
  return (
    <div className="w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] gap-5 p-5"
    >
      <div className="grid grid-cols-[5%_15%_15%_5%_10%_10%_3%_3%_14%_14%_3%_3%] 
      grid-rows-[5%_10%_10%_2.5%_4.3%_10%_10%_10%_18%_3%_15%_2%]">
  <div className="col-start-1 col-end-7 row-start-1 row-end-10">
    <Image src={AboutImage} alt="AboutImage" 
    objectFit="cover"
    className="rounded-[0.5rem]"
    style={{ 
            width: "100%", 
            height: "100%", 
            
          }}/>
  </div>
  <div className="col-start-8 col-end-11 row-start-2 row-end-4
                  bg-gradient-to-r from-blue-800 to-[#24b8eb] 
                  flex flex-col rounded-[0.5rem] place-items-center justify-center text-white">
    <h1 className="text-2xl font-bold">10 +</h1>
    <p>Work Experience</p>
  </div>
  <div className="col-start-2 col-end-4 row-start-11 
                  row-end-12 place-items-center w-full">
      <Image src={AboutPngLogo} alt="AboutPnglogo" />
  </div>
  <div className="col-start-5 col-end-12 row-start-5 row-end-13 
                  border-t-[20px] border-l-[20px] rounded-[10px] border-white">
        <iframe 
          src="https://drive.google.com/file/d/17lUTtdIINr8VgYtJxwwMhAeTthUB7R51/preview" 
          style={{ 
            width: "100%", 
            height: "100%", 
            
          }}
          title="Embedded Video"
          allow="autoplay"
          allowFullScreen
          frameBorder="0"
        ></iframe>
  </div>
</div>
      <div className="flex flex-col gap-5">
        <h1>About Us</h1>
        <h3>Professional expertise in Referigeration.</h3>
        <p>Here at JustCold Referigeration, we 
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
