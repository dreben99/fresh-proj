import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'
import { CartProvider} from './context/CartContext'


import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'
import Supplements from './components/Supplements/Supplements'
import Logout from './components/Auth/Logout/Logout'
import Cart from './components/Cart/Cart'

function App() {

  return (

    <>
        <AuthProvider>
          <CartProvider>

      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/supplements' element={<Supplements />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>
          </CartProvider>
      </AuthProvider>
    </>



  )
}

export default App
