import React from 'react'
import './newCollections.scss'
import new_collections from '../assets/images/new_collections'
import { Link } from 'react-router-dom'

const NewCollections = () => {
    return (
        <>
            <section className='new-collections-container'>
                <div className='new-collections-title'>
                    <h1>New Collections</h1>
                    <hr />
                </div>

                <div className='new-collections-data-container'>
                    {new_collections.map((item) => {
                        return (

                            <div key={item.id} className='new-collections-data'>
                                <Link to={`/single-item/${item.id}`}> <img src={item.image} alt='new collections products' onClick={() => window.scrollTo(0, 0)} /></Link>
                                <h4>{item.name}</h4>
                                <p>${item.new_price}</p>
                            </div>

                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default NewCollections
