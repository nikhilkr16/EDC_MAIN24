import React from 'react'
import img1 from './sp1.png'
import img2 from './sp2.png'
import img3 from './sp3.png'
import '../Speakerpage/speakerpage.css'


function Speakerpage() {
  return (
    <>
    <div className="flex flex-col items-center w-screen">
            <div className="speakerbg h-screen text-white bg-cover ">
                <div className="h-screen md:text-[50px] backdrop-brightness-50 flex flex-col justify-center items-center text-center">
                <h1 className="lg:px-48 uppercase font-bold">noteworthy Entrepreneurs who graced our events</h1>
                </div>
            </div>
            <div className="glass-morphic lg:m-20 m-4 p-4 lg:p-12 shadow-2xl rounded-2xl w-screen">
            <div className="flex flex-row justify-start items-center">
                <div className="h-[50px] w-[50px] bg-[#FED853]"></div>
                <h1 className="text-[25px] ml-[-25px] font-bold">Notable Past Speakers</h1>
            </div>
            <div className="mt-12">
                <h1 className="text-[35px] font-bold">E-Summit’24</h1>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-2 md:p-20'>
              <div className='flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={img1} className='' alt="" />
                <h1>Akshay Makar</h1>
                <h2>founder</h2>
              </div>
              <div className='flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={img2} alt="" />
                <h1>Vatsal Kanakiya</h1>
                <h2>founder</h2>
              </div>
              <div className='flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={img3} alt="" />
                <h1>Ravi K Ranjan</h1>
                <h2>founder</h2>
              </div>
              <div className='flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={img1} alt="" />
                <h1>Akshay Makar</h1>
                <h2>founder</h2>
              </div>
              <div className='flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={img2} alt="" />
                <h1>Vatsal Kanakiya</h1>
                <h2>founder</h2>
              </div>
              <div className='flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={img3} alt="" />
                <h1>Ravi K Ranjan</h1>
                <h2>founder</h2>
              </div>
            </div>
            <div className="mt-40">
                <h1 className="text-[35px] font-bold">Inventor’s Forge</h1>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-2 md:p-20'>
              <div className='flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={img1} alt="" />
                <h1>Akshay Makar</h1>
                <h2>founder</h2>
              </div>
              <div className='flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={img2} alt="" />
                <h1>Vatsal Kanakiya</h1>
                <h2>founder</h2>
              </div>
              <div className='flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={img3} alt="" />
                <h1>Ravi K Ranjan</h1>
                <h2>founder</h2>
              </div>
              <div className='flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={img1} alt="" />
                <h1>Akshay Makar</h1>
                <h2>founder</h2>
              </div>
              <div className='flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={img2} alt="" />
                <h1 className='text-auto'>Vatsal Kanakiya</h1>
                <h2>founder</h2>
              </div>
              <div className='flex flex-col md:p-20 p-8 justify-center items-center gap-2 font-bold'>
                <img src={img3} alt="" />
                <h1>Ravi K Ranjan</h1>
                <h2>founder</h2>
              </div>
            </div>
            
        </div>
        
        </div>
    </>
     )
 }

export default Speakerpage;