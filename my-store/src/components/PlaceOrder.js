import React, { useState } from 'react'
import './placeOrder.scss'
import { useProducts } from '../contexts/ContextProvider'

const PlaceOrder = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zipcode, setZipcode] = useState();
    const [country, setCountry] = useState();
    const [phone, setPhone] = useState();

    const { getTotalCartAmount } = useProducts();
    return (
        <section className='order-container'>
            <h1>Delivery Information</h1>
            <div className='order-inner'>
                <div className='delivery-info'>
                    <form>

                    </form>
                </div>



                <div className='totals-container'>
                    <div className='totals-inner'>
                        <h1>Order Summary</h1>
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
            </div>
        </section>
    )
}

export default PlaceOrder
