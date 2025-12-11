import React from 'react'
import Image from './Image'


const CounterSuccess = ({title,text}) => {
  return (
    <div>
        <h2 className='text-3xl md:text-[50px] text-thrid font-bold font-inter'>{title}</h2>
        <p className='text-sm md:text-xl text-primary font-medium font-inter pt-5 pb-5'>{text}</p>
        
        
         </div>
  )
}

export default CounterSuccess