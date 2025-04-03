import React from 'react'
import './cartItems.scss'
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
                <hr />

                {all_products.map((item) => {
                    if (cartItems[item.id] > 0) {
                        return (
                            <div className='cart-items-wrapper'>
                                <div>
                                    <img src={item.image} />
                                </div>

                                <div>
                                    <h4>{item.name}</h4>
                                </div>

                                <div>
                                    <p>${item.new_price}</p>
                                </div>

                                <div>
                                    <button onClick={removeFromCart(item.id)}>-</button>
                                    <button>{cartItems[item.id]}</button>
                                    <button onClick={addToCart(item.id)}>+</button>
                                </div>

                                <div>
                                    <h4>total</h4>
                                </div>

                                <div>
                                    <img />
                                </div>

                                <hr />
                            </div>
                        )
                    }
                })}


            </div>



        </section>
    )
}

export default CartItems
