import React from "react"
import { useState } from "react"
import {Link} from "react-scroll"
import {FaTimes} from "react-icons/fa"
import { IoMenu } from "react-icons/io5";
import logo from "../assets/edclogo.png"

const NavBar = () => {
    const [click,setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const content = <>
        <div className="lg:hidden block absolute top-16 left-0 right-0 bg-transparent backdrop-blur-[2px] transition">
            <ul className="text-center text-xl p-20">
            <Link spy={true} smooth={true} to = "Home">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-700 hover:rounded">Home</li>
            </Link>
            <Link spy={true} smooth={true} to = "Events">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-700 hover:rounded">Events</li>
            </Link>
            <Link spy={true} smooth={true} to = "Speakers">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-700 hover:rounded">Speakers</li>
            </Link>
            <Link spy={true} smooth={true} to = "Team">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-700 hover:rounded">Team</li>
            </Link>
            <Link spy={true} smooth={true} to = "App">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-700 hover:rounded">App</li>
            </Link>         
            </ul>
    </div>
    </>
    return (
        <div className=" h-lvh w-full bg-black">
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-1 px-20 py-1 border-b border-slate-800 fixed top-0 left-0 w-screen transparent backdrop-blur-[1px] md:gap-0 gap-8 bg-slate-800 ">
                <div className="flex items-center flex-1">
                    <span className="lg:text-[18px] font-bold flex flex-row justify-center items-center">
                        <img src={logo} alt="" className="w-14 h-14" />
                        Entrepreneurship <br />Development Cell
                    </span>
                </div>
                <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden ">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                        <Link spy={true} smooth={true} to = "Home">
                        <li className="hover:text-fuchsia-600 transition cursor-pointer">Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to = "Events">
                        <li className="hover:text-fuchsia-600 transition cursor-pointer">Events</li>
                        </Link>
                        <Link spy={true} smooth={true} to = "Speakers">
                        <li className="hover:text-fuchsia-600 transition cursor-pointer">Speakers</li>
                        </Link>
                        <Link spy={true} smooth={true} to = "Team">
                        <li className="hover:text-fuchsia-600 transition cursor-pointer">Team</li>
                        </Link>
                        <Link spy={true} smooth={true} to = "App">
                        <li className="hover:text-fuchsia-600 transition cursor-pointer">App</li>
                        </Link> 
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>

                <button className="block sm:hidden transition " onClick={handleClick}>
                    {click ? <FaTimes className="h-8 w-8"/> : <IoMenu className="h-10 w-10"/> }
                </button>
            </div>
        </nav>
        </div>
    )
}

export default NavBar;
