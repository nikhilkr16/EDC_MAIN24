import React from "react"
import { useState } from "react"
import {Link} from "react-scroll"
import {FaTimes} from "react-icons/fa"
import { IoMenu } from "react-icons/io5";
import logi from "../../assets/edcHome.jpg"
import "./body.css"

const Body = () => {
    return (
        <>
        <div className="container">
        <img src={logi} alt="" className="image" />
        <h1 className="text">Igniting the innovation within Upcoming Trendsetter</h1>
        <button className="btn">
            Let's Start
        </button>
        </div>
        <div className="temp">

        </div>
        </>
    )
}

export default Body