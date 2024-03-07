import HomeHeader from '@/components/HomeHeader'
import Image from 'next/image'
import React from 'react'
import googleLogo from '@/images/google-logo.png'
import HomeSearch from '@/components/HomeSearch'

const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className='flex flex-col items-center mt-24'>
        <Image 
          src={googleLogo}
          alt='Google Logo'
          width={300}
          height={100}
        />
        <HomeSearch />
      </div>
    </>
  )
}

export default Home