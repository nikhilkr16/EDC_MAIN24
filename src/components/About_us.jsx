import React from 'react'
import { FaGlobe } from "react-icons/fa";
import { BsFileBarGraph } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";

function About_us() {
  return (
    <div className='min-h-64 w-full shadow-black shadow-inner bg-slate-700'>
    <div className=' min-h-52 w-2/3 bg-white absolute bottom- -m-20 left-60 p-7 rounded-xl flex'>
        <div  className='w-2/3 pr-14' >
             <h3  className=' text-base font-bold mb-2 '><span className='bg-yellow-200 p-1'>Ab</span>out Us</h3>
        <h3 className=' text-base font-bold  mb-1 mt-1'>What do we do ?</h3>
        <p className=' text-xs mt-3'>The Entrepreneurship Cell (E-Cell) at BIT MESRA is a student-driven initiative dedicated to promoting entrepreneurship among students. Through workshops, events,
             and mentorship programs, it cultivates a culture of innovation and supports budding entrepreneurs in turning their ideas into reality. </p>
        </div>
        <div className= 'w-1/3  flex flex-col gap-4'>
            <div  className=' flex items-center gap-2'>  <div className=' rounded-md border-black border-2 h-9 w-14 flex justify-center items-center text-2xl' ><FaGlobe />  </div>
            <h2  className='text-sm'>
             The reliable industry takes many forms
What do</h2>

</div>
<div  className=' flex items-center gap-2'>  <div className='text-4xl ' ><BsFileBarGraph />  </div>
            <h2  className='text-sm'>
             The reliable industry takes many forms
What do</h2>

</div>
<div  className=' flex items-center gap-2'>  <div className=' rounded-md border-black border-2 h-9 w-14 flex justify-center items-center text-2xl' ><AiFillLike />  </div>
            <h2  className='text-sm'>
             The reliable industry takes many forms
What do</h2>

</div>
        </div>
    </div>
    </div>
  )
}

export default About_us