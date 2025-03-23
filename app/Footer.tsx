"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative w-full">
      {/* Consultation Section */}
      <section className="bg-gradient-to-b from-blue-500 to-blue-300 py-12 px-4">
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

      {/* Wave SVG (Bottom of Form) */}
      <div className="absolute -bottom-1 w-full h-[120px] overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L60,117.3C120,139,240,181,360,186.7C480,192,600,160,720,144C840,128,960,128,1080,138.7C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      {/* Footer */}
      <footer className="bg-[#024873] text-white pt-20 pb-8 mt-[120px] relative">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div className="col-span-1 flex flex-col items-start gap-4">
            {/* Replace with your actual logo */}
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={80}
              className="object-contain"
            />
            <p className="mt-2">
              <span className="font-bold">623 341 2125</span>
            </p>
            <p>info@newwavepool.com</p>
            <p>Address line goes here</p>
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
              <li>Tile Cleaning</li>
              <li>Acid Washes</li>
              <li>Pool Repair</li>
              <li>Rusty Rebar Spots</li>
              <li>Equipment Maintenance</li>
              <li>Pool Inspections</li>
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
          © 2023 New Wave Pool Tile Cleaning LLC. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
