import './hero.css'

function Hero() {
  return (
    <div className='main flex items-center justify-center mt-8'>
        <img className='hero-img w-[76rem] h-[36rem]' src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className="text-div absolute top-1/2 left-[110px]  text-white ">
    <p className="p1 text-6xl font-bold">Elevate Your Lifestyle with Our Premium Collections</p>
    <p className="p2 text-lg text-left mt-3"> Elevate your wardrobe with our curated collection of the seasons hottest trends. </p>
    </div>
    </div>

  )
}

export default Hero