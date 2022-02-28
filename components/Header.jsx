import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logoImg from './../assets/boualvard_logo.png'

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
          {!mobileOpen && <i class="fas fa-bars text-golden fa-2x"></i>}
          {mobileOpen && <i class="text-golden fa-2x fas fa-times"></i>}
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

const DropDown = ({ name }) => {
  return (
    <>
      <select
        className="md:mt-0 md:font-medium text-brownish md:text-base lg:text-lg xl:text-2xl block py-2 pr-4"
        style={{ fontFamily: 'Space Grotesk' }}
      >
        <option className="text-brownish md:text-base lg:text-lg xl:text-2xl block py-2 pr-4">
          {name}
        </option>
        {[1, 2, 3, 4].map((opt, i) => (
          <option key={i + 1}>
            {name} {opt}
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
            <Link href="#">
              <a className="block py-2 pl-1">HOME</a>
            </Link>
          </li>
          <DropDown name="ABOUT US" />
          <DropDown name="OUR SERVICES"/>
          <li>
            <Link href="#">
              <a className="block py-2 pl-1">CONTACT US</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="block py-2 pl-1">COMPANY</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

{
  /*

<div className="flex items-center h-20 px-6 justify-between border-b border-gray-300 bg-blue-800 text-white relative z-50">
      <div className="h-8">
        <img
          src="https://gustui.s3.amazonaws.com/Gust+Logo+White.png"
          className="h-full"
        />
      </div>
      ///////// Normal Nav Links
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-white text-3xl cursor-pointer lg:hidden"
      />
      {mobileOpen && (
        <div className="bg-blue-800 absolute top-full left-0 flex flex-col w-full pb-8 lg:hidden">
          <div className="flex-1 flex flex-col items-center text-xl">
            <a
              href="#"
              className="no-underline px-2 my-2 text-gray-200 font-medium hover:text-blue-400"
            >
              Home
            </a>
            <a
              href="#"
              className="no-underline px-2 my-2 font-medium hover:text-blue-400"
            >
              Dogs
            </a>
            <a
              href="#"
              className="no-underline px-2 my-2 text-gray-200 font-medium hover:text-blue-400"
            >
              Bones
            </a>
            <a
              href="#"
              className="no-underline px-2 my-2 text-gray-200 font-medium hover:text-blue-400"
            >
              Settings
            </a>
            <Button text="Add Food" size="sm" className="my-2" />
            <div className="my-2 flex justify-center">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="text-2xl mx-2 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faBell}
                className="text-2xl mx-2 cursor-pointer"
              />
            </div>
            <Avatar
              image="https://picsum.photos/id/237/200/200.jpg"
              status="online"
              className="cursor-pointer my-2"
            />
          </div>
        </div>
      )}
    </div>

*/
}
