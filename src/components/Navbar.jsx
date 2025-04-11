import React from 'react'
import MySheet from './MySheet'

const Navbar = () => {
  return (
    <div className=' 
     flex justify-between items-center md:px-16 sm:px-5   md:py-5 sm:py-2   '>
      <h1 className='text-[20px] font-extrabold integral-font ml-5 '>SHOP.CO</h1>
      <ul className=' justify-around items-center py-2 gap-5 hidden md:flex'>
        <li>Shop</li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </ul>

      <div className='hidden md:flex items-center bg-[#F0F0F0] text-[16px] px-4 py-[6px] rounded-full shadow-sm focus-within:ring-1 focus-within:ring-gray-400 transition w-[577px]'>
        <img src="/assets/images/search-btn.png" alt="search-btn" className='h-[20.27px] w-[20.27px]'/>
        <input
          type="text"
          placeholder="Search for products..."
          className="bg-transparent outline-none ml-3 w-full text-sm text-gray-700 placeholder-gray-500"
        />


      </div>
      <div className='hidden md:flex justify-between px-2 items-center gap-5'>
        <img src="/assets/images/marketplace-Icon.png" alt="marketplace-Icon.png" className='h-[20px] w-[20px] font-medium'/>
        <img src="/assets/images/user-icon.png" alt="user-icon.png" className='h-[20px] w-[20px]'/>
      </div>
      
      <div className='mt-2'>
      <MySheet />
      </div>
    </div>
  )
}

export default Navbar
