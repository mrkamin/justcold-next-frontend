"use client";
import { useState, useEffect } from "react";
import { SvgLogo } from "../svg";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="navbar" className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav-content justify-between">
        <div className="flex justify-between w-full md:w-fit items-center">
          <div className="logo-container">
            <SvgLogo />
          </div>
          <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <div className={`nav-links ${isOpen ? "nav-links-open" : "nav-links-closed"}`} data-aos="fade-right">
          <ul className="menu-list">
            <li className="menu-item" data-aos="fade-up">Home</li>
            <li className="menu-item" data-aos="fade-up">Services</li>
            <li className="menu-item" data-aos="fade-up">About Us</li>
            <li className="menu-item" data-aos="fade-up">Gallery</li>
            <li className="menu-item" data-aos="fade-up">Testimonials</li>
            <li className="menu-item" data-aos="fade-up">Contact</li>
          </ul>
          <button className="estimate-btn" data-aos="zoom-in">Get a Free Estimation</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
