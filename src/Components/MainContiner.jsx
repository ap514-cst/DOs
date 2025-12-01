import React from 'react'
import "./MainContiner.css"
import Sidebar from './Sidebar'

import { Outlet } from 'react-router-dom'
import WelcomePage from './WelcomePage'

const MainContiner = () => {
  return (
    <div className='main-continer'>
      <Sidebar/>
      
      <Outlet/>
      
    </div>
  )
}

export default MainContiner
