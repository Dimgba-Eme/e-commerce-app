import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import './products.scss'
import ProductsTabs from '../components/ProductsTabs'

const Products = () => {

  useEffect(() => {
    document.title = "Products | Dimmy's store"
  }, [])

  return (
    <main className='products-container'>
      <h1>Our Products</h1>
      <p>Click to view</p>
      <ProductsTabs />



      <div className='products-display-container'>
        <Outlet />
      </div>
    </main>
  )
}

export default Products
