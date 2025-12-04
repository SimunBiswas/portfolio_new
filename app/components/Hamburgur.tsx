"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { XCircle } from "lucide-react";
import { motion } from "framer-motion";

interface HamburgurProps {
  setVisible: (visible: boolean) => void;
}

const Hamburgur: React.FC<HamburgurProps> = ({ setVisible }) => {
    const [open , setOpen] = useState(false)
  const data = [
    {
      company: "RESPAWN ENTERTAINMENT",
      role: "DESTRUCTION ARTIST",
      duration: "MAR 2022 - APRIL 2024",
      description:
        "Build on the legacy of Fallen Order, Survivor lets players slice, smash and Force-throw their way through highly reactive environments",
    },
    {
      company: "SLEDGEHAMMER GAMER",
      role: "ASSOCIATE TECHNICAL ARTIST",
      duration: "JUNE 2021 - FEB 2022",
      description:
        "Vanguard featured destructable cover mechanics across multiplayer maps, requiring close collaboration with level design and environment art teams to implement these systems effectively.",
    },
    {
      company: "ABYSSMAL GAMES",
      role: "TECHNICAL ARTIST",
      duration: "JULY 2020 - MAY 2021",
      description:
        "Wore many fins for this dive - puzzel prototyping, prop desgn, destruction systems and tool creation for an underwater exploration game built in Unity.",
    },
  ];

  return (
    <div className="h-[100%] w-[100%] bg-black/60 p-4 overflow-y-visible">
      <>
        <div className="absolute right-10 text-[24px]">
          <XCircle
            size={24}
            color="#FFFFFF"
            onClick={() => setVisible(false)} // closes & slides out
          />
        </div>

        <section className="h-auto w-[100%] flex items-center p-4 px-20">
          <div>
            <Image
              src="/images/UserPhoto.png"
              alt="User Photo"
              width={200}
              height={200}
              objectFit="cover"
            />
          </div>
          <div className="text-left ps-10">
            <h1>
              I’m <span className="text-[#EC682D]">AVINASH MASIH</span>
            </h1>
            <p className="text-[15px] py-4">
              Technical Artist Ex-Electronic Arts, Ex-<br />
              Active-Vision, Specialize Dynamic/
              <br />
              Interactable game content.
            </p>

            <div className="flex gap-4 mt-2 text-[12px] ">
              <button className="bg-[#EC682D] text-white p-2 rounded-md ">
                DOWNLOAD RESUME
              </button>
              <button className="border-[0.5px] border-gray-700 rounded-md p-2">
                COPY EMAIL
              </button>
            </div>
          </div>
        </section>

        <section className="p-4 gap-4">
          <h1 className="py-4 text-[#EC682D] w-full text-left">EXPERIENCE</h1>

          {data.map(
            (
              item: {
                company: string;
                role: string;
                duration: string;
                description: string;
              },
              index: number
            ) => (
              <div
                key={index}
                className="border-[1.5px] border-gray-700 hover:border-[#EC682D]/30 p-4 my-10 rounded-lg bg-[#171717]"
              >
                <div className="flex justify-between gap-6 text-[22px]">
                  <div>
                    <h1>{item.role}</h1>
                  </div>
                  <div>
                    <span className="text-[#C0C0C0] text-[14px] font-Hitmarker font-light">
                      {item.duration}
                    </span>
                  </div>
                </div>
                <div className="text-[#EC682D] text-[15px] w-full text-left py-4">
                  {item.company}
                </div>
                <div className="text-[12px] text-left text-[#C0C0C0]">
                  {item.description}
                </div>
              </div>
            )
          )}
        </section>

        <motion.div className={`bg-[#EC682D]/15 mx-4`}
        initial={{scaleY : 1}}
        animate={ open ? { scaleY : "0"} : {scaleY : "1"} }
        transition={{ duration : 0.5 , ease : "linear" }}>
          <div className="border-2 border-[#EC682D] rounded-lg p-10">
            <div className="text-[#EC682D] text-[20px] p-2">
              Whoa! You made it so Far ?
            </div>
            <div className="text-[15px] text-left p-4">
              That&apos;s commitment lets turn the curiosity into converstaion,
              Hit the button below & lets create something together
            </div>
            <div className="flex items-center justify-center py-6">
              <button className="bg-[#EC682D] px-40 rounded-lg p-2 text-[15px] font-Hitmarker font-light"
               onClick={()=> setOpen(true)}
               style={ open ? { display : "none"} : {display : "block"}}>
                Send Message
              </button>
              {
                open ? (
                  <motion.div
                    className="w-[100%] flex justify-center items-center"
                    onHoverStart={() => setOpen(true)}
                    onHoverEnd={() => setOpen(false)}
                    whileHover={{ display : "flex"}}
                  >
                    <div className="w-[60%] flex justify-center flex-col items-center p-6 rounded-lg border-[0.5px] border-white">
                        <span className="text-[20px] w-full ">SEND A MESSAGE</span>
                        <div className="flex gap-4 py-4">
                            <div className="text-left">
                                <label htmlFor="name" className="text-[15px] ">Name</label>
                                <input type="text" id="name" className="border-[0.5px] border-[#EC682D] rounded-lg p-2 text-[10px] bg-[#171717] w-full" placeholder="Your Name" />
                            </div>
                            <div className="text-left">
                                <label htmlFor="email" className="text-[15px] ">Email</label>
                                <input type="email" id="email" className="border-[0.5px] border-[#EC682D] rounded-lg p-2 text-[10px] bg-[#171717] w-full" placeholder="Your Email" />
                            </div>
                        </div>
                        <div className="text-left w-full">
                            <label htmlFor="message" className="text-[15px]">Message</label>
                            <textarea id="message" className="border-[0.5px] border-[#EC682D] rounded-lg p-2 text-[10px] bg-[#171717] w-full" placeholder="Your Message" rows={4} />
                        </div>
                        <div className="w-full">
                        <button className="bg-[#EC682D] px-32 rounded-lg p-2 text-[15px] font-Hitmarker font-light">
                            Send Message
                        </button>
                        </div>
                    </div>
                  </motion.div>
                ) : null
              }
            </div>
          </div>
        </motion.div>

        
      </>
    </div>
  );
};

export default Hamburgur;
