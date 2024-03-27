import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import cartPic from './shopping-cart.png'
import { ShopContext } from '../../Context/ShopContext'
import User from '../User'

function Navbar() {
  const {cartCount} = useContext(ShopContext)
    const [menu,setMenu] = useState('shop')
  return (
    <div className='main border py-4 border-b-orange-100  flex justify-around items-center nav-container'>
        <div className='nav'>
        <div className='logo flex items-center gap-2 mt-3'>
          <Link to={'/'}><h4  className='font-bold inline-flex text-3xl cursor-pointer logo-icon'>Urban </h4></Link>  
        </div>
        <div className='navbar'>
            <ul className='flex gap-6 mt-3 items-center font-medium  '>
            <li onClick={()=>setMenu('shop')}  className='text-gray-500 cursor-pointer hover:text-black'> <Link>Shop</Link> {menu==='shop'?<hr className='hr' /> :""} </li> 
               <Link to={'/men'} onClick={()=>setMenu('men')}> <li className='text-gray-500 cursor-pointer hover:text-black'>Men {menu==='men'?<hr className='hr' /> :""} </li></Link> 
               <Link to={'/women'} onClick={()=>setMenu('women')}>  <li className='text-gray-500 cursor-pointer hover:text-black'>Women {menu==='women'?<hr className='hr' /> :""} </li></Link> 
                <Link to={'/kid'} onClick={()=>setMenu('kid')}> <li className='text-gray-500 cursor-pointer hover:text-black'>Kids  {menu==='kid'?<hr className='hr' /> :""}</li></Link>
            </ul>
        </div>
            <div className='flex gap-20 items-center'>
        <div className='user flex gap-6 mt-3'>
          {localStorage.getItem('Secret_Token') ? <button onClick={()=>{localStorage.removeItem('Secret_Token');window.location.replace('/')}}>Logout</button> :<User/>}
            </div>
            <div className='flex'>
           <Link to={'/CartItem'}><img src={cartPic} className='w-10 h-10' alt="" /></Link>
           <p className='mr-4 z-10 cursor-pointer w-5 h-5 rounded-2xl  text-sm text-center'> <Link to={'/CartItem'}> {cartCount()} </Link></p>
        </div>
            </div>
            </div>
            </div>
  )
}

export default Navbar