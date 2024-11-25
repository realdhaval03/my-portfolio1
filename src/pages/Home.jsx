import React, { useEffect } from "react";
import MyImage from "/src/assets/Arrowpic.png";
import MyDImage from "/src/assets/dhaval.jpg";
import MyBcakImage from "/src/assets/forntbg.png";
import { FaDownload } from "react-icons/fa6";
// import Resume from "/src/assets/Dhaval_darji_CV.pdf";
import Abouts from "../pages/Abouts";
import Aos from "aos";
import "aos/dist/aos.css";


const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const Contact = () => {

    window.scrollTo({
      top: 2210,
      behavior: "smooth",
    });
  };
  return (
    <>
      <br />

      <div className="container mx-auto flex px-5 py-24 pt-44 bg-cover h-screen md:flex-row flex-col items-center border-b border-teal-800 ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="">
          

            <div  data-aos ="fade-right">
              <h1 className="mb-16 text-white font-bold text-7xl  "> DHAVAL DARJI
                <br className="hidden lg:inline-block "/> 
                <p className="text-teal-300 font-semibold text-5xl mt-4">REACT JS DEVELOPER</p>
              </h1>
         
            <div className="flex md:items-center ">
              <button class="inline-flex text-slate-900 bg-teal-300 border-0 hover:text-teal-300 px-12 py-2 focus:outline-none hover:bg-slate-900 rounded-3xl text-lg">
                Hire Me
              </button>
              {/* <button class="ml-4 inline-flex bg-slate-900 text-white  hover:bg-teal-300 hover:text-slate-900  border-0 px-10 py-2 focus:outline-none rounded-3xl text-lg">
              <a href={Resume} download='Resume'>Download CV</a>
              <FaDownload className='ml-4 mt-1'/>
              </button> */}
            </div>
          </div>
          </div>
        </div>

        <div class="lg:max-w-lg lg:w-full  md:w-1/2 w-5/6" data-aos="zoom-in-left">
          <div className='bg-teal-500  w-80 h-96 -rotate-12  border-0  shadow-2xl rounded-3xl'>
            <div className=' w-72 h-72 '>
               <img className='object-cover items-center ml-4 rotate-12 rounded-3xl -mt-4' src={MyDImage} alt="front pic" /> 
            </div>
          </div>
          
        </div>
      </div>

      {/* <div  className='p-10 md:p-20 bg-cover bg-center h-screen w-full min-h-screen pt-32 border-b border-teal-800  rounded-t-3xl'>
    
    <div className='flex flex-col sm:flex-row  justify-around mt-32'>
      <div className='flex   mt-11 ' data-aos ="fade-right">
            <div className='mr-5 '>
                      <img className='hidden sm:block scale-90 -rotate-45' src={MyImage} alt="Arrow" />
            </div>

            <div  className=' mt-5 md:text-6xl ' data-aos ="">
                <h1 className='text-white font-bold text-7xl  mb-5 sm:leading-none'>DHAVAL DARJI</h1>
                <h4 className='text-teal-300 font-semibold text-5xl mb-24 md:2xl'>REACT JS DEVELOPER</h4>

              <div  className='flex md:md-10 md:text-lg md:py-2 md:px-4'>
                <button onClick={Contact}
                    className='bg-teal-500 rounded-[35px] px-10 py-2 text-xl text-white font-semibold mr-8  hover:bg-slate-900'>
                    Hire Me
                </button>

                <button
                    className='item center flex mr-16 bg-slate-900 rounded-full px-12 py-2 text-xl text-white font-semibold hover:bg-teal-500'>
                   
                    <FaDownload className='ml-4 mt-1'/>
                </button>
              </div>
            </div>
      </div>

      <div className='mt-10' data-aos="zoom-in-left">
         <div className='bg-teal-500  w-80 h-96 -rotate-12  border-0  shadow-2xl rounded-3xl'>
            <div className=' w-72 h-72 '>
               <img className=' ml-4 rotate-12 rounded-3xl -mt-4' src={MyDImage} alt="front pic" /> 
            </div>
          </div>
       </div>

    </div>
  </div> */}
    </>
  );
};

export default Home;
