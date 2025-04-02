import React from 'react'
import { useParams } from 'react-router-dom'
import ProductsDisplay from './ProductsDisplay'
import { useProducts } from '../contexts/ContextProvider'
import './singleItem.scss'

const SingleItem = () => {
    const { all_products } = useProducts();
    const { productId } = useParams();
    const product = all_products.find(e => e.id === Number(productId));
    return (
        <main className='single-item-container'>
            <h1>Single Item</h1>
            <ProductsDisplay product={product} />
        </main>
    )
}

export default SingleItem
