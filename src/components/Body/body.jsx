import React from 'react'
import "../Body/body.css";
import blob from "../../assets/blobs.png"
import blobR from "../../assets/blobR.png"

function Body() {
  return (
         <div className='b'>
        <div className='b-body'>
        
       <div className="heading">
        <h1 className='h1'> <h3><span>Igniting the innovation</span></h3> within upcoming<span>  ground breakers.</span></h1>
       </div>
       <div className="btn">
        <button className='button'>Let's Start </button>
       </div>
        </div>
        <img src={blob} class="blob1" />
        <img src={blob} class="blob2" />
        <img src={blobR} class="blob3"/>
        <img src={blob} class="blob4 "/>
        <img src={blobR} class="blob5"/>
        <img src={blobR} class="blob6"/>
        </div>
     )
 }

export default Body;