import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";
import { GiBubbles } from "react-icons/gi";

const GetReady = () => {
  const specials = [
    {
      title: "Build New Cold Room",
      description: "Save 10% on any new cold room building",
    },
    {
      title: "Fridge Services",
      description: "5% off all refrigeration services",
    },
    {
      title: "New Customer Bonus",
      description: "£25 off your first service with us!",
    },
  ];

  const galleryImages = [
    [
      "https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726726/1.jpg",
      "https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726725/2.jpg",
    ],
    [
      "https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726724/3.jpg",
      "https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726725/4.jpg",
    ],
    [
      "https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726724/5.jpg",
      "https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726723/6.jpg",
    ],
    [
      "https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726724/7.jpg",
      "https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726620/8.jpg",
    ],
  ];

  return (
    <div id="gallery" className="flex flex-col gap-5 w-full items-center">
      {/* Banner Section */}
      <div className="relative w-full min-h-[70vh] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742742831/banner_nfbosv.jpg"
          alt="Get Ready Photo"
          fill
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute w-[90%] md:w-[70%] lg:w-[60%] h-full bg-[linear-gradient(to_right,_#1f1f38,_#4db5ff_90%,_transparent_100%)]" />

        {/* Content */}
        <div className="absolute top-0 left-0 md:left-40 w-full md:w-1/2 h-full flex flex-col justify-center text-white p-6 gap-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Get Your Cold Room Ready Now!
          </h1>
          <p className="text-sm md:text-lg">
            Save £££ if you choose to bundle services!
          </p>
          <h3 className="text-md md:text-xl font-semibold">Current Specials:</h3>

          <div className="flex flex-col gap-2">
            {specials.map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <FaAngleDoubleRight />
                <span className="text-sm md:text-base">
                  <span className="font-bold">{item.title}</span> – {item.description}
                </span>
              </div>
            ))}
          </div>

          <button className="mt-4 px-5 py-2 bg-[#24b8eb] text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition w-fit">
            BOOK NOW
          </button>
        </div>

        <GiBubbles className="absolute text-xl text-white z-10 bottom-15 left-60 md:left-30 transform -translate-x-1/2 md:translate-x-0" />
      </div>

      {/* Images Grid */}
      <div className="w-full max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {galleryImages.map((pair, idx) => (
            <div key={idx} className="flex gap-2 p-2 shadow-md bg-white">
              {pair.map((imgSrc, i) => (
                <div key={i} className="relative w-full h-40">
                  <Image
                    src={imgSrc}
                    alt={`ourserviceimg-${idx}-${i}`}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetReady;
