import React from 'react'
import all_products from '../assets/images/all_products'
import { useParams } from 'react-router-dom'
import ProductsDisplay from './ProductsDisplay'
import { useProducts } from '../contexts/ContextProvider'

const SingleItem = () => {
    const { all_products } = useProducts();
    const { productId } = useParams();
    const product = all_products.find((item) => item.id === Number(productId))
    return (
        <main>
            <h1>Single Item</h1>
            <ProductsDisplay product={product} />
        </main>
    )
}

export default SingleItem
