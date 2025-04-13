import { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { handleClick } from "../page";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Track the active section

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Automatically update active section based on scroll position
      const sections = ["home", "aboutus", "services", "gallery", "testimonials", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  // Scroll to section and set active class
  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(section);
      setIsOpen(false); // Close menu on mobile
    }
  };

  return (
    <nav id="navbar" className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-content">
        {/* Logo */}
        <div className="flex justify-between w-full md:w-fit items-center">
          <div className="logo-container" onClick={() => handleNavClick("home")}>
            <Image 
                src="https://res.cloudinary.com/dagjuuf4v/image/upload/v1744308505/justcoldlogo.png"
                width={40000}
                height={40000}
                alt="logo"
                className="h-[2vw] w-fit" />
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
        <div className={`nav-links ${isOpen ? "nav-links-open" : "nav-links-closed"}`}>
          <ul className="menu-list">
            {["Home", "About Us", "Services", "Gallery", "Testimonials", "Contact"].map(
              (item) => {
                const sectionId = item.toLowerCase().replace(/\s+/g, "");
                return (
                  <li
                    key={item}
                    className={`menu-item ${activeSection === sectionId ? "active" : ""}`}
                    onClick={() => handleNavClick(sectionId)}
                  >
                    {item}
                  </li>
                );
              }
            )}
          </ul>
          <button className="estimate-btn" onClick={handleClick}>Get a Free Estimation</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
