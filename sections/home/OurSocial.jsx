import Image from 'next/image'
import React from 'react'
import social11 from './../../assets/social_1_1.jpg'
import social12 from './../../assets/social_1_2.jpg'
import social13 from './../../assets/social_1_3.jpg'
import social21 from './../../assets/social_2_1.jpg'
import social22 from './../../assets/social_2_2.jpg'
import social23 from './../../assets/social_2_3.jpg'
import social31 from './../../assets/social_3_1.jpg'
import social32 from './../../assets/social_3_2.jpg'
import social33 from './../../assets/social_3_3.jpg'

const OurSocial = () => {
  return (
    <div className="w-100 grid grid-cols-1 gap-y-3 lg:gap-y-0 lg:grid-cols-3 gap-x-3 py-10 social">
      <div
        className="mx-auto grid gap-y-3 grid-rows-3 grid-cols-1"
        style={{ width: '100%' }}
      >
        <div className="row-span-2">
          <Image src={social11} />
        </div>
        <div className="row-span-1 grid grid-cols-2 gap-x-3">
          <div>
            <Image src={social12} />
          </div>
          <div>
            <Image src={social13} />
          </div>
        </div>
      </div>
      <div
        className="mx-auto grid gap-y-3 grid-rows-3 grid-cols-1"
        style={{ width: '100%' }}
      >
        <div className="row-span-1 grid grid-cols-2 gap-x-3">
          <div>
            <Image src={social21} />
          </div>
          <div>
            <Image src={social22} />
          </div>
        </div>
        <div className="row-span-2">
          <Image src={social23} />
        </div>
      </div>
      <div
        className="mx-auto grid gap-y-3 grid-rows-3 grid-cols-1"
        style={{ width: '100%' }}
      >
        <div className="row-span-2">
          <Image src={social31} />
        </div>
        <div className="row-span-1 grid grid-cols-2 gap-x-3">
          <div>
            <Image src={social32} />
          </div>
          <div>
            <Image src={social33} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurSocial
