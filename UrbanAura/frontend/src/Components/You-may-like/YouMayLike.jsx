/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext.jsx'
import './YouMayLike.css'
function YouMayLike() {
  const {Allproduct} = useContext(ShopContext)
  return (
    <div className='mt-24'>
      <div className='flex justify-between'>
          <h1 className='text-2xl ml-5 font-poppins text-gray-700'>You May Like</h1>
      </div>



    <hr className='h-4 mt-1'/>
    <div className='main flex justify-between items-center  mx-6 '>
      <div className='main-div flex justify-center items-center gap-16 '>
        {Allproduct.map((item,i)=>{
          if(item.id>50 && item.id<55) {
            return <div className='you-may-product' key={i}>
                   <Link to={`/product/${item.id}`}><img className='cursor-pointer h-80 w-64 you-img'src={item.image} alt="" /></Link> 
                 <h4 className='text-center mt-2'>{item.name}</h4>
                 <div className='flex gap-4 justify-center mt-1'>
                 <p className='text-gray-500  line-through'>{item.oldPrice}</p> 
                 <p className='text-[#CEBD9C] font-bold'>{item.newPrice}</p>
                 </div>
            </div>
}
})}
</div>
    </div>
        </div>
  )
}

export default YouMayLike