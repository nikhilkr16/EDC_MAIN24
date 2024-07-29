import React from "react"
import NavBar from "./components/Navbar.jsx"
import Footer from "./components/footer/Footer.jsx"
import Speakerpage from "./otherpages/Speakerpage/Speakerpage.jsx"
import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Home from "./Home.jsx"
import Eventspage from "./otherpages/Eventspage/Eventspage.jsx"
import Teamspage from "./otherpages/Teamspage/teams.jsx"

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
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
