import React, { useEffect } from 'react'
import CartItems from '../components/CartItems'

const Cart = () => {

  useEffect(() => {
    document.title = "Cart | Dimmy's Store"
  }, [])
  return (
    <main>
      <CartItems />
    </main>
  )
}

export default Cart
