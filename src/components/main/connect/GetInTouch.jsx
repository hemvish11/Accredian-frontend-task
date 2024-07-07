import React from 'react'
import headPhone from "../../../assets/headphone.png"
import circle from "../../../assets/circle.png"
import right from "../../../assets/Arrows/Right.png"

const GetInTouch = () => {
  return (
    <div className='flex items-center justify-between bg-[#1A73E8] p-[50px] py-[65px] mx-4 lg:mx-[60px] 2xl:mx-[240px] my-[120px] relative rounded-lg'>
      <div className='flex gap-4'>
        <img src={headPhone} alt='headphone image' />
        <div className='flex justify-stretch flex-col z-10 text-white'>
          <p className='font-semibold text-sm lg:text-[26px]/[36px] xl:text-[28px]/[36px] '>Want to delve deeper into the program?</p>
          <p className='text-xs lg:text-[15px]/[28px] xl:text-[16.73px]/[28px]'>Share your details to receive expert insights from our program team!</p>
        </div>
      </div>

      <button className='py-2 px-8 text-[18.75px]/[28px] text-[#3B82F6] bg-[#FFFFFF] rounded-lg z-10 flex items-center justify-center'><span>Get in touch </span><img src={right} alt='right arrow' /></button>
      <img src={circle} alt='circle design' className='absolute right-0' />
    </div>
  )
}

export default GetInTouch