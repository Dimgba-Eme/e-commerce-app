import React from 'react'
import { useProducts } from '../contexts/ContextProvider'
import Items from './Items';
import './productsCategory.scss'

const ProductsCategories = (props) => {

    const { all_products } = useProducts();
    return (
        <main className='products-category-wrapper'>
            <div className='products-category-inner'>

                {all_products.map((item, i) => {
                    if (props.category === item.category) {
                        return <Items key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                    } else {
                        return null;
                    }
                })}
            </div>
        </main>
    )
}

export default ProductsCategories




