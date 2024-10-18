import React, { useEffect } from 'react'
import MyImage from '../assets/Arrowpic.png';
import MyBcakImage from '../assets/forntbg.png';
import { FaDownload } from 'react-icons/fa6';
// import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { transform } from 'framer-motion';



const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 2000}
    
    )
  })
  return (
  <>

  <div id='Home' className='flex  bg-slate-800 justify-between items-center  w-full min-h-screen pt-32 border-b border-teal-800'>
    <div className='flex mt-10' >
    {/* initial={{opacity:0, y:100}}animate={{opacity:1, y:0}} transition={{delay:0,duration:0.5}} */}
       <div className=' -mt-9 flex ' data-aos ="fade-right">
         <img className='max-w-96 justify-start  -rotate-45' src={MyImage} alt="Arrow"  />
       </div>
  
      <div  className='-ml-24 mt-5 ' data-aos ="fade-right">
           <h1 className='text-white font-bold text-7xl  mb-5 sm:leading-none'>DHAVAL DARJI</h1>
           <h4 className='text-teal-300 font-semibold text-5xl mb-24'>FRONT END DEVELOPER</h4>
        <div className='flex'>
          <button
           className='bg-teal-500 rounded-[35px] px-10 py-2 text-xl text-white font-semibold mr-8  hover:bg-slate-900'>Hire Me</button>
          <button
           className='item center flex mr-16 bg-slate-900 rounded-full px-12 py-2 text-xl text-white font-semibold hover:bg-teal-500'>Download CV<FaDownload className='ml-4 mt-1'/></button>
       </div>
      
      </div>
  </div>
       <div data-aos ="fade-left">
         {/* initial={{opacity:0, x:100}}animate={{opacity:1, x:0}} transition={{delay:0.5,duration:0.5}} */}
         <img className='-ml-20' src={MyBcakImage} alt="front pic" />
       </div>



  </div>


   
  </>
  )
}

export default Home