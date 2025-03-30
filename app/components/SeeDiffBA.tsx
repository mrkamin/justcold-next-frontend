import React from 'react'

const SeeDiffBA = () => {
  return (
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
  )
}

export default SeeDiffBA
