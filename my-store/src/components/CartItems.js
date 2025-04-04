import React from 'react'
import './cartItems.scss'
import trash_icon from '../assets/icons/trash_icon.png'
import minus_icon from '../assets/icons/minus.png'
import plus_icon from '../assets/icons/plus.png'
import { useProducts } from '../contexts/ContextProvider'

const CartItems = () => {
    const { all_products, cartItems, addToCart, removeFromCart, deleteFromCart, getTotalCartAmount } = useProducts();
    return (
        <section className='cart-items-container'>
            <h1>Shopping Cart</h1>
            <div className='cart-items-inner'>

                {all_products.map((item) => {
                    if (cartItems[item.id] > 0) {
                        return (
                            <div key={item.id} className='items-wrapper'>
                                <div className='items-inner'>
                                    <img src={item.image} alt='cart product image' className='product-image' />
                                    <h4 className='item-name'>{item.name}</h4>
                                    <p className='item-price'>${item.new_price}</p>

                                    <div className='item-btn-container'>
                                        <button onClick={() => removeFromCart(item.id)}><img src={minus_icon} /></button>
                                        <button>{cartItems[item.id]}</button>
                                        <button onClick={() => addToCart(item.id)}><img src={plus_icon} /></button>
                                    </div>
                                    <h4 className='total-price'>${cartItems[item.id] * item.new_price}</h4>
                                    <img src={trash_icon} alt='trash icon' className='trash-icon' onClick={() => deleteFromCart(item.id)} />
                                </div>
                            </div>











                        )
                    }
                })}


            </div>

            <div className='totals-container'>
                <div className='totals-inner'>
                    <h1>Cart Totals</h1>
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
                <button className='checkout-btn'>PROCEED TO CHECKOUT</button>
            </div>


        </section>
    )
}

export default CartItems
