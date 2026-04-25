import React, { useEffect, useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import './style.css';

const Header = () => {

//  const [user,setUser] = useState(()=>{
//   const userData =localStorage.getItem('homeAuraUser');
//   return userData ? JSON.parse(userData) : [];
//  }) 

    const user = JSON.parse(localStorage.getItem('homeAuraUser'))


   const logout = ()=>{
    localStorage.removeItem('homeAuraUser');
    window.location.reload();
    alert('Logout successfully.!')
  }



  // if(user){
  //   setRole(user.role);
  // }
  const navigate = useNavigate();
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
        {/* { user.role=== 'admin' && <Link to='/manage-products'>Admin</Link>} */}
        {
          user ?  <button className='login-btn' onClick={()=>logout()}>Logout</button>: <button className='login-btn' onClick={()=>navigate('/login')}>Login</button>
        }
      </div>
    </div>
  )
} 

export default Header