import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'

const HomeSearch = () => {
  return (
    <>
      <form className='flex w-full mt-5 mx-auto max-w-[90%] border border-slate-200 px-5 py-2 items-center rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl duration-200'>
        <AiOutlineSearch className='text-xl text-slate-400 mr-3' />
        <input type='text' className='flex-grow focus:outline-none' />
        <BsFillMicFill className='text-lg text-slate-800' />
      </form>
      <div className='mt-8 flex gap-3 flex-col sm:flex-row sm:gap-6'>
        <button className='bg-gray-100 w-36 h-10 rounded-md text-sm text-gray-800 focus:outline-none hover:shadow-md transition-shadow'>Google Search</button>
        <button className='bg-gray-100 w-36 h-10 rounded-md text-sm text-gray-800 focus:outline-none hover:shadow-md transition-shadow'>I'm feeling lucky</button>
      </div>
    </>
  )
}

export default HomeSearch