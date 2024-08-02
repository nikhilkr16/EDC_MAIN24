import React from "react";
import bg from "./CollageImg/BG.jpg";
import one from './CollageImg/1.png'
import two from './CollageImg/2.png'
import three from './CollageImg/3.png'
import four from './CollageImg/4.jpg'
import five from './CollageImg/5.jpg'
import six from './CollageImg/6.jpeg'
import seven from './CollageImg/7.jpeg'
import eight from './CollageImg/8.jpg'
import ninth from './CollageImg/9.jpeg'
import nikhil from './CollageImg/NIKHIL KUMAR.png'
import varun from './CollageImg/Varun Gupta.jpg'
import pulkit from './CollageImg/Pulkit Rewri.jpg'
import diptanshu from './CollageImg/Diptanshu Mahakud.jpg'

function Collage() {
  return (
    <>
      <div
        className="mx-auto p-0 bg-cover bg-center h-screen w-screen relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        <div className="relative z-20 flex flex-col lg:flex-row h-full">
          <div className="flex-none lg:w-1/3 lg:h-full h-1/4 p-4 pt-28 flex items-center justify-center">
            <h1 className="text-4xl font-bold mb-6 items-center text-white lg:leading-[6rem] leading-[3rem] lg:text-[5rem] text-[3rem] pb-12">
              <span className="block">MEET</span>
              <span className="block">THE</span>
              <span className="block">TEAM</span>
            </h1>
          </div>

          <div className=" lg:w-2/3 relative p-2 flex items-center justify-center overflow-hidden">
            <div className="relative w-[45em] h-[35em]">
              <img src={one} alt="Image 1" className="absolute w-[20em] h-[25em] top-[7.125em] left-[12.5em] object-cover rounded-tl-[1.25em]" />
              <img src={five} alt="Image 2" className="absolute w-[9.375em] h-[6.25em] top-[26em] left-[1.625em] object-cover rounded-[1.25em]" />
              <img src={seven} alt="Image 3" className="absolute w-[15.625em] h-[10em] top-[14.625em] left-[-4.625em] object-cover rounded-[1.25em]" />
              <img src={diptanshu} alt="Image 4" className="absolute w-[9.375em] h-[6.25em] top-[7.5em] left-[1.625em] object-cover rounded-[1.25em]" />
              <img src={six} alt="Image 5" className="absolute w-[12.5em] h-[6.25em] top-[0em] left-[6.4375em] object-cover rounded-[1.25em]" />
              <img src={nikhil} alt="Image 6" className="absolute w-[12.5em] h-[6.25em] top-[0em] left-[20em] object-cover rounded-[1.25em]" />
              <img src={pulkit} alt="Image 7" className="absolute w-[7.5em] h-[9.375em] top-[3.125em] left-[33.5625em] object-cover rounded-[1.25em]" />
              <img src={ninth} alt="Image 8" className="absolute w-[12.5em] h-[6.25em] top-[13.875em] left-[33.5625em] object-cover rounded-[1.25em]" />
              <img src={eight} alt="Image 9" className="absolute w-[7.5em] h-[10.625em] top-[21.5em] left-[33.5625em] object-cover rounded-[1.25em]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collage;