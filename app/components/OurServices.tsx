import Image from "next/image";
import { BiArrowToRight } from "react-icons/bi";
import { Data } from "../Data";
import OurServiceVideoSec from "./OurServiceVideoSec";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

interface ServiceItem {
  id: number;
  name: string;
  discriptions: string;
  image: string;
}

interface ServiceCardProps {
  item: ServiceItem;
}

interface ImageComparisonProps {
  images: string[]; // Explicitly defining `images` as an array of strings
}

const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726726/";

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="flex flex-col gap-2 place-items-center md:items-start text-[#1f1f38]">
    <div className="place-items-center md:place-items-start">
      <h2 className="section-title">
        {title}
      </h2>
        <svg className="" height="12" viewBox="0 0 200 10">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#002F6C" />
              <stop offset="100%" stopColor="#24B8EB" />
            </linearGradient>
          </defs>
          <path d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5 T120,5 T140,5 T160,5 T180,5 T200,5" stroke="url(#gradient)" strokeWidth="2" fill="none" />
        </svg>
      </div>
    <p className="section-description">{subtitle}</p>
  </div>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => (
  <div className="service-image-cont" data-aos="fade-up">
    <Image src={item.image} alt={item.name} width={250} height={50} className="service-image" />
    <div className="service-content">
      <h1 className="text-lg font-bold">{item.name}</h1>
      <p>{item.discriptions}</p>
      <div className="flex gap-3 items-center">
        <button className="font-bold">BOOK NOW</button>
        <BiArrowToRight className="text-[#4db5ff] text-2xl" />
      </div>
    </div>
  </div>
);

const ImageComparison: React.FC<ImageComparisonProps> = ({ images }) => {
  const fixedImages = images.map((src) =>
    src.startsWith("http") ? src : `${CLOUDINARY_BASE_URL}${src.replace("/", "")}`
  );

  return (
    <div className="flex gap-2 p-2 w-full shadow-md bg-white" >
      {fixedImages.map((src, index) => (
        <div key={index} className="relative w-full h-40" data-aos="fade-up">
          <Image
            src={src}
            alt={`ourserviceimg-${index}`}
            fill
            style={{ objectFit: "cover" }}
            className="rounded"
          />
        </div>
      ))}
    </div>
  );
};

const OurServices = () => {

  return (
    <div id="services" className="ourservices-container" data-aos="fade-up">
      <div className="ourservices-wrapper">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 md:flex-row justify-between w-full" data-aos="fade-up">
            <SectionHeader title="Our Services" subtitle="Comprehensive Refrigeration & Maintenance Services" />
            <button className="estimate-btn h-fit">REQUEST A FREE ESTIMATE</button>
          </div>
          <div className="service-card">
            {Data.map((item) => <ServiceCard key={item.id} item={item} />)}
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-5 md:flex-row justify-between w-full" data-aos="fade-up">
            <SectionHeader title="Watch us in Action" subtitle="See how New Cold Rooms are built with advanced techniques that make us different." />
            <button className="estimate-btn h-fit">REQUEST A FREE ESTIMATE</button>
          </div>
          <OurServiceVideoSec />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-5 md:flex-row justify-between" data-aos="fade-up">
            <SectionHeader title="See the Difference - Before & After" subtitle="Let us help you build your Cold Room" />
            <button className="estimate-btn h-fit">REQUEST A FREE ESTIMATE</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
            {[ 
              ["/1.jpg", "/5.jpg"],
              ["/2.jpg", "/6.jpg"],
              ["/3.jpg", "/7.jpg"],
              ["/4.jpg", "/8.jpg"]
            ].map((images, index) => <ImageComparison key={index} images={images} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
