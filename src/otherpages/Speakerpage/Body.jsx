import React from 'react'

import '../components/Body/body.css';
import NavBar from '../components/Navbar';

function Body() {
  return (
         <div className='b'>
        <div className='b-body2'>
        <NavBar></NavBar>
       <div className="heading">
        <h1 className='h1'>noteworthy Entrepreneurs who graced our events</h1>
       </div>
        </div>
        </div>
     )
 }

export default Body;