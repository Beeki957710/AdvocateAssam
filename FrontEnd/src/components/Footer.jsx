import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
 <footer className='w-screen bg-[#ffffff] text-gray-300 mt-24 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'>

  <div className='px-6 md:px-16 lg:px-24 py-10'>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm'>

      {/* About */}
      <div>
        <img
          className='w-40 mb-4'
          src={assets.logo}
          alt="Logo"
        />

        <p className='text-gray-400 leading-7'>
          Trusted legal services with professionalism and dedication.
        </p>
      </div>

      {/* Links */}
      <div>
        <h3 className='text-white font-semibold mb-4'>
          Quick Links
        </h3>

        <ul className='space-y-2 text-gray-400'>
          <li className='hover:text-primary cursor-pointer'>Home</li>
          <li className='hover:text-primary cursor-pointer'>About</li>
          <li className='hover:text-primary cursor-pointer'>Services</li>
          <li className='hover:text-primary cursor-pointer'>Contact</li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className='text-white font-semibold mb-4'>
          Services
        </h3>

        <ul className='space-y-2 text-gray-400'>
          <li>Criminal Law</li>
          <li>Family Law</li>
          <li>Corporate Law</li>
          <li>Legal Advice</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className='text-white font-semibold mb-4'>
          Contact
        </h3>

        <ul className='space-y-2 text-gray-400'>
          <li>📞 +91 XXXXX XXXXX</li>
          <li>✉️ support.advocateassam@gmail.com</li>
          <li>📍 Office Address</li>
        </ul>
      </div>

    </div>

    {/* Bottom */}
    <div className='border-t border-white/10 mt-8 pt-4 text-center text-xs text-gray-500'>
      © 2026 Justice & Associates. All Rights Reserved.
    </div>

  </div>

</footer>
  )
}

export default Footer