import React from "react"
import NavBar from "./components/Navbar.jsx"
import About_us from "./components/About_us.jsx"
import Body from "./components/Body/body.jsx"
import Footer from "./components/footer/Footer.jsx"
import Eventsection from "./components/Eventsection/Eventssection.jsx"
import Speakers from "./components/speakers.jsx"
import Sponser from "./components/Sponser/Sponser.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Wave from "./components/wave/wave.jsx"
import Slidermain from "./components/Slider/Slidermain.jsx"
import Testimonial from "./components/Testimonial/Testimonial.jsx"


function App() {
  return(
    <div>
      <NavBar/>
      <Body/>
      <About_us/>
      <Hero/>
      <Slidermain/>
      <Eventsection/>
      <Speakers />
      <Sponser/>
      <Wave />
      <Testimonial/>
      <Footer />
    </div>
  )
}

export default App
