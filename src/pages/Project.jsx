import React from 'react'
import Firstpro from '../assets/project3 (1).png';
import Secoundpro from '../assets/project3 (2).jpg';
import Thirdpro from '../assets/project3.jpg'
import Projectbg from '../assets/projectbg.png'
// import { motion } from 'framer-motion';


const Project = () => {
  return (
   <>
   <div id='Project' className={`bg-[url('${Projectbg}')]bg-cover bg-center h-screen w-full min-h-screen pt-32 border-b border-teal-800`}>
    
    
        <div  className='flex ml-16 '>
        {/* initial={{opacity:0, y:0}}animate={{opacity:1, y:100}}  transition={{delay:0,duration:0.5}} */}
        <h1 className='text-white mr-5 font-bold text-6xl '>My Recent</h1> 
        <h1 className='text-teal-300 font-bold text-6xl'>Project</h1> 
        </div>

        <div  className='flex justify-around pt-16 items-center'>
        {/* initial={{opacity:0, y:0}}  animate={{opacity:1, y:100}} transition={{delay:0.5,duration:0.5}}  */}

          <div  className='w-96 h-80 bg-slate-900 rounded-3xl items-center backdrop-blur-2xl hover:bg-teal-300'>
            <div className='pl-14 pt-5 pb-16' >
              <img className='w-72' src={Firstpro} alt="" />
            </div>
          </div>

           <div className='w-96 h-80 bg-slate-900 rounded-3xl items-center hover:bg-teal-300 '>
              <div className='p-14 mt-3' >
                <img className='' src={Secoundpro} alt="" />
              </div>
           </div>

           <div className='w-96 h-80  bg-slate-900 rounded-3xl items-center hover:bg-teal-300'>
              <div className='p-10 mt-8' >
                <img className='' src={Thirdpro} alt="" />
              </div>
           </div>

          
        </div>
   </div>
   </>
  )
}

export default Project