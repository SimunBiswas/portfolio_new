"use client";

// import { useEffect, useState } from 'react';
// import Carousel_1 from '../components/Carousel';
// import IntroBg_1 from '../components/IntroBg_1';
// import RotateBlock from "../components/RotateBlock";
import IntroBg_2 from '../components/IntroBg_2';



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
      {/* <RotateBlock/> */}
      {/* <TextCube /> */}
      {/* { show ? <IntroBg_1/> : <Carousel_1/>} */}
      {/* <IntroBg_2/> */}
      <IntroBg_2/>
    </main>
  );
}
