import React from "react"
import NavBar from "./components/Navbar.jsx"
import Footer from "./components/footer/Footer.jsx"
<<<<<<< HEAD
import Speakerpage from "./otherpages/Speakerpage/Speakerpage.jsx"
import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Home from "./Home.jsx"
import Eventspage from "./otherpages/Eventspage/Eventspage.jsx"
import Teamspage from "./otherpages/Teamspage/teams.jsx"
=======
import Eventsection from "./components/Eventsection/Eventssection.jsx"
import Speakers from "./components/speakers.jsx"
import Sponser from "./components/Sponser/Sponser.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Wave from "./components/wave/wave.jsx"
import Slidermain from "./components/Slider/Slidermain.jsx"
import Testimonial from "./components/Testimonial/Testimonial.jsx"
import Speakers_sec from './Speakers_sec/Main.jsx';

>>>>>>> 4998b7bf7577eab9f3135f250d09ac3fee071373

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NavBar/><Home/></>
    },
    {
      path: "/Speakers",
      element: <><NavBar/><Speakerpage/><Footer/></>
    },
    {
      path: "/Events",
      element: <><NavBar/><Eventspage/><Footer/></>
    },
    {
      path: "/Team",
      element: <><NavBar/><Teamspage/><Footer/></>
    },

  ])

  return(
    <div>
<<<<<<< HEAD
      <RouterProvider router={router}/>
=======
      {/* <NavBar/>
      <Body/>
      <About_us/>
      <Hero/>
      <Slidermain/>
      <Eventsection/>
      <Speakers />
      <Sponser/>
      <Wave />
      <Testimonial/>
      <Footer /> */}
      <Speakers_sec></Speakers_sec>
>>>>>>> 4998b7bf7577eab9f3135f250d09ac3fee071373
    </div>
  )
}

export default App
