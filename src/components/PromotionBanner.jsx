import React from 'react'
import { Link } from 'react-router-dom'

const PromotionBanner = () => {
  return (

    <div className=" my-0   mx-auto  max-w-screen-2xl  md:px-32 py-2 bg-black sm:justify-center md:justify-between items-center  md:pl-[500px] flex " >
      <p className='text-white text-[14px] sm:text-center md:  '>Sign up and get 20% off to your first order. <button className='border-b-[1px]'> Sign Up Now </button></p>
      <img src="/assets/images/CrossBtn.png" alt="CrossBtn" className=' h-[13.13px] w-[13.13px] text-[14px] hidden md:block' />

    </div>


  )
}

export default PromotionBanner
