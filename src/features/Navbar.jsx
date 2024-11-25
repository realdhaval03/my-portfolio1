import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import  { useRef } from 'react';
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { button } from 'framer-motion/client';


const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const toggleMenu =()=>{
    setisMenuOpen(!isMenuOpen)
  }
  console.log(isMenuOpen)
  
 
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
    <nav className='bg-slate-800 p-4 border-b border-teal-800 w-full fixed z-10 backdrop-blur-lg '>
      <div className='flex  items-center justify-between'>

      <div className=' ms-20 text-2xl font-bold'>
           <span className='font-serif text-white ' >Dhaval</span> <span className='font-serif text-teal-400'>Kumar</span>
        </div>

        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white text-3xl font-bold '><BsList/></button>
        </div>
          
        <ul className='hidden md:flex space-x-16 mr-24'>
          <li onClick={Home} className='text-white cursor-pointer text-xl font-thin'>
            <span className="relative  hover:text-teal-300 hover:border-b-2 hover:border-teal-300 transition duration-300">
            HOME
           </span>
          </li>
          <li onClick={Aboutus} className='text-white cursor-pointer text-xl font-thin'>
            <span  className='relative hover:text-teal-300 hover:border-b-2 hover:border-teal-300 transiton duration-300'>
            ABOUT US
            </span>
          </li>
          <li onClick={Project} className='text-white cursor-pointer text-xl font-thin'>
            <span  className="relative hover:text-teal-300 hover:border-b-2 hover:border-teal-300 transition duration-300">
            PROJECT
            </span>
          </li>
          <li onClick={Contact} className='text-white cursor-pointer text-xl font-thin'>
            <span className="relative hover:text-teal-300 hover:border-b-2 hover:border-teal-300 transition duration-300">
            CONTACT
            </span>
          </li>
        </ul>
      </div>

      {isMenuOpen? (
        <ul className='flex-col md:hidden bg-teal-500 w-full  border-0 rounded-xl '>
        <li onClick={Home}    className='py-2 text-center text-xl cursor-pointer hover:bg-slate-800 hover:text-teal-300 transition-all '><span className='text-white'>Home</span></li>
        <li onClick={Aboutus} className='py-2 text-center text-xl cursor-pointer hover:bg-slate-800 hover:text-teal-300 transition-all'><span className='text-white'>ABout us</span></li>
        <li onClick={Project} className='py-2 text-center text-xl cursor-pointer hover:bg-slate-800 hover:text-teal-300 transition-all'><span className='text-white'>project</span></li>
        <li onClick={Contact} className='py-2 text-center text-xl  cursor-pointer hover:bg-slate-800 hover:text-teal-300 transition-all'><span className='text-white'>contact</span></li>
      </ul>
      ):null }
    </nav>

  {/* <nav>
    <div className='flex fixed justify-between  w-full py-5 border-b border-teal-800 z-10 backdrop-blur-lg '>
        <div className=' ms-20 text-2xl font-bold'>
           <span className='font-serif text-white ' >Dhaval</span> <span className='font-serif text-teal-400'>Kumar</span>
        </div>
   
 

    <div className='flex mr-24 '>
      <ul className='flex space-x-16 text-white'>
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
   
    </div>
  </nav> */}
  </>
  )
}

export default Navbar