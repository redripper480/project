import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Searchbar from'./Searchbar'

function App() {
  return (
  
      <div>
       <Navbar></Navbar>
        <Searchbar></Searchbar>
      </div>
      
    
  )
}

export default App
