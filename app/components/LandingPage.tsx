"use client";

import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import Carousel_1 from "./Carousel";
import WorkCards from "./WorkCards";
import Marquee from "./Marquee";
import Footer from "./Footer";
import Profile from "./Profile";

export default function ParallaxSticky() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Background scrolls faster
  const bgstarsY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  // Background scrolls faster
  const smstarsY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  // Foreground scrolls slower
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  // planet scrolls slower
  const planetsmallY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const planetbigY = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  return (
    <section ref={ref} className="relative h-[120vh] w-full overflow-hidden">
     <ReactLenis root options={{ smoothWheel: true, wheelMultiplier: 0.3 }}>
      
      {/* Background parallax */}

      {/* Big stars */}
      <motion.div
        style={{ y: bgstarsY }}
        className="absolute inset-0 z-0 overflow-hidden h-[400vh]"
      >
        <Image
          src="/images/STARS_BIG.png"
          alt="Space background"
          fill
          className="object-cover overflow-hidden"
          priority
        />
      </motion.div>

      {/* Small stars bg */}
      <motion.div
        style={{ y: smstarsY }}
        className="absolute inset-0 z-0 overflow-hidden h-[400vh]"
      >
        <Image
          src="/images/Star_Small.png"
          alt="Space background"
          fill
          className="object-cover overflow-hidden"
          priority
        />
      </motion.div>

      {/* Foreground - sticky */}
      <div className="sticky top-0 h-auto w-full z-50 overflow-hidden">
        <motion.div
          style={{ y: fgY }}
          className="w-full max-w-full h-auto text-white text-center space-y-12"
        >
          <Profile/>
          <Carousel_1/>
          {/* Featured Work */}          
          <WorkCards smally={planetsmallY} bigy={planetbigY}/>
          <Marquee/>
          {/* <Colaborate/> */}
          <Footer/>
        </motion.div>
      </div>

    </ReactLenis>
    </section>
  );
}

