import React from 'react'
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductManagement from './admin/ProductManagement'


const App = () => {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/manage-products' element={<ProductManagement/>} />
      </Routes>
    </>
  )
}

export default App