import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductsCards = ({ brandProduct }) => {


    return (
        <div>
            {brandProduct.result.length > 0 ?
                <div className='grid grid-cols-1 lg:grid-cols-2 container my-10 mx-auto gap-5'>

                    {
                        brandProduct.result.map((element) => (
                            <ProductCard key={element._id} element={element} />
                        ))

                    }

                </div>
                :
                <div className='flex justify-center container pb-10'>
                        <img className='h-32 w-full rounded' src="https://i.ibb.co/kqTsPfm/coming-Soon.gif" alt="" />
                    </div>
            }

        </div>

    );
};

export default ProductsCards;