"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { useState } from "react";
import Link from "next/link";
import ScrollView from "./ScrollView";


const VerticalTabs = () => {
  const [active, setActive] = useState("Profile");
  const tabs = ["Profile", "Settings", "Billing", "Security"];

  return (
    <div className="sticky top-0 flex w-full max-w-[80%] mx-auto">
      {/* Sidebar Tabs */}
      <div className="relative w-full">
        <div className="flex justify-center items-center p-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative px-4 py-2 text-left transition-colors transition-border border-r  border-gray-700 ${
                active === tab
                  ? "text-pink-500 font-semibold border-b-transparent"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
              {active === tab && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-pink-500/10 rounded-lg -z-10 transition-colors "
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                />
              )}
            </button>
          ))}
        </div>
        <div className="w-full p-6 text-white">
        {active === "Profile" && <ScrollView />}
        {active === "Settings" && <p>⚙️ Settings content here</p>}
        {active === "Billing" && <p>💳 Billing content here</p>}
        {active === "Security" && <p>🔒 Security content here</p>}
      </div>
      </div>

      {/* Tab Content */}
      
    </div>
  );
};


const Page = () => {
  const ref = useRef(null);

  // Track scroll progress (optional if you want to animate image)
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -800]); // adjust range

  return (
    <div className="flex justify-center items-center text-white font-orbitron">
      <div ref={ref} className="w-screen flex flex-col justify-center items-center bg-black">
        <motion.div
        className="fixed top-0 left-0 h-[10px] bg-[#2c2b2b] "
        style={{
          originX: 0,
        }}/>
        {/* Sticky image (full top pinned) */}
        <motion.div className="w-[90%] sticky mt-14 top-16 z-40 "
          style={{ y, scale }}
        >
          <motion.img
            className="w-full h-full object-contain "
            src="/images/AON.png"
            alt="AON"
            width={800}
            height={800}
            initial={{y: 0, scale: 1, opacity: 1}}
            // whileInView={{y: -200, opacity: 0.7}}
            // viewport={{ root: ref }}
            style={{bottom : scrollYProgress}}

          />
        </motion.div>

        {/* AON block pinned*/}
        {/* AON block pinned until content scroll finishes */}
<div className="relative w-full h-[200vh]"> {/* big container to allow scroll */}
  <div className="sticky top-0 h-screen flex justify-center items-start z-50 bg-black">
    <motion.div
      className="w-full max-w-full h-full overflow-y-auto bg-black text-white p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex justify-start items-start w-[90%] font-extrabold">
        <p>AON - ABYSS OF NEPTUNE</p>
      </div>
      <div className="w-[92%] h-[2px] bg-[#2c2b2b] my-4 lg:my-6"></div>

      {/* Scrollable inner content */}
      <div className="space-y-8">
        <VerticalTabs />
        
      </div>
    </motion.div>
  </div>
</div>


{/* 
<Link href="/AON/ScrollView">
  <button className="px-4 py-2 bg-pink-500 rounded-lg">
    Open ScrollView
  </button>
</Link> */}

      </div>
    </div>
  );
};

export default Page;
