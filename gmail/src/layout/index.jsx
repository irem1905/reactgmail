// import React from 'react'
import Navbar from '../components/navbar/navbar'
import Sidebar from '../components/sidebar/sidebar'
import { Outlet } from 'react-router-dom'
import Tool from '../components/tool/tool'
import './style.scss'

function GmailLayout() {
  return (
    <div className='layout'>
      <Navbar/>
      <div className='layout__box'>
        <div className='layout__box-sidebar'>
          <Sidebar/>
        </div>
        <div className='layout__box-outlet'>
          <Outlet/>
          <div>
            Hello,Anonim :)) 
          </div>
        </div>
        <div className='layout__box-tool'>
          <Tool/>
        </div>
      </div>
    </div>
  )
}

export default GmailLayout