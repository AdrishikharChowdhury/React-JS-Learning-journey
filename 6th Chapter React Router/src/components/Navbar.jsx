import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center bg-emerald-900 text-white px-10 py-10'>
        <h1 className='text-4xl font-semibold'>React Router DOM</h1>
        <ul className='flex justify-center items-center gap-10 text-2xl'>
            <li className='hover:text-amber-400 hover:border-b-2 transition-all duration-100'><Link to='/'>Home</Link></li>
            <li className='hover:text-amber-400 hover:border-b-2 transition-all duration-100'><Link to='/about' >About</Link></li>
            <li className='hover:text-amber-400 hover:border-b-2 transition-all duration-100'><Link to='/courses' >Courses</Link></li>
            <li className='hover:text-amber-400 hover:border-b-2 transition-all duration-100'><Link to='/contact' >Contact</Link></li>
            <li className='hover:text-amber-400 hover:border-b-2 transition-all duration-100'><Link to='/product' >Product</Link></li>
        </ul>
    </div>
  )
}

export default Navbar