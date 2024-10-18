import React from 'react'
import { FaHome, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='py-20 '>
    <div className='  flex justify-center items-center pb-10'>
   
        <div className='pr-20 items-center text-center  '>

        <h1 className='text-white text-xl font-extralight flex '><FaHome className='w-16 item items-center mt-1 pl-5'/>Home</h1>
        </div>

        <div className='pr-20 items-center text-center'>
        <h1 className='text-white text-lg font-extralight flex '>About me</h1> 
        </div>

        <div className='pr-20 items-center text-center'>
        <h1 className=  'text-white text-lg font-extralight flex '><IoCallOutline className='text-white mt-1 mr-3 items-center' />Contact</h1>
        </div>
      
    </div>

    <div className='flex justify-center '>
          <button className=' hover:bg-rose-500 hover:text-white border-0 rounded-full bg-slate-700 text-white p-3 mr-8'><FaInstagram className='w-8 h-8 hover:text-white' /></button>
          <button className=' hover:bg-white hover:text-sky-600 border-0 rounded-full bg-slate-700 text-white p-3 mr-8'><FaTelegram className='w-8 h-8  hover:text-sky-600' /></button>
          <button className=' hover:bg-green-500 hover:text-white  border-0 rounded-full bg-slate-700 text-white p-3 mr-8'><FaWhatsapp className='w-8 h-8  hover:text-white' /></button>
          <button className=' hover:bg-white hover:text-sky-600 border-0 rounded-full bg-slate-700 text-white p-3 mr-8'><FaLinkedin className='w-8 h-8  hover:text-sky-600' /></button>
    </div>
    </div>
  )
}

export default Footer