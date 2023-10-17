import React from 'react';
import BrandCard from '../BrandCard/BrandCard';

const BrandCards = () => {
    return (
        <div className='container mx-auto my-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
            <BrandCard />
            <BrandCard />
            <BrandCard />
            <BrandCard />
            <BrandCard />
            <BrandCard />
        </div>
    );
};

export default BrandCards;