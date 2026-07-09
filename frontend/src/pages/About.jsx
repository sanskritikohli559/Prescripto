import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-400'>
        <p>ABOUT <span className='text-gray-700 fint-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform by integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-gray-800'>Out Vision</b>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers by making it easier for you to access the care you need, whenever you need it. We are committed to enhancing the healthcare journey through innovative technology, ensuring that quality medical services are just a few clicks away.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-600 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling that minimizes waiting time and
            simplifies the entire booking process, allowing you to connect with
            healthcare professionals quickly and effortlessly.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>
            Book appointments anytime, anywhere through our easy-to-use platform.
            Access trusted doctors, manage your bookings, and stay organized—all
            from the comfort of your home.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>
            Experience healthcare tailored to your needs with personalized doctor
            recommendations, appointment history, and a user-friendly interface
            designed to make every visit more meaningful.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
