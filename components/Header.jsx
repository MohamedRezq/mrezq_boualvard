import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import logoImg from './../assets/boualvard_logo.png'

const servicesOptionsMenu = [
  'Hard Services',
  'Management Services',
  'Soft Services',
  'Health & Safety Services',
  'Property Management Services',
  'Sterilisation & Disinfection Services',
]
const aboutOptionsMenu = [
  'Our Vision',
  'Our Mission',
  'Our Values'
]
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div className="header flex flex-col lg:mx-28 pb-3 mb-10">
      <div className="w-full flex justify-around lg:justify-center items-center my-5">
        <div className="logoSection py-8 relative h-10 w-36 lg:h-16 lg:w-48">
          <Link href="/">
            <a>
              <Image src={logoImg} layout="fill" />
            </a>
          </Link>
        </div>
        <div
          className="mobileDrawerBtn block md:hidden"
          onClick={() => {
            setMobileOpen(!mobileOpen)
            console.log(mobileOpen)
          }}
        >
          {!mobileOpen && <i className="fas fa-bars text-golden fa-2x"></i>}
          {mobileOpen && <i className="text-golden fa-2x fas fa-times"></i>}
        </div>
        {mobileOpen && <MobileNavLinks />}
      </div>
      <div>
        <hr className="border-1 border-golden border-opacity-50" />
      </div>
      <NavLinks />
    </div>
  )
}

const DropDown = ({ name, optionsMenu }) => {
  const [reload, setReload] = useState(false);
  useEffect(() => {
    
  }, [reload])
  
  const router = useRouter()
  return (
    <>
      <select
        className="w-52 md:mt-0 md:font-medium text-brownish md:text-base lg:text-lg xl:text-2xl block py-2 pr-4"
        style={{ fontFamily: 'Space Grotesk' }}
        onChange={(e) => {
          if(name === "OUR SERVICES") {router.push(`/services`)}
          else if(name === "ABOUT US") {router.push(`/about`)}
        }}
        value={name}
      >
        <option
          selected="selected"
          className="text-brownish md:text-base lg:text-lg xl:text-2xl block py-2 pr-4"
        >
          {name}
        </option>
        {optionsMenu.map((opt, i) => (
          <option key={i + 1} className="text-base">
            {opt}
          </option>
        ))}
      </select>
    </>
  )
}
export default Header

const NavLinks = ({}) => {
  return (
    <div
      className="mainMenu hidden w-full md:block md:w-auto py-6 mx-auto lg:mx-0"
      id="mobile-menu"
    >
      <ul
        style={{ fontFamily: 'Space Grotesk' }}
        className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium text-brownish md:text-base lg:text-lg xl:text-2xl"
      >
        <li>
          <Link href="/">
            <a className="block py-2 pr-4">HOME</a>
          </Link>
        </li>
        <DropDown name="ABOUT US" optionsMenu={aboutOptionsMenu} />
        <DropDown name="OUR SERVICES" optionsMenu={servicesOptionsMenu} />
        <li>
          <Link href="/contact">
            <a className="block py-2 pr-4 pl-3">CONTACT US</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="block py-2 pr-4 pl-3">COMPANY</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

const MobileNavLinks = ({}) => {
  return (
    <div className="bg-white absolute top-28 left-0 flex flex-col w-full pb-8 lg:hidden z-40">
      <div className="flex-1 flex flex-col items-center text-xl">
        <ul
          style={{ fontFamily: 'Space Grotesk' }}
          className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium text-brownish md:text-base lg:text-lg xl:text-2xl"
        >
          <li>
            <Link href="/">
              <a className="block py-2 pl-1">HOME</a>
            </Link>
          </li>
          <DropDown name="ABOUT US" optionsMenu={aboutOptionsMenu} />
          <DropDown name="OUR SERVICES" optionsMenu={servicesOptionsMenu} />
          <li>
            <Link href="/contact">
              <a className="block py-2 pl-1">CONTACT US</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="block py-2 pl-1">COMPANY</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
