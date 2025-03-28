import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container" data-aos="fade-up">
      <div className="about-grid">
        {/* Image and Video Section */}
        <div className="about-image-container">
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
          <h1 className="about-title" data-aos="fade-up">About Us</h1>
          <h3 className="about-subtitle" data-aos="fade-up">Professional expertise in Refrigeration.</h3>
          <p className="about-description" data-aos="fade-up">
            Here at JustCold Refrigeration, we believe in professionalism and keeping 
            standards high, explaining everything clearly to ensure confidence. 
            We&apos;ll spend as much time as necessary to successfully complete any job, 
            leaving clients understanding things better, feeling better, at ease, and 
            happy with their decision to entrust JustCold Refrigeration with one of their 
            most valuable assets. Just some of our services:
          </p>

          <div className="about-services-grid">
            <div className="about-service-item" data-aos="fade-up">
              <FaAngleDoubleRight />
              <h1>Building Cold Room</h1>
            </div>
            <div className="about-service-item" data-aos="fade-up">
              <FaAngleDoubleRight />
              <h1>Building Cold Room</h1>
            </div>
            <div className="about-service-item" data-aos="fade-up">
              <FaAngleDoubleRight />
              <h1>Building Cold Room</h1>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
