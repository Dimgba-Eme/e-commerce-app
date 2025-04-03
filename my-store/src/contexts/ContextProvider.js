import React, { createContext, useContext, useState } from 'react'
import all_products from '../assets/images/all_products'

const getDefaultCart = () => {
    let cart = {}
    for (const i = 0; i < cart.length; i++);
    return cart;
}

const ProductsContext = createContext();

const ContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const contextValue = { all_products };
    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ContextProvider

export const useProducts = () => useContext(ProductsContext); 
