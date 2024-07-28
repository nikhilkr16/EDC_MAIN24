import React from 'react'
import sir1 from '../../assets/Sir1.png'
import sir2 from '../../assets/VShah.png'
import '../Teamspage/teams.css'

function Hero() {
    return (
        <>
            <div className=' p-10 hero-2'>
                <div className='p-1'> <h3 className='text-xl font-semibold mb-4'><span className='bg-yellow-300 pt-2 pb-2 pl-4'>Ou</span>r Team</h3>
                    <h2 className='text-2xl font-bold mb-4 '>Faculty Member</h2>

                </div>
                <div className='flex space-x-4 justify-evenly'>
                    <div>
                        <img src={sir1} className='sir'/>
                    </div>
                    <div>
                        <img src={sir2} className='sir'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero