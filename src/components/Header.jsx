import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './style.css';

const Header = () => {

  const user = JSON.parse(localStorage.getItem('homeAuraUser'));

  return (
    <div className='header'>
      <div className="logo">
        <h1><FaHome className='fa-home'/> HomeAura</h1>
      </div>
      <div className="nav-links">
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/manage-products'>Admin</Link>
       {
        user ?  <button className='profile-btn'>{user.name[0]}</button>: <button className='login-btn'>Login</button>
       }
      </div>
    </div>
  )
}

export default Header