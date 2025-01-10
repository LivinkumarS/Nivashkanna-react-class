import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'

import Name from './components/name.jsx'

export default function App() {
  return (
    <div>

      <Navbar/>
      
      <Name/>
      <h1 className='head1'>Helo</h1>
      <Name/>


      <Navbar/>
      

    </div>
  )
}
