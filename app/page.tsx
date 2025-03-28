"use client"
import { useEffect } from "react";
import AOS from 'aos'
import ComponentOne from "./components/ComponentsOne";
import ComponentTwo from "./components/ComponentsTwo";

import "aos/dist/aos.css";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration:  800,
    })
  }, [])
  
  return (
    <div className="">
      <ComponentOne />
      <ComponentTwo />
    </div>
  );
}
