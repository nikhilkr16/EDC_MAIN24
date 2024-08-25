import React, { useState, useEffect } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase.js"; 
import DD from "./dropDown.jsx"
import Map from "../../components/GoogleMapComponent.jsx"
import TextBox from "./TextBox.jsx"
import Pic from "./pic.jsx"
import Btn from "../../components/btn.jsx"
import '../Teamspage/teams.css'

function Teamspage() {
    return (
        <>

            <div className='bg-[#F8F8EC] p-10 hero-2'>
                <div className='p-1'> <h3  className='text-4xl text-green-800  flex justify-center mt-8 font-semibold mt-4'>Your Waste is Precious</h3>
                    <h2 className='ml-8 text-2xl font-bold mb-4 '>Pick-Up Service</h2>

                </div>
                <div className='flex flex-container m-8 box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);'>
                    
                        <div className='prof flex flex-col justify-center align-items box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);'>
                            
                            <div className='text m-0 flex align-center text-center font-semibold text-green-900'>
                                <div className='flex flex-col'>
                                <p className='text-center text-4xl'>How old is your gold (e-Kachra)</p>
                               
                                </div>
                                
                            </div>
                            <TextBox/>

                            <div className='text pt-8 m-0 flex align-center text-center font-semibold text-green-900'>
                                <div className='flex flex-col'>
                                <p className='text-center text-4xl'>Type of e-Kachra</p>
                                
                                </div>
                                
                            </div>
                            <DD/>

                            <div className='text pt-8 m-0 flex flex-col align-center text-center font-semibold text-green-900'>
                                <div className='flex'>
                                <p className='text-center text-4xl'>Upload the picture</p>
                            
                                </div>
                                <div className='left-0'>
                                <Pic/> 
                                </div>
                            </div>
                            <div className="my-button flex items-center mx-auto mt-8 justify-center">
                                <Btn/>
                            </div>
                            
                            
                        </div>
                        

                    
                    
                </div>
                
                
                <div className='columns'>
                    <div className='p-1'>
                        <h2 className='ml-8 text-2xl font-bold mt-16 mb-8'>Find Our Nearest KUDAPETI</h2>
                    </div>
                    
                </div>
                <div className='flex justify-center'>
                    <Map/>
                </div>
            </div>
        </>
    )
}

export default Teamspage