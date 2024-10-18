import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import  { useRef } from 'react';

const Navbar = () => {
  
 
  const Home =()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })

  }
  const Aboutus =()=>{
    window.scrollTo({
      top:728.8,
      behavior:'smooth'
    })
    
  }
  const Project =()=>{
    window.scrollTo({
      top:1457,
      behavior:'smooth'
    })
    
  }
  const Contact =()=>{
    window.scrollTo({
      top:2210,
      behavior:'smooth'
    })
    
  }

 
  return (
  <>
  <nav className='flex fixed scroll-m-4  z-10  items-center h-20 text-white w-full  text-center justify-between border-b border-teal-600 backdrop-blur-lg '>
    <div className=' ms-20 text-2xl font-bold'>
      <span className='font-serif ' >Dhaval</span> <span className='font-serif text-teal-400'>Kumar</span>
      
    </div>

    <div className='flex mr-24 '>
      <ul className='flex space-x-16 '>
        <li onClick={Home}  className='cursor-pointer text-xl font-thin '>
           <span className="relative  hover:text-teal-300 hover:border-b-2 hover:border-teal-300 transition duration-300">
            HOME
           </span>
        </li>

        <li onClick={Aboutus} className='cursor-pointer text-xl font-thin'>
          <span  className='relative hover:text-teal-300 hover:border-b-2 hover:border-teal-300 transiton duration-300'>
            ABOUT US
          </span>
        </li>
      

        <li onClick={Project}  className='cursor-pointer text-lg font-thin'>
          <span  className="relative hover:text-teal-300 hover:border-b-2 hover:border-teal-300 transition duration-300">
            PROJECT
            </span>
        </li>

        <li onClick={Contact} className='cursor-pointer text-lg font-thin'>
          <span className="relative hover:text-teal-300 hover:border-b-2 hover:border-teal-300 transition duration-300">
            CONTACT</span>
        </li>

      </ul>
    </div>
   

  </nav>

  
  </>
   
  )
}

export default Navbar