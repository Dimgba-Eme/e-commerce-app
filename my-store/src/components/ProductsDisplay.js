import React from 'react'
import './productsDisplay.scss'
import rating from '../assets/icons/rating.png'

const ProductsDisplay = (props) => {
  const { product } = props;
  return (
    <section className='product-display-container'>
      <div className='product-display-inner'>

        <div className='product-image-container'>
          <img src={product.image} alt={product.name} />
        </div>
        <div className='product-info-container'>
          <div>
            <h3>{product.name}</h3>
          </div>

          <div className='star-rating-container'>
            <img src={rating} alt='star rating' />
            <p>(122)</p>
          </div>

          <div className='price-container'>
            <p>${product.new_price}</p>
          </div>

          <div className='description-container'>
            <p>A lightweight, usually knitted, pullover shirt,
              close-fitting and with a round neckline and short sleeves,
              worn as an undershirt or outer garment.
            </p>
          </div>

          <div className='product-size-container'>
            <h4>Select Size</h4>
            <div className='size-btns'>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>
          </div>

          <div className='add-to-cart-btn'>
            <button>ADD TO CART</button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ProductsDisplay

