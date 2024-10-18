import { createBrowserRouter,NavLink } from "react-router-dom";
import App from "./App";
import  Home  from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Abouts from "./pages/Abouts";

const router = createBrowserRouter ([
    {path:'/',element:<App/>,
        children:[
          {path:'',element:<Home/>},   
          {path:'Abouts',element:<Abouts/>}, 
          {path:'Project',element:<Project/>},    
          {path:'Contact',element:<Contact/>}, 
        ]
    }
])
export default router