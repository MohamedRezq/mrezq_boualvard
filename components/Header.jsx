import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoImg from './../assets/boualvard_logo.png'

const Header = () => {
  return (
    <div className="header flex flex-col mx-28 pb-3">
      <div className="logoSection flex justify-center align-middle py-8">
        <Link href="/">
          <a>
            <Image src={logoImg} />
          </a>
        </Link>
      </div>
      <div>
        <hr className="border-1 border-golden border-opacity-50" />
      </div>
      <div
        className="mainMenu hidden w-full md:block md:w-auto py-6"
        id="mobile-menu"
      >
        <ul
          style={{ fontFamily: 'Space Grotesk' }}
          className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium text-brownish text-2xl"
        >
          <li>
            <Link href="#">
              <a className="block py-2 pr-4">HOME</a>
            </Link>
          </li>
          <DropDown name="ABOUT US" />
          <DropDown name="OUR SERVICES" />
          <li>
            <Link href="#">
              <a className="block py-2 pr-4 pl-3">CONTACT US</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="block py-2 pr-4 pl-3">COMPANY</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

const DropDown = ({name}) => {
  return (
    <>
    <select className="md:mt-0 md:font-medium text-brownish text-2xl block py-2 pr-4" style={{ fontFamily: 'Space Grotesk' }}>
    <option className="text-brownish text-2xl block py-2 pr-4">{name}</option>
    {[1,2,3,4].map((opt, i) => (
      <option key={i+1}>{name}{" "}{opt}</option>
    ))}
  </select>
    </>
  )
}
export default Header
