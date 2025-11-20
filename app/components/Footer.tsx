import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="relative flex flex-col w-full items-center">

      <div className='w-full h-auto flex flex-col md:flex-row lg:flex-row justify-center items-start gap-10 md:gap-0 lg:gap-36 text-left px-10 md:px-10 lg:px-36'>

        <div className='w-full md:w-full lg:w-1/3 flex flex-col justify-center items-left '>
          <div className='py-6 lg:py-8 font-orbitron font-bold'>
            <span className='text-[#EC682D] text-3xl uppercase font-bold orbitron'>
              Avinash Masih
            </span>
          </div>
          <div>
            <p className='leading-8 lg:leading-10 text-lg font-light'>
              I&apos;m a Technical Artist Over 8 years of experience in an art studio,
              skilled in 3D content creation, multiple game engines and game software development
            </p>
          </div>
        </div>

        <div className='w-full md:w-full lg:w-1/3 flex flex-col justify-center items-left '>
          <div className='py-8 font-orbitron font-bold'>
            <span className='text-[#EC682D] uppercase text-2xl font-bold'>
              Projects
            </span>
          </div>
          <ul className='leading-8'>
            <li className='font-light'>STAR WARS JEDI SURVIVOR</li>
            <li>CALL OF DUTY VANGUARD</li>
            <li>OVERKILLS THE WALKING DEAD</li>
            <li>ABYSS OF NEPTUNE</li>
          </ul>
        </div>

        <div className='w-full md:w-full lg:w-1/3 flex flex-col justify-center items-left '>
          <div className='py-8 font-orbitron font-bold'>
            <span className='text-[#EC682D] uppercase text-2xl font-bold py-16'>
              Quick Links
            </span>
          </div>
          <ul className='leading-8'>
            <li>PROJECTS</li>
            <li>FEATURED WORK</li>
            <li>ABOUT</li>
          </ul>
        </div>
      </div>


      <div className='w-full flex justify-start items-start gap-10 py-10 px-10 md:px-10 lg:px-36'>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/linkedin_logo.png"
            alt="LinkedIn"
            width={40}
            height={40}
            className="object-contain overflow-hidden"
            priority
          />
        </a>

        <a href="mailto:example@example.com">
          <Image
            src="/images/email_logo.png"
            alt="Email"
            width={40}
            height={40}
            className="object-contain overflow-hidden"
            priority
          />
        </a>

        <a href="https://discord.com">
          <Image
            src="/images/discord_logo.png"
            alt="Discord"
            width={40}
            height={40}
            className="object-contain overflow-hidden"
            priority
          />
        </a>
      </div>

      <div className='h-[0.5px] w-[85%] bg-white'/>

      <div className='w-[90%] flex justify-between items-center py-10 px-28'>
        <div>© 2025  All rights reserved.</div>
        <div>Designed & Developed by HARSH & SIMUN </div>
      </div>

      {/* 🌑 Planet Background Behind Footer */}
      <div className="absolute inset-x-0 -bottom-10 -z-10 w-full pointer-events-none select-none">
        <Image
          src="/images/PLANET_AND_GRADIENT.png"
          alt="Footer Background"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

    </div>
  )
}

export default Footer
