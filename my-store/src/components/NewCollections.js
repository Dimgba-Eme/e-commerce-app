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
                        <div>
                            <img src={item.image} />
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
