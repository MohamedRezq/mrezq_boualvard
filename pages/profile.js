import Image from 'next/image'
import React from 'react'
import profileBanner from './../assets/profileBanner.jpg'
import companyProfile1 from './../assets/companyProfile1.jpg'
import companyProfile2 from './../assets/companyProfile2.jpg'
import companyProfile3 from './../assets/companyProfile3.jpg'
import Head from 'next/head'
import MainTitle from '../components/MainTitle'

const Profile = () => {
  return (
    <>
      <Head>
        <title>Company Profile - Boualvard</title>
      </Head>
      <div className="w-full">
        <Image src={profileBanner} height={475}/>
      </div>
      <div
        className="mx-12 lg:mx-28 flex flex-col md:space-y-5"
        style={{ fontFamily: 'Space Grotesk' }}
      >
        <MainTitle title="Company Profile" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-20 pt-12">
          <div className='h-96 md:h-[32rem] relative'>
              <Image src={companyProfile1} layout="fill" />
          </div>
          <div className='h-96 md:h-[32rem] relative'>
              <Image src={companyProfile2} layout="fill" />
          </div>
          <div className='h-96 md:h-[32rem] relative'>
              <Image src={companyProfile3} layout="fill" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
