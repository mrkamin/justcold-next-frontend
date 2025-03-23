import Image from "next/image"
import { Data } from "../Data"
import { BiArrowToRight } from "react-icons/bi"

const OurServices = () => {
  return (
    <div className="place-items-center bg-blue-100 py-10">
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
             <p className="text-gray-900">Comperhensive Referigeration & Maintenance Services</p>
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
<div className="relative w-full h-[50vh] border-4 border-[#24b8eb] rounded-lg overflow-hidden">
  {/* Video */}
  <video
    className="w-full h-full object-cover"
    src="https://res.cloudinary.com/dagjuuf4v/video/upload/v1742704074/wdercm9wgx6cqiepl1nb.mp4"
    controls
    loop
    muted
  />

  {/* Custom Play Overlay (Optional for styling) */}
  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-2">
    {/* Circle Icon Container */}
    <div className="bg-white/80 rounded-full p-3">
      <svg
        className="w-12 h-12 text-[#24b8eb]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
    <p className="text-white font-bold drop-shadow-sm">
      Press Play to See the Results!
    </p>
  </div>
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
