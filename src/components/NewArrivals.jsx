import React from 'react'
import { useNavigate } from 'react-router-dom';


const NewArrivals = () => {

    const navigate = useNavigate()

    const handleClick = (productId) => {
        navigate('/product/${productId}')
    }

   
    const products =  [
        {
          img:"/assets/images/product3.png",
          name: "T-shirt with Tape Details",
          rating: "/assets/images/rating.png",
          price: 120,
          id:1,
        },
        {
          img:"/assets/images/product1.png",
          name: "Skinny Fit Jeans",
          rating: "/assets/images/rating.png",
          price: 240,
          id:2,
        },
        {
          img:"/assets/images/product6.png",
          name: "Checkered Shirt",
          rating: "/assets/images/rating.png",
          price: 180,
          id:3,
        },
        {
          img:"/assets/images/product8.png",
          name: "Sleeve Striped T-shirt",
          rating: "/assets/images/rating.png",
          price: 130,
          id:4,
        },
        {
          img:"/assets/images/product2.png",
          name: "Vertical Striped Shirt",
          rating: "/assets/images/rating.png",
          price: 212,
          id:5,
        },
        {
          img:"/assets/images/product4.png",
          name: "Courage Graphic T-shirt",
          rating: "/assets/images/rating.png",
          price: 145,
          id:6,
        },
        {
          img:"/assets/images/product5.png",
          name: "Loose Fit Bermuda Shorts",
          rating: "/assets/images/rating.png",
          price: 80,
          id:7,
        },
        {
          img:"/assets/images/product7.png",
          name: "Faded Skinny Jeans",
          rating: "/assets/images/rating.png",
          price: 210,
          id:8,
        },
    
    
      ];

  return (
    <div className='items-center my-0 mx-auto  max-w-screen-2xl flex justify-around gap-5   px-20 bg-white  '>
         
       {products.slice(0,4).map((item,index)=>(
        
         
        <div key={index} className='flex flex-col items-start justify-start p-5 gap-2 flex-wrap ' onClick={()=> handleClick(item.id)}>
            <img src={item.img} alt={item.name} className ='h-[444px ] w-[296px]'  />
            <h2 className='satoshi-font text-[20px]  font-black '>{item.name}</h2>
            <img src={item.rating} alt={item.name} className='h-[16px] w-[120px] '/>
            <h1 className='satoshi-font text-[20px]  font-black'>${item.price}</h1>

         </div>
       ))}



       


    </div>
  )
}

export default NewArrivals
