import React from 'react';
import './Product.css';

const Product = (props) => {
    const cartIcon = 'https://cdn-icons-png.flaticon.com/512/1874/1874825.png';
     const {name,img,price,seller,ratings} = props.product;
    return (
        <div className='single-product'>
            <div className='product-img'>
                <img src={img} alt='no images'></img>
            </div>
            <div className='product-single'>
                <h5>{name.substring(0, 30)}...</h5>
                <p>Price: <strong style={{color:'orange'}}>${price}</strong></p>
                <p style={{color:'gray'}}>Manufacture By: {seller}</p>
                <p><small className='rating'>Rating: {ratings} star</small></p>
            </div>
            <button type='button' className='button-shop'><img src={cartIcon} alt='no icon'></img>Add to Cart</button>
        </div>
    );
};

export default Product;