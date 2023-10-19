import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ element }) => {

    const navigate = useNavigate()

    return (
        <div>
            <div className="card card-side bg-blue-50 h-80 w-full shadow-xl rounded-md">
                <img className='h-full w-2/4 rounded-l-md' src={element.image} alt="Album" />
                <div className="card-body text-gray-500 capitalize">
                    <h2 className="card-title text-blue-800">{element.name}</h2>
                    <p>Brand: {element.brand}</p>
                    <p>Type: {element.type}</p>
                    <p>Price: ${element.price}</p>
                    <p>Rating: {element.rating}*</p>
                    <div className="card-actions justify-center">
                        <button onClick={()=>navigate(`/details/${element._id}`)} className="bg-blue-800 hover:bg-blue-950 px-2 py-1 w-28 rounded text-white text-lg">See Details</button>
                        <button onClick={()=>navigate(`/updateProduct/${element._id}`)} className="bg-green-800 hover:bg-green-950 px-2 py-1 w-28 rounded text-white text-lg">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;