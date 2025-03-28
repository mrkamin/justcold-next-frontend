import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { BsGoogle, BsStarFill } from "react-icons/bs";
import { Data1 } from "../Data";

import "swiper/css";
import "swiper/css/pagination";

const Testemonials = () => {
  return (
    <div className="flex flex-col gap-5 items-center px-4 py-8">
      <h1 className="text-center text-2xl font-bold">
        Just a Few Words From Our Satisfied Customers
      </h1>
      <div className="flex items-center gap-2">
        <BsGoogle className="text-3xl text-blue-500" />
        <BsStarFill className="text-yellow-500" />
        <BsStarFill className="text-yellow-500" />
        <BsStarFill className="text-yellow-500" />
        <BsStarFill className="text-yellow-500" />
        <BsStarFill className="text-yellow-500" />
        <p className="text-gray-700">Ratings & Reviews</p>
      </div>
      <div id="testamonials" className="w-full flex justify-center">
        <Swiper
          className="w-full max-w-[80%]"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {Data1.map((project) => (
            <SwiperSlide
              key={project.id}
              className="flex flex-col gap-5 items-center bg-[rgba(77,181,255,0.4)] p-4"
            >
              
              <p className="text-[#1f1f38]">{project.discriptions}</p>
              <div className="flex justify-between">
              <h1 className="text-[#1f1f38] font-bold">
                {project.name}
              </h1>
                {[...Array(project.rating)].map((_, index) => (
                  <BsStarFill key={index} className="text-yellow-500" />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testemonials;
