import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div className='px-6 md:px-12 lg:px-20'>

      {/* Heading */}
      <div className='text-center text-3xl pt-10'>
        <p className='text-gray-500'>
          ABOUT <span className='text-primary font-semibold'>US</span>
        </p>
      </div>

      {/* About Section */}
      <div className='my-14 flex flex-col md:flex-row gap-12 items-center'>

        <img
          className='w-full md:max-w-[420px] rounded-2xl shadow-lg'
          src={assets.about_image}
          alt="About"
        />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 leading-7'>

          <p>
            Welcome to our law firm, where professionalism,
            integrity, and dedication form the foundation of our
            legal practice. We are committed to providing reliable
            legal solutions tailored to the unique needs of every client.
          </p>

          <p>
            With years of experience across multiple areas of law,
            our team works diligently to protect your rights,
            resolve disputes efficiently, and deliver strong legal
            representation with complete transparency and trust.
          </p>

          <div>
            <h2 className='text-xl font-semibold text-primary mb-2'>
              Our Vision
            </h2>

            <p>
              Our vision is to become a trusted legal partner for
              individuals and businesses by delivering exceptional
              legal services, building long-term relationships,
              and ensuring justice through expert legal guidance.
            </p>
          </div>

        </div>
      </div>

      {/* Why Choose Us */}
      <div className='text-3xl text-center my-10'>
        <p className='text-gray-500'>
          WHY <span className='text-primary font-semibold'>CHOOSE US</span>
        </p>
      </div>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>

        <div className='border rounded-2xl px-8 py-10 flex flex-col gap-4 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm'>
          <h3 className='text-xl font-semibold'>
            Experienced Attorneys
          </h3>

          <p className='text-sm leading-6'>
            Our legal team brings extensive knowledge and years of
            courtroom and advisory experience across multiple legal areas.
          </p>
        </div>

        <div className='border rounded-2xl px-8 py-10 flex flex-col gap-4 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm'>
          <h3 className='text-xl font-semibold'>
            Client-Focused Approach
          </h3>

          <p className='text-sm leading-6'>
            We prioritize clear communication, transparency, and
            personalized legal strategies designed for every client.
          </p>
        </div>

        <div className='border rounded-2xl px-8 py-10 flex flex-col gap-4 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm'>
          <h3 className='text-xl font-semibold'>
            Trusted Legal Support
          </h3>

          <p className='text-sm leading-6'>
            From consultation to representation, we are dedicated
            to protecting your rights and achieving the best possible outcome.
          </p>
        </div>

      </div>

    </div>
  )
}

export default About