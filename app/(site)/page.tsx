"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import IntroBg_1 from "../components/IntroBg_1";
import LandingPage from "../components/LandingPage";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  // 🧭 Lock scroll when intro is active
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showIntro]);

  return (
    // ${showIntro ? "h-screen" : "h-auto"}
    <main
      className='w-screen h-auto font-Hitmarker relative'
    >
      <div className="bg-[url('/images/starsbg.png')] bg-cover bg-center h-screen w-full absolute -z-10" />
      <motion.div
      initial={{ opacity: 1, scaleY: 1, height: "100vh" }}
      animate={{ opacity : 0, scaleY: 0, height: 0 }}
      transition={{ duration: 2.5, ease: "linear", delay: 9 }}
      className="origin-top"
      >
        <IntroBg_1 onFinish={() => setShowIntro(false)} />
      </motion.div>
      {/* Intro Section */}
      {/* {showIntro && <IntroBg_1 onFinish={() => setShowIntro(false)} />} */}

      {/* Landing Page Slides Up */}
      <motion.div
        initial={{ y: "100vh", opacity :1 }} // 👈 Start off-screen below
        animate={{ y: "1vh" , opacity : 1}}       // 👆 Slide up into view
        transition={{ duration: 2.5, ease: "linear", delay: 9 }} // delay syncs with Intro scale-down
        // className="absolute top-0 left-0 w-full"

      >
        <LandingPage />
      </motion.div>
    </main>
  );
}
