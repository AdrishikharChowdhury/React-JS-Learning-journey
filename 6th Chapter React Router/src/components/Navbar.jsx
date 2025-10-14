import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center bg-emerald-900 text-white px-10 py-5'>
        <h1 className='text-4xl font-semibold'>React Router DOM</h1>
        <ul className='flex justify-center items-center gap-10 text-2xl'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about' >About</Link></li>
            <li><Link to='/contact' >Contact</Link></li>
            <li><Link to='/product' >Product</Link></li>
        </ul>
    </div>
  )
}

export default Navbar