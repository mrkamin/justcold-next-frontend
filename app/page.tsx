"use client"
import { useEffect } from "react";
import AOS from 'aos'
import ComponentOne from "./components/ComponentsOne";

import "aos/dist/aos.css";

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
