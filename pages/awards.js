import Image from 'next/image'
import React from 'react'
import awardsBanner from './../assets/awardsBanner.jpg'
import award1 from './../assets/award1.png'
import award2 from './../assets/award2.png'
import award3 from './../assets/award3.png'
import award4 from './../assets/award4.png'
import award5 from './../assets/award5.png'
import award6 from './../assets/award6.png'
import award7 from './../assets/award7.png'

import Head from 'next/head'

const Awards = () => {
  return (
    <>
      <Head>
        <title>Awards and Recognition - Boualvard</title>
      </Head>
      <div className="relative overflow-hidden">
        <div id="rightShape" className="top-0 -right-16 w-32 h-[96rem]">
          {' '}
        </div>
        <div id="leftShape" className="top-20 -left-16 w-56 h-[96rem]">
          {' '}
        </div>
        <div className="w-full relative flex items-center">
          <Image src={awardsBanner} height={1200} />
          <div
            className="absolute z-20 bg-whitish ml-5 md:ml-10 py-2 md:py-3 lg:py-5 px-5 md:px-10 lg:px-20 lg:ml-20 text-brownish text-base md:text-xl lg:text-3xl font-bold"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Awards and Recogntion
          </div>
        </div>

        <div
          className="mx-12 lg:mx-28 flex flex-col md:space-y-5 mt-8"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          <div
            className="z-20 bg-grayish py-12 px-16 text-stonish text-sm w-full flex flex-col space-y-4 my-4"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            <p>
              When our hard work and commitment to exceptional service gets
              recognised through an industry award or a letter from one of our
              partners or clients, it makes us proud and pushes us to strive to
              deliver even further more innovation, more personalised service
              and more value for money.
            </p>
            <p>
              Over the years, some of the awards and recognitions weve received
              include:
            </p>
          </div>
          <div className="z-20 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:space-x-5 pt-4">
            {[awardObj1, awardObj2, awardObj3, awardObj4].map((award, i) => (
              <div key={i + 1} className="flex flex-col space-y-5 w-60 mx-auto bg-white">
                <div className="h-52 border-golden border-1 flex items-center">
                  <div className="h-1/3 relative">
                    <Image src={award.awardCardImg} />
                  </div>
                </div>
                <div className="text-brownish text-lg font-bold">
                  {award.title}
                </div>
              </div>
            ))}
          </div>
          <div className="z-20 grid mt-5 lg:mt-0 gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:flex lg:flex-row lg:justify-around lg:space-x-5 pt-4 lg:px-32">
            {[awardObj5, awardObj6, awardObj7].map((award, i) => (
              <div key={i + 1} className="flex flex-col space-y-5 w-60 mx-auto bg-white">
                <div className="h-52 border-golden border-1 flex items-center">
                  <div className="h-1/3 relative">
                    <Image src={award.awardCardImg} />
                  </div>
                </div>
                <div className="text-brownish text-lg font-bold">
                  {award.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Awards

const awardObj1 = {
  title: 'Facilities Manager of the Year 2017',
  awardCardImg: award1,
}
const awardObj2 = {
  title: 'Cleaning Company of the Year 2016',
  awardCardImg: award2,
}
const awardObj3 = {
  title: 'Facilities Manager of the Year 2015',
  awardCardImg: award3,
}
const awardObj4 = {
  title: 'Health and Safety Initiative of the Year 2014',
  awardCardImg: award4,
}
const awardObj5 = {
  title: 'Innovative use of IT in FM 2013',
  awardCardImg: award5,
}
const awardObj6 = {
  title: 'Innovative use of IT in FM 2012',
  awardCardImg: award6,
}
const awardObj7 = {
  title: 'Education & Development Initiative 2011',
  awardCardImg: award7,
}
