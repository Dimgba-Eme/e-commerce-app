import React, { createContext, useContext, useState } from 'react'
import all_products from '../assets/images/all_products'

const getDefaultCart = () => {
    let cart = {}
    for (let i = 0; i < all_products.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ProductsContext = createContext();

const ContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const deleteFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] = 0 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItem = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = { all_products, cartItems, addToCart, removeFromCart, deleteFromCart, getTotalCartAmount, getTotalCartItem };
    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ContextProvider

export const useProducts = () => useContext(ProductsContext); 
