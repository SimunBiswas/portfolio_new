"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import IntroBg_1 from "../components/IntroBg_1";
import LandingPage from "../components/LandingPage";

export default function Home() {

  // 🔒 scroll lock controller
  const [lockScroll, setLockScroll] = useState(true);

  // 🎬 intro visibility controller
  const [showIntro, setShowIntro] = useState(true);

  // lock + unlock scroll
  useEffect(() => {
    document.body.style.overflow = lockScroll ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [lockScroll]);

  return (
    <main className="relative w-screen h-auto font-Hitmarker">

      {/* LANDING PAGE WRAPPER */}
      <div
        className={`absolute top-0 left-0 w-full z-10 
        ${lockScroll ? " overflow-hidden" : "overflow-visible"}`}
      >
        {/* LANDING PAGE ANIMATION */}
        <motion.div
          style={{ willChange: "transform" }}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{
            duration: 2.5,
            ease: [0, 0, 1, 1],
            delay: 8.5,
          }}
          onAnimationComplete={() => {
            setLockScroll(false);
          }}  // ⭐ Unlock scroll HERE
        >
          <LandingPage />
        </motion.div>
      </div>

      {/* INTRO OVERLAY */}
      {showIntro && (
        <motion.div
          className="absolute inset-0 z-20 origin-top"
          initial={{ opacity: 1, scaleY: 1 }}
          animate={{ opacity: 0, scaleY: 0 }}
          transition={{
            duration: 2.5,
            ease: [0, 0, 1, 1],
            delay: 9,
          }}
          onAnimationComplete={() => setShowIntro(false)} // remove intro only
        >
          <IntroBg_1 />
        </motion.div>
      )}
    </main>
  );
}
