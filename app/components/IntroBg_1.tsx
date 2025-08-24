"use client";

import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import Carousel_1 from "./Carousel_1";
// import Carousel_1 from "./Carousel_1";

const parentVariants: Variants = {
  hidden: { filter: "blur(20px)", scaleX: 0.25, scaleY: 0.5, opacity: 0 },
  visible: {
    filter: "blur(0px)",
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0,
    },
  },
};

const childVariants_1: Variants = {
  hidden: { x: "0%", opacity: 1, scale: 1 },
  visible: (custom: { direction: number }) => ({
    x: `${custom.direction * 5}%`,
    y: `${custom.direction * 325}%`,
    scale: 5.5,
    transition: {
      type: "tween",
      duration: 7,
      ease: "easeOut",
      x: { delay: 0, duration: 0.15 },
      y: { delay: 7, duration: 2 },
      scale: { delay: 7.05, duration: 2 },repeat: 0
    },
  }),
};

const childVariants_2: Variants = {
  hidden: (custom: { initialRight?: number; initialLeft?: number }) => ({
    opacity: 0,
    right:
      custom.initialRight !== undefined ? `${custom.initialRight}%` : undefined,
    left:
      custom.initialLeft !== undefined ? `${custom.initialLeft}%` : undefined,
  }),
  visible: (custom: {
    top: number;
    left?: number;
    right?: number;
    rotate: number;
  }) => ({
    opacity: 1,
    top: `${custom.top}%`,
    left: custom.left !== undefined ? `${custom.left}%` : undefined,
    right: custom.right !== undefined ? `${custom.right}%` : undefined,
    rotate: `${custom.rotate}deg`,
    transition: { type: "tween", duration: 0.25, ease: "easeOut" },
  }),
};

const childVariants_3: Variants = {
  hidden: (custom: { initialRight?: number; initialLeft?: number }) => ({
    opacity: 0,
    visibility: "visible",
    right:
      custom.initialRight !== undefined ? `${custom.initialRight}%` : undefined,
    left:
      custom.initialLeft !== undefined ? `${custom.initialLeft}%` : undefined,
  }),
  visible: (custom: {
    top: number;
    left?: number;
    right?: number;
    rotate: number;
  }) => ({
    opacity: 1,
    visibility: "hidden",
    top: `${custom.top}%`,
    left: custom.left !== undefined ? `${custom.left}%` : undefined,
    right: custom.right !== undefined ? `${custom.right}%` : undefined,
    rotate: `${custom.rotate}deg`,
    transition: { type: "tween", duration: 0.25, ease: "easeOut", visibility: {delay : 6.25} },
  }),
};

const nested_childVariants_2: Variants = {
  hidden: {
    x: 0,
    y: 0,
    rotate: "0deg",
    scale: 1,
    color: "#fff",
    visibility: "visible",
  },
  visible: (custom: { x: number; y: number; rotate: string; delay: number }) => ({
    x: [0, custom.x],
    y: [0, custom.y],
    scale: [1, 20, 100],
    rotate: ["0deg", custom.rotate + "deg", custom.rotate + "deg"],
    color: ["#fff", "#aba9a9", "#000"],
    visibility: ["visible", "visible", "hidden"],
    transition: {
      duration: 2,
      type: "tween",
      ease: "easeOut",
      delay: custom.delay,
    },
  }),
};

const IntroBg_1 = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 15000); // first load delay
        return () => clearTimeout(timer);
    }, []);

  return (
    <div className="absolute h-full w-screen bg-black flex flex-col">
      <motion.div
        key="intro-bg-parent" // ✅ stable identity, avoids remount/re-trigger
        className="relative w-full h-full flex justify-center items-center"
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        style={{ transformOrigin: "center center" }}
        viewport={{ once: true }}
      >
        {/* First Shape */}
        <motion.div
          className="absolute bg-transparent"
          variants={childVariants_1}
          custom={{ direction: -1 }}
        >
          <div className="text-white bg-black h-full [clip-path:polygon(0_0,100%_0,100%_35%,0_65%)] text-[100px] uppercase flex justify-center items-center">
            Avinash Masih
          </div>
        </motion.div>

        {/* Second Shape */}
        <motion.div
          className="absolute bg-transparent"
          variants={childVariants_1}
          custom={{ direction: 1 }}
        >
          <div className="text-white bg-black h-full [clip-path:polygon(0_65%,100%_35%,100%_100%,0_100%)] text-[100px] uppercase flex justify-center items-center">
            Avinash Masih
          </div>
        </motion.div>

        {/* Text Layer */}
        <motion.div className="absolute text-white h-full w-full text-[3px] font-bold uppercase flex justify-center items-center flex-col">
          {/* Static extra text */}
          <motion.div
            className="absolute"
            variants={childVariants_2}
            custom={{ top: 55, right: 10, initialRight: 50, rotate: 105 }}
          >
            <motion.div
              variants={nested_childVariants_2}
              custom={{ x: -100, y: 750, rotate: -105, delay: 0.5 }}
            >
              Destruction
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute"
            variants={childVariants_2}
            custom={{ top: 45, left: 10, initialLeft: 50, rotate: -65 }}
          >
            <motion.div
              variants={nested_childVariants_2}
              custom={{ x: -85, y: 850, rotate: 65, delay: 2 }}
            >
              Procedural
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute"
            variants={childVariants_2}
            custom={{ top: 45, right: 10, initialRight: 50, rotate: 45 }}
          >
            <motion.div
              variants={nested_childVariants_2}
              custom={{ x: -700, y: 400, rotate: -45, delay: 3.5 }}
            >
              Automation
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute"
            variants={childVariants_2}
            custom={{ top: 55, left: 10, initialLeft: 50, rotate: -115 }}
          >
            <motion.div
              variants={nested_childVariants_2}
              custom={{ x: -600, y: 600, rotate: 115, delay: 5 }}
            >
              Pipeline
            </motion.div>
          </motion.div>

          {/* Static dots */}
          <motion.div
            className="absolute h-[8px] w-[8px] bg-white"
            variants={childVariants_3}
            custom={{ top: 49, left: 12, initialLeft: 50, rotate: -115 }}
          />
          <motion.div
            className="absolute h-[15px] w-[15px] bg-white rounded-full"
            variants={childVariants_3}
            custom={{ top: 52, left: 12, initialLeft: 50, rotate: -115 }}
          />
          <motion.div
            className="absolute h-[10px] w-[10px] bg-white"
            variants={childVariants_3}
            custom={{ top: 50, right: 9, initialRight: 50, rotate: -115 }}
          />
          <motion.div
            className="absolute bg-transparent"
            variants={childVariants_3}
            custom={{ top: 45, right: 14, initialRight: 50, rotate: -115 }}
          >
            <Star fill="#fff" className="text-white w-2 h-2" />
          </motion.div>
        </motion.div>

        {/* Carousel Layer */}
        <motion.div
          className="absolute w-full h-full top-0 left-0 flex justify-center items-center"
          initial={{ scale: 0, zIndex: -10 }}
          animate={{ scale: 1, zIndex: 10 }}
          transition={{ duration: 2, delay: 7.95, ease: "easeIn", when: "beforeChildren" , staggerChildren: 5}}
          style={{ isolation: "isolate" }}
        >
          {/* <motion.img
                src="/images/AON.png"
                alt="AON"
                className="rounded-xl shadow-lg cursor-pointer w-full h-full object-cover"
              /> */}
              <Carousel_1 loaded={loaded}/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntroBg_1;
