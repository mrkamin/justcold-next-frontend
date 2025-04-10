import Image from "next/image";
import Link from "next/link";
import { BiLocationPlus, BiUser } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { GiBubbles } from "react-icons/gi";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
  return (
    <div id="contact">
    <div id="getanestimate" className="relative w-full flex flex-col place-items-center">
      {/* Consultation Section */}
      <section className="relative z-10 bottom-[-170] w-[80%] bg-gradient-to-b rounded from-[#4db5ff] to-[#1f1f38] py-12 px-4">
        <GiBubbles className='text-white h-10 w-16 absolute bottom-5' />
        <GiBubbles className='text-white h-10 w-16 absolute right-5 top-5' />
        <div className=" flex flex-col items-center gap-5">
          <div className="w-[70%] flex flex-col items-center">
          <p className="font-bold text-white">FREE CONSULTATION</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
            Get A Full Consultation – Absolutely Free!
          </h2>
          <p className="text-center text-white max-w-xl">
            Leave your contact info and we’ll get back to you.
          </p>
          </div>

          {/* Form Card */}
          <form className="w-[70%] flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center bg-white/20 border border-white rounded-3xl p-3 text-white">
  <input
    type="text"
    placeholder="Name"
    className="bg-transparent flex-1 focus:outline-none text-white placeholder-white"
  />
  <BiUser />
</div>
<div className="flex items-center bg-white/20 border border-white rounded-3xl p-3 text-white">
  <input
    type="text"
    placeholder="Phone"
    className="bg-transparent flex-1 focus:outline-none text-white placeholder-white"
  />
  <PiPhone />
</div>
              
<div className="flex items-center bg-white/20 border border-white rounded-3xl p-3 text-white">
  <input
    type="email"
    placeholder="Email"
    className="bg-transparent flex-1 focus:outline-none text-white placeholder-white"
  />
  <TfiEmail />
</div>
            </div>
            <textarea
              placeholder="Type your message..."
              className="border border-white p-3 rounded w-full text-white bg-white/20"
            ></textarea>
            
              <button
                type="submit"
                className="estimate-btn left-0 
                absolute w-full md:w-fit bottom-[-20] md:left-[40%]"
              >
                REQUEST A FREE ESTIMATE
              </button>
          
          </form>
        </div>
       
      </section>
      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#4db5ff] to-[#1f1f38] w-full text-white pt-70 pb-8 place-items-center">
        <div className="w-[80%] px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div className="col-span-1 flex flex-col items-start gap-4">
            {/* Replace with your actual logo */}
            <Image
              src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1744122755/logo-white-transparent.png"
              alt="Logo"
              width={150}
              height={80}
              className="object-contain rounded-lg"
            />
            <div className="flex gap-2 items-center text-white mt-2">
              <PiPhone />
              <span className="">+44 7891 673331</span>
            </div>
            <div className="flex gap-2 items-center text-white mt-2">
              <MdEmail />
              <span className="">info@justcold.co.uk</span>
            </div><div className="flex gap-2 items-center text-white mt-2">
              <BiLocationPlus />
              <span className="">Leicester LE4 9HA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            
            <ul className="space-y-2">
            {["Home", "About Us", "Services", "Gallery", "Testimonials", "Contact", "Get An Estimate"].map(
 (item) => {
  const sectionId = item.toLowerCase().replace(/\s+/g, "")
                return (
                  <li
                    key={item}
                    className="cursor-pointer"
                    onClick={() => {
                      const section = document.getElementById(sectionId);
                      if (section) {
                        section.scrollIntoView({behavior: "smooth", block: "start"});

                      }
                    }}
                  >
                    {item}
                  </li>
                );
              }
            )}
          </ul>
          
          </div>

          {/* Services */}
          <div className="col-span-1 flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="space-y-1">
              <li>Cold Room Building</li>
              <li>Installing Equipment</li>
              <li>Repeairing Equipment</li>
              <li>Maintainance Equipmetn</li>
              <li>Frege Gas Filling</li>
            </ul>
          </div>

          {/* Hours of Operation */}
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-2">Hours of Operation</h3>
              <p>Monday - Friday: 8AM - 5PM</p>
              <p>Saturday: By Appointment</p>
              <p>Sunday: By Appointment</p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-lg font-semibold mb-2">FOLLOW US</h1>
              <div className="flex gap-10">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61567157396020"
                    target="_blank"
                    className="hover:border-[#4db5ff] p-5 border rounded-full cursor-pointer hover:bg-white/10 transition-all duration-500 ease-in-out"
                  >
                      <FaFacebook className="h-[3vh] w-fit" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@gxtv9305"
                    target="_blank"
                    className="hover:border-[#4db5ff] p-5 border rounded-full cursor-pointer hover:bg-white/10 transition-all duration-500 ease-in-out"
                  >
                    <BsYoutube className="h-[3vh] w-fit" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/mohammad-rafi-amin/"
                    target="_blank"
                    className="hover:border-[#4db5ff] p-5 border rounded-full cursor-pointer hover:bg-white/10 transition-all duration-500 ease-in-out"
                  ><LiaLinkedin className="h-[3vh] w-fit" />
                </Link>
              </div>
             </div>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm border-t border-white/20 pt-4">
          © 2025 JustCold Referegeration LTD. All Rights Reserved.
        </div>
      </footer>
    </div>
    </div>
  );
}
