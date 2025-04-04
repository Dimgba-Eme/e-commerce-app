import React from 'react'
import './cartItems.scss'
import trash_icon from '../assets/icons/trash_icon.png'
import shopping_basket_minus from '../assets/icons/basket_shopping_minus.png'
import shopping_basket_plus from '../assets/icons/basket_shopping_plus.png'
import { useProducts } from '../contexts/ContextProvider'

const CartItems = () => {
    const { all_products, cartItems, addToCart, removeFromCart, deleteFromCart, getTotalCartAmount } = useProducts();
    return (
        <section className='cart-items-container'>
            <h1>Shopping Cart</h1>
            <div className='cart-items-inner'>
                <div className='cart-items-heading'>
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>

                {all_products.map((item) => {
                    if (cartItems[item.id] > 0) {
                        return (
                            <div key={item.id} className='cart-items-wrapper'>


                                <div className='items-inner'>

                                    <img src={item.image} alt='cart product image' className='cart-product-image' />


                                    <div className='item-info-container'>

                                        <h4>{item.name}</h4>

                                        <div className='item-btn-price-container'>

                                            <div className='item-price-container'>
                                                <p>${item.new_price}</p>
                                            </div>
                                            <div className='item-btn-container'>
                                                <button onClick={() => removeFromCart(item.id)}><img src={shopping_basket_minus} /></button>
                                                <button>{cartItems[item.id]}</button>
                                                <button onClick={() => addToCart(item.id)}><img src={shopping_basket_plus} /></button>
                                            </div>

                                            <div className='item-total-price-container'>
                                                <h1>${cartItems[item.id] * item.new_price}</h1>
                                            </div>
                                            <img src={trash_icon} alt='trash icon' className='trash-icon' onClick={() => deleteFromCart(item.id)} />
                                        </div>
                                    </div>

                                </div>
                                <hr />



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
                    <hr />

                    <div className='shipping-container'>
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                    <hr />

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
