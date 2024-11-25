import { Outlet } from "react-router-dom"
import Navbar from "./features/Navbar"
import Home from "./pages/Home"
import Abouts from "./pages/Abouts"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"
import './App.css'


function App() {
  

  return (
    <> 
    <div className="bg-slate-800 h-auto w-full overflow-hidden " >
    <Navbar/>
    <Home/>
    <Abouts/>
    <Project/>
    <Contact/>
    <Footer/>
   
    </div>
    
    </>
  )
}

export default App
