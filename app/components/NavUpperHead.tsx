import { JSX } from "react";
import { GiBubbles } from "react-icons/gi";
import { PiPhoneCall } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

const NavUpperHead = () => {
  return (
    <nav className="nav-upper">
      <div className="nav-container">
        <GiBubbles className="bubble-icon" />
        <div className="contact-wrapper">
          <ContactItem icon={<PiPhoneCall className="h-[3vh] w-fit"/>} text="+44 7891 673331" />
          <span className="divider" />
          <ContactItem icon={<TfiEmail className="h-[3vh] w-fit" />} text="info@justcold.co.uk" />
        </div>
      </div>
    </nav>
  );
};

const ContactItem = ({ icon, text }: { icon: JSX.Element; text: string }) => (
  <div className="contact-item">
    <div className="contact-icon">{icon}</div>
    <p className="md:text-[1.2vw]">{text}</p>
  </div>
);

export default NavUpperHead;
