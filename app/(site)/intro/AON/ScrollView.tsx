"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const section1Ref = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);
  const section3Ref = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex justify-end items-start">
      {/* Navbar */}
      <div className=" max-h-[100vh] h-[100vh] sticky top-0 left-0 w-[20%] flex flex-col gap-2 bg-black border-r  text-white p-4 z-50 overflow-y-hidden">
        <button onClick={() => scrollToSection(section1Ref)}>Section 1</button>
        <button onClick={() => scrollToSection(section2Ref)}>Section 2</button>
        <button onClick={() => scrollToSection(section3Ref)}>Section 3</button>
      </div>

     <div className="relative w-[40%] right-0 overflow-y-auto">
       {/* Sections */}
        <motion.div
          ref={section1Ref}
          className="h-screen flex items-center justify-center bg-red-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Section 1
        </motion.div>

        <motion.div
          ref={section2Ref}
          className="h-screen flex items-center justify-center bg-green-400"
          initial={{ x: 400, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Section 2
        </motion.div>

        <motion.div
          ref={section3Ref}
          className="h-screen flex items-center justify-center bg-blue-400 text-white p-12 text-justify"
          initial={{ scale: 0.8, opacity: 0, transformOrigin: "right" }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eligendi nam nesciunt quod, quidem expedita libero illo, saepe fugiat perferendis accusantium, qui accusamus molestiae ab reprehenderit. Quis doloremque enim, fuga possimus dolorem voluptatum nemo quod error sequi! Beatae labore aperiam id adipisci perferendis sequi accusantium. Vel praesentium labore, omnis, unde reiciendis odit doloribus delectus, temporibus illo quos ducimus est veniam sint. Aliquid numquam, repellendus accusamus nam quidem dolore necessitatibus libero magnam maxime expedita iure quibusdam dolor? Repudiandae, ab sint. Doloribus.
        </motion.div>
      </div>
      <div className="w-[40%] h-screen right-0">
        <motion.img
          className="w-full h-full object-contain"
          src="/images/AON.png"
          alt="AON"
          width={800}
          height={800}
          initial={{ x: 400, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
        />
      </div>
    </div>
  );
}