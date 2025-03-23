import Image from "next/image";
import GetReadyphoto from "../../public/assets/WhatsApp Image 2024-10-12 at 01.24.50_74210af3.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";
import OurService from "../../public/assets/WhatsApp Image 2024-10-12 at 01.24.50_74210af3.jpg";

const GetReady = () => {
  return (
    <div className="flex flex-col gap-5 w-full items-center">
      <div className="relative w-full h-[400px] overflow-hidden">
        {/* Background Image */}
        <Image
          src={GetReadyphoto}
          alt="GetReadyPhoto"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-600 to-transparent" />

        {/* Content */}
        <div className="absolute top-0 left-0 w-[50%] h-full flex flex-col justify-center text-white p-10 gap-2">
          <h1 className="text-3xl">Get Your Cold Room Ready Now!</h1>
          <p className="text-lg">Save $$$ if you choose to bundle services!</p>
          <h3 className="text-xl font-semibold">Current Specials:</h3>
          <div className="flex gap-5 items-center">
            <FaAngleDoubleRight />
            <span className="font-simibold text-md flex items-center">
                <h2 className="text-lg font-bold">Build new Cold Room</h2>
                -Save 10% on any new cold room building</span>
          </div>
          <div className="flex gap-5 items-center">
            <FaAngleDoubleRight />
            <span className="font-simibold text-md flex items-center">
                <h2 className="text-lg font-bold">Frege Services</h2>
                -5% off all fregeration services</span>
          </div>
          <div className="flex gap-5 items-center">
            <FaAngleDoubleRight />
            <span className="font-simibold text-md flex items-center">
                <h2 className="text-lg font-bold">New Customer Bonus</h2>
                -$25 off your first service with us!</span>
          </div>
          <div>
          <button className="mt-4 px-5 py-2 bg-[#24b8eb] text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition">
            BOOK NOW
          </button>
          </div>
          
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[90%] lg:w-[80%] gap-2">
                <div className="flex gap-2 p-2 w-full shadow-md bg-white">
                  <Image src={OurService} alt="ourserviceimg" className="w-full " width={250} height={300} />
                  <Image src={OurService} alt="ourserviceimg" className="w-full " width={250} height={300} />
                </div>
                <div className="flex gap-2 p-2 w-full shadow-md bg-white">
                  <Image src={OurService} alt="ourserviceimg" className="w-full " width={250} height={300} />
                  <Image src={OurService} alt="ourserviceimg" className="w-full " width={250} height={300} />
                </div>
                <div className="flex gap-2 p-2 w-full shadow-md bg-white">
                  <Image src={OurService} alt="ourserviceimg" className="w-full " width={250} height={300} />
                  <Image src={OurService} alt="ourserviceimg" className="w-full " width={250} height={300} />
                </div>
                <div className="flex gap-2 p-2 w-full shadow-md bg-white">
                  <Image src={OurService} alt="ourserviceimg" className="w-full " width={250} height={300} />
                  <Image src={OurService} alt="ourserviceimg" className="w-full " width={250} height={300} />
                </div>
              </div>
    </div>
  );
};

export default GetReady;
