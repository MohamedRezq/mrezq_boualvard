import React from 'react'
import bannerImg from './../../assets/home_img.jpg'
import Image from 'next/image'

const Banner = () => {
  return (
    <div
      className="flex justify-between w-full"
      style={{ fontFamily: 'Space Grotesk', justifyContent: "space-between" }}
    >
      <div className='w-9/12 mr-10 relative'>
        <Image src={bannerImg} layout="fill" />
      </div>
      <div className='w-3/12 px-5 py-5' style={{border: "solid 1px #C3922C"}}>
        <div className="flex items-center text-xl" style={{justifyContent: "space-between"}}>
          <div className="font-bold text-golden">Press Release</div>
          <div>
            <i className="fas text-brownish fa-chevron-circle-right"></i>
          </div>
        </div>
        <div className='py-5 flex flex-col text-brownish '>
            <p className='text-brownish text-xs font-bold leading-6'>9 Jan, 2022</p>
            <p className='text-stonish text-sm leading-7'>Sustainability and Digital Transformation Targets Are Driving Demand for Multi...</p>
        </div>
        <div><hr className="border-1 border-golden w-90 mx-auto" /></div>
        <div className='py-5 flex flex-col text-brownish '>
            <p className='text-brownish text-xs font-bold leading-6'>5 Jan, 2022</p>
            <p className='text-stonish text-sm leading-7'>Boualvard, the leading energy and facilities management specialist in the...</p>
        </div>
        <div><hr className="border-1 border-golden w-90 mx-auto" /></div>
        <div className='pt-5 flex flex-col text-brownish'>
            <p className='text-brownish text-xs font-bold leading-6'>1 Jan, 2022</p>
            <p className='text-stonish text-sm  leading-7'>Boualvard Wins CXO 50 and CIO 300 Awards for Digital Innovation in Middle...</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
