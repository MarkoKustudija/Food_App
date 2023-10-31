import React from 'react'
import Header from './Header'
import CartProvider from '../../store/CartProvider'

function Layout({children}) {
  return (
    <CartProvider>
    <Header />
    <main>{children}</main>
    </CartProvider>
  )
}

export default Layout