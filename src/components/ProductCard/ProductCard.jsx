import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ element }) => {

    const navigate = useNavigate()

    return (
        <div className='px-5 lg:px-0'>
            <div className="card card-side h-80 w-full shadow-xl border rounded-md">
                <img className='h-full w-2/4 rounded-l-md py-2 px-2' src={element.image} alt="Album" />
                <div className="card-body text-gray-500 capitalize">
                    <h2 className="card-title text-blue-800">{element.name}</h2>
                    <p>Brand: {element.brand}</p>
                    <p>Type: {element.type}</p>
                    <p>Price: ${element.price}</p>
                    <div className='flex items-center mb-3'>Rating: {element.rating}<AiFillStar className=' text-orange-500 text-lg' /></div>
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