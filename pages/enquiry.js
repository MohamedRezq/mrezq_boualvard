import Image from 'next/image'
import React, { useState } from 'react'
import enquiryBanner from './../assets/enquiryBanner.jpg'
import Head from 'next/head'
import MainTitle from '../components/MainTitle'
import ReactFlagsSelect from 'react-flags-select'
import Countries from './../assets/CountryCodes.json'
import ReCAPTCHA from 'react-google-recaptcha'

const Enquiry = ({ newObj, CountryCodes }) => {
  const [selectedFlag, setSelectedFlag] = useState('')
  return (
    <>
      <Head>
        <title>Enquiry - Boualvard</title>
      </Head>
      <div className="w-full">
        <Image src={enquiryBanner} height={900} />
      </div>
      <div
        className="mx-12 lg:mx-28 flex flex-col md:space-y-5"
        style={{ fontFamily: 'Space Grotesk' }}
      >
        <MainTitle title="Send an Enquiry" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="w-full">
            <SelectDiv title="Faculty Management Solutions" />
          </div>
          <div className="w-full">
            <SelectDiv title="Community" />
          </div>
          <div className="w-full">
            <InputDiv placeholder="First Name" type="text" />
          </div>
          <div className="w-full">
            <InputDiv placeholder="Last Name" type="text" />
          </div>
          <div className="w-full">
            <InputDiv placeholder="Email" type="email" />
          </div>
          <div className="w-full flex">
            <div className="w-1/3 h-12">
              <ReactFlagsSelect
                selected={selectedFlag}
                onSelect={(code) => setSelectedFlag(code)}
                countries={CountryCodes}
                customLabels={newObj}
                searchable
                optionsSize={12}
                selectedSize={13}
                placeholder=" "
              ></ReactFlagsSelect>
            </div>
            <div className="w-2/3">
              <InputDiv placeholder="Phone Number" type="tel" />
            </div>
          </div>
          <div className="w-full md:col-span-2">
            <textarea
              name="message"
              placeholder="Message"
              className="block h-32 appearance-none text-stonish w-full bg-white rounded-sm pl-4 py-3 pr-8 cursor-pointer focus:outline-none border border-golden hover:border-goldenLight"
              type="text"
              style={{ cursor: 'text' }}
            ></textarea>
          </div>
          <div className="w-full md:col-span-2 flex flex-col space-y-5 md:flex-row items-center sm:justify-between">
            <div className='md:w-1/3'>
              <ReCAPTCHA size="normal" sitekey="6LduRKIeAAAAADh3vtRYqquH6nGXI963lVlPQ754" />
            </div>
            <div className='md:w-1/3'></div>
            <div className='w-full md:w-1/3'>
              <button className="w-full  font-medium tracking-wide text-white capitalize transition-colors text-sm transform bg-golden hover:bg-goldenLight px-12 py-3">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Enquiry

const SelectDiv = ({
  title = 'Faculty Management Solutions',
  options = ['option 1', 'option 2', 'option 3'],
  name = 'input',
}) => {
  return (
    <div>
      <div className="flex relative w-full">
        <select
          name={name}
          className="block appearance-none h-12 text-stonish w-full bg-white rounded-sm pl-4 py-3 pr-8 cursor-pointer focus:outline-none border border-golden hover:border-goldenLight"
        >
          <option>{title}</option>
          {options.map((optionItem, i) => (
            <option value={optionItem} key={i}>
              {optionItem}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-golden">
          <svg
            className="fill-current h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

const InputDiv = ({
  placeholder = 'First Name',
  type = 'text',
  name = 'input',
}) => {
  return (
    <div>
      <div className="flex relative w-full">
        <input
          name={name}
          placeholder={placeholder}
          className="block h-12 appearance-none text-stonish w-full bg-white rounded-sm pl-4 py-3 pr-8 cursor-pointer focus:outline-none border border-golden hover:border-goldenLight"
          type={type}
          style={{ cursor: 'text' }}
        />
      </div>
    </div>
  )
}

export async function getStaticProps({}) {
  let CountryCodes = []
  Countries.map((country, i) => {
    CountryCodes.push(country.primary)
  })
  //console.log('codes: ', CountryCodes)
  var mapped = Countries.map((item) => ({ [item.primary]: item.secondary }))
  //console.log('mappes: ', mapped)
  var newObj = Object.assign({}, ...mapped)
  //console.log(newObj)
  return {
    props: {
      newObj,
      CountryCodes,
    },
  }
}
