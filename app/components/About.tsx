import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";

const About = () => {
  return (
    <div id="aboutus" className="about-container" data-aos="fade-up">
      <div className="about-grid">
        {/* Image and Video Section */}
        <div className="about-image-container">
          <div className="about-experience" data-aos="fade-up">
            <h1 className="text-2xl font-bold">10 +</h1>
            <p>Work Experience</p>
          </div>
          <div className="about-logo-container">
            <Image 
              src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742710425/justcold-high-resolution-logo_w8hh6u.png" 
              alt="AboutPnglogo"
              width={500} 
              height={600}
              className="about-logo"
              data-aos="fade-up"
            />
          </div>
          <div className="about-main-image">
            <Image 
              src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742709911/WhatsApp_Image_2024-10-12_at_01.24.50_af9ef241_vjlgzi.jpg" 
              alt="AboutImage" 
              width={500} 
              height={100}
              className="about-main-image img"
              data-aos="fade-up"
            />
          </div>
          <div className="about-video-container">
            <video
              className="about-video"
              src="https://res.cloudinary.com/dagjuuf4v/video/upload/v1742707733/WhatsApp_Video_2024-10-12_at_01.25.00_0a522a28_crrcnf.mp4"
              controls
              autoPlay
              loop
              muted
              data-aos="fade-up"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="about-text-container">
          <h2 className="about-title" data-aos="fade-up">
            About Us
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
          <h3 className="about-subtitle" data-aos="fade-up">Professional expertise in Refrigeration.</h3>
          <p className="about-description" data-aos="fade-up">
            At JustCold Refrigeration, we prioritize professionalism and high standards, ensuring our clients feel informed and confident. We dedicate the necessary time to complete every job successfully, leaving our clients satisfied and reassured. Our services include:
          </p>

          <div className="about-services-grid" data-aos="fade-up">
            {["Commercial Refrigeration", "Repair and Maintenance", "Walk-in Chiller", "Freezer (Cold Room)", "Upright Fridge", "Drink Fridge", "Cellar Cooler", "Ice Maker", "Counter Fridge", "Blast Chiller"].map((service, index) => (
              <div className="about-service-item" key={index}>
                <FaAngleDoubleRight />
                <h1>{service}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
