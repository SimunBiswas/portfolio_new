'use client'
import Image from 'next/image'
import React from 'react'

interface CardProps {
    title: string;
    src : string
}

const Card: React.FC<CardProps> = ({title, src}) => {
    return (
        <div className='relative w-auto flex flex-col justify-center items-center gap-16 mx-auto  h-[400px]'>        
        <div className=' rotate-180 h-auto'>
            <Image
              src="/images/groupVector.png"
              alt="Work 2"
              width={200}
              height={100}
              objectFit="cover"
            />
        </div>
        <div className=' h-auto'>
            <Image
              src="/images/groupVector.png"
              alt="Work 1"
              width={200}
              height={100}
              objectFit="cover"
            />
        </div>
        <div className='absolute w-[200px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[8em] z-10'>
            <Image
                src={src}
                alt="Work 1"
                width={500}
                height={200}
                objectFit="cover"
                />
        </div>
        <h1 className='text-white text-2xl uppercase font-extralight'>{title}</h1>
    </div>
    )
}
const WorkCards = () => {
  return (
    <div className='relative w-screen h-auto mx-auto flex flex-col justify-center items-center '>
        <span className='uppercase text-[#EC682D] text-[30px] pb-10'>Featured work</span>
      <div className='flex justify-center items-center mb-16 gap-40 z-50'>
        <Card title={"Destruction"} src={"/images/Gears.png"} />
        <Card title={"Tools"} src={"/images/Gears.png"} />
        <Card title={"VFX"} src={"/images/Gears.png"} />
      </div>
      <div className='flex justify-center items-center mb-20 gap-40 z-50'>
        <Card title={"Procedural"} src={"/images/Gears.png"} />
        <Card title={""} src={"/images/Gears.png"} />
        <Card title={""} src={"/images/Gears.png"} />
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
      <div className="absolute inset-0 bg-[url('/images/Grid.svg')] bg-repeat bg-center z-20 pointer-events-none">
      </div>
      <div className='absolute inset-0 -left-10 -translate-y-32 overflow-hidden'>
        <Image
              src="/images/Planet.png"
              alt="Small Planet"
              fill
              className="object-cover overflow-hidden"
              priority
            />
      </div>
    </div>
  )
}

export default WorkCards
