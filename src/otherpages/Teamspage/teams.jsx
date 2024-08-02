import React from 'react'
import Collage from './Collage'
import sir1 from '../../assets/Sir1.png'
import sir2 from '../../assets/VShah.png'
import '../Teamspage/teams.css'
import ujjwalS from '../../assets/ujjalSir.png'


function Teamspage() {
    return (
        <>

        
        <Collage/>





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
        </>
    )
}

export default Teamspage