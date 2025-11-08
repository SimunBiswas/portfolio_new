import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

type MarqueeProps = {
  images?: string[]; // array of image URLs (7 recommended)
  speed?: number; // pixels per second (default 100)
  gap?: number; // gap between images in px (default 24)
};

export default function FramerMotionMarquee({
  images = [],
  speed = 100,
  gap = 150,
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const [distance, setDistance] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Default placeholder images if none provided
  const defaultImages = [
    "/images/marquee/PYTHON1.png",
    "/images/marquee/blender-icon.png",
    "/images/marquee/C++.png",
    "/images/marquee/houdini-svgrepo-com.png",
    "/images/marquee/maya-2017.png",
    "/images/marquee/substance-painter.png",
    "/images/marquee/unreal-engine-1.png"
  ];

  const imgs = images.length ? images : defaultImages;
  const displayItems = [...imgs, ...imgs]; // duplicate for seamless loop

  useEffect(() => {
    function calculateDistance() {
      if (!trackRef.current || !containerRef.current) return;

      const trackWidth = trackRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      const needed = trackWidth / 2;
      const final = Math.max(needed, containerWidth);
      setDistance(final);

      const duration = final / speed;

      controls.start({
        x: [0, -final],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration,
          },
        },
      });
    }

    calculateDistance();

    const ro = new ResizeObserver(() => calculateDistance());
    if (trackRef.current) ro.observe(trackRef.current);
    if (containerRef.current) ro.observe(containerRef.current);

    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgs.join("|"), speed]);

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      if (distance > 0) {
        const duration = distance / speed;
        controls.start({
          x: [0, -distance],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration,
            },
          },
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, distance]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-hidden={false}
    >
      <motion.div
        ref={trackRef}
        className={`flex items-center whitespace-nowrap gap-[${gap}px]`}
        animate={controls}
        style={{ willChange: "transform" }}
      >
        {displayItems.map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 select-none"
            style={{ marginRight: gap }}
          >
            
            <Image
              src={src}
              alt={`marquee-${idx}`}
              width={100}
              height={100}
              className="rounded-lg object-cover shadow-md"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/*
Usage:
<FramerMotionMarquee
  images={[
    '/images/one.jpg', '/images/two.jpg', '/images/three.jpg',
    '/images/four.jpg', '/images/five.jpg', '/images/six.jpg', '/images/seven.jpg',
  ]}
  speed={120}
  gap={20}
/>

- Infinite seamless scroll.
- Hover or hold cursor to pause; unhover resumes animation.
*/
