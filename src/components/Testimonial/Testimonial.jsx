import React from "react";
import Testimonialslider from "./Testimonialslider.jsx";
import blob from "../../assets/blobs.png"
import blobR from "../../assets/blobR.png"


function Testimonial() {
    
    return(
        <div className="glass-morphic lg:m-20 p-4 lg:p-12 m-4 shadow-2xl rounded-2xl my-16">
            <div className="flex flex-row justify-start items-center">
                <div className="h-[50px] w-[50px] bg-[#FED853]"></div>
                <h1 className="text-[25px] ml-[-25px] font-bold">Testimonials</h1>
            </div>
            <div className="mt-12">
                <h1 className="text-[35px] font-bold">What our customers say</h1>
                <p className="mt-12">Discover what our valued customers have to say about their experiences partnering with Induz. At Induz, we take pride in delivering exceptional industrial solutions and services, and nothing speaks louder than the words of those who have entrusted us with their projects.</p>
            </div>
            <div className="justify-center mt-16 mb-16 md:mx-60 shadow-2xl rounded-lg">
                    <Testimonialslider/>
            </div>
        </div>
    )
    
} 

export default Testimonial
