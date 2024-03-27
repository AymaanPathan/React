import './collection.css'
/* eslint-disable react/no-unescaped-entities */
import item1 from '../../Components/items1.jpg' 
import item2 from '../../Components/items2.jpg' 
import item3 from '../../Components/items3.jpg' 
import { Link } from 'react-router-dom'

function FashionCard() {
  return (
    <div className='collection-div mt-24'>
    <h1 className='collection-heading text-2xl ml-5 font-sans text-gray-700'>Collection's</h1>
    <hr className='h-4 mt-1'/>
    <div className='box-div py-8 relative main flex items-center justify-between  mx-6'>
       <Link to={'/men'} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}><div className='hover:-translate-y-2 duration-500 '>
        <img  className='imgs shadow-lg w-72  duration-500 cursor-pointer hover:shadow-white  ' src={item1} alt="" />
        <p className='text-center font-semibold mt-4 text-black  cursor-pointer'>Men's Collection</p>
        </div></Link> 
       <Link to='/women' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}><div className='hover:-translate-y-2 duration-500'>
        <img  className='imgs shadow-lg w-72  duration-500 cursor-pointer  hover:shadow-white ' src={item2} alt="" />
        <p className='text-center font-semibold mt-4 text-black  cursor-pointer'>Women's Collection</p>
        </div></Link> 
       <Link to={'/kid'} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}><div className='hover:-translate-y-2 duration-500'>
        <img  className='imgs shadow-lg w-72  duration-500 cursor-pointer  hover:shadow-white ' src={item3} alt="" />
        <p className='text-center font-semibold mt-4 text-black cursor-pointer'>Kid's Collection</p>
        </div></Link> 
    </div>
    </div>
  )
}

export default FashionCard