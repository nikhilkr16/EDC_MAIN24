import React from 'react'
import Collage from './Collage'
import sir1 from '../../assets/Sir1.png'
import sir2 from '../../assets/VShah.png'
import '../Teamspage/teams.css'
import ujjwalS from '../../assets/ujjalSir.png'
import edclogo from "../../assets/logo.png";
import '../Teamspage/timeline.css';
import KumarVarun from '../../assets/2nd.png'
import VedantGupta from '../../assets/VedantGupta.png'
import MugdhaShukla from '../../assets/MugdhaShukla.png'

function Teamspage() {
    return (
        <>
        <Collage/>
        <div className='mains'>
            <div className=' p-10 hero-2'>
                <div className='p-1'> <h3 className='text-xl font-semibold mb-4'><span className='bg-yellow-300 pt-2 pb-2 pl-4'>Ou</span>r Team</h3>
                    <h2 className='text-2xl font-bold mb-4 '>Faculty Member</h2>

                </div>
                <div className='flex space-x-4 justify-evenly columns'>
                    <div className='prof1 flex flex-col'>
                        <div className='prof'>
                            <img src={sir1} className='sir' />
                            <div className='text flex align-center text-center'>
                                <p className='text-center'>Dr. C Jegannathan</p>
                            </div>
                        </div>

                    </div>
                    <div className='prof'>
                        <img src={sir2} className='sir' />
                        <div className='text flex align-center text-center'>
                            <p className='text-center'>Vishal H. Shah</p>
                        </div>
                    </div>
                </div>
                <div className='columns'>
                    <div className='p-1'>
                        <h2 className='text-2xl font-bold mb-4 '>Leadership Body</h2>

                    </div>
                    <div className='prof1 flex flex-col align-center justify-evenly '>
                        <div className='prof mx-auto'>
                            <img src={ujjwalS} className='sir' />
                            <div className='text flex align-center text-center'>
                                <p className='text-center'>Ujjwal Aman</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex'>
                        <div className='prof mx-auto'>
                            <img src={ujjwalS} className='sir' />
                            <div className='text flex align-center text-center'>
                                <p className='text-center'>Ujjwal Aman</p>
                            </div>
                        </div>
                        <div className='prof mx-auto'>
                            <img src={ujjwalS} className='sir' />
                            <div className='text flex align-center text-center'>
                                <p className='text-center'>Ujjwal Aman</p>
                            </div>
                        </div>
                        <div className='prof mx-auto'>
                            <img src={ujjwalS} className='sir' />
                            <div className='text flex align-center text-center'>
                                <p className='text-center'>Ujjwal Aman</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='columns'>
                    <div className='p-1'>
                        <h2 className='text-2xl font-bold mb-4'>Executive Body</h2>
                    </div>
                    <div className='flex'><div className='prof mx-auto'>
                        <img src={ujjwalS} className='sir' />
                        <div className='text flex align-center text-center'>
                            <p className='text-center'>Ujjwal Aman</p>
                        </div>
                    </div>
                        <div className='prof mx-auto'>
                            <img src={ujjwalS} className='sir' />
                            <div className='text flex align-center text-center'>
                                <p className='text-center'>Ujjwal Aman</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
   <div className='boxx'>
   <div className='p-1'> <h3 className='text-xl font-semibold ml-7 mb-4 mt-8'><span className='bg-yellow-300 pt-2 pb-2 pl-4'>Ha</span>ll of Fame</h3>
       <h2 className='text-2xl font-bold ml-7 mb-4 mt-7 '>Previous Presidents</h2>
    </div>             
    <div className='timeline'>
    <div class="container left-container">
         <img src={edclogo} alt="EDC Logo" />
                    <div class="text-box">
                <h2>Alphabet Inc.</h2>
                <small>2018-2019</small>
                <p>The sucess of every websites depends on search engine optimisation and digital marketing strategy. If you are on first page of all major search...</p>
                <span class="left-container-arrow"></span>
            </div>
            </div>
      <div className="container right-container">
        <img src={edclogo} alt="EDC Logo" />
        <div className="text-box">
          <h2>Amazon Inc.</h2>
          <small>2019-2020</small>
          <p>The success of every website depends on search engine optimization and digital marketing strategy. If you are on the first page of all major search...</p>
          <span className="right-container-arrow"></span>
        </div>
      </div>

      <div className="container left-container">
        <img src={edclogo} alt="EDC Logo" />
        <div className="text-box">
          <h2>Tesla Inc.</h2>
          <small>2020-2021</small>
          <p>The success of every website depends on search engine optimization and digital marketing strategy. If you are on the first page of all major search...</p>
          <span className="left-container-arrow"></span>
        </div>
      </div>

      <div className="container right-container">
        <img src={edclogo} alt="EDC Logo" />
        <div className="text-box">
          <h2>Toyota</h2>
          <small>2021-2022</small>
          <p>The success of every website depends on search engine optimization and digital marketing strategy. If you are on the first page of all major search...</p>
          <span className="right-container-arrow"></span>
        </div>
      </div>

      <div className="container left-container">
        <img src={edclogo} alt="EDC Logo" />
        <div className="text-box">
          <h2>Flipkart</h2>
          <small>2020-2021</small>
          <p>The success of every website depends on search engine optimization and digital marketing strategy. If you are on the first page of all major search...</p>
          <span className="left-container-arrow"></span>
        </div>
      </div>

      <div className="container right-container">
        <img src={edclogo} alt="EDC Logo" />
        <div className="text-box">
          <h2>YouTube</h2>
          <small>2021-2022</small>
          <p>The success of every website depends on search engine optimization and digital marketing strategy. If you are on the first page of all major search...</p>
          <span className="right-container-arrow"></span>
        </div>
      </div>
    </div>
    </div>
        </div>
        </>
    )
}

export default Teamspage