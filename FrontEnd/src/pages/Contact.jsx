import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from "react-router-dom";

const Contact = () => {
    
    const navigate = useNavigate();
    
    const handleNavigation = (path) => {
    navigate(path);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className='px-6 md:px-12 lg:px-20'>

      {/* Heading */}
      <div className='text-center text-3xl pt-10'>
        <p className='text-gray-500'>
          CONTACT <span className='text-primary font-semibold'>US</span>
        </p>
      </div>

      {/* Contact Section */}
      <div className='my-14 flex flex-col md:flex-row items-center gap-12 mb-24'>

        {/* Image */}
        <img
          className='w-full md:max-w-[450px] rounded-2xl shadow-lg'
          src={assets.contact_image}
          alt="Law Office"
        />

        {/* Contact Info */}
        <div className='flex flex-col justify-center items-start gap-7 text-gray-600'>

          {/* Office */}
          <div>
            <h2 className='font-semibold text-2xl text-primary mb-3'>
              Our Office
            </h2>

            <p className='leading-7 text-gray-500'>
              AdvocateAssam <br />
              Rangia, Assam, India
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className='leading-7 text-gray-500'>
              📞 +91 8011831481<br />
              ✉️ support.advocateassam@gmail.com
            </p>
          </div>

          {/* Consultation */}
          <div>
            <h2 className='font-semibold text-2xl text-primary mb-3'>
              Legal Consultation
            </h2>

            <p className='leading-7 text-gray-500'>
              Schedule a confidential consultation with our experienced
              legal team and receive trusted legal guidance tailored
              to your needs.
            </p>
          </div>

          {/* Button */}
          <button onClick={() => handleNavigation("/doctors")} className='border border-primary text-primary px-8 py-4 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all duration-500'>
            Book Consultation
          </button>

        </div>
      </div>

    </div>
  )
}

export default Contact
