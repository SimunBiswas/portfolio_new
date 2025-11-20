'use client'
import Image from 'next/image'
import React from 'react'
import { motion, MotionValue } from 'framer-motion'

interface CardProps {
  title: string;
  src: string;
}

const Card: React.FC<CardProps> = ({ title, src }) => {
  return (
    <div
      className="
        relative flex flex-col justify-center items-center mx-auto p-2
        gap-4
        w-[100px]           /* mobile width */
        sm:w-[170px]        /* tablet */
        md:w-[200px]        /* laptop */
        lg:w-[230px]        /* large screens */
        xl:w-[260px]
        lg:h-[400px]
      "
    >
      {/* Top Image */}
      <div className="rotate-180 h-auto p-2">
        <Image
          src="/images/groupVector.png"
          alt="Work 2"
          width={153.7}
          height={67}
          className="object-cover w-full"
        />
      </div>

      {/* Bottom Image */}
      <div className="h-auto p-2">
        <Image
          src="/images/groupVector.png"
          alt="Work 1"
          width={153.7}
          height={67}
          className="object-cover w-full"
        />
      </div>

      {/* Center icon */}
      <div
        className="
          absolute
          top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[3em] md:-translate-y-[4.5em]
          w-[70px] sm:w-[140px] md:w-[160px] lg:w-[120px]
          z-10
        "
      >
        <Image src={src} alt="Work icon" width={100} height={100} className="object-cover w-full" />
      </div>

      <div>
        <h1 className="text-white text-sm lg:text-2xl uppercase font-extralight text-center pt-6">
          {title}
        </h1>
      </div>
    </div>
  );
};



interface WorkCardsProps {
  smally: MotionValue<string>;
  bigy: MotionValue<string>;
}

const WorkCards: React.FC<WorkCardsProps> = ({ smally, bigy }) => {
  return (
    <div className='relative w-screen h-auto mx-auto flex flex-col justify-center items-center '>
      <span className='uppercase text-[#EC682D] text-[25px] lg:text-[40px] pb-10 font-bold font-orbitron'>Featured work</span>
      <div className="flex justify-center items-center gap-6 sm:gap-12 md:gap-20 lg:gap-32">
        <Card title={"Destruction"} src={"/images/Gears.png"} />
        <Card title={"Tools"} src={"/images/Gears.png"} />
        <Card title={"VFX"} src={"/images/Gears.png"} />
      </div>
      <div className="flex justify-center items-center gap-6 sm:gap-12 md:gap-20 lg:gap-32">
        <Card title={"Procedural"} src={"/images/Gears.png"} />
        <Card title={"."} src={"/images/Gears.png"} />
        <Card title={"."} src={"/images/Gears.png"} />
      </div>
      <div className='absolute left-[10%] top-[20%] w-[744px] h-[185px] max-w-[744px] z-10'>
        {/* <Ray/> */}
        <Image
            src="/images/Ray.png"
            alt="Ray Effect"
            width={744}
            height={185}
            objectFit="cover"
            />
      </div>
      <div className="absolute inset-0 bg-[url('/images/Grid.svg')] bg-repeat bg-center z-20 pointer-events-none opacity-[36%]">
      </div>
        <motion.div className='absolute inset-0 y-0 translate-x-40 overflow-hidden'
          style={{ y: smally, x: 1080 }}>
          <Image
                src="/images/Planet_1.png"
                alt="Small Planet"
                width={500}
                height={500}
                className="object-cover overflow-hidden"
                priority
              />
        </motion.div>

        <motion.div className='absolute inset-0 overflow-hidden top-[650px]'
          style={{ y: bigy }}>
          <Image
                src="/images/Planet2.png"
                alt="Small Planet"
                width={150}
                height={150}
                className="object-contain overflow-hidden"
                priority
              />
        </motion.div>

      
    </div>
  )
}

export default WorkCards
