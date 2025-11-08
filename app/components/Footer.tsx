import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-auto flex flex-col md:flex-row lg:flex-row justify-center items-center gap-44 text-left'>

      <div className='w-1/3 flex flex-col justify-center items-left p-4 m-4'>
        <div><span className='text-[#EC682D] uppercase text-3xl font-light'>Avinash Masih</span></div>
        <div>
            <p>I&apos;m a Technical Artist Over a year of experience in an art studio,</p>
        </div>
      </div>

      <div>
        <div><span className='text-[#EC682D] uppercase text-2xl font-light'>Projects</span></div>
      </div>

      <div>
        <div><span className='text-[#EC682D] uppercase text-2xl font-light'>Quick Links</span></div>
      </div>
    </div>
  )
}

export default Footer
