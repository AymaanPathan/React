import  { useContext, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

function ShopCategory(props) {
  const [sort,setSort] = useState('popularity')
  const [input,setInput]  =useState('')
  
  const {Allproduct} = useContext(ShopContext)
  const filteredPRoduct = Allproduct.filter((item)=>{
    if (item.name.toLowerCase().includes(input.toLowerCase())){
      return item
    }
  }).sort((a,b)=>{
    if(sort ==='popularity') {
      return b.id -a.id
    }
   else if(sort ==='High to Low') {
      return b.new_price - a.new_price
    }
   else if(sort ==='Low to High') {
      return a.new_price - b.new_price
    }
  })
  const sortingFunc = (e)=>{
    setSort(e.target.value)
  }
  return (
    <div >
      <>
      <div className='flex justify-between gap-3 mt-4 mr-5'>
        <div className='ml-4' >
        <label htmlFor="">Sort by:</label>
      <select onChange={sortingFunc} value={sort} className='cursor-pointer  outline-none' name="" id="">
        <option  value='popularity'>popularity</option>
        <option value='High to Low'>High to Low</option>
        <option value='Low to High'>Low to High</option>
      </select>
        </div>
        {/* <label htmlFor="">Search:</label> */}
      <input 
      onChange={(e)=>setInput(e.target.value)}
      type='text'
      value={input}
      placeholder='serach here...'
      className='border-1 text-[#CEBD9C]  outline-none'
      />
      </div>
      </>
      <div className='item-main grid grid-cols-3 mt-3 '>
        {filteredPRoduct.map((item,i)=>{
          // eslint-disable-next-line react/prop-types
          if(item.category===props.category) {
            return <div key={i}>
            <div  className="max-w-sm  border m-12 border-gray-200 rounded-lg shadow bg-[#FFw621]">
                <a href="#">
                 <Link to={`/product/${item.id}`}><img className="rounded-t-lg w-full h-96" src={item.image} alt="" /></Link>
                </a>
                <div className="p-5">
                    <a href="#">
                        <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{item.name}</p>
                    </a>
                    <div className='flex justify-left gap-4'>
                    <p className='text-gray-500 text-xl line-through'>₹{item.old_price}</p> 
                 <p className='text-[#CEBD9C]  text-xl font-bold'>₹{item.new_price}</p>
                    </div>
                    <Link to={`/product/${item.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg  focus:ring-4 focus:outline-none ">
                        Read more
                         <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div> 
            
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory