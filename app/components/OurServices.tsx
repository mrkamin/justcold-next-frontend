import AOS from 'aos'
import Image from "next/image"
import { Data } from "../Data"
import { BiArrowToRight } from "react-icons/bi"
import { useEffect } from "react";

import "aos/dist/aos.css";
import OurServiceVideoSec from './OurServiceVideoSec';

const OurServices = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  
  return (
    <div className="place-items-center 
                    bg-blue-100 py-10
                    px-2 relative 
                    ourservices-container" data-aos="fade-up">
      <div className="flex flex-col gap-5 w-full md:w-[90%] lg:w-[80%]
                      items-center">
        <div className="flex flex-col md:flex-row
                        gap-5 justify-between w-full">
            <div className="flex flex-col gap-2
                            place-items-center 
                            md:items-start text-[#1f1f38]">
              <h2 className="text-3xl w-fit font-bold relative inline-block h-12">
                Our Services
                  <svg
                    className="absolute bottom-0 left-0 w-full"
                    height="10"
                    viewBox="0 0 200 10"
                  >
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopColor="#002F6C" />  
                        <stop offset="100%" stopColor="#24B8EB" /> 
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5 T120,5 T140,5 T160,5 T180,5 T200,5"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
              </h2>
              <p className="text-center">Comperhensive Referigeration & Maintenance Services</p>
            </div>
              <button className="estimate-btn h-fit">
                REQUEST A FREE ESTIMATE
              </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Data.map((item) => (
            <div key={item.id} className="flex flex-col 
                                          text-[#1f1f38] 
                                          gap-1 bg-white">
              <div className="w-full object-cover">
                <Image 
                  src={item.image} 
                  alt="AboutImage" 
                  width={250} 
                  height={50} 
                  className="object-cover w-full h-40"
                />
              </div>
              <div className="p-3 flex flex-col gap-2">
                <h1 className="text-lg font-bold ">{item.name}</h1>
                <p>{item.discriptions}</p>
                <div className="flex gap-3 items-center">
                  <button className="font-bold ">BOOK NOW</button>
                  <BiArrowToRight className='text-[#4db5ff] text-2xl'/>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2
                            place-items-center 
                            text-[#1f1f38]">
              <h2 className="text-3xl w-fit font-bold relative inline-block h-12">
                Watch us in Action
                  <svg
                    className="absolute bottom-0 left-0 w-full"
                    height="10"
                    viewBox="0 0 200 10"
                  >
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopColor="#002F6C" />  
                        <stop offset="100%" stopColor="#24B8EB" /> 
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5 T120,5 T140,5 T160,5 T180,5 T200,5"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
              </h2>
              <p className='text-center'>See how New Cold Room have been build our advanced techniques 
    make us different than others. Watch our team in action and experience the difference!
  </p>
              </div>
<div>
 
</div>
<OurServiceVideoSec />

        </div>
        <div className="flex flex-col md:flex-row
                        gap-5 justify-between w-full">
            <div className="flex flex-col gap-2
                            place-items-center 
                            md:items-start text-[#1f1f38]">
              <h2 className="text-center p-2 text-3xl w-fit font-bold relative inline-block">
                See the Difference- Before & After
                  <svg
                    className="absolute bottom-0 left-0 w-full"
                    height="10"
                    viewBox="0 0 200 10"
                  >
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopColor="#002F6C" />  
                        <stop offset="100%" stopColor="#24B8EB" /> 
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5 T120,5 T140,5 T160,5 T180,5 T200,5"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
              </h2>
              <p className="text-center">Let us Help you build your Cold Room</p>
            </div>
              <button className="estimate-btn h-fit">
                REQUEST A FREE ESTIMATE
              </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
          <div className="flex gap-2 p-2 w-full shadow-md bg-white">
          <div className="relative w-full h-40">
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726726/5_zwlia7.png"
          alt="ourserviceimg"
          fill // fills parent container
          objectFit="cover" // maintains aspect ratio while covering container
          className="rounded"
        />
      </div>
      <div className="relative w-full h-40">
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726725/6_pwaz1q.jpg"
          alt="ourserviceimg"
          fill
          objectFit="cover"
          className="rounded"
        />
      </div>  
          </div>
          <div className="flex gap-2 p-2 w-full shadow-md bg-white">
          <div className="relative w-full h-40">
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726724/7_zbtimi.jpg"
          alt="ourserviceimg"
          fill // fills parent container
          objectFit="cover" // maintains aspect ratio while covering container
          className="rounded"
        />
      </div>
      <div className="relative w-full h-40">
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726725/8_tkgo9t.jpg"
          alt="ourserviceimg"
          fill
          objectFit="cover"
          className="rounded"
        />
      </div>  
          </div>
          <div className="flex gap-2 p-2 w-full shadow-md bg-white">
          <div className="relative w-full h-40">
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726724/2_zibvmn.jpg"
          alt="ourserviceimg"
          fill // fills parent container
          objectFit="cover" // maintains aspect ratio while covering container
          className="rounded"
        />
      </div>
      <div className="relative w-full h-40">
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726723/4_vbrd4v.avif"
          alt="ourserviceimg"
          fill
          objectFit="cover"
          className="rounded"
        />
      </div>  
          </div>
          <div className="flex gap-2 p-2 w-full shadow-md bg-white">
          <div className="relative w-full h-40">
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726724/3_f4o1ka.jpg"
          alt="ourserviceimg"
          fill // fills parent container
          objectFit="cover" // maintains aspect ratio while covering container
          className="rounded"
        />
      </div>
      <div className="relative w-full h-40">
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726620/WhatsApp_Image_2024-10-12_at_01.24.57_34f8328f_oygbpc.jpg"
          alt="ourserviceimg"
          fill
          objectFit="cover"
          className="rounded"
        />
      </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
