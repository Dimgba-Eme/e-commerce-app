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
        <div>
           {best_sellers}
        </div>
      </section>
    </>
  )
}

export default BestSellers
