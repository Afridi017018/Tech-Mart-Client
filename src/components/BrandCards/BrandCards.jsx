import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandCard from '../BrandCard/BrandCard';

const BrandCards = () => {

    const brandInfo = useLoaderData();
    // console.log(brandInfo)

    return (
        <div className='container mx-auto my-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
            {
                brandInfo.map((element)=>(
                    <BrandCard key={element.id} element={element} />
                ))
            }
            
        </div>
    );
};

export default BrandCards;