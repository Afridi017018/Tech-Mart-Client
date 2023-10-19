import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const ProductsCards = () => {

    const brandProduct = useLoaderData();

    return (
        <div>
{  brandProduct.result.length > 0 ?
            <div className='grid grid-cols-1 lg:grid-cols-2 container my-10 mx-auto gap-5'>
               
              {
                brandProduct.result.map((element)=>(
                    <ProductCard key={element._id} element={element}/>
                ))

              }

            </div>
            :
            <div>
 <h2>No data</h2>
                
            </div>
}

        </div>

    );
};

export default ProductsCards;