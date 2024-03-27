import React from 'react'


function LatestCard(props) {
  return (
    <div className='main'>
        <div className='main mb-12 ml-8 mt-6'  >
            <img className='w-96 h-64' src={props.img}alt="" />
            <p className='text-gray-400 mt-4 mb-4'>Fashion Tips</p>
            <h3 className='font-bold text-2xl w-96'>{props.head}</h3>
            <p className='text-gray-600 mt-4 mb-4 w-96 leading-7'>{props.details}</p>
        </div>
    </div>
  )
}

export default LatestCard