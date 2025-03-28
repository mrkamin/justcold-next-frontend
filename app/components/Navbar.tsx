import { useState, useEffect, useCallback } from "react";
import { SvgLogo } from "../svg";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <nav id="navbar" className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-content justify-between">
        {/* Logo */}
        <div className="flex justify-between w-full md:w-fit items-center">
          <div className="logo-container">
            <SvgLogo />
          </div>
          {/* Menu Button */}
          <button
            className="menu-button"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        
        {/* Navigation Links */}
        <div
          className={`nav-links ${isOpen ? "nav-links-open" : "nav-links-closed"}`}
        >
          <ul className="menu-list">
            {["Home", "Services", "About Us", "Gallery", "Testimonials", "Contact"].map(
              (item) => (
                <li key={item} className="menu-item">{item}</li>
              )
            )}
          </ul>
          <button className="estimate-btn">Get a Free Estimation</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
