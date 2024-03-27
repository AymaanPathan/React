import React from 'react'
import LatestCard from './LatestCard'
import img1 from './blog1.jpg'
import img2 from './blog2.jpg'
import img3 from './blog3.jpg'
function LatestNews() {
  return (
    <div className='mt-24'>
         <h1 className='text-2xl ml-5 font-poppins'>Trending News</h1>
    <hr className='h-4 mt-1'/>
    <div className='main flex'>
      <LatestCard img={img1}  head='What Curling Irons Are The Best Ones' 
      details='Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..'/>

      <LatestCard img={img2}
       head='Vogues Ultimate Guide To Autumn/ Winter 2019 Shoes'
       details='Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..' />

      <LatestCard img={img3} head='What Curling Irons Are The Best Ones'
      details='Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..'/>
    </div>
    </div>
  )
}

export default LatestNews