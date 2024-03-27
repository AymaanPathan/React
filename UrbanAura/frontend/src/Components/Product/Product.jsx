import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

function Product() {
  const [added,setAdded] = useState('Add to Cart');

  const addMsg = ()=>{
   setTimeout(()=>{
    setAdded('Added To Cart');
  },300)
  setTimeout(()=>{
    setAdded('Add More')
  },1000)
 }
  const {Allproduct,addToCart} = useContext(ShopContext)
  const {productId} = useParams();
  const [size,setSize] =useState('white') 

  const product = Allproduct.find((e)=>e.id===Number(productId));

  return (
    <>
    <div className='flex ml-6 mt-4 mb-7'>
      <div className='flex gap-2'>
     <img className='max-w-96 h-full' src={product.image} alt="" />
      </div>
      <div className='ml-4 max-w-full'>
        <h2 className='text-5xl text-[#A6A87A] '>{product.name}</h2>
        <p className='text-gray-600 mt-4'>MRP inclusive of all taxes</p>
        <div className='flex gap-4 mt-4'>
        <p className='text-gray-500 text-xl line-through'>₹{product.old_price}</p> 
        <p className='text-[#CEBD9C]  text-xl font-bold'>₹{product.new_price}</p>
        </div>
        <p className='w-96 mt-4 text-gray-400'>{product.description}</p>
        <h2 className='mt-12'>Sizes:</h2>
      <div className='sizes mt-4 grid grid-cols-5 gap-2 items-center'>
        <div onClick={()=>setSize('32')} className={`${size==='32' ?"bg-[#C6A87A] text-white":""} border cursor-pointer border-gray-400 px-1 py-2 text-center text-gray-500`}>32</div>
        <div onClick={()=>setSize('34')} className={`${size==='34' ?"bg-[#C6A87A] text-white":""} border cursor-pointer border-gray-400 px-1 py-2 text-center text-gray-500`}>34</div>
        <div onClick={()=>setSize('38')}  className={`${size==='38' ?"bg-[#C6A87A] text-white":""} border cursor-pointer border-gray-400 px-1 py-2 text-center text-gray-500`}>38</div>
        <div onClick={()=>setSize('40')} className={`${size==='40' ?"bg-[#C6A87A] text-white":""} border cursor-pointer border-gray-400 px-1 py-2 text-center text-gray-500`}>40</div>
        <div onClick={()=>setSize('42')} className={`${size==='42' ?"bg-[#C6A87A] text-white":""} border cursor-pointer border-gray-400 px-1 py-2 text-center text-gray-500`}>42</div>
        <div onClick={()=>setSize('44')}  className={`${size==='44' ?"bg-[#C6A87A] text-white":""} border cursor-pointer border-gray-400 px-1 py-2 text-center text-gray-500`}>44</div>
        <div onClick={()=>setSize('46')}  className={`${size==='46' ?"bg-[#C6A87A] text-white":""} border cursor-pointer border-gray-400 px-1 py-2 text-center text-gray-500`}>46</div>
      </div>
   <button onClick={()=>{addToCart(product.id);addMsg()}} className='mt-12 bg-[#C6A87A] text-white w-full py-3 hover:bg-[#CC9E6D] duration-300'>{added}</button>
      <p className='mt-4 text-gray-600'>📦Delivery Time : 2-7 days</p>
      </div>
    </div>
    </>
  )
}


export default Product