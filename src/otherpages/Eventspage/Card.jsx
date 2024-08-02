import React from "react";
import img1 from '../Eventspage/img1.png'

function Card() {
    return(
        //background gradeint color 
        <div className=" box-content flex flex-col justify-center items-center text-center border-2 shadow-2xl shadow-gray-700 p-4 pt-8 gap-6 rounded-2xl bg-gradient-to-r from-purple-800 via-fuchsia-700 to-pink-900">
            <h1 className="font-bold md:text-[37px]">Formal events</h1>
            <p>Elevating Experiences with Distinguished Events</p>
            <button className="bg-white p-2 rounded-3xl">Explore More</button>
            <img src={img1} alt="" srcset="" />
        </div>
    )
}

export default Card;