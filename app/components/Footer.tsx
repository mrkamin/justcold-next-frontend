"use client";

import Image from "next/image";
import { BiLocationPlus } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="relative w-full">
      {/* Consultation Section */}
      <section className=" relative bg-gradient-to-b from-blue-500 to-blue-300 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
            Get A Full Consultation – Absolutely Free!
          </h2>
          <p className="text-center text-white max-w-xl">
            Leave your contact info and we’ll get back to you.
          </p>

          {/* Form Card */}
          <form className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <textarea
              placeholder="Type your message..."
              className="border border-gray-300 p-3 rounded w-full h-28 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-[#24b8eb] hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition"
              >
                REQUEST A FREE ESTIMATE
              </button>
            </div>
          </form>
        </div>
       
      </section>

     

      {/* Footer */}
      <footer className="bg-[#024873] text-white pt-20 pb-8 relative">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div className="col-span-1 flex flex-col items-start gap-4">
            {/* Replace with your actual logo */}
            <Image
              src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1742710425/justcold-high-resolution-logo_w8hh6u.png"
              alt="Logo"
              width={150}
              height={80}
              className="object-contain"
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
            <ul className="space-y-1">
              <li>Home</li>
              <li>Services</li>
              <li>Gallery</li>
              <li>Testimonials</li>
              <li>Contact</li>
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
          <div className="col-span-1 flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2">Hours of Operation</h3>
            <p>Monday - Friday: 8AM - 5PM</p>
            <p>Saturday: By Appointment</p>
            <p>Sunday: By Appointment</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm border-t border-white/20 pt-4">
          © 2025 JustCold Referegeration LTD. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
