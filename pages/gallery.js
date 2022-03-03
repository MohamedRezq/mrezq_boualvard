import Image from 'next/image'
import React from 'react'
import galleryBanner from './../assets/galleryBanner.jpg'
import gallery1 from './../assets/propertyServicesImg.jpg'
import gallery2 from './../assets/hard_services.jpg'
import gallery3 from './../assets/historyBanner.jpg'
import gallery4 from './../assets/companyProfile3.jpg'
import gallery5 from './../assets/gallery5.jpg'
import gallery6 from './../assets/social_1_1.jpg'
import gallery7 from './../assets/management_services.jpg'
import gallery8 from './../assets/social_2_2.jpg'
import gallery9 from './../assets/social_2_1.jpg'
import Head from 'next/head'
import MainTitle from '../components/MainTitle'

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Gallery - Boualvard</title>
      </Head>
      <div className="w-full">
        <Image src={galleryBanner} height={1300} />
      </div>
      <div
        className="mx-12 lg:mx-28 flex flex-col md:space-y-5"
        style={{ fontFamily: 'Space Grotesk' }}
      >
        <MainTitle title="Gallery" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-10 pt-4">
          {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9].map((img, i) => (
            <div className="h-72 md:h-96 relative" key={i+1}>
              <Image src={img} layout="fill" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Gallery
