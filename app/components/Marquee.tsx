"use client";

import React from "react";
import Image from "next/image";

type MarqueeProps = {
  images?: string[];
};

export default function StaticMarquee({
  images = [],
}: MarqueeProps) {
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

  return (
    <div
      className="
        w-[100%] 
        overflow-hidden
       flex justify-between items-center
      "
    >
      {/* Side blur bars */}
      <div className="absolute w-full flex justify-between items-center pointer-events-none ">
        <div className="w-1 h-[160px] border-s-8 border-r-8 border-2 border-[#ff8146] mx-14 blur-xl"></div>
        <div className="w-1 h-[160px] border-s-8 border-r-8 border-2 border-[#ff8146] mx-14 blur-xl"></div>
      </div>
      {/* STATIC IMAGES (NO MOTION) */}
      <div
        className="
          flex items-center justify-center whitespace-nowrap
          w-full
          /* Responsive gap between items */
          gap-6        /* mobile */
          sm:gap-10    /* small tablets */
          md:gap-16    /* tablets */
          lg:gap-24    /* laptops */
          xl:gap-28    /* desktop */
        "
      >
        {imgs.map((src, idx) => (
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
                lg:w-22
                xl:w-22
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
