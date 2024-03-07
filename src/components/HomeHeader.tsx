import Link from 'next/link'
import React from 'react'
import { TbGridDots } from 'react-icons/tb'

const HomeHeader = () => {
  return (
    <header className='flex justify-end p-5 text-sm'>
      <div className='flex space-x-4 items-center'>
        <Link
          href={'test.com'}
          className='text-slate-500 hover:text-slate-900 duration-100 transition-colors'
        >
          Click me
        </Link>
        <Link
          href={'test.com'}
          className='text-slate-500 hover:text-slate-900 duration-100 transition-colors'
        >
          Click me
        </Link>
        <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2 transition-all duration-200' />
        <button className='bg-blue-500 text-white p-2 px-6 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all duration-200'>Sign in</button>
      </div>
    </header>
  )
}

export default HomeHeader