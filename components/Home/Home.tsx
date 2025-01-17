import React from 'react'
import Hero from './Hero/Hero'
import RecentImage from './RecentImage/RecentImage'
import Description from './Description/Description'

const Home = () => {
  return (
    <div className='overflow-hidden h-[2150px]'>
      <Hero/>
      <RecentImage/>
      <Description/>
    </div>
  )
}

export default Home