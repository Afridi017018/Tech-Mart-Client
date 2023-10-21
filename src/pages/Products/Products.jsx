import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Advertisement from '../../components/Advertisement/Advertisement';
import ProductsCards from '../../components/ProductCards/ProductsCards';

const Products = () => {
    const brandProduct = useLoaderData();
    const { brand } = useParams();
    const [sliderBrand, setSliderBrand] = useState([]);

    // console.log(brandProduct.result)

    useEffect(() => {
        fetch(`/sliderData.json`)
            .then(res => res.json())
            .then((data) => setSliderBrand(data.filter((e) => e.brand === brand)))
    }, [])

    return (
        <div className='min-h-[558px] flex justify-center items-center'>
       
                    <div>
                        <Advertisement sliderBrand={sliderBrand} />
                        <ProductsCards brandProduct={brandProduct} />
                    </div>
                    

        </div>
    );
};

export default Products;