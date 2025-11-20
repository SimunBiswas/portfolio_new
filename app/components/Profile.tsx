import { motion } from "framer-motion";
import React from "react";

const Profile = () => {
  const [hover, setHover] = React.useState(false);

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
      <div className="font-semibold font-orbitron text-[20px] lg:text-[25px] cursor-pointer">
        <motion.button
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          whileHover={{ color: "#EC682D" }}
          transition={{ duration: 0.2 }}
          className="text-white flex gap-0"
        >
          A
            <motion.p
              initial={{ opacity: 1, x: "400px" }}
              animate={hover ? { opacity: 1, x: 0, color : "#EC682D" } : { opacity: 0, x: 0, transition : { delay: 0.3 } }}
              transition={{ duration: 0.3, delay: 0.75,  }}
              className="inline-block bg-transparent text-white pointer-events-none"
              style={{ willChange: "opacity, transform" }}
            >
                VINASH
            </motion.p>
            &nbsp;
          <motion.span
            initial={{ translateX: "-110px" }}
            animate={hover ? { translateX: 0, color : "#EC682D" } : { translateX: "-120px", transition : { delay: 0.3, ease :"linear" } }}
            transition={{ duration: 0.3, delay: 0.3,  }}
            className="inline-block bg-transparent text-white pointer-events-none"
            style={{ willChange: "opacity, transform" }}
          >
            M
          </motion.span>
          <motion.span
            initial={{ opacity: 1, x: "-400px" }}
            animate={hover ? { opacity: 1, x: 0, color : "#EC682D" } : { opacity: 0, x: 0, transition : { delay: 0.3 } }}
            transition={{ duration: 0.3, delay: 0.75 }}
            className="inline-block bg-transparent text-white pointer-events-none"
            style={{ willChange: "opacity, transform" }}>
                ASIH
          </motion.span>
        </motion.button>
      </div>
    </nav>
  );
};

export default Profile;
