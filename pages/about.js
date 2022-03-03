import Image from 'next/image'
import React from 'react'
import aboutBanner from './../assets/aboutBanner.jpg'
import aboutVision from './../assets/aboutVision.jpg'
import aboutValues from './../assets/aboutValues.jpg'
import aboutMission from './../assets/aboutMission.jpg'
import Head from 'next/head'
import MainTitle from '../components/MainTitle'

const aboutPassage11 =
  "Our company Basateen Foods Saudi Arabia Ltd. (formerly Best Foods) was established more than thirty years ago as a result of a partnership between Best Foods International and Binzagr for the Production of High-Quality Food, which bears the brand of famous brands that have been considered one of the world's most famous food brands in the field of food products in the world for more than 100 years."
const aboutPassage12 =
  'Our factory is refining corn oil and sunflower oil imported from abroad according to the highest international technologies and specifications, which qualified our company to obtain many well and deserved international quality certificates (ISO), in addition to a certificate of appreciation and honor from the Royal Commission of Yanbu in the field of safety and environmental protection.'
const aboutPassage13 =
  'The refined oil in our factory is used in the production of pure corn oil and pure sunflower oil, in addition to the production of other categories of Mayonnaise, Vegetable Ghee, Margarine and Salad Dressing; considering the unique characteristic of being the only brand that use pure corn oil in the production of these categories.'
const aboutPassage14 =
  'Our company is fulfilling the needs of the domestic market and exports as well to all GCC Countries, Jordan, Lebanon, Palestine, Syria, Iraq, Yemen, North Africa, Egypt, Libya, Sudan, Mauritania, Djibouti and Comoros.'
const ourVisionPassage =
  'We are committed to providing food products with the highest international quality standards based on research and developments in the food production field.'
const ourMissionPassage = 
  'With a legacy of more than 100 years, our mission is to maintain leadership in the food production field by focusing on research and development to diversify our quality product offering. Investment in our human capital is one of our immediate priorities while providing a nurturing and sound work environment which respects all regulations and preserves the environment around us.'
const ourValuesPassage = 
  'Heritage: We take pride in our past which we constantly build on for our future. Transparency: Whether it is in our production methods or the way we carry our business, Transparency is always our motto. Integrity: We never compromise on our integrity and this has positively reflected in the quality level of our global products. Consumer Satisfaction: We innovate and develop to achieve satisfaction, respect and loyalty of our consumers in all the markets that we are present in.'

const services = () => {
  return (
    <>
      <Head>
        <title>About - Boualvard</title>
      </Head>
      <div className="w-full ">
        <Image src={aboutBanner} height={550} />
      </div>
      <div
        className="mx-12 lg:mx-28 flex flex-col space-y-5"
        style={{ fontFamily: 'Space Grotesk' }}
      >
        <MainTitle title="About Us" />
        <div className="flex flex-col space-y-5 text-stonish text-base md:w-2/3">
          <div>{aboutPassage11}</div>
          <div>{aboutPassage12}</div>
          <div>{aboutPassage13}</div>
          <div>{aboutPassage14}</div>
        </div>
        <div className="flex flex-col space-y-20 pt-24">
          <div className="flex flex-col-reverse md:flex-row justify-between">
            <div className="md:w-5/12 relative">
              <Image src={aboutVision} layout="responsive" />
            </div>
            <div className="md:w-1/12"></div>
            <div className="md:w-5/12 pb-8 flex justify-center items-center">
              <div className="flex flex-col justify-around">
                <MainTitle title="Our Vision" />
                <div className="text-base text-stonish">{ourVisionPassage}</div>
              </div>
            </div>
            <div className="md:w-1/12"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-5/12 pb-8 flex justify-center items-center">
              <div className="flex flex-col justify-around">
                <MainTitle title="Our Mission" />
                <div className="text-base text-stonish">{ourMissionPassage}</div>
              </div>
            </div>
            <div className="md:w-1/12"></div>
            <div className="md:w-5/12 relative">
              <Image src={aboutMission} layout="responsive" />
            </div>
            <div className="md:w-1/12"></div>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between">
            <div className="md:w-5/12 relative">
              <Image src={aboutValues} layout="responsive" />
            </div>
            <div className="md:w-1/12"></div>
            <div className="md:w-5/12 pb-8 flex justify-center items-center">
              <div className="flex flex-col justify-around">
                <MainTitle title="Our Values" />
                <div className="text-base text-stonish">{ourValuesPassage}</div>
              </div>
            </div>
            <div className="md:w-1/12"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default services
