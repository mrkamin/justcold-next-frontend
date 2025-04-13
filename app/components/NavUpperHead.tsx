import { GiBubbles } from "react-icons/gi";
import { PiPhoneCall } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
}

const ContactItem = ({icon, text}: ContactItemProps) => (
  <div className="contact-item">
    <div className="contact-icon">{icon}</div>
    <p className="md:text-[1.2vw]">{text}</p>
  </div>
);

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

export default NavUpperHead;
