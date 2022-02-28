import Image from 'next/image'
import React from 'react'
import clientsBanner from './../assets/clientsBanner.jpg'
import client_1 from './../assets/client_1.png'
import client_2 from './../assets/client_2.png'
import client_3 from './../assets/client_3.png'
import client_4 from './../assets/client_4.png'
import client_5 from './../assets/client_5.png'
import client_6 from './../assets/client_6.png'
import client_7 from './../assets/client_7.png'
import client_8 from './../assets/client_8.jpg'
import client_9 from './../assets/client_9.jpg'
import client_10 from './../assets/client_10.png'
import client_11 from './../assets/client_11.png'
import client_12 from './../assets/client_12.png'
import client_13 from './../assets/client_13.jpg'
import client_14 from './../assets/client_14.png'
import client_15 from './../assets/client_15.png'

import Head from 'next/head'

const Awards = () => {
  return (
    <>
      <Head>
        <title>Our Clients - Boualvard</title>
      </Head>
      <div className="relative overflow-hidden">
        <div id="rightShape" className="top-0 -right-16 w-32 h-[96rem] hidden lg:block">
          {' '}
        </div>
        <div id="leftShape" className="top-20 -left-16 w-56 h-[96rem] hidden lg:block">
          {' '}
        </div>
        <div className="w-full relative flex items-center">
          <Image src={clientsBanner} height={500} />
          <div
            className="absolute z-20 bg-whitish ml-5 md:ml-10 py-3 lg:py-5 px-10 lg:px-20 lg:ml-20 text-brownish text-lg md:text-xl lg:text-3xl font-bold"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Our Clients
          </div>
        </div>

        <div
          className="mx-12 lg:mx-28 flex flex-col md:space-y-5 mt-8"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          <div className="z-20 grid mt-5 lg:mt-0 gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 pt-4 justify-center">
            {[
              client_1,
              client_2,
              client_3,
              client_4,
              client_5,
              client_6,
              client_7,
              client_8,
              client_9,
              client_10,
              client_11,
              client_12,
            ].map((clientImg, i) => (
              <div
                key={i + 1}
                className="relative border-golden border-1 w-40 h-40 flex items-center mx-auto"
              >
                <Image src={clientImg} layout="fill" />
              </div>
            ))}
          </div>
          <div className="lg:mx-auto z-20 grid mt-5 lg:mt-0 gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-4 justify-center">
            {[
              client_13,
              client_14,
              client_15
            ].map((clientImg, i) => (
              <div
                key={i + 1}
                className="relative border-golden border-1 w-40 h-40 flex items-center mx-auto"
              >
                <Image src={clientImg} layout="fill" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Awards
