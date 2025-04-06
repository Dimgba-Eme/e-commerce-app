import React, { useState } from 'react'
import './placeOrder.scss'
import { useProducts } from '../contexts/ContextProvider'
import { validateEmail } from './utils'
import paypal_logo from '../assets/icons/paypal.png'
import stripe_logo from '../assets/icons/stripe_logo.png'

const PlaceOrder = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [town, setTown] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [country, setCountry] = useState("")
    const [phone, setPhone] = useState("")


    const { getTotalCartAmount } = useProducts();

    const isFormValid = () => {
        return (
            firstName && lastName && email && street && city && town && zipcode && country && phone && validateEmail(email) && getTotalCartAmount()
        )
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
        alert("Order Placed!");
    }


    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setStreet("");
        setCity("");
        setTown("");
        setZipcode("");
        setCountry("");
        setPhone("");
    }


    return (
        <section className='order-container'>
            <h1>Delivery Information</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-inner'>
                    <div className='delivery-info'>
                        <div className='first-last-container'>
                            <div>
                                <input type='text' id='firstName' placeholder='First name' value={firstName} onChange={e => setFirstName(e.target.value)} />
                            </div>

                            <div>
                                <input type='text' id='lastName' placeholder='Last name' value={lastName} onChange={e => setLastName(e.target.value)} />
                            </div>

                        </div>

                        <div>
                            <input type='email' id='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <input type='text' id='street' placeholder='Street' value={street} onChange={e => setStreet(e.target.value)} />
                        </div>

                        <div className='city-state-container'>
                            <div>
                                <input type='text' id='city' placeholder='City' value={city} onChange={e => setCity(e.target.value)} />
                            </div>

                            <div>
                                <input type='text' id='town' placeholder='State' value={town} onChange={e => setTown(e.target.value)} />
                            </div>
                        </div>

                        <div className='zipcode-country-container'>
                            <div>
                                <input type='number' id='zipcode' placeholder='Zipcode' value={zipcode} onChange={e => setZipcode(e.target.value)} />
                            </div>

                            <div>
                                <input type='text' id='country' placeholder='Country' value={country} onChange={e => setCountry(e.target.value)} />
                            </div>
                        </div>

                        <div>
                            <input type='tel' id='phone' placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)} />
                        </div>
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

                        <div className='payment-gateway-container'>
                            <h3>Payment Method</h3>

                            <div className='cash-payment'>
                                <input type='radio' id='cash'  /><span>Cash On Delivery</span>
                                <input type='radio' id='cash'  /><span>Cash On Delivery</span>
                                <input type='radio' id='cash' checked /><span>Cash On Delivery</span>
                            </div>

                        </div>
                    </div>
                </div>
                    <button disabled={!isFormValid()}>Place Order</button>
            </form>
        </section>
    )
}

export default PlaceOrder
