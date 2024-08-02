import React from 'react'
import Body from './Body.jsx'
import Hero1_speakers from './Hero1_speaker.jsx'
import Hero2_invester from './Hero2_invester.jsx'
import Footer from '../components/footer/Footer.jsx'
function Main() {
  return (
    <div>  
        <Body></Body>
        <Hero1_speakers></Hero1_speakers>
        <Hero2_invester></Hero2_invester>
        <Footer></Footer>
    </div>
    
  )
}

export default Main;