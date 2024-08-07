import React from "react"
import Card from "./Card"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import '../Eventspage/Eventspage.css'
import event1 from '../Eventspage/event1.png'
import leaf1 from '../Eventspage/leaf.png'
import leaf2 from '../Eventspage/leaf2.png'

function Eventspage(){
    return(
        <>
        <div className="flex flex-col items-center w-screen">
            <div className="eventbg h-screen text-white ">
                <div className="h-screen md:text-[50px] backdrop-brightness-50 flex flex-col justify-center items-center text-center">
                <h1 className="lg:px-48 t-headline2">Discover Unforgettable Experiences: Your Gateway to Exclusive Club Events</h1>
                <button className="md:text-[25px] p-2 pr-5 pl-5 mt-6 border border-white rounded hover:bg-white hover:scale-110 hover:text-black h-button h-btn">Let's Start</button>
                </div>
            </div>
            <div className="h-32 w-1/2 bg-black rounded-2xl text-white flex items-center justify-center -mt-16 t-head">
                <h1 ><span className="text-center text-5xl leading-3 t-headline2">INVESTOR’S FORGE</span></h1>
            </div>
            <div className="bg-white w-screen overflow-hidden">
                <div className="mt-[150px] text-center text-slate-700">
                    <h1 className="lg:text-[50px]">Broad spectrum of events we offer!</h1>
                </div>
                <div className="flex md:flex-row flex-col gap-10 justify-center items-center mt-10 pl-10 pr-10 t-cards">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="flex lg:flex-row bg-white p-20 text-center justify-center items-center">
                    <img src={leaf1} alt="" />
                    <p className="md:text-[32px]">Stay informed about all our upcoming events by following us on our social media handles. Connect with us for the     latest updates, announcements, and exclusive content!</p>
                    <img src={leaf2} alt="" />
                </div>
                <div className="flex flex-row justify-center items-center gap-6">
                    <a href="https://www.instagram.com/edcbitmesra/"><FaInstagram className="w-14 h-14"/></a>
                    <a href="https://www.linkedin.com/company/edcbitmesra/"><FaLinkedin className="w-14 h-14"/></a>
                    <a href="https://facebook.com/edcbitmesra/"><FaFacebook className="w-14 h-14"/></a>
                </div>
            </div>
            <div className="md:m-20 m-12">
                <div className="flex flex-col justify-start items-start border-4 glass-morphic p-8 gap-8 rounded-3xl shadow-2xl shadow-green-400">
                    <h1 className="font-bold text-[32px] uppercase">formal events</h1>
                    <div className="grid md:grid-cols-3 grid-cols-2 ">
                        <img src={event1} alt="" srcset="" />
                        <img src={event1} alt="" srcset="" />
                        <img src={event1} alt="" srcset="" />
                        <img src={event1} alt="" srcset="" />
                        <img src={event1} alt="" srcset="" />
                    </div>
                </div>
            </div>
            <div className="md:m-20 m-12">
                <div className="flex flex-col justify-start items-start border-4  p-8 gap-8 rounded-3xl shadow-2xl shadow-green-400">
                    <h1 className="font-bold text-[32px] uppercase">formal events</h1>
                    <div className="grid md:grid-cols-3 grid-cols-2 ">
                        <img src={event1} alt="" srcset="" />
                        <img src={event1} alt="" srcset="" />
                        <img src={event1} alt="" srcset="" />
                        <img src={event1} alt="" srcset="" />
                        <img src={event1} alt="" srcset="" />
                    </div>
                </div>
            </div>
            <div className="md:m-20 m-12">
                <div className="flex flex-col justify-start items-start border-4 border-black p-8 gap-8 rounded-3xl shadow-2xl shadow-green-400">
                    <h1 className="font-bold text-[32px] uppercase">formal events</h1>
                    <div className="grid md:grid-cols-3 grid-cols-2 ">
                        <img src={event1} alt="" srcset="" />
                        <img src={event1} alt="" srcset="" />
                        <img src={event1} alt="" srcset="" />
                        <img src={event1} alt="" srcset="" />
                        <img src={event1} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Eventspage