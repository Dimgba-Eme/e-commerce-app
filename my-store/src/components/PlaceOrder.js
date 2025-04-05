import React from 'react'
import './placeOrder.scss'
import { useProducts } from '../contexts/ContextProvider'

const PlaceOrder = () => {
    const {getTotalCartAmount} = useProducts();
  return (
    <section>
      <h1>PlaceOrder</h1>
      <div className='totals-container'>
                <div className='totals-inner'>
                    <h1>Summary</h1>
                    <div className='subtotal-container'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>


                    <div className='shipping-container'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>

                    <div className='total-amount-container'>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button className='checkout-btn'>PLACE ORDER</button>
            </div>
    </section>
  )
}

export default PlaceOrder
