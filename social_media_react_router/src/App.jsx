import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import PostListProvider from './store/Post-List-Store'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <PostListProvider>
      <div className='app-cont'>
        <Sidebar />
        <div className='content'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  )
}

export default App