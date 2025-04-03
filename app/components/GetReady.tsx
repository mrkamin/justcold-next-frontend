import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";

const GetReady = () => {
  return (
    <div id="gallery" className="flex flex-col gap-5 w-full items-center">
      {/* Banner Section */}
      <div className="relative w-full min-h-[50vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742742831/banner_nfbosv.jpg"
          alt="GetReadyPhoto"
          fill
          className="object-cover"
        />

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-600 to-transparent opacity-90" />

        {/* Content */}
        <div className="absolute top-0 left-0 w-full md:w-1/2 h-full flex flex-col justify-center text-white p-6 gap-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Get Your Cold Room Ready Now!
          </h1>
          <p className="text-sm md:text-lg">
            Save $$$ if you choose to bundle services!
          </p>
          <h3 className="text-md md:text-xl font-semibold">
            Current Specials:
          </h3>

          {/* Specials List */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <FaAngleDoubleRight />
              <span className="text-sm md:text-md">
                <span className="font-bold">Build New Cold Room</span> – Save 10%
                on any new cold room building
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <FaAngleDoubleRight />
              <span className="text-sm md:text-md">
                <span className="font-bold">Frege Services</span> – 5% off all
                refrigeration services
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <FaAngleDoubleRight />
              <span className="text-sm md:text-md">
                <span className="font-bold">New Customer Bonus</span> – $25 off
                your first service with us!
              </span>
            </div>
          </div>

          {/* Book Now Button */}
          <button className="mt-4 px-5 py-2 bg-[#24b8eb] text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition w-fit">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Images Grid */}
      <div className="w-full max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Row 1 */}
          <div className="flex gap-2 p-2 shadow-md bg-white">
            <div className="relative w-full h-40">
              <Image
                src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726726/5_zwlia7.png"
                alt="ourserviceimg"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="relative w-full h-40">
              <Image
                src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726725/6_pwaz1q.jpg"
                alt="ourserviceimg"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
          <div className="flex gap-2 p-2 shadow-md bg-white">
            <div className="relative w-full h-40">
              <Image
                src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726724/7_zbtimi.jpg"
                alt="ourserviceimg"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="relative w-full h-40">
              <Image
                src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726725/8_tkgo9t.jpg"
                alt="ourserviceimg"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex gap-2 p-2 shadow-md bg-white">
            <div className="relative w-full h-40">
              <Image
                src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726724/2_zibvmn.jpg"
                alt="ourserviceimg"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="relative w-full h-40">
              <Image
                src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726723/4_vbrd4v.avif"
                alt="ourserviceimg"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
          <div className="flex gap-2 p-2 shadow-md bg-white">
            <div className="relative w-full h-40">
              <Image
                src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726724/3_f4o1ka.jpg"
                alt="ourserviceimg"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="relative w-full h-40">
              <Image
                src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726620/WhatsApp_Image_2024-10-12_at_01.24.57_34f8328f_oygbpc.jpg"
                alt="ourserviceimg"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetReady;
