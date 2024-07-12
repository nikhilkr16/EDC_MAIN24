import React from "react";
import Eventcard from "./Eventcard";

function Eventsection() {
    return(
        <div className="m-20 border-y-4 p-12">
            <div className="flex flex-row">
                <div className="h-[50px] w-[50px] bg-[#FED853]"></div>
                <h1 className="text-[25px] ml-[-25px] font-bold">Events</h1>
            </div>
            <div className="mt-12">
                <h1 className="text-[35px] font-bold">Our Flagship Events</h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-16">
                <div className="flex flex-row justify-center items-center mb-4">
                    <Eventcard/>
                    <Eventcard/>
                    <Eventcard/>
                </div>
                <button className="p-4 rounded-xl bg-[#FED853] font-bold">Know More</button>
            </div>
        </div>
    )
    
}

export default Eventsection