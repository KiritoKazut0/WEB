import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './Pages/Login/Login.jsx'
import Home from './Pages/Home/House.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeProvider } from './Context/HomeContext.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <Login/>
},{
  path: "/home",
  element: <Home/>
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomeProvider>
      <RouterProvider router={router}/>  
    </HomeProvider>
  
  </React.StrictMode>,
)
