import React from 'react'
// import { Outlet } from 'react-router-dom'
import './products.scss'
import ProductsTabs from '../components/ProductsTabs'

const Products = () => {
  return (
    <main className='products-container'>
      <h1>Our Products</h1>
      <ProductsTabs />

      

      {/* <div className='products-display-container'>
        <Outlet />
      </div> */}
    </main>
  )
}

export default Products
