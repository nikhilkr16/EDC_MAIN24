import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { ImTarget } from "react-icons/im";
import { BsCalendar } from "react-icons/bs";
import img from '../Eventsection/eventsicon.png'

function Eventcard() {
    return(
            <div className="flex flex-col justify-center items-center text-center lg:p-8 rounded-2xl ">
                <div>
                    <img src={img} alt="" srcset="" className="rounded-full" />
                <h1 className="font-bold text-[20px]">Event</h1>
                </div>
            <div className="flex flex-col justify-start items-start text-start mt-4">
            <div className="grid grid-cols-3">
                <div className="flex flex-row justify-center items-center">
                <SlCalender/>
                    <h1 className="font-bold">Date</h1>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <FaRegClock/>
                    <h1 className="font-bold">Time</h1>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <ImTarget/>
                    <h1 className="font-bold">Venue</h1>
                </div>
            </div>
            <p>Event Description in 1-2 lines</p>
            </div>
            </div>
    )
            
}

export default Eventcard;