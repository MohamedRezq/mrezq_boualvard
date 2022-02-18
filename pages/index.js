import Head from 'next/head'
import Image from 'next/image'
import Banner from '../sections/home/Banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>Boualvard</title>
      </Head>
      <div className='lg:mx-28 flex flex-col space-y-5'>
        <Banner />
      </div>
    </>
  )
}
