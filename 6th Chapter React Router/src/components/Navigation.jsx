import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft,ChevronRight,House } from 'lucide-react'

const Navigation = () => {

    const navigate=useNavigate();

    const handleBack=()=>{
        navigate(-1);
    }

    const handleNext=()=>{
        navigate(+1);
    }

    const handleHome=()=>{
        navigate('/');
    }

  return (
    <div className='flex w-full justify-center items-center p-5 text-lg gap-5'>
        <button onClick={handleBack} className='px-5 py-3 bg-blue-800 rounded-2xl cursor-pointer active:scale-90 transition-all duration-100'><ChevronLeft color="#ffffff" /></button>
        <button onClick={handleHome} className='px-5 py-3 bg-blue-800 rounded-2xl cursor-pointer active:scale-90 transition-all duration-100'><House color="#ffffff" /></button>
        <button onClick={handleNext} className='px-5 py-3 bg-blue-800 rounded-2xl cursor-pointer active:scale-90 transition-all duration-100'><ChevronRight color="#ffffff" /></button>
    </div>
  )
}

export default Navigation