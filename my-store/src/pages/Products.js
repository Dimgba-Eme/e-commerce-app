import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <main className='products-container'>
      <h1>Our Products</h1>
      <div>
        <Link to='/'>Hoodies</Link>
        <Link to='/'>T-shirt</Link>
        <Link to='/'>Headwear</Link>
        <Link to='/'>Footwear</Link>
        <Link to='/'>Accessories</Link>
      </div>

      <div className='products-display-container'>

      </div>
    </main>
  )
}

export default Products
