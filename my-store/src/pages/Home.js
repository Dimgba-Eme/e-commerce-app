import React from 'react'

import Hero from '../components/Hero'
import NewCollections from '../components/NewCollections'
import BestSellers from '../components/BestSellers'
const Home = () => {
    return (
        <>
            <main>
                <Hero />
                <NewCollections />
                <BestSellers />
            </main>
        </>
    )
}

export default Home
