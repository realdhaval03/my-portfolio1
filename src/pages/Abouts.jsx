import React from "react";
import aboutpic from "/src/assets/aboutbg.png";
import REACTicon from "/src/assets/physics.png";
import HTMLicon from "/src/assets/html-5.png";
import CSSicon from "/src/assets/css-3.png";
import Boostrapicon from "/src/assets/media.png";
import JSicon from "/src/assets/js.png";
// import { motion } from 'framer-motion';
import Aos from "aos";
import "aos/dist/aos.css";

const Abouts = () => {
  return (
    <>

    {/* <div className="container bg-cover bg-center h-screen w-full min-h-screen flex  pt-36 border-b border-teal-800 ">
       <div className="ml-40" data-aos="fade-right">
         <img className="hidden sm:block" src={aboutpic} alt="About image" />
       </div>
       
       <div className="ml-32 " data-aos="fade-left">
        <div className="">
         <div className="flex mb-8 " data-aos="fade-down">
           <h1 className="text-white mr-5 font-bold text-7xl ">About</h1>
             <h1 className="text-teal-300 font-bold text-7xl">me</h1>
         </div>
       
         <p className="text-white font-semibold text-lg">
           Hi there! I'm Dhaval, a website developer with a passion for creating
           <br />custom online experiences for my clients. With a skill set including
           <br /> HTML, CSS, JavaScript, and React, I have the tools to bring any
           <br /> website vision to life.
           <br />
           <br />
           So if you're in need of a new website or just looking to revamp
           <br /> your current online presence, I'd love to chat and see how I
           can help.
           <br />
           Let's bring your website dreams to reality together!
         </p>
         <h4 className="text-teal-300 mb-4 mt-4 font-semibold text-2xl">
           Here are my main skills:
         </h4>
       
         <div className="flex -ml-5">
           <img className="w-24 h-24 p-5 " src={REACTicon} alt="Reacticon" />
           <img className="w-24 h-24 p-5 " src={HTMLicon} alt="HTMLicon" />
           <img className="w-24 h-24 p-5" src={CSSicon} alt="CSSicon" />
           <img className="w-24 h-24 p-5" src={Boostrapicon} alt="JSicon" />
           <img className="w-24 h-24 p-5" src={JSicon} alt="HTMLicon" />
         </div>
        </div>
       </div>
    </div> */}






<div class=" overflow-hidden h-screen pt-24 border-b border-teal-800">
  <div class="container px-5  mx-auto">
     <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce"  data-aos="fade-right" className=" hidden sm:block" src={aboutpic}/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <div className="flex mb-8 " data-aos="fade-down">
           <h1 className="text-white mr-5 font-bold text-7xl ">About</h1>
             <h1 className="text-teal-300 font-bold text-7xl">me</h1>
         </div>
        <p class="text-white font-semibold text-lg leading-relaxed"> Hi there! I'm Dhaval, a website developer with a passion for creating
           <br />custom online experiences for my clients. With a skill set including
           <br /> HTML, CSS, JavaScript, and React, I have the tools to bring any
           <br /> website vision to life.
           <br />
           <br />
           So if you're in need of a new website or just looking to revamp
           <br /> your current online presence, I'd love to chat and see how I
           can help.
           <br />
           Let's bring your website dreams to reality together!</p>
           <h4 className="text-teal-300 mb-4 mt-4 font-semibold text-2xl">
           Here are my main skills:
         </h4>
        <div class="flex mt-6  items-start pb-5">
       
          <div class="flex">
        
          <img className="w-24 h-24  p-5 " src={REACTicon} alt="Reacticon" />
           <img className="w-24 h-24 p-5 " src={HTMLicon} alt="HTMLicon" />
           <img className="w-24 h-24 p-5" src={CSSicon} alt="CSSicon" />
           <img className="w-24 h-24 p-5" src={Boostrapicon} alt="JSicon" />
           <img className="w-24 h-24 p-5" src={JSicon} alt="HTMLicon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
);};

export default Abouts;
