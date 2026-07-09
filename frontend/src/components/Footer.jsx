import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm: grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-500 leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, corrupti. Explicabo iure, quisquam id magnam similique, aliquid aspernatur eveniet dolor molestiae illo alias inventore laboriosam nemo culpa corrupti quos! Porro.</p>
            </div>


            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-500'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>


            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-500'>
                    <li>0121-406-7890</li>
                    <li>doctors@prescripto.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyrights 2026@ Prescripto - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
