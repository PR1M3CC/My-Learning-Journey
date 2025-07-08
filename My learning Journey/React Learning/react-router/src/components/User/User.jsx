import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='flex w-screen justify-center h-[485px] items-center'>
    <div className='bg-gray-700 w-[50%] rounded-2xl h-fit py-3 justify-center flex text-3xl text-white'>User: {id}</div>
  </div>
  )
}

export default User