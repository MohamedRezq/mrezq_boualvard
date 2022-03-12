import Image from 'next/image'
import React from 'react'
import servicesBanner from './../assets/servicesBanner.jpg'
import Head from 'next/head'
import ServiceCardEnquiry from '../components/ServiceCardEnquiry'
import hardServicesImg from "./../assets/hard_services.jpg"
import softServicesImg from "./../assets/soft_services.jpg"
import managementServicesImg from "./../assets/management_services.jpg"
import healthServicesImg from "./../assets/healthServicesImg.jpg"
import propertyServicesImg from "./../assets/propertyServicesImg.jpg"
import sterServicesImg from "./../assets/sterServicesImg.jpg"
import MainTitle from '../components/MainTitle'
const servicesOptionsMenu = ["Hard Services", "Management Services", "Soft Services", "Health & Safety Services", "Property Management Services", "Sterilisation & Disinfection Services"]

const services = () => {
  return (
    <>
      <Head>
        <title>Services - Boualvard</title>
      </Head>
      <div className="w-full relative">
        <Image src={servicesBanner} layout="responsive" height={700}  />
      </div>
      <div
        className="mx-10 lg:mx-28 flex flex-col space-y-5"
        style={{ fontFamily: 'Space Grotesk' }}
      >
          <MainTitle title="Our Services" />
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-4 mx-4 sm:mx-0'>
          <ServiceCardEnquiry id="HardServices" title="Hard Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={hardServicesImg} />
          <ServiceCardEnquiry id={servicesOptionsMenu[1]} title="Management Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={managementServicesImg} />
          <ServiceCardEnquiry id={servicesOptionsMenu[2]} title="Soft Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={softServicesImg} />
          <ServiceCardEnquiry id={servicesOptionsMenu[3]} title="Health &#38; Safety Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={healthServicesImg} />
          <ServiceCardEnquiry id={servicesOptionsMenu[4]} title="Property Management Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={propertyServicesImg} />
          <ServiceCardEnquiry id={servicesOptionsMenu[5]} title="Sterilisation &#38; Disinfection Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={sterServicesImg} />
          </div>
      </div>
    </>
  )
}

export default services
