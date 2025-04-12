import React from 'react'

const Heading = (props) => {

  const { text} = props;

  return (
    <div className='flex justify-center my-10 bg-white'>
        <h1 className='text-[36px] integral-font font-bold text-center text-black bg-white'>{text}</h1>
      
    </div>
  )
}

export default Heading
