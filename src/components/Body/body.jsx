import React from "react"
import { useState } from "react"
import {Link} from "react-scroll"
import {FaTimes} from "react-icons/fa"
import { IoMenu } from "react-icons/io5";
import blobs from "../../assets/Vector.svg"

import "./body.css"

const Body = () => {
    return (
        <>
        
        <div className="container">
        <h1 className="text">Igniting the innovation <span class="break"></span> within Upcoming Trendsetter</h1>
        <button className="btn">
            Let's Start
        </button>
       
        </div>
        <div className="temp">
           
        </div>
        <div className="m-20 border-y-4 p-12">
            <div className="flex flex-row justify-start items-center">
                <div className="h-[50px] w-[50px] bg-[#FED853]"></div>
                <h1 className="text-[25px] ml-[-25px] font-bold">Speakers</h1>
            </div>
            <div className="mt-12">
                <h1 className="text-[35px] font-bold">Some Past Speakers</h1>
            </div>
            <div className="flex justify-center items-center mt-12"> {/* Adjust the margin as needed */}
      <div className="glass-morphic p-6 rounded-lg w-full max-w-6xl">
        <div className="relative overflow-hidden h-[400px]">
          <div className="scrolling-cards flex space-x-6 animate-scroll">
            <div className="card w-[300px] h-[275px] p-4 bg-white bg-opacity-50 rounded-lg shadow-lg flex flex-col justify-end">
              <h3 className="text-xl font-semibold mb-2">Card 1</h3>
              <p>Some content for card 1.</p>
            </div>
            <div className="card w-[300px] h-[275px] p-4 bg-white bg-opacity-50 rounded-lg shadow-lg flex flex-col justify-end">
              <h3 className="text-xl font-semibold mb-2">Card 2</h3>
              <p>Some content for card 2.</p>
            </div>
            <div className="card w-[300px] h-[275px] p-4 bg-white bg-opacity-50 rounded-lg shadow-lg flex flex-col justify-end">
              <h3 className="text-xl font-semibold mb-2">Card 3</h3>
              <p>Some content for card 3.</p>
            </div>
            <div className="card w-[300px] h-[275px] p-4 bg-white bg-opacity-50 rounded-lg shadow-lg flex flex-col justify-end">
              <h3 className="text-xl font-semibold mb-2">Card 4</h3>
              <p>Some content for card 4.</p>
            </div>
            <div className="card w-[300px] h-[275px] p-4 bg-white bg-opacity-50 rounded-lg shadow-lg flex flex-col justify-end">
              <h3 className="text-xl font-semibold mb-2">Card 5</h3>
              <p>Some content for card 5.</p>
            </div>
            <div className="card w-[300px] h-[275px] p-4 bg-white bg-opacity-50 rounded-lg shadow-lg flex flex-col justify-end">
              <h3 className="text-xl font-semibold mb-2">Card 6</h3>
              <p>Some content for card 6.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-16">
                <button className="p-4 rounded-xl bg-[#FED853] font-bold">Know More</button>
                </div>
        </div>
      </div>
      </div>
    </div>
        </>
    )
}

export default Body