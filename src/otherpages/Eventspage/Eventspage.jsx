import React from "react"
import Card from "./Card"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import '../Eventspage/Eventspage.css'
import TextBox from "../Teamspage/TextBox"
import DD from "../Teamspage/dropDown"
import Pic from "../Teamspage/pic"
import TextBox1 from "../Teamspage/TextBox1"

function Eventspage(){
    return(
        <>
        <div className="flex flex-col items-center w-screen">
            
            
            <div className="bg-white w-screen overflow-hidden">
                <div className="mt-[150px] text-center text-slate-700">
                    <h1 className="lg:text-[50px] text-green-800 font-bold">Our Current Partners</h1>
                </div>
                <div>
        <div className=' mt-24 mb-16'>
        
        <div className='flex overflow-hidden mt-10'>
        <div className=' flex animate-infinte-slide shrink-0 whitespace-nowrap'>
        <img className='h-50 w-52 m-3' src="https://assets-global.website-files.com/5ae98eec19474ec4b00cd02a/5bee83f7a69edda26bc5b891_YourStory_Logo-New-01.png" alt="" />
        <img className='h-50 w-52 m-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp9dqdnVXkrnk-DizHUu-a-SuiF3XWqhULbA&s" alt="" />
        <img className='h-50 w-52 m-3' src="https://gengigih.demopreview.link/assets/logo-partners/progate-logo.png" alt="" />
        <img className='h-50 w-52 m-3' src="https://logowik.com/content/uploads/images/pizza-hut-new6371.jpg" alt="" />
         <img className='h-50 w-52 m-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpgHrtdptFtKYOLL4elhWf4pxOfHjNUSxr7Q&s" alt="" />
      
        <img className='h-50 w-52 m-3' src="https://coding-blocks.github.io/assets/images/cb/cblogo.png" alt="" />
        <img className='h-50 w-52 m-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcikSC2e1l_KFqdwrzZj8AwTpVE06gp7okJQ&s" alt="" />
         <img className='h-50 w-52 m-3' src="https://www.teqfocus.com/wp-content/uploads/2022/08/logo99-1.jpg" alt="" />
      
        <img className='h-50 w-52 m-3' src="https://cdn.dribbble.com/users/873027/screenshots/3996894/dribbble_001_2x.png" alt="" />
        <img className='h-50 w-52 m-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTrEfVcpVCq0lWB0CmMYyM8KBHlxJy1n9RVQ&s" alt="" />
      
       
        
        </div>
        <div className=' flex animate-infinte-slide shrink-0 whitespace-nowrap'>
        <img className='h-50 w-52 m-3' src="https://assets-global.website-files.com/5ae98eec19474ec4b00cd02a/5bee83f7a69edda26bc5b891_YourStory_Logo-New-01.png" alt="" />
        <img className='h-50 w-52 m-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp9dqdnVXkrnk-DizHUu-a-SuiF3XWqhULbA&s" alt="" />
        <img className='h-50 w-52 m-3' src="https://gengigih.demopreview.link/assets/logo-partners/progate-logo.png" alt="" />
        <img className='h-50 w-52 m-3' src="https://logowik.com/content/uploads/images/pizza-hut-new6371.jpg" alt="" />
         <img className='h-50 w-52 m-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpgHrtdptFtKYOLL4elhWf4pxOfHjNUSxr7Q&s" alt="" />
      
        <img className='h-50 w-52 m-3' src="https://coding-blocks.github.io/assets/images/cb/cblogo.png" alt="" />
        <img className='h-50 w-52 m-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcikSC2e1l_KFqdwrzZj8AwTpVE06gp7okJQ&s" alt="" />
         <img className='h-50 w-52 m-3' src="https://www.teqfocus.com/wp-content/uploads/2022/08/logo99-1.jpg" alt="" />
      
        <img className='h-50 w-52 m-3' src="https://cdn.dribbble.com/users/873027/screenshots/3996894/dribbble_001_2x.png" alt="" />
        <img className='h-50 w-52 m-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTrEfVcpVCq0lWB0CmMYyM8KBHlxJy1n9RVQ&s" alt="" />
      
        
          </div>
        
        </div>
        </div>

    </div>
    </div>
    <div className="new">
    <div className="mt-[150px] text-center text-slate-700">
                    <h1 className="lg:text-[70px] text-green-800 font-bold">Wanna Join Us</h1>
                </div>
    <div className='w-[80rem] flex flex-container m-8 p-2'>
                    
                    <div className='prof flex flex-col justify-center align-items'>
                        
                        <div className='text m-0 flex align-center text-center'>
                            <div className='flex flex-col'>
                            <p className='text-center text-black font-semibold'>How old is your Entreprise</p>
                           
                            </div>
                            
                        </div>
                        <TextBox/>

                        <div className='text pt-8 m-0 flex align-center text-center'>
                            <div className='flex flex-col'>
                            <p className='text-center text-black font-semibold'>Sector you are in</p>
                            
                            </div>
                            
                        </div>
                        <DD/>

                        <div className='text pt-8 m-0 flex flex-col align-center text-center'>
                            <div className='flex'>
                            <p className='text-center text-black font-semibold'>Enter a Contact Number</p>
                            
                            </div>
                            <div className='left-0'>
                            <TextBox1/> 
                            </div>
                        </div>
                        
                        
                        
                    </div>
                    

                
                
            </div>

    </div>
    </div>
                
          
        </>
    )
}

export default Eventspage