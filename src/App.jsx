import React from 'react'
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductManagement from './admin/ProductManagement'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './admin/Dashboard'
import CheckOut from './pages/CheckOut'
import PageNotFound from './pages/PageNotFound'


const App = () => {
  return (
    <>
      <Header/>

      <Routes>

        {/* public routes */}
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/product/:id' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<CheckOut/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />

        {/* auth route */}
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />

        {/* admin routes */}
        <Route element={<ProtectedRoute/>}>
         <Route path='/manage-products' element={<ProductManagement/>} />
         <Route path='/dashboard' element={<Dashboard/>} />
        </Route>

        <Route path='*' element={<PageNotFound/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App