"use client";

// import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import IntroBg_1 from "../components/IntroBg_1";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";

export default function Home() {
  // INTRO + SCROLL CONTROL
  // const [showIntro, setShowIntro] = useState(true);
  // const [scrollLocked, setScrollLocked] = useState(true);

  // Lock body scroll while intro is playing
  // useEffect(() => {
  //   document.body.style.overflow = scrollLocked ? "hidden" : "auto";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [scrollLocked]);

  return (
    <main className="relative w-screen min-h-screen font-Hitmarker">

      {/* INTRO (Top Layer) */}
      {/* {showIntro && (
        <motion.div
          className="fixed inset-0 z-40 pointer-events-none"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0.5, y: "-100vh" }}
          transition={{
            duration: 1.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 6, // adjust intro duration here
          }}
          onAnimationComplete={() => {
            setShowIntro(false); // remove intro
            setTimeout(() => setScrollLocked(false), 150); // unlock scroll AFTER layout is stable
          }}
        >
          <IntroBg_1 />
        </motion.div>
      )} */}

      {/* LANDING PAGE (NORMAL LAYOUT — NO ABSOLUTE) */}
      <div className="relative z-20 overflow-hidden">
        <motion.div
          initial={{ y: "100vh" }}
          // animate={{ y: showIntro ? "100vh" : "0%" }} // stays hidden until intro finishes
          animate={{ y: "0%" }} // stays hidden until intro finishes
          transition={{
            duration: 2.2,
            ease: [0.25, 0.1, 0.25, 1],
            // delay: showIntro ? 0 : 0.2,
            delay: 0.2,
          }}
        >
          <LandingPage />
        </motion.div>
      </div>

      {/* REST OF PAGE (SCROLLS NORMALLY) */}
      <section className="relative z-0 w-full">
        <Footer setVisible={() => {}} />
      </section>
    </main>
  );
}
