import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import router from './Routing.jsx'
import {  RouterProvider } from 'react-router-dom'

ReactDom.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
  
)
