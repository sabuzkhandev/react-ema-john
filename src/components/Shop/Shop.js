import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className='container'>
            <p className='about-product'>About <span style={{color:'red'}}>{products.length}</span> Products Found</p>
            <div className='shop'>
                {products.map(product =><Product 
                                            product = {product}
                                            key={product.id}
                                        ></Product>)}
                
            </div>
        </div>
    );
};

export default Shop;