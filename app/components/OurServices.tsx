import Image from "next/image"
import { Data } from "../Data"
import { BiArrowToRight } from "react-icons/bi"
import OurService from "../../public/assets/WhatsApp Image 2024-10-12 at 01.24.50_74210af3.jpg";

const OurServices = () => {
  return (
    <div className="place-items-center bg-blue-100 ">
      <div className="flex flex-col gap-5 w-full md:w-[90%] lg:w-[80%]
                      items-center">
        <div className="flex gap-5 justify-between w-full">
            <div className="flex flex-col gap-2">
             <div className="">
              <h2 className="text-3xl font-bold relative inline-block h-12">
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
             </div>
             <p>Comperhensive Referigeration & Maintenance Services</p>
            </div>
            <div className="btn">
              <button className="bg-[#24b8eb] text-white px-4 py-2 rounded-lg 
                                 hover:bg-blue-600 transition"
              >
                REQUEST A FREE ESTIMATE
              </button>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Data.map((item) => (
            <div key={item.id} className="flex flex-col gap-1 bg-white">
              <div className="w-full">
                <Image 
                  src={OurService} 
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
                  <BiArrowToRight />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col items-center w-full">
  <h2 className="text-3xl font-bold relative inline-block h-12">
    Watch Us in Action
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
</div>
<div>
  <p>See how New Cold Room have been build our advanced techniques 
    make us different than others. Watch our team in action and experience the difference!
  </p>
</div>
<div className="">
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
        <div className="flex gap-5 justify-between w-full">
          <div className="flex flex-col gap-2">
            <div className="">
              <h2 className="text-3xl font-bold relative inline-block h-12">
                See the Difference - Before & After
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
            </div>
            <p>Let us help you build your Cold Room</p>
          </div>
          <div>
            <button className="bg-[#24b8eb] text-white px-4 py-2 rounded-lg 
                               hover:bg-blue-600 transition"
            >
              REQUEST A FREE ESTIMATE
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
          <div className="flex gap-2 p-2 w-full shadow-md bg-white">
            <Image src={OurService} alt="ourserviceimg" className="w-full" width={250} height={40} />
            <Image src={OurService} alt="ourserviceimg" className="w-full" width={250} height={40} />
          </div>
          <div className="flex gap-2 p-2 w-full shadow-md bg-white">
            <Image src={OurService} alt="ourserviceimg" className="w-full" width={250} height={40} />
            <Image src={OurService} alt="ourserviceimg" className="w-full" width={250} height={40} />
          </div>
          <div className="flex gap-2 p-2 w-full shadow-md bg-white">
            <Image src={OurService} alt="ourserviceimg" className="w-full" width={250} height={40} />
            <Image src={OurService} alt="ourserviceimg" className="w-full" width={250} height={40} />
          </div>
          <div className="flex gap-2 p-2 w-full shadow-md bg-white">
            <Image src={OurService} alt="ourserviceimg" className="w-full" width={250} height={40} />
            <Image src={OurService} alt="ourserviceimg" className="w-full" width={250} height={40} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
