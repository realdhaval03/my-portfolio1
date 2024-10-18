import React from 'react'
import Mycontact from '../assets/part1 (1).png';
// import { motion } from 'framer-motion';



const Contact = () => {
  return (
    <>
   
 
    <div  className=' bg-slate-800 sstaitems-center pt-32 pl-56 pb-8 flex  text-base w-full min-h-screen  border-b border-teal-800 '>
     
      <form action="#" method='POST '>
        <div className='min-w-4'>
          <div className='flex mb-4'>
            <div className=''>
                <label htmlFor="first-name" className='text-slate-200  text-base font-semibold'>
                First Name
                </label>
               <div className='mt-2'>
                <input type="text" id='first-name' name='first-name' placeholder='First Name' 
                className='bg-slate-950 rounded-md  border-1 border-y-teal-400  px-2 py-2 shadow-teal-300  placeholder:text-slate-400 text-lg font-semibold' />
               </div>
            </div>

            <div className='ml-9'>
              <div>
                <label htmlFor="last-name" className='text-slate-200  text-base font-semibold '>
                  Last Name
                </label> 
                <div className='mt-2'>
                  <input type="text" id='last-name' name='last-name' placeholder='Last Name' 
                   className='bg-slate-950  rounded-md  border-1 px-2 py-2 shadow-md  placeholder:text-slate-400  text-lg font-semibold'/>
                </div>
              </div>
            </div>
          </div>

          <div className='mb-4'>
            <div>
              <label htmlFor="Company" className= 'text-slate-200  text-base font-semibold  '>
              Company
              </label>
            </div>
            <div className='mt-2'>
               <input type="text " id='compnay' name='company' placeholder='Company'
               className='w-full bg-slate-950 rounded-md border-1 px-2 py-2 shadow-md placeholder:text-slate-400 text-lg font-semibold '/> 
            </div>
          </div>

          <div className='mb-4'>
            <div>
              <label htmlFor="Emailname" className='text-slate-200  text-base font-semibold'>
                Email
              </label>
            </div>
            <div className='mt-2'>
              <input type="text" id='Emailname' name='Emailname' placeholder='Email' 
              className='w-full bg-slate-950 rounded-md border-1 px-2 py-2 shadow-md  placeholder:text-slate-400 text-lg font-semibold'/>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="Phone-Numder" className='text-slate-200  text-base font-semibold'>
                Phone Number
              </label>
            </div>
            <div className='mt-2'>  
              <input type="text" id='Phone-Number' name='Phone-Number' placeholder='Phone-Number' 
              className='w-full bg-slate-950 rounded-md border-1 px-2 py-2 shadow-md  placeholder:text-slate-400 text-lg font-semibold'/>
            </div>
          </div>

          
          <div className='mt-4'>
            <div>
              <label htmlFor="Massage" className='text-slate-200   text-base font-semibold'>
                Your Massage
              </label>
            </div>
            <div className='mt-2'>  
              <textarea type="text" id='Massage' name='Massage' placeholder='Massage' 
              className='w-full bg-slate-950 rounded-md border-1 px-2 py-5 shadow-md  placeholder:text-slate-400 text-lg font-semibold '/>
            </div>
          </div>

          <div className='mt-7'>
            <div>
                <button type='submit'
                 className='w-full bg-teal-300 rounded-md border-0 px-1 py-2 text-lg font-semibold hover:bg-slate-900 hover:text-teal-400'> 
                 Let's talk
                </button>
            </div>
          </div>
        </div> 
      </form>

      <div className='ml-28 '>
        <div   className='' >
        {/* initial={{opacity:0, y:0}} animate={{opacity:1,y:50}} transition={{delay:0.5, duration:0.5}} */}
          <div className='flex mb-2 text-center'>
              <h1 className='text-white font-bold mr-5  text-7xl'>My</h1> 
              <h1 className='text-teal-300 mr-5 font-bold text-7xl '>Contact</h1> 
              <h1 className='text-teal-300 font-bold text-7xl'>Us</h1> 
            </div>
        </div>

        <div className='mt-5'>
        {/* initial={{opacity:0, y:0}} animate={{opacity:1,y:50}} transition={{delay:0.5, duration:0.5}} */}
            <img className='min-w-48 ' src={Mycontact} alt="Contact us images" />
        </div>
      </div>


    </div>
    
   

    </>
  )
}

export default Contact
