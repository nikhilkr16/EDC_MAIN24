import React from 'react'
import "../Body/body.css";
import blob from "../../assets/blobs.png"
import blobR from "../../assets/blobR.png"

function Body() {
  return (
         <div className='b'>
        <div className='b-body'>
        
       <div className="heading">
        <h1 className='h1'> <h3><span>Igniting the innovation</span></h3> within upcoming<span>  trendsetters.</span></h1>
       </div>
       <div className="btn">
        <button className='button'>Let's Start </button>
       </div>
        </div>
        <img src={blob} class="absolute w-64 -z-30 left-0 mt-[3rem]"/>
        <img src={blob} class="absolute w-64 -z-30 left-0 top-[165rem] "/>
            <img src={blobR} class="absolute w-64 -z-30 right-0  mt-[170rem] "/>
        </div>
     )
 }

export default Body;