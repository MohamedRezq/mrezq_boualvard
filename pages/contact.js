import Image from 'next/image'
import React from 'react'
import contactBanner from './../assets/contactBanner.jpg'
import contactDetails from './../assets/contactDetails.jpg'
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

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Boualvard</title>
      </Head>
      <div className="w-full">
        <Image src={contactBanner} height={1400}/>
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
                  <i class="fas fa-phone-alt text-goldenLight"></i>
                  </div>
                  <div>
                      <p>Tel: +966 12 660 6699</p>
                      <p>Fax: +966 50 004 9137</p>
                  </div>
                </div>
                <div className="flex space-x-10">
                  <div>
                  <i class="far fa-envelope text-goldenLight"></i>
                  </div>
                  <div>
                      <p>info@boualvard.com</p>
                      <p>y.shaheen@boualvard.com</p>
                  </div>
                </div>
                <div className="flex space-x-10">
                  <div>
                  <i class="fas fa-map-marker-alt text-goldenLight"></i>
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
