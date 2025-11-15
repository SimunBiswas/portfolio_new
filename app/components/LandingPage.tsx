"use client";

import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import Carousel_1 from "./Carousel";
import WorkCards from "./WorkCards";
import Marquee from "./Marquee";
import Footer from "./Footer";

export default function ParallaxSticky() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Background scrolls faster
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-140%"]);

  // Foreground scrolls slower
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  // Planet scrolls slower
  // const planetY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={ref} className="relative h-[400vh] w-full overflow-hidden">
     <ReactLenis root>
         {/* Background parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/starsbg.png"
          alt="Space background"
          fill
          className="object-cover overflow-hidden"
          priority
        />
      </motion.div>

      {/* <motion.div className='absolute z-50 -top-12'
      style={{ y: planetY }}>
              <Image
                    src="/images/Planet.png"
                    alt="Small Planet"
                    fill
                    className="object-cover overflow-hidden"
                    priority
                  />
        </motion.div> */}

      {/* Foreground - sticky */}
      <div className="sticky top-0 h-auto w-full z-50">
        <motion.div
          style={{ y: fgY }}
          className="w-full max-w-full text-white text-center space-y-14"
        >
          <Carousel_1/>
          {/* Featured Work */}          
          <WorkCards/>
          <Marquee/>
          {/* <Colaborate/> */}
          <Footer/>
        </motion.div>
      </div>

    </ReactLenis>
    </section>
  );
}

