import Hero from '../Hero/Hero'
import FashionCard from '../Collection/FashionCard'
import YouMayLike from '../You-may-like/YouMayLike'
import Trending from '../Trending/Trending'
import LatestNews from '../LatestNews/LatestNews'

function Shop() {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <FashionCard/>
        <YouMayLike/>
        <Trending/>
        <LatestNews/>
    </div>
  )
}

export default Shop