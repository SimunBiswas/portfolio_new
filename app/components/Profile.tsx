"use client";

import React from "react";
import { motion } from "framer-motion";
import Hamburgur from "./Hamburgur";

interface ProfileProps {
  hover: boolean;
  setHover: (hover: boolean) => void;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const Profile: React.FC<ProfileProps> = ({ hover, setHover, visible, setVisible }) => {

  return (
    <nav
      className="
        fixed top-4 left-5 
        z-50
        rounded-2xl
        px-6 py-3
        flex justify-start items-center
        shadow-lg shadow-black/20
      "
    >
      <div className="relative font-semibold font-orbitron text-[20px] lg:text-[25px] cursor-pointer">
        <motion.button
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          onClick={() => setVisible(true)} // open menu
          whileHover={{ color: "#EC682D" }}
          transition={{ duration: 0.2 }}
          className={`text-white flex gap-0 ${visible ? "display-none" : "display-flex"}`}
        >
          A
          <motion.p
            initial={{ opacity: 1, x: "400px" }}
            animate={
              hover
                ? { opacity: 1, x: 0, color: "#EC682D" }
                : { opacity: 0, x: 0, transition: { delay: 0.3 } }
            }
            transition={{ duration: 0.3, delay: 0.75 }}
            className="inline-block bg-transparent text-white pointer-events-none"
            style={{ willChange: "opacity, transform" }}
          >
            VINASH
          </motion.p>
          &nbsp;
          <motion.span
            initial={{ translateX: "-110px" }}
            animate={
              hover
                ? { translateX: 0, color: "#EC682D" }
                : { translateX: "-120px", transition: { delay: 0.3, ease: "linear" } }
            }
            transition={{ duration: 0.3, delay: 0.3 }}
            className="inline-block bg-transparent text-white pointer-events-none"
            style={{ willChange: "opacity, transform" }}
          >
            M
          </motion.span>
          <motion.span
            initial={{ opacity: 1, x: "-400px" }}
            animate={
              hover
                ? { opacity: 1, x: 0, color: "#EC682D" }
                : { opacity: 0, x: 0, transition: { delay: 0.3 } }
            }
            transition={{ duration: 0.3, delay: 0.75 }}
            className="inline-block bg-transparent text-white pointer-events-none"
            style={{ willChange: "opacity, transform" }}
          >
            ASIH
          </motion.span>
        </motion.button>

        {/* SLIDE-IN OVERLAY FROM LEFT */}
        <motion.div
          className="absolute inset-0 left-0 bg-black/60 overflow-hidden w-[350%] h-[200vh]"
          initial={{ x: "-110%" }}                        
          animate={visible ? { x: "-6%" } : { x: "-110%" }}
          transition={{ type: "tween", duration: 0.3, ease: "linear" }}
        >
          <Hamburgur setVisible={setVisible} />
        </motion.div>
      </div>
    </nav>
  );
};

export default Profile;
