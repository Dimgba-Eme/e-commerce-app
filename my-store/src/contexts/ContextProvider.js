import React, { createContext, useContext } from 'react'
import all_products from '../assets/images/all_products'

const ProductsContext = createContext();

const ContextProvider = ({ children }) => {

    const contextValue = { all_products };
    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ContextProvider

export const useProducts = () => useContext(ProductsContext); 
