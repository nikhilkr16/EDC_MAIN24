import React from "react"
import NavBar from "./components/Navbar"
import About_us from "./components/About_us.jsx"
import Body from "./components/Body/body.jsx"
import Speakers from "./components/Body/speakers.jsx"
import Footer from "./components/footer/Footer.jsx"
import Eventsection from "./components/Eventsection/Eventssection.jsx"

function App() {
  return(
    <div>
      <NavBar/>
      <About_us/>
      <Body />
      <Eventsection/>
      <Speakers />
      <Footer />
    </div>
  )
}

export default App
