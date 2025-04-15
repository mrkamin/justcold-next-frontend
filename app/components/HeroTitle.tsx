import { handleClick, CLOUDINARY_BASE_URL } from "../page";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

interface ImageComparisonProps {
  images: string[];
}

const ImageComparison: React.FC<ImageComparisonProps> = ({ images }) => {
  const fixedImages = images.map((src) =>
    src.startsWith("http") ? src : `${CLOUDINARY_BASE_URL}${src.replace("/", "")}`
  );

  return (
    <div className="hero-title-grid-cont justify-center items-center" >
      {fixedImages.map((src, index) => (
        <div key={index} className="relative w-[40px] h-[40px] rounded-full border border-[#4db5ff] overflow-hidden"
         >
          <Image
            src={src}
            alt={`ourserviceimg-${index}`}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
};

const HeroTitle = () => {
  return (
    <div className="hero-title-container">
      <h2 className="hero-title-tag">
        JUSTCOLD REFRIGERATION, MAINTENANCE & MORE
      </h2>

      <h1 className="hero-title-heading" aria-label="JustCold Hero Tile">
        Keep Things <span className="hero-title-highlight">Fresh</span>
      </h1>

      <p className="hero-title-description">
        &quot;At JustCold Refrigeration LTD, we prioritize our clients by delivering the highest industry standards—through expertise, courtesy, and professionalism.
        You’ll be impressed by the results and confident you made the right choice.
        Here’s a glimpse of what we offer:&quot;
      </p>

      <div className="flex flex-col md:grid md:grid-cols-[40%_60%] justify-start gap-5 md:gap-0 w-fit">
        <button className="hero-estimat-btn pointer-events-auto"
        onClick={handleClick}>
          Get a Free Estimation
        </button>
       
            <div className="flex flex-col sm:flex-row md:grid md:grid-cols-[50%_50%] gap-5">
            <ImageComparison images={["/face-1.jpg", "/face-2.jpg", "/face-3.jpg", "/face-4.jpg", "/face-5.jpg"]} />
        
        <div className="flex flex-col items-start rounded-lg p-1 w-fit bg-[#1f1f38] text-white">
          <div className="flex bg-[#1f1f3890]">
            {[...Array(5)].map((_, i) => (
              <BsStarFill key={i} />
            ))}
          </div>
          <p>Ratings & Reviews</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTitle;
