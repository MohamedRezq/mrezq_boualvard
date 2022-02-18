import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../components/Carousel'
import MainTitle from '../components/MainTitle'
import Banner from '../sections/home/Banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>Boualvard</title>
      </Head>
      <div className='lg:mx-28 flex flex-col space-y-5' style={{ fontFamily: 'Space Grotesk' }}>
        <Banner />
        <MainTitle title="Our Services" />
        <Carousel />
      </div>
      
    </>
  )
}
