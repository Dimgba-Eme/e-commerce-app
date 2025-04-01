import React from 'react'
import { useProducts } from '../contexts/ContextProvider'
import Items from './Items';

const ProductsCategories = (props) => {

    const { all_products } = useProducts();
    return (
        <main>
            <div>

                {all_products.map((item) => {
                    if (props.category === item.category) {
                        return (
                            <div key={item.id}>
                               <Items name={item.name} new_price ={'$' + item.new_price}/>
                            </div>
                        )
                    }else {
                        return null;
                    }
                })}
            </div>
        </main>
    )
}

export default ProductsCategories
