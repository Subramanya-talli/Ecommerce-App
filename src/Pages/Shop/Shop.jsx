import React from 'react';
import { Products } from '../../Products';
import Product from './Product';
import './Shop.css';


const Shop = () => {
    return (
        <div className='shop'>
            <div className='shoptitle'>
                <h1> Ecommerce Shopping </h1>
            </div>
            <div className='products'>
                {Products.map((product) =>
                (
                    <Product data={product} />
                )
                )}
            </div>
        </div>
    )
}

export default Shop