import Image from 'next/image'
import React from 'react'
import ceoBanner from './../assets/ceoBanner.jpg'
import ceoImg from './../assets/ceoImg.jpg'
import Head from 'next/head'
import MainTitle from '../components/MainTitle'

const ceoMsgTitle =
  'When we share a passionate commitment to a common goal …Anything is possible'
const ceoMsgPassage11 =
  ' I would like to begin my message by expressing my heartfelt gratitude to our customers who made it possible for Mazola to prosper for 110 years! As we celebrate this remarkable anniversary, the responsibility towards our loyal customers and future acquired consumers grows bigger, and we grant our promise to continue providing the best high-end quality products and services in the Saudi market in the hopes of expanding to a wider range of customers around the world.'
const ceoMsgPassage12 =
  'Mazola, one of the worlds leading food brands, has achieved over a century, the highest quality of products ranging from traditional flagship Mazola Corn Oil to the most recent launched sauces range, salad dressings and margarine and many more... As we expand in the world, we maintain our operations in the Middle East, Levant and North Africa steered by'
const ceoMsgPassage21 =
  'Basateen Foods Saudi Arabia (BFSA) with head office based in Jeddah, Saudi Arabia while targeting a wider geographic expansion and more collaborations in USA, East Asia, and Europe.'
const ceoMsgPassage22 =
  ' Our BFSA plant is located at light industrial park, Yanbu Al-Sinaiyah, Kingdom of Saudi Arabia equipped with state of art manufacturing facilities with corn oil receiving and storage facility (3 tanks 2500 MT each) at seaport, a corn oil refinery, Mayonnaise production and packaging line, a fully automatic oil filling line, three semi-automatic oil filling lines to name the few. '
const ceoMsgPassage23 =
  'Only through our core values and commitment, we will greatly achieve this goal in the near future! Additionally, we are looking ahead on accelerating the geographic expansion of our growth strategy while continuing to build on the strength of our brand through excellence in our brand quality, exceptional customer satisfaction, integrity, and transparency; for the reason that our customers and employees are the center of our successful journey. Finally, we are incredibly excited about the future and truly believe the best of Mazola is yet to come. '
const ceoMsgPassage24 =
  'Finally, and on-behalf of all the team members who made our achievements possible, I would like to expand my appreciation and gratefulness to the family members of Mazola who made it possible for us to become a sustainable, respected, and available known brand in the Food industry.'

const ceo = () => {
  return (
    <>
      <Head>
        <title>CEO - Boualvard</title>
      </Head>
      <div className="w-full">
        <Image src={ceoBanner} height={475} />
      </div>
      <div
        className="mx-12 lg:mx-28 flex flex-col space-y-5"
        style={{ fontFamily: 'Space Grotesk' }}
      >
        <MainTitle title="Chairman and CEO&rsquo;s message" />
        <div className="w-full flex flex-col md:flex-row md:space-x-[10vw] xl:space-x-[15vw]">
          <div className="w-full hidden md:block md:w-6/12 lg:w-5/12 relative">
            <Image src={ceoImg}  />
          </div>
          <div className="w-full md:hidden mr-3">
            <Image src={ceoImg} />
          </div>
          <div className="w-full md:w-6/12 lg:w-7/12">
            <div className="flex flex-col justify-between h-full">
              <div className="text-golden text-2xl md:text-3xl xl:text-4xl mt-10 md:mt-0 mb-10 md:mb-0">
                {ceoMsgTitle}
              </div>
              <div className="flex flex-col space-y-5">
                <div className="text-stonish text-sm lg:text-sm xl:text-base">{ceoMsgPassage11}</div>
                <div className="text-stonish text-sm lg:text-sm xl:text-base">{ceoMsgPassage12}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-stonish text-sm md:text-xs lg:text-sm xl:text-base flex flex-col space-y-5 py-5">
          <div>{ceoMsgPassage21}</div>
          <div>{ceoMsgPassage22}</div>
          <div>{ceoMsgPassage23}</div>
          <div>{ceoMsgPassage24}</div>
        </div>
        <div className='text-sm text-stonish flex flex-col'>
            <div>Yours Truly,</div>
            <div className='font-bold'>Abdullah Saeed Binzagr</div>
            <div>Chairman and CEO</div>
        </div>
      </div>
    </>
  )
}

export default ceo
