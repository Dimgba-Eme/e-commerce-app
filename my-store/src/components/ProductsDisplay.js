import React from 'react'
import './productsDisplay.scss'

const ProductsDisplay = (props) => {
  const {product} = props;
  return (
    <section className='products-display-container'>
      <div className='products-display-inner'>

        <div>
          <h1>{product.name}</h1>
        </div>

      </div>
    </section>
  )
}

export default ProductsDisplay
