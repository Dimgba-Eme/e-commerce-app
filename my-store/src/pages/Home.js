import React from 'react'

import Hero from '../components/Hero'
import NewCollections from '../components/NewCollections'
import BestSellers from '../components/BestSellers'
import Categories from '../components/Categories'
const Home = () => {
    return (
        <>
            <main>
                <Hero />
                <NewCollections />
                <BestSellers />
                <Categories />
            </main>
        </>
    )
}

export default Home
