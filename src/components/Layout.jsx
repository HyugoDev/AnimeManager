import React from 'react'
import Navbar from './navbar/Navbar.jsx'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => { 
  const Ruta = useLocation()

  return (
        <>
          {
            Ruta.pathname === '/login' || Ruta.pathname === '/registro' ? null : <Navbar />
          }
          <main>
            {children}
          </main>
        </>
  )
}

export default Layout
