import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductsCards = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 container my-10 mx-auto gap-5'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
};

export default ProductsCards;