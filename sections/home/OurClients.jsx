import React from 'react'
import client1 from "./../../assets/client_1.png"
import client2 from "./../../assets/client_2.png"
import client3 from "./../../assets/client_3.png"
import client4 from "./../../assets/client_4.png"
import client5 from "./../../assets/client_5.png"
import client6 from "./../../assets/client_6.png"
import client7 from "./../../assets/client_7.png"
import client8 from "./../../assets/client_8.png"
import client9 from "./../../assets/client_9.png"
import client10 from "./../../assets/client_10.png"
import client11 from "./../../assets/client_11.png"
import client12 from "./../../assets/client_12.png"
import client13 from "./../../assets/client_13.png"
import client14 from "./../../assets/client_14.png"
import client15 from "./../../assets/client_15.png"
import Image from 'next/image'

const OurClients = () => {
  return (
<div>
    <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 relative'>
        <div style={{border: "solid 1px #C3922C"}}><Image src={client1} /></div>
        <div style={{border: "solid 1px #C3922C"}}><Image src={client2} /></div>
        <div style={{border: "solid 1px #C3922C"}}><Image src={client3} /></div>
        <div style={{border: "solid 1px #C3922C"}}><Image src={client4} /></div>
        <div style={{border: "solid 1px #C3922C"}}><Image src={client5} /></div>
        <div style={{border: "solid 1px #C3922C"}}><Image src={client6} /></div>
        <div style={{border: "solid 1px #C3922C"}}><Image src={client7} /></div>
        <div style={{border: "solid 1px #C3922C"}}><Image src={client8} /></div>
        <div style={{border: "solid 1px #C3922C"}}><Image src={client9} /></div>
        <div style={{border: "solid 1px #C3922C"}}><Image src={client10} /></div>
        <div style={{border: "solid 1px #C3922C"}}><Image src={client11} /></div>
        <div style={{border: "solid 1px #C3922C"}}><Image src={client12} /></div>
    </div>
     <div className='flex justify-center pt-10'>
     <button className="mx-auto px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors text-sm transform bg-golden">
        VIEW MORE
     </button>
     </div>
</div>
  )
}

export default OurClients