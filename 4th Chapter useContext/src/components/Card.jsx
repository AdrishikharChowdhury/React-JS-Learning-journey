import React, { useContext } from 'react'
import { UserContext } from '../contexts/GeneralContext';

const Card = ({ user }) => {
  return (
    <div className='bg-white p-5 rounded-xl w-1/4 h-1/2 flex flex-col justify-center items-center gap-6'>
        <div class="h-50 w-50 rounded-full bg-slate-400"></div>
        <p className='text-lg'>Name: {user.name}</p>
        <p className='text-lg'>Age: {user.age}</p>
        <p className='text-lg'>Email: {user.email}</p>
    </div>
  )
}

export default Card