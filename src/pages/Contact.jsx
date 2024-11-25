import React from "react";
import Mycontact from "../assets/part1 (1).png";
import "aos/dist/aos.css";
// import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <div className="bg-cover bg-center h-screen w-full min-h-screen  pt-28  pb-8 flex  justify-center items-center  text-base   border-b border-teal-800 ">
        <div className="sm:items-center">
          <div className="-mt-40 mb-10 sm:hidden block">
        <span className="  text-white font-bold mr-5  text-4xl">My</span>
        <span className="text-teal-300 mr-5 font-bold text-4xl ">Contact</span>
        </div>
        <form action="#" method="POST">

          <div className=" ">
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                  <div className="">
                      <label htmlFor="first-name" className="text-slate-200  text-base font-semibold">First Name</label>
                      <div className="mt-2 ">
                        <input type="text" id="first-name" name="first-name" placeholder="First Name" 
                        className="sm:w-20 lg:w-48 bg-slate-950 rounded-md  border-1 border-y-teal-400  px-2 py-2 shadow-teal-300  placeholder:text-slate-400 text-lg font-semibold" />
                      </div> 
                  </div>

                  <div className="">
                      <label htmlFor="last-name" className="text-slate-200  text-base font-semibold " >Last Name</label>
                      <div className="mt-2">
                        <input type="text" id="last-name" name="last-name"  placeholder="Last Name"
                        className="sm:w-20 lg:w-44 bg-slate-950  rounded-md  border-1 px-2 py-2 shadow-md  placeholder:text-slate-400  text-lg font-semibold"  />
                      </div>
                  </div>
              </div>

            <div className="mb-4">
              <div>
                <label htmlFor="Company" className="text-slate-200  text-base font-semibold"> Company </label>
              </div>
              <div className="mt-2">
                <input type="text " id="compnay"  name="company"  placeholder="Company" 
                className="sm:w-20 lg:w-96  bg-slate-950 rounded-md border-1 px-2 py-2 shadow-md placeholder:text-slate-400 text-lg font-semibold "   />
              </div>
            </div>

            <div className="mb-4">
              <div>
                <label
                  htmlFor="Emailname"
                  className="text-slate-200  text-base font-semibold"
                >
                  Email
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  id="Emailname"
                  name="Emailname"
                  placeholder="Email"
                  className=" sm:w-20 lg:w-96 bg-slate-950 rounded-md border-1 px-2 py-2 shadow-md  placeholder:text-slate-400 text-lg font-semibold"
                />
              </div>
            </div>

            <div>
              <div>
                <label
                  htmlFor="Phone-Numder"
                  className="text-slate-200  text-base font-semibold"
                >
                  Phone Number
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  id="Phone-Number"
                  name="Phone-Number"
                  placeholder="Phone-Number"
                  className="sm:w-20 lg:w-96 bg-slate-950 rounded-md border-1 px-2 py-2 shadow-md  placeholder:text-slate-400 text-lg font-semibold"
                />
              </div>
            </div>

            <div className="mt-4">
              <div>
                <label
                  htmlFor="Massage"
                  className="text-slate-200   text-base font-semibold"
                >
                  Your Massage
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  type="text"
                  id="Massage"
                  name="Massage"
                  placeholder="Massage"
                  className=" sm:w-20 lg:w-96 bg-slate-950 rounded-md border-1 px-2 py-5 shadow-md  placeholder:text-slate-400 text-lg font-semibold "
                />
              </div>
            </div>

            <div className="mt-7">
                <button type=""  className="sm:w-10 lg:w-96 bg-teal-300 rounded-md border-0 px-1 py-2 text-lg font-semibold hover:bg-slate-900 hover:text-teal-400" > Let's talk </button>
             </div>
          </div>
        </form>
        </div>

        <div className="ml-36 hidden sm:block ">
          <div className="" data-aos="fade-down">
            <div className="flex mb-2 text-center">
              <h1 className="text-white font-bold mr-5  text-7xl">My</h1>
              <h1 className="text-teal-300 mr-5 font-bold text-7xl ">
                Contact
              </h1>
              <h1 className="text-teal-300 font-bold text-7xl">Us</h1>
            </div>
          </div>

          <div className="mt-5 hidden sm:block" data-aos="fade-left">
            <img
              className="min-w-48 "
              src={Mycontact}
              alt="Contact us images"
            />
          </div>
        </div>
      </div>
{/* 
<div class="min-h-screen bg-gray-100 flex sm:items-center ">
  <form class="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
    
   
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label for="first-name" class="block text-sm font-medium text-gray-700">First Name</label>
        <input type="text" id="first-name" placeholder="John" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"/>
      </div>
      <div>
        <label for="last-name" class="block text-sm font-medium text-gray-700">Last Name</label>
        <input type="text" id="last-name" placeholder="Doe" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"/>
      </div>
    </div>
    
   
    <div class="mt-4">
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <input type="email" id="email" placeholder="you@example.com" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"/>
    </div>
    
    
    <div class="mt-4">
      <label for="company-name" class="block text-sm font-medium text-gray-700">Company Name</label>
      <input type="text" id="company-name" placeholder="Your Company" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"/>
    </div>
    
  
    <div class="mt-4">
      <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
      <textarea id="message" rows="4" placeholder="Write your message here..." class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
    </div>
    
  
    <div class="mt-6">
      <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Submit
      </button>
    </div>
  </form>
</div> */}

    </>
  );
};

export default Contact;
