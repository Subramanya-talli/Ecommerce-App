import React, { useContext } from 'react';
import { ShopContext } from '../../ShopContext';


const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
    return (
        <div className='cartItem'>
            <img src={productImage} alt={productName} />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} />
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>

    )
};

export default CartItem;