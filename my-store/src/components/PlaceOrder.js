import React, { useState } from 'react'
import './placeOrder.scss'
import { useProducts } from '../contexts/ContextProvider'

const PlaceOrder = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
        alert("Order placed!")
    }

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setStreet("");
        setCity("");
        setState("");
        setZipcode("");
        setCountry("");
        setPhone("");
    }

    const { getTotalCartAmount } = useProducts();

    return (
        <section className='order-container'>
            <h1>Delivery Information</h1>
            <div className='order-inner'>
                <div className='delivery-info'>
                    <form onSubmit={handleSubmit}>
                        <input type='text' id='first-name' placeholder='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        <input type='text' id='last-name' placeholder='Last name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                        <br />
                        <input type='email' id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <br />
                        <input type='text' id='street' placeholder='Street' value={street} onChange={(e) => setStreet(e.target.value)} required />
                        <br />
                        <input type='text' id='city' placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} required />
                        <input type='text' id='state' placeholder='State' value={state} onChange={(e) => setState(e.target.value)} required />
                        <br />
                        <input type='number' id='zipcode' placeholder='Zipcode' value={zipcode} onChange={(e) => setZipcode(e.target.value)} required />
                        <input type='text' id='country' placeholder='Country' value={country} onChange={(e) => setCountry(e.target.value)} required />
                        <br />
                        <input type='tel' id='phone' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />
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
