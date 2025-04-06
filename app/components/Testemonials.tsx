import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { BsArrowLeft, BsArrowRight, BsStarFill } from "react-icons/bs";
import { Data1 } from "../Data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 
import { GoogleIcon } from "../svg";
import { useRef, useState } from "react";

const Testemonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  return (
    <div id="testimonials" className="flex flex-col gap-5 items-center py-20 bg-blue-200 my-20">
      <div className="place-items-center">
      <h2 className="section-title place-items-center text-[#1f1f38]">
        Just a Few Words From Our<h3>Satisfied Customers</h3>
      </h2>
        <svg className="" height="10" viewBox="0 0 180 10">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#002F6C" />
              <stop offset="100%" stopColor="#24B8EB" />
            </linearGradient>
          </defs>
          <path d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5 T120,5 T140,5 T160,5 T180,5 T200,5" stroke="url(#gradient)" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="bg-white shadow-md px-4 py-3">
      <div className="flex flex-col items-center gap-1 text-center">
  <div className="flex items-center gap-2">
    <GoogleIcon />
    <span className="text-xl font-semibold text-gray-900">5.0</span>
    <div className="flex gap-[2px]">
      {[...Array(5)].map((_, i) => (
        <BsStarFill key={i} className="text-yellow-400 w-5 h-5" />
      ))}
    </div>
  </div>
  <p className="text-sm text-gray-600">Based on Google Reviews</p>
  <p className="text-sm text-gray-500">200+ customer reviews</p>

</div>
</div>

      <div className="w-full flex flex-col items-center relative">
  {/* Navigation buttons */}
  <button
    ref={prevRef}
    className="absolute left-0 md:left-8 lg:left-15 xl:left-20 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
  >
    <BsArrowLeft className="text-2xl text-gray-800" />
  </button>
  <button
    ref={nextRef}
    className="absolute right-0 md:right-8 lg:right-15 xl:right-20 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
  >
    <BsArrowRight className="text-2xl text-gray-800" />
  </button>

  {/* Swiper itself */}
  <Swiper
    className="w-full max-w-[80%]"
    modules={[Pagination, Navigation]}
    spaceBetween={40}
    slidesPerView={3}
    pagination={{
      clickable: true,
      el: ".custom-swiper-pagination",
    }}
    navigation={{
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    }}
    onInit={(swiper) => {
      if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
      if (swiper.params.pagination && typeof swiper.params.pagination !== 'boolean') {
        swiper.params.pagination.el = ".custom-swiper-pagination";
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      }
    }}
    breakpoints={{
      320: { slidesPerView: 1 },
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
  >
    {/* Slides go here */}
    {Data1.map((project) => {
      const isExpanded = expanded[project.id];
      const shouldTruncate = project.discriptions.length > 100;
      const displayText =
        isExpanded || !shouldTruncate
          ? project.discriptions
          : project.discriptions.slice(0, 100) + "...";

      return (
        <SwiperSlide
          key={project.id}
          style={{
            borderImage:
              "linear-gradient(to right, #4285F4, #34A853, #FBBC05, #EA4335)",
            borderImageSlice: 1,
          }}
          className="!flex !flex-col !gap-3 shadow-lg border-b-[3px] border-transparent !items-center bg-white p-4 !h-auto transition-all duration-300 ease-in-out"
        >
          <p className="text-[#1f1f38]">
            {displayText}
            {shouldTruncate && (
              <button
                onClick={() =>
                  setExpanded((prev) => ({
                    ...prev,
                    [project.id]: !prev[project.id],
                  }))
                }
                className="text-blue-500 ml-1 underline"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </p>
          <div className="w-full flex justify-between items-center">
            <h1 className="text-[#1f1f38] font-bold">{project.name}</h1>
            <div className="flex">
              {[...Array(project.rating)].map((_, index) => (
                <BsStarFill key={index} className="text-yellow-500" />
              ))}
            </div>
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>

  {/* Custom Pagination Placement */}
  <div className="custom-swiper-pagination mt-6 flex justify-center gap-2" />
</div>

    </div>
  );
};

export default Testemonials;
