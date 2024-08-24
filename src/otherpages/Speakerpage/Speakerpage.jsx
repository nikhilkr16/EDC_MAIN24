import React from 'react'
import img1 from './sp1.png'
import img2 from './sp2.png'
import img3 from './sp3.png'
import '../Speakerpage/speakerpage.css'
import howit from './howitworks.jpg'


function Speakerpage() {
  return (
    <>
    <div className="speakerbgg flex flex-col items-center w-screen">
            <div className="speakerbg h-screen text-white bg-cover ">
                <div className="h-screen md:text-[50px] backdrop-brightness-50 flex flex-col justify-center items-center text-center">
                <h1 className="lg:px-48 uppercase font-bold">Simpler Approach To Tackle Bigger Problems</h1>
                </div>
            </div>
            <div className='w-screen'>
        <img src={howit} alt="Image 1" className='mt-16 w-full h-screen object-cover' />
      </div>
        </div>
    </>
     )
 }

export default Speakerpage;