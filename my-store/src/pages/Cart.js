import React, { useEffect } from 'react'
import CartItems from '../components/CartItems'

const Cart = () => {

  useEffect(() => {
    document.title = "Cart | Dimmy's store"
  }, [])
  return (
    <main>
      <CartItems />
    </main>
  )
}

export default Cart
