import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col'>
      <ul className='flex absolute top-50 p-6 justify-center items-center gap-10 font-semibold text-2xl underline'>
        <Link to='/product/men'>Men</Link>
        <Link to='/product/women'>Women</Link>
        <Link to='/product/kids'>Kids</Link>
      </ul>
        <Outlet />
    </div>
  )
}

export default Product