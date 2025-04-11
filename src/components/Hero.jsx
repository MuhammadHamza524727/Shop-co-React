import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className=' items-center my-0 mx-auto  max-w-screen-2xl flex  px-20 bg-[#F2F0F1] '>
      <div className='flex justify-start  items-start flex-col py-10 w-[60%] bg-[#F2F0F1] h-[500px]  gap-5 '>
        <h1 className='integral-font  text-[48px]  font-extrabold '>FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
        <p className='satoshi-font text-[14px]  font-extralight text-gray-600'>Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
        <Button />
      </div>
     

      <div className="relative w-fit ">
        <img
          src="/assets/images/imge2person.png"
          alt="img2person"
          className="h-[500px] object-cover"
        />

        {/* Small Star - Left */}
        <img
          src="/assets/images/star-sm.png"
          alt="star"
          className="absolute top-[50%] left-[-40px] h-[56px] w-[56px]"
        />

        {/* Large Star - Top Right */}
        <img
          src="/assets/images/star-lg.png"
          alt="star"
          className="absolute top-[60px] right-[-0px] h-[80px] w-[80px]"
        />
      </div>

    </div>
  )
}

export default Hero
