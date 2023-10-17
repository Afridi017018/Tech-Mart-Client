import React from 'react';
import BrandCard from '../BrandCard/BrandCard';

const BrandCards = () => {
    return (
        <div className='container mx-auto my-5 grid grid-cols-3 gap-10'>
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