"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ScrollView from "./ScrollView";
import { images } from "../../../data/images";
import Topic from "@/app/components/Topic";

const VerticalTabs = () => {
  const [active, setActive] = useState("Profile");
  const tabs = ["Profile", "Settings", "Billing", "Security"];

  return (
    <div className="w-full text-white overflow-x-hidden">
      {/* Title (sticky) */}
      <div className="sticky top-0 left-0 z-50 px-36">
        {/* Top buttons */}
        

        {/* Topic */}
        <div className="bg-black/30 font-hitmarker tracking-wide ">
          <div className="flex flex-col justify-start items-start w-[75%] p-6 bg-black/30 font-hitmarker tracking-wide ">

            <div className="flex justify-start items-center py-4 gap-10 ">
              <div className="text-white font-Hitmarker bg-[#EC682D] px-2 py-[0.5px] rounded-lg border-[1px] border-[#ffb896] uppercase">First-Personel Survivor</div>
              <div className="text-white font-Hitmarker bg-[#EC682D] px-2 py-[0.5px] rounded-lg border-[1px] border-[#ffb896] uppercase">Horror</div>
              <div className="text-white font-Hitmarker bg-[#41720F] px-2 py-[0.5px] rounded-lg border-[1px] border-[#C6FDB9] uppercase">Released</div>
            </div>

            <Topic title={"AON - ABYSS OF NEPTUNE"}/>
            <p className="text-[14px] leading-7 pb-4">A first person underwater survival horror experience coming to Steam this April. You are part of D.I.V.E.S. (Divers Investigating Various External Signals), a government-funded organization that sends deep-sea divers to investigate mysterious underwater signals throughout the world.</p>
          </div>
        </div>
        {/* Tabs (sticky under title) */}
        <div className="sticky top-[40px] bg-black z-40 w-full">
          <div className="flex justify-center items-center p-1 rounded-full border-[1px] border-[#EC682D] gap-5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`w-full relative px-4 py-[1px] text-center transition-colors text-white rounded-xl  ${
                  active === tab
                    ? "bg-[#EC682D] border-[0.5px] border-[#EC682D]"
                    : "bg-transparent hover:text-white"
                }`}
              >
                {tab}
                {active === tab && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-pink-500/10 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content (scrollable only inside) */}
        <div className="h-[calc(100vh-120px)] overflow-y-auto overflow-x-hidden  m-6 bg-black w-auto ">
          {active === "Profile" && <ScrollView />}
          {active === "Settings" && <p>⚙️ Settings content here</p>}
          {active === "Billing" && <p>💳 Billing content here</p>}
          {active === "Security" && <p>🔒 Security content here</p>}
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const ref = useRef(null);

  // Track scroll progress (for your pre-animations)
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -900]);

  return (
    <div className="flex justify-center items-center text-white font-orbitron bg-black">
      <div
        ref={ref}
        className="w-screen flex flex-col justify-center items-center bg-black"
      >
        {/* Top progress bar */}
        <motion.div
          className="fixed top-0 left-0 h-[10px] bg-[#2c2b2b]"
          style={{
            originX: 0,
          }}
        />

        {/* Sticky Image (pinned on top) */}
        <motion.div
          className="w-[90%] h-[100%] sticky -mt-8 top-10 z-40 bg-black"
          style={{ y, scale }}
        >
          <motion.img
            className="w-full h-full object-contain bg-black"
            src={images[0].src}
            alt="AON"
            width={800}
            height={800}
            initial={{ y: 0, scale: 0.8, opacity: 1 }}
          />
        </motion.div>

        {/* Sticky Section with VerticalTabs */}
        <div className="absolute top-[20%] lg:top-[40%] w-full h-[200vh]">
          <div className="sticky top-12 lg:top-0 h-screen flex justify-center items-start z-50">
            <motion.div
              className="w-full max-w-full h-full  text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <VerticalTabs />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
