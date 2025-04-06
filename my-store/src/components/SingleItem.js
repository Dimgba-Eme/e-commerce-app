import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductsDisplay from './ProductsDisplay'
import { useProducts } from '../contexts/ContextProvider'
import './singleItem.scss'
import arrow_right from '../assets/icons/arrow-right.png'

const SingleItem = () => {
    const { all_products } = useProducts();
    const { productId } = useParams();
    const product = all_products.find(e => e.id === Number(productId));
    return (
        <main className='single-item-container'>
            <div className='product-path-container'>
            <h4>Products <span><img src={arrow_right} alt='arrow right' /></span><Link to={`/products/${product.category}`}>{product.category}</Link><span><img src={arrow_right} alt='arrow right' /></span>{product.name}</h4>
            </div>

            <ProductsDisplay product={product} />
        </main>
    )
}

export default SingleItem
