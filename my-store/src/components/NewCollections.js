import React from 'react'
import './newCollections.scss'
import new_collections from '../assets/images/new_collections'

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
                        <>
                        <div key={item.id} className='new-collections-data'>
                            <img src={item.image} alt='new collections products' />
                            <h4>{item.name}</h4>
                            <p>${item.new_price}</p>
                        </div>
                        </>
                    )
                   })}
                </div>
            </section>
        </>
    )
}

export default NewCollections
