import Image from 'next/image'
import React from 'react'
import hardServicesImg from './../assets/hard_services.jpg'

const ServiceCardEnquiry = ({
  title = 'Hard Services',
  img = hardServicesImg,
  content = 'we are specialized in high-quality cleaning services to deliver cleanest work environment.',
}) => {
  return (
    <div className="flex flex-col space-y-3 mx-2 mb-16" style={{ height: '300px' }}>
      <div className="relative h-60">
        <Image src={img} layout="fill" />
      </div>
      <div className="text-brownish font-bold text-sm pt-2">{title}</div>
      <div className="text-stonish text-xs">{content}</div>
      <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors text-xs transform bg-golden w-1/2">
        ENQUIRE NOW
      </button>
    </div>
  )
}

export default ServiceCardEnquiry
