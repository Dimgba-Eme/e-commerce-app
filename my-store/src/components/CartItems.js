import React from 'react'
import './cartItems.scss'
import { useProducts } from '../contexts/ContextProvider'

const CartItems = () => {
    const {all_products, cartItems, addToCart, removeFromCart, deleteFromCart } = useProducts();
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

                <div className='cart-items-wrapper'>
                    <div>
                        <img />
                    </div>

                    <div>
                        <h4>title</h4>
                    </div>

                    <div>
                        <p>price</p>
                    </div>

                    <div>
                        <button>-</button>
                        <button>0</button>
                        <button>+</button>
                    </div>

                    <div>
                        <h4>total</h4>
                    </div>

                    <div>
                        <img />
                    </div>

                    <hr />
                </div>
            </div>



        </section>
    )
}

export default CartItems
