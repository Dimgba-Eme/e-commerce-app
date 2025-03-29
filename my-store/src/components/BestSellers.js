import React from 'react'
import './bestSellers.scss'

import best_sellers from '../assets/images/best_sellers'

function BestSellers() {
  return (
    <>
      <section className='best-sellers-container'>
        <div className='best-sellers-title'>
            <h1>Best Sellers</h1>
            <hr />
        </div>
        <div className='best-sellers-container'>
           {best_sellers.map((items) => {
            return (
                <div key={items.id}>
                    <img src={items.image} alt='Best sellers products' />
                    <h4>{items.name}</h4>
                    <p>${items.new_price}</p>
                </div>
            )
           })}
        </div>
      </section>
    </>
  )
}

export default BestSellers
