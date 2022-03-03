import Image from 'next/image'
import React from 'react'
import contactBanner from './../assets/contactBanner.jpg'
import contactDetails from './../assets/contactDetails.jpg'
import Head from 'next/head'
import MainTitle from '../components/MainTitle'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Boualvard</title>
      </Head>
      <div className="w-full">
        <Image src={contactBanner} height={1300}/>
      </div>
      <div
        className="mx-12 lg:mx-28 flex flex-col md:space-y-5"
        style={{ fontFamily: 'Space Grotesk' }}
      >
        <MainTitle title="Contact Us" />
        <div className="flex flex-col space-y-20 pt-12">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="hidden md:block md:w-5/12 relative">
              <Image src={contactDetails} layout="responsive" height={1000}  />
            </div>
            <div className="md:hidden relative">
              <Image src={contactDetails} layout="responsive"  />
            </div>
            <div className="md:w-1/12"></div>
            <div className="md:w-5/12 mt-10 md:mt-0 pb-8 flex flex-col justify-start items-start">
              <div className="text-brownish text-lg font-bold mb-8">
                Main Office
              </div>
              <div className="text-base text-stonish flex flex-col space-y-6">
                <div className="flex space-x-10">
                  <div>
                  <i className="fas fa-phone-alt text-goldenLight"></i>
                  </div>
                  <div>
                      <p>Tel: +966 12 660 6699</p>
                      <p>Fax: +966 50 004 9137</p>
                  </div>
                </div>
                <div className="flex space-x-10">
                  <div>
                  <i className="far fa-envelope text-goldenLight"></i>
                  </div>
                  <div>
                      <p>info@boualvard.com</p>
                      <p>y.shaheen@boualvard.com</p>
                  </div>
                </div>
                <div className="flex space-x-10">
                  <div>
                  <i className="fas fa-map-marker-alt text-goldenLight"></i>
                  </div>
                  <div>
                      <p>3rd floor Office #302 Mohamadia Tower,</p>
                      <p>Building No. 4392 Prince Mohammed Bin Abdulaziz Branch Rd, Ar Rawdah, Jeddah 23432, Kingdom of Saudi Arabia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/12"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
