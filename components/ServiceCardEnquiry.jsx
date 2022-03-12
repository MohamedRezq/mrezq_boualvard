import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import hardServicesImg from './../assets/hard_services.jpg'

const ServiceCardEnquiry = ({
  title = 'Hard Services',
  img = hardServicesImg,
  content = 'we are specialized in high-quality cleaning services to deliver cleanest work environment.',
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col space-y-3 mb-16 w-72 sm:w-80 mx-auto" style={{ height: '300px' }}>
      <div className="relative h-72">
        <Image src={img} layout="fill" />
      </div>
      <div className="text-brownish font-bold text-sm pt-2">{title}</div>
      <div className="text-stonish text-xs">{content}</div>
      <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors text-xs transform bg-golden w-1/2" onClick={() => {router.push('/enquiry')}}>
        ENQUIRE NOW
      </button>
    </div>
  )
}

export default ServiceCardEnquiry
