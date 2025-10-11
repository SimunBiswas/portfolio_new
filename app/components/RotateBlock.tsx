"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RotateBlock() {
  // const gifs = ["/gif/Jedi_Survivor.gif", "/gif/AON_Intro.gif"];
  const [step, setStep] = useState(0); // 0 = first, 1 = second, 2 = masked
  // const [key, setKey] = useState(0);

  useEffect(() => {
    const animateSequence = async () => {
      // 🌀 Step 1: First GIF
      setStep(0);
      await new Promise((r) => setTimeout(r, 2100));

      // 🌀 Step 2: Second GIF
      setStep(1);
      await new Promise((r) => setTimeout(r, 2100));

      // 🌀 Step 3: Masked Block
      setStep(2);
      await new Promise((r) => setTimeout(r, 2100));
    };
    animateSequence();
  }, []);

  return (
    <div className="relative w-auto h-[20em] flex flex-col gap-10 items-center justify-center overflow-hidden">

      {/* 🔁 Rotating GIFs (Step 0 and 1) */}
      {/* {gifs.map((gif, i) => (
        <motion.div
        key={i}
        className={`absolute w-56 h-56 rounded-full flex items-center justify-center bg-cover bg-center transition-opacity duration-500 ${
          i === step ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${gif})` }}
        animate={i === step ? { rotateY: [-90,0, 90] } : {}}
        transition={{
            duration: 1.8,
            ease: ["easeIn", "linear", "easeOut"],
            times: [0, 0.6, 1],
          }}
      >
          {i === 0 && step === 0 && (
            <Image src="/images/Vector_1.png" alt="EA" width={100} height={100} />
          )}
        </motion.div>
      ))} */}


      <motion.div
        key={0}
        className={`absolute w-56 h-56 rounded-full flex items-center justify-center bg-cover bg-center transition-opacity duration-500 ${
          0 === step ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url('/gif/Jedi_Survivor.gif')` }}
        animate={0 === step ? { rotateY: [-90, 0, 90] } : {}}
        transition={{
            duration: 2.1,
            ease: ["easeIn", "linear", "easeOut"],
            // ease: "linear",
            times: [0, 0.5, 1],
          }}
      >
        {0 === 0 && step === 0 && (
          <Image src="/images/Vector_1.png" alt="EA" width={100} height={100} />
        )}
      </motion.div>

      {/* 🎭 Masked GIF + Overlay (Step 2) */}
      <motion.div
        key={1}
        className={`relative w-[20em] lg:w-[600px] h-[200px] transition-opacity duration-500 ${
            step === 1 ? "opacity-100" : "opacity-0"
        }`}
        animate={step === 1 ? { rotateY: [-90, 0, 90] } : {}}
        // animate={step === 1 ? { rotateY: [0, 0, 0] } : {}}
        transition={{
            duration: 2.1,
            ease: ["easeIn", "linear", "easeOut"],
            times: [0, 0.6, 1],
          }}
        >

        {/* 🌀 Masked GIF */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: "url('/gif/Vanguard.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitMaskImage: "url('/images/Mask_group.png')",
            maskImage: "url('/images/Mask_group.png')",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            scale: "1.1",
          }}
        ></div>

        {/* 🧱 Overlay ACTIVISION image */}
        <div className="absolute inset-0 z-20 flex justify-center items-center">
          <Image
            src="/images/Mask_group1.png"
            alt="Overlay"
            className="w-full h-full object-contain"
            width={600}
            height={200}
          />
        </div>
      </motion.div>

      
      <motion.div
        key={2}
        className={`absolute w-56 h-56 rounded-full flex items-center justify-center bg-cover bg-center transition-opacity duration-500 ${
          2 === step ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url('/gif/AON_Intro.gif')` }}
        animate={2 === step ? { rotateY: [-90, 0, 90] } : {}}
        transition={{
            duration: 2.1,
            ease: ["easeIn", "linear", "easeOut"],
            times: [0, 0.6, 1],
          }}
      >
      </motion.div>

    </div>
  );
}
