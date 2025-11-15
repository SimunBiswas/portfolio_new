"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import IntroBg_1 from "../components/IntroBg_1";
import LandingPage from "../components/LandingPage";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  // Lock body scroll during intro
  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showIntro]);

  return (
    <main className="w-screen h-auto font-Hitmarker relative overflow-hidden">

      {/* ⭐ BACKGROUND (always behind) */}
      {/* <div className="bg-[url('/images/starsbg.png')] bg-cover bg-center h-screen w-full fixed inset-0 -z-20" /> */}

      {/* ⭐ LANDING PAGE (loaded immediately, but hidden behind intro) */}
      {/* Landing Page Slides Up */}
      <motion.div
        initial={{ y: "100vh", opacity :1 }} // 👈 Start off-screen below
        animate={{ y: "1vh" , opacity : 1}}       // 👆 Slide up into view
        transition={{ duration: 2.5, ease: "linear", delay: 9 }} // delay syncs with Intro scale-down
        // className="absolute top-0 left-0 w-full"

      >
        <LandingPage />
      </motion.div>

      {/* ⭐ INTRO OVERLAY (on top) */}
      <motion.div
        initial={{ opacity: 1, scaleY: 1 }}
        animate={{ opacity: 0, scaleY: 0 }}
        transition={{ duration: 2.5, ease: "linear", delay: 9 }}
        className="absolute inset-0 z-20 origin-top"
      >
        <IntroBg_1 onFinish={() => setShowIntro(false)} />
      </motion.div>

    </main>
  );
}
