import React from 'react'
import { Link } from 'react-router-dom'
import './productsTabs.scss'

const ProductsTabs = () => {
  return (
    <>
      <nav className='products-tab'>
        <ul className='products-tab-inner'>
          <Link to='hoodies' className='tab'>Hoodies</Link>
          <Link to='t-shirt' className='tab'>T-shirt</Link>
          <Link to='headwear' className='tab'>Headwear</Link>
          <Link to='footwear' className='tab'>Footwear</Link>
          <Link to='accessories' className='tab'>Accessories</Link>
        </ul>
      </nav>
    </>
  )
}

export default ProductsTabs
