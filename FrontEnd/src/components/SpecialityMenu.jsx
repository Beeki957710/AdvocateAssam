import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-primary' id='speciality'>

      {/* Heading */}
      <h1 className='text-4xl font-bold'>
        Find Legal Experts
      </h1>

      {/* Description */}
      <p className='sm:w-1/3 text-center text-sm text-gray-600'>
        Browse experienced lawyers by legal speciality and
        get trusted legal support for your case.
      </p>

      {/* Categories */}
      <div className='flex sm:justify-center gap-6 pt-8 w-full overflow-scroll no-scrollbar'>

        {specialityData.map((item, index) => (

          <Link onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-sm cursor-pointer flex-shrink-0 hover:-translate-y-2 transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>

            {/* Icon */}
            <div className='bg-[#F3E5CF] rounded-full p-5 shadow-sm hover:shadow-lg transition-all duration-300'>
              <img className='w-16 sm:w-20' src={item.image} alt=""/>
            </div>

            {/* Text */}
            <p className='mt-3 font-medium text-primary'>
              {item.speciality}
            </p>

          </Link>

        ))}

      </div>

    </div>
  )
}

export default SpecialityMenu