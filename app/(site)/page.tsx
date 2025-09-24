"use client";

// import { useEffect, useState } from "react";
// import IntroBg_1 from "../components/IntroBg_1";
// import Carousel_1 from "../components/Carousel";
import IntroBg_1 from "../components/IntroBg_1";
// import TextCube from '../components/IntroBg_3';


export default function Home() {

  // const [show, setShow] = useState(true);

  // useEffect(() =>{
  //   const timer = setTimeout(() => {
  //     setShow(false);
  //   }, 10500); 

  //   return () => clearTimeout(timer);
  // })


  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black font-orbitron">
      <IntroBg_1 />
      {/* <TextCube /> */}
      {/* { show ? <IntroBg_1/> : <Carousel_1/>} */}
    </main>
  );
}
