import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

  return (
    <div className='flex bg-[#0b2149] rounded-3xl px-8 md:px-12 lg:px-16 my-16 md:mx-10 overflow-hidden items-center min-h-[420px]'>

        {/* Left Side */}
        <div className='flex-1 py-10 z-10'>

            <div className='inline-flex items-center gap-2 bg-[#E8D8B8] text-[#071C55] px-4 py-2 rounded-full text-sm font-semibold mb-5'>
                ⚖ Trusted Legal Support, Just a Click Away
            </div>

            <div className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white'>
                <p>Your Bridge to</p>

                <p className='mt-2 text-[#D4A017]'>
                    Justice and Trust
                </p>
            </div>

            <p className='text-[#E5E7EB] text-sm sm:text-base mt-6 max-w-xl leading-8'>
                Find experienced lawyers, get legal advice,
                and resolve your legal issues with confidence.
            </p>

            <div className='flex flex-wrap gap-4 mt-8'>

                <button
                    onClick={() => {
                        navigate('/login')
                        scrollTo(0, 0)
                    }}
                    className='bg-[#D4A017] hover:bg-[#b88b12] transition-all duration-300 text-[#071C55] px-8 py-4 rounded-xl font-semibold'
                >
                    Create Account
                </button>

                <button
                    onClick={() => {
                        navigate('/doctors')
                        scrollTo(0, 0)
                    }}
                    className='border border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-[#071C55] transition-all duration-300 px-8 py-4 rounded-xl font-semibold'
                >
                    Find a Lawyer
                </button>

            </div>

            <div className='flex gap-8 mt-10 text-white flex-wrap'>

                <div>
                    <p className='text-3xl font-bold text-[#D4A017]'>500+</p>
                    <p className='text-sm'>Expert Lawyers</p>
                </div>

                <div>
                    <p className='text-3xl font-bold text-[#D4A017]'>10K+</p>
                    <p className='text-sm'>Happy Clients</p>
                </div>

                <div>
                    <p className='text-3xl font-bold text-[#D4A017]'>50+</p>
                    <p className='text-sm'>Practice Areas</p>
                </div>

            </div>

        </div>

        {/* Right Side */}
        {/* <div className='hidden md:flex flex-1 justify-end items-end relative h-full'>

            <img
                className='w-[520px] lg:w-[620px] object-contain -mb-2'
                src={assets.appointment_img}
                alt=""
            />

        </div> */}

    </div>
  )
}

export default Banner
