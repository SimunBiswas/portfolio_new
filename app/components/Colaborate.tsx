import React from 'react'

const Colaborate = () => {
  return (
    <div className='relative w-full h-[500px] flex flex-col justify-center items-center'>
      <div className='my-10'><span className='uppercase text-[35px] text-[#EC682D] '>Let&apos;s unlock a new level</span></div>
      <div className='uppercase text-left text-[24px]'>Want to Colaborate, hire or just geek about games ? <br />Enter your cheat code below.</div>
      <div className='w-[50%] mt-6'>
        <input type="text"
        placeholder='Tell me about your project.....'
        className='placeholder-gray-400 p-5 rounded-lg bg-[#393939] font-extralight w-full' />
        <button className='uppercase text-white bg-[#EC682D] w-full rounded-lg p-5 mt-5'>Activate</button>
      </div>
    </div>
  )
}

export default Colaborate
