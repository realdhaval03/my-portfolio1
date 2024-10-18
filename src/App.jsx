import { Outlet } from "react-router-dom"
import Navbar from "./features/Navbar"
import Home from "./pages/Home"
import Abouts from "./pages/Abouts"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"



function App() {
  

  return (
    <> 
    <div className="bg-slate-800">
    <Navbar/>
    <Home/>
    <Abouts/>
    <Project/>
    <Contact/>
    <Footer/>
    <Outlet/>
    </div>
    
    
    
    </>
  )
}

export default App
