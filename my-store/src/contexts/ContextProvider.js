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
                let itemInfo = all_products.find((e) => e.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const contextValue = { all_products, cartItems, addToCart, removeFromCart, deleteFromCart };
    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ContextProvider

export const useProducts = () => useContext(ProductsContext); 
