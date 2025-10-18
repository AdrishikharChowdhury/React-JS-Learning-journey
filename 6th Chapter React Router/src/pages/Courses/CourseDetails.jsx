import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

    const params=useParams();

  return (
    <div className='flex w-full h-full justify-center items-center'>
        <h1 className='font-semibold text-8xl underline'>{params.id} CourseDetails</h1>
    </div>
  )
}

export default CourseDetails