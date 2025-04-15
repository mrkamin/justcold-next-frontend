import { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";


export const handleClick = () => {
  const element = document.getElementById("contact");
  if (element) {
    element.scrollIntoView(
      {behavior: "smooth", block: "start"}
    )
  }
}

const sections = ["home", "aboutus", "services", "gallery", "testimonials","contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Track the active section

  const handleScroll = useCallback(() => {
      setIsScrolled(window.scrollY > 50);

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const {top, bottom} = el.getBoundingClientRect();
          if (top <= 150 && bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

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
            {sections.map(
              (section) => ( 
                  <li
                    key={section}
                    className={`menu-item ${activeSection === section ? "active" : ""}`}
                    onClick={() => handleNavClick(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, '$1')}
                  </li>
            ))
              }
          </ul>
          <button className="estimate-btn" onClick={handleClick}>Get a Free Estimation</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
