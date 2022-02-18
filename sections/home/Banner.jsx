import React from 'react'
import bannerImg from './../../assets/home_img.jpg'
import Image from 'next/image'

const Banner = () => {
  return (
    <div
      className="flex justify-between w-full space-x-9"
      style={{ fontFamily: 'Space Grotesk', justifyContent: "space-between" }}
    >
      <div>
        <Image src={bannerImg} layout="fixed" />
      </div>
      <div style={{border: "solid 1px #C3922C", padding: "55px 30px"}}>
        <div className="flex items-center" style={{justifyContent: "space-between", fontSize: "36px", lineHeight: "46px"}}>
          <div className="font-bold text-golden">Press Release</div>
          <div>
            <i class="fas text-brownish fa-chevron-circle-right"></i>
          </div>
        </div>
        <div className='py-3 flex flex-col text-brownish '>
            <p className='text-brownish text-large leading-6'>9 Jan, 2022</p>
            <p className='text-blue-500 leading-7' style={{fontSize: "20px"}}>Sustainability and Digital Transformation Targets Are Driving Demand for Multi...</p>
        </div>
        <div><hr className="border-1 border-golden w-90 mx-auto" /></div>
      </div>
    </div>
  )
}

export default Banner
