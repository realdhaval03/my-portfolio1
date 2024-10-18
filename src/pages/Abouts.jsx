import React from 'react'
import aboutpic from '../assets/aboutbg.png';
import REACTicon from '../assets/physics.png';
import HTMLicon from '../assets/html-5.png';
import CSSicon from '../assets/css-3.png';
import Boostrapicon from '../assets/media.png';
import JSicon from '../assets/js.png';
// import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Abouts = () => {

  return (
    <>
    <div   id='About' className='flex bg-slate-800 w-full min-h-screen pt-36 border-b border-teal-800 '>
    {/* initial={{opacity:0, x:0}}animate={{opacity:1, x:100}} transition={{delay:0.5,duration:0.5}} */}
        <div  className='mr-28 ml-20  '  data-aos ="fade-right">
       
             <img className='ml-16' src={aboutpic} alt="About image" />
        </div>

        <div className='ml-14' data-aos ="fade-up"   >
        {/* initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{delay:0.5,duration:0.5}} */}
            <div className='flex mb-8' >
                <h1 className='text-white mr-5 font-bold text-7xl '>About</h1> 
                <h1 className='text-teal-300 font-bold text-7xl'>me</h1> 
            </div>

           <p className='text-white font-semibold text-lg'>
             Hi there! I'm Dhaval, a website developer with a passion for creating<br /> custom online experiences for my clients.
             With a skill set including<br /> HTML, CSS, JavaScript, and React, I have the tools to bring any<br /> website vision to life.<br/>
             <br />
             So if you're in need of a new website or just looking to revamp<br /> your current online presence, I'd love to chat and see how I can help.<br />
             Let's bring your website dreams to reality together!
           </p>
           <h4 className='text-teal-300 mb-4 mt-4 font-semibold text-2xl'>Here are my main skills:</h4>
            
           <div className='flex -ml-5'>  
                <img className='w-24 h-24 p-5 ' src={REACTicon} alt="Reacticon" />
                <img className='w-24 h-24 p-5 ' src={HTMLicon} alt="HTMLicon" />
                <img className='w-24 h-24 p-5' src={CSSicon} alt="CSSicon" />
                <img className='w-24 h-24 p-5' src={Boostrapicon} alt="JSicon" />
                <img className='w-24 h-24 p-5' src={JSicon} alt="HTMLicon" />
           </div>
        </div>
       
    </div>
    
    </>
  )
}

export default Abouts