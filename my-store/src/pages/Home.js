import React from 'react'

import Hero from '../components/Hero'
import NewCollections from '../components/NewCollections'
import BestSellers from '../components/BestSellers'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
const Home = () => {
    return (
        <>
            <main>
                <Hero />
                <NewCollections />
                <BestSellers />
                <Categories />
                <Newsletter />
            </main>
        </>
    )
}

export default Home
