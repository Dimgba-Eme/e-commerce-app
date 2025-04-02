import React from 'react'
import './bestSellers.scss'

import best_sellers from '../assets/images/best_sellers'
import { Link } from 'react-router-dom'

function BestSellers() {
    return (
        <>
            <section className='best-sellers-container'>
                <div className='best-sellers-title'>
                    <h1>Best Sellers</h1>
                    <hr />
                </div>
                <div className='best-sellers-data-wrapper'>
                    {best_sellers.map((items) => {
                        return (


                            <div key={items.id} className='best-sellers-data'>
                                <Link to={`/single-item/${items.id}`}><img src={items.image} alt='Best sellers products' onClick={() => window.scrollTo(0, 0)} /></Link>
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
