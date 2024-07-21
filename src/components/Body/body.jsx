import React from 'react'
import "../Body/body.css";
import NavBar from '../Navbar.jsx'
import About_us from '../About_us.jsx';
function Body() {
  return (
         <div className='b'>
        <div className='b-body'>
        <NavBar></NavBar>
       <div className="heading">
        <h1 className='h1'> <h3><span>Igniting the innovation</span></h3> within upcoming<span>  trendsetters.</span></h1>
       </div>
       <div className="btn">
        <button className='button'>Let's Start </button>
       </div>
        </div>
        </div>
     )
 }

export default Body;