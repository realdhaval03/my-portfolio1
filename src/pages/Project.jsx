import React from "react";
import Firstpro from "../assets/firstproject.png";
import Secoundpro from "../assets/secondproject.jpg";
import Thirdpro from "../assets/thirdproject.png";
import Fourpro from "../assets/fourproject.jpg";
import "aos/dist/aos.css";

const Project = () => {
  return (
    <>
      {/* <div className='bg-cover bg-center h-screen w-full min-h-screen pt-32 border-b border-teal-800'>
    
    
        <div  className='flex ml-20 ' data-aos ="fade-right">
            <h1 className='text-white mr-5 font-bold text-6xl '>My Recent</h1> 
            <h1 className='text-teal-300 font-bold text-6xl'>Project</h1> 
        </div>

        <div  className='flex justify-around pt-16 items-center sm:' >
        
          <div  className='w-96 h-80 bg-slate-900 rounded-3xl items-center backdrop-blur-2xl hover:bg-teal-300'  data-aos ="flip-right">
            <div className='pl-14 pt-5 pb-16 '>
              <img className='w-72' src={Firstpro} alt="" />
            </div>
          </div>

           <div className='w-96 h-80 bg-slate-900 rounded-3xl items-center hover:bg-teal-300 '  data-aos ="flip-right">
              <div className='p-14 mt-3' >
                <img className='' src={Secoundpro} alt="" />
              </div>
           </div>

           <div className='w-96 h-80  bg-slate-900 rounded-3xl items-center hover:bg-teal-300'  data-aos ="flip-right">
              <div className='p-10 mt-8' >
                <img className='' src={Thirdpro} alt="" />
              </div>
           </div>

        </div>
   </div> */}

      <div class="container px-5 py-16 mx-auto border-b border-teal-800">
        <div className="flex ml-10 mb-10" data-aos="fade-right">
          <h1 className="text-white mr-5 font-bold sm:text-4xl lg:text-6xl ">My Recent</h1>
          <h1 className="text-teal-300 font-bold sm:text-xl lg:text-6xl">Project</h1>
        </div>
        <div class="flex flex-wrap -m-1" >
          <div class="p-8 md:w-1/4"  data-aos ="flip-right">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center p-3 border-b-2 rounded-xl border-b-teal-700"
                src={Firstpro}
                alt="blog"
              />
              <div class="p-6">
                <h2 class="text-xl title-font font-medium text-teal-300 mb-1">
                  My Personal Portfolio
                </h2>
                <h1 class="title-font text-base font-medium text-slate-50 mb-3">
                  React JS
                </h1>
                <p class="leading-relaxed mb-3 text-white">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap ">
                  <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    View source
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="p-8 md:w-1/4">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"  data-aos ="flip-right">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center p-3 border-b-2 rounded-xl border-b-teal-700"
                src={Secoundpro}
                alt="blog"
              />
              <div class="p-6">
                <h2 class="text-xl title-font font-medium text-teal-300 mb-1">
                  Reason Buy
                </h2>
                <h1 class="title-font text-base font-medium text-slate-50 mb-3">
                  Reason Buy Online Shopping
                </h1>
                <p class="leading-relaxed mb-3 text-white">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap ">
                  <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    View source
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="p-8 md:w-1/4">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"  data-aos ="flip-right">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center p-3 border-b-2 rounded-xl border-b-teal-700"
                src={Thirdpro}
                alt="blog"
              />
              <div class="p-6">
                <h2 class="text-xl title-font font-medium text-teal-300 mb-1">
                  Flavor Flight
                </h2>
                <h1 class="title-font text-base font-medium text-slate-50 mb-3">
                  Best Online Food delivery App
                </h1>
                <p class="leading-relaxed mb-3 text-white">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap ">
                  <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    View source
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="p-8 md:w-1/4">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"  data-aos ="flip-right">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center p-3 border-b-2 rounded-xl border-b-teal-700"
                src={Fourpro}
                alt="blog"
              />
              <div class="p-6">
                <h2 class="text-xl title-font font-medium text-teal-300 mb-1">
                  Counter App
                </h2>
                <h1 class="title-font text-base font-medium text-slate-50 mb-3">
                  Hmtl ,Css with Javascript{" "}
                </h1>
                <p class="leading-relaxed mb-3 text-white">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap ">
                  <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    View source
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
