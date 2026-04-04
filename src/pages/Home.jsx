import React from 'react'
import { FaHome } from 'react-icons/fa'
import './main.css'

const Home = () => {
  return (
    <div className='hero'>
      <h1>Elevate Your Living Space with HomeAura</h1>
      <h4>Discover premium home décor and furniture designed to bring comfort, style, and elegance into every corner of your home.</h4>
      <p>From modern minimalism to timeless classics, HomeAura offers a curated collection of décor and furniture that transforms your house into a beautiful living experience.</p>
      <button><FaHome className='home'/> Explore Collection</button>
    </div>
  )
}

export default Home