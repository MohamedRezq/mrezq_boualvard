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

const services = () => {
  return (
    <>
      <Head>
        <title>Services - Boualvard</title>
      </Head>
      <div className="w-full">
        <Image src={servicesBanner} />
      </div>
      <div
        className="mx-12 lg:mx-28 flex flex-col space-y-5"
        style={{ fontFamily: 'Space Grotesk' }}
      >
          <MainTitle title="Our Services" />
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
          <ServiceCardEnquiry title="Hard Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={hardServicesImg} />
          <ServiceCardEnquiry title="Management Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={managementServicesImg} />
          <ServiceCardEnquiry title="Soft Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={softServicesImg} />
          <ServiceCardEnquiry title="Health &#38; Safety Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={healthServicesImg} />
          <ServiceCardEnquiry title="Property Management Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={propertyServicesImg} />
          <ServiceCardEnquiry title="Sterilisation &#38; Disinfection Services" content="we are specialized in high-quality cleaning services to deliver cleanest work environment." img={sterServicesImg} />
          </div>
      </div>
    </>
  )
}

export default services
