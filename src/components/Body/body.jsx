import React from 'react'
import "../Body/body.css";
import blob from "../../assets/blobs.png"
import blobR from "../../assets/blobR.png"
import art from "../../assets/artimage.png"

function Body() {
  return (
         <div className='b'>
        <div className='b-body'>
        <img src={art} alt="" className="artistic" />
       <div className="heading">
        <h1 className='h1 slogan'> <h3><span>Waste Karo</span></h3> Wisely Karo</h1>
       </div>
       <div className="btn">
        <button className='button'>Let's Start </button>
       </div>
        </div>
       
        
        </div>
     )
 }

export default Body;