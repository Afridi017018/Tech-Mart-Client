import React from 'react';

const ProductCard = () => {
    return (
        <div>
            <div className="card card-side bg-blue-50 h-80 w-full shadow-xl rounded-md">
 <img className='h-full w-2/4 rounded-l-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkhtYPGqNH3iE9TS0yf22z00tb-oaA03aEKw&usqp=CAU" alt="Album"/>
  <div className="card-body text-gray-500">
    <h2 className="card-title text-blue-800">Samsung Galaxy A30</h2>
    <p>Brand: Samsaung</p>
    <p>Type: Phone</p>
    <p>Price: $99</p>
    <p>Rating: 4.8*</p>
    <div className="card-actions justify-center">
      <button className="bg-blue-800 hover:bg-blue-950 px-2 py-1 w-28 rounded text-white text-lg">See Details</button>
      <button className="bg-green-800 hover:bg-green-950 px-2 py-1 w-28 rounded text-white text-lg">Update</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;