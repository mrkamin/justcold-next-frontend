"use client"
import { useEffect } from "react";
import AOS from 'aos'
import ComponentOne from "./components/ComponentsOne";

import "aos/dist/aos.css";

export const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dagjuuf4v/image/upload/v1742726726/";

export const AOSWrapper = ({children}: {children: React.ReactNode}) => (
  <div data-aos="fade-up">{children}</div>
)

export const handleClick = () => {
  const element = document.getElementById("contact");
  if (element) {
    element.scrollIntoView(
      {behavior: "smooth", block: "start"}
    )
  }
}

export default function Home() {

 

  useEffect(() => {
    AOS.init({
      duration:  800,
    })
  }, [])
  
  return (
    <div className="">
      <ComponentOne />
      
    </div>
  );
}
