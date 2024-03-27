/* eslint-disable react/jsx-key */
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import trashcan from '../Cart-Items/trash-can.png' 
import { Link } from 'react-router-dom';

function CartItem() {
    const {Allproduct,items,removeFromCart,emptyCart} = useContext(ShopContext)
    let price =Allproduct.reduce((total, product) => total + items[product.id] * product.new_price, 0).toFixed(2);
  return (
    <div className='  w-full'>
     <h1 className='text-center text-4xl font-semibold tracking-wide'>Shopping Bag</h1>
    <div className='mt-4 w-[65%]  justify-around'>
        {Allproduct.map((e)=>{
            if(items[e.id]>0){
            return <div className=' mt-6'>
                <div className=' cart-item gap-4 h-48 flex  bg-white justify-between'>
                    <div className='flex justify-between gap-3'>
                    <img className='ml-4 rounded-sm w-32 h-full'  src={e.image} alt="" />
                    <div className='grid justify-between'>
                        <h3 className='text-black text-xl font-serif'>{e.name}</h3>
                        <p className='text-xl'>Price: ₹{e.new_price}</p>
                        <div className='flex'>
                        <p>Quantity:</p>
                        <p>{items[e.id]}</p>
                        </div>
                        <p className='text-gray-700'>Delivery in 3 days</p>
                    </div>
                    </div>
                        <img onClick={()=>removeFromCart(e.id)} className='w-5 h-5 cursor-pointer m-2'  src={trashcan} alt="" />
                </div>
              </div>
            } else {
                return null
            }
            
        })}
        
        <div className='grid absolute top-24 right-8 h-full  justify-center  mt-4'>
          <div className='h-96 w-96  bg-white checkoutbox'>
                    <div className='m-4 grid gap-4'>
                 <div className='flex justify-between'>
                    <p className='text-sm text-gray-600'>Discounts</p>
                    <p className='text-sm text-gray-600 underline cursor-pointer'>Apply Discount</p>
                 </div>
                 <div >
                    <p>Log in to use your personal offers!</p>
                 <Link to={'/login'}><button className=' border border-black w-[100%] p-2 mt-2 font-semibold'>Login</button></Link>
                 </div>
                 <div className='flex justify-between'>
                 <p className='text-gray-500 text-sm'>Order value</p>
                 <p className='text-sm'>{price}</p>
                 </div>
                 <div className='flex justify-between'>
                 <p className='text-gray-500 text-sm'>Delivery</p>
                 <p className='text-sm'>Free</p>
                 </div>
                 <hr className='bg-black h-[1px]'/>
                <div className='flex justify-between'>
                 <p className='text-black text-md font-semibold'>Total	</p>
                 <p className='text-sm'>{price}</p>
                 </div>
                 <button className='bg-black text-white py-2 '>CheckOut</button>
                 <button onClick={()=>emptyCart()} className='bg-red-500 hover:bg-red-600 duration-700 text-white py-2 '>Empty Bag</button>
                </div>
                </div>
        </div>
    </div>
                </div>
  )
}

export default CartItem