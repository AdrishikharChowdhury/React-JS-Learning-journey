import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Product from './components/pages/Product'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='w-full h-screen bg-gray-950 text-white flex flex-col'>
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/product' element={<Product/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App