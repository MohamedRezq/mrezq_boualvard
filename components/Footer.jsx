import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div>
      <div>
        <hr className="border-1 border-golden border-opacity-30" />
      </div>
      <div
        className="bg-golden bg-opacity-10 grid grid-cols-1 gap-y-5 xl:gap-y-0 md:grid-cols-2 xl:grid-cols-4 py-16 px-16 xl:px-32 ml-8 xl:ml-16"
        style={{ fontFamily: 'Space Grotesk' }}
      >
        <div className="flex flex-col space-y-3">
          <div className="md:font-medium text-2xl text-golden py-3">
            Boualvard
          </div>
          <div>
            <Link href="/">
              <a className="text-xl text-stonish">Company Profile</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="text-xl text-stonish">Services</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="text-xl text-stonish">Clients</a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="md:font-medium text-2xl text-golden py-3">
            Online Services
          </div>
          <div>
            <Link href="/">
              <a className="text-xl text-stonish">Join Us</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="text-xl text-stonish">Contact Us</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="text-xl text-stonish">Enquiry</a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="md:font-medium text-2xl text-golden py-3">About Us</div>
          <div>
            <Link href="/">
              <a className="text-xl text-stonish">About Us</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="text-xl text-stonish">CEO&rsquo;s Message</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="text-xl text-stonish">Our History</a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="md:font-medium text-2xl text-golden py-3">Media</div>
          <div>
            <Link href="/">
              <a className="text-xl text-stonish">Gallery</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="text-xl text-stonish">Our Projects</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="text-xl text-stonish">
                Awards &#38; Recognition
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="bg-golden flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center sm:justify-around text-white py-5"
        style={{ fontFamily: 'Space Grotesk' }}
      >
        <div className="flex space-x-5 items-center">
          <div>
            <Link href="/">
              <a>All Rights Reserved</a>
            </Link>
          </div>
          <div className="text-2xl font-bold">&#8901;</div>
          <div>
            <Link href="/">
              <a>www.boualvard.com</a>
            </Link>
          </div>
          <div className="text-2xl font-bold">&#8901;</div>
          <div>
            <Link href="/">
              <a>Copyright &#169; 2022</a>
            </Link>
          </div>
        </div>
        <div className="flex justify-center space-x-6 items-center">
          <Link href="/"><a><i className="fab fa-lg fa-facebook-f"></i></a></Link>
          <Link href="/"><a><i className="fab fa-lg fa-instagram"></i></a></Link>
          <Link href="/"><a><i className="fab fa-lg fa-linkedin-in"></i></a></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
