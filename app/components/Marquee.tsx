"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

type MarqueeProps = {
  images?: string[];
  baseSpeed?: number; // base speed (mobile speed)
};

export default function FramerMotionMarquee({
  images = [],
  baseSpeed = 80, // default mobile speed
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  const [distance, setDistance] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(baseSpeed);

  // default images
  const defaultImages = [
    "/images/marquee/PYTHON1.png",
    "/images/marquee/blender-icon.png",
    "/images/marquee/C++.png",
    "/images/marquee/houdini-svgrepo-com.png",
    "/images/marquee/maya-2017.png",
    "/images/marquee/substance-painter.png",
    "/images/marquee/unreal-engine-1.png",
  ];

  const imgs = images.length ? images : defaultImages;
  const displayItems = [...imgs, ...imgs];

  // Auto-adjust speed by screen size
  useEffect(() => {
    const updateSpeed = () => {
      const w = window.innerWidth;

      if (w < 640) setCurrentSpeed(baseSpeed * 0.8);       // Mobile slower
      else if (w < 768) setCurrentSpeed(baseSpeed * 1.0);  // Tablet normal
      else if (w < 1024) setCurrentSpeed(baseSpeed * 1.3); // Laptop faster
      else if (w < 1440) setCurrentSpeed(baseSpeed * 1.6); // Desktop faster
      else setCurrentSpeed(baseSpeed * 2.0);               // Big screens fastest
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, [baseSpeed]);

  // Main animation logic
  useEffect(() => {
    function calculateDistance() {
      if (!trackRef.current || !containerRef.current) return;

      const trackWidth = trackRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;

      const needed = trackWidth / 2;
      const finalDistance = Math.max(needed, containerWidth);

      setDistance(finalDistance);

      const duration = finalDistance / currentSpeed;

      controls.start({
        x: [0, -finalDistance],
        transition: {
          x: { repeat: Infinity, ease: "linear", duration },
        },
      });
    }

    calculateDistance();

    const ro = new ResizeObserver(calculateDistance);
    if (trackRef.current) ro.observe(trackRef.current);
    if (containerRef.current) ro.observe(containerRef.current);

    return () => ro.disconnect();
  }, [imgs.join("|"), currentSpeed]);

  // Pause / play on hover
  useEffect(() => {
    if (isPaused) {
      controls.stop();
      return;
    }

    if (distance > 0) {
      const duration = distance / currentSpeed;
      controls.start({
        x: [0, -distance],
        transition: {
          x: { repeat: Infinity, ease: "linear", duration },
        },
      });
    }
  }, [isPaused, distance, currentSpeed]);

  return (
    <div
      ref={containerRef}
      className="
        w-[90%] 
        overflow-hidden cursor-pointer
        py-4 sm:py-6 md:py-8 lg:py-10
        mx-10 md:mx-4 lg:mx-20
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute h-[160px] w-1 border-s-8 border-r-8 border-[#ff8146] blur-xl -translate-x-[6px]"/>
      <div className="absolute h-[160px] right-[4%] md:right-[2%] w-1 border-s-8 border-r-8 border-[#ff8146] blur-xl -translate-x-[6px]"/>
      <motion.div
        ref={trackRef}
        animate={controls}
        style={{ willChange: "transform" }}
        className="
          flex items-center whitespace-nowrap

          /* Responsive gap between items */
          gap-6        /* mobile */
          sm:gap-10    /* small tablets */
          md:gap-16    /* tablets */
          lg:gap-24    /* laptops */
          xl:gap-28    /* desktop */
        "
      >
        {displayItems.map((src, idx) => (
          <div key={idx} className="flex-shrink-0 select-none">
            <Image
              src={src}
              alt={`marquee-${idx}`}
              width={100}
              height={100}
              draggable={false}
              className="
                object-contain drop-shadow-xl

                /* Responsive image scaling */
                w-12   /* mobile */
                sm:w-16
                md:w-20
                lg:w-24
                xl:w-24
              "
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
