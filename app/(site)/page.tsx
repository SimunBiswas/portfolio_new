"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import IntroBg_1 from "../components/IntroBg_1";
import LandingPage from "../components/LandingPage";

export default function Home() {
  // Prevent scroll during intro
  const [lockScroll, setLockScroll] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  // Lock/unlock scroll correctly
  useEffect(() => {
    document.body.style.overflow = lockScroll ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [lockScroll]);

  return (
    <main className="relative w-screen min-h-screen font-Hitmarker">

      {/* LANDING PAGE — overlay but not blocking scroll */}
      <div
        className={`
          absolute top-0 left-0 w-full h-screen z-10 
          pointer-events-none
        `}
      >
        <motion.div
          className="pointer-events-auto"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{
            duration: 2.5,
            ease: [0, 0, 1, 1],
            delay: 8.5,
          }}
          onAnimationComplete={() => setLockScroll(false)}
        >
          <LandingPage />
        </motion.div>
      </div>

      {/* INTRO OVERLAY */}
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-20 origin-top h-screen"
          initial={{ opacity: 1, scaleY: 1 }}
          animate={{ opacity: 0, scaleY: 0 }}
          transition={{
            duration: 2.5,
            ease: [0, 0, 1, 1],
            delay: 9,
          }}
          onAnimationComplete={() => setShowIntro(false)}
        >
          <IntroBg_1 />
        </motion.div>
      )}

      {/* MAIN CONTENT BELOW (scrolls normally) */}
      <section className="relative z-0 w-full">
        {/* This is where your ParallaxSticky or main page content goes */}
      </section>
    </main>
  );
}
