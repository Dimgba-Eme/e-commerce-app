import React from 'react'
import { Link } from 'react-router-dom'

const ProductsTabs = () => {
  return (
    <>
      <nav className='products-tab'>
        <ul className='products-tab-inner'>
          <Link to='hoodies' className='products-tab'>Hoodies</Link>
          <Link to='t-shirt' className='products-tab'>T-shirt</Link>
          <Link to='headwear' className='products-tab'>Headwear</Link>
          <Link to='footwear' className='products-tab'>Footwear</Link>
          <Link to='accessories' className='products-tab'>Accessories</Link>
        </ul>
      </nav>
    </>
  )
}

export default ProductsTabs
