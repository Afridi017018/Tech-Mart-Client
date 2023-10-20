import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProduct = () => {
    
    const productData = useLoaderData().result;
    if(!productData?._id)
    {
        throw new Error("wrong path");
    }

    const [product, setProduct] = useState({
        _id: productData._id,
        image: productData.image,
        name: productData.name,
        brand: productData.brand,
        type: productData.type,
        price: productData.price,
        description: productData.description,
        rating: productData.rating,
    });
   
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://brand-shop-server-a10.vercel.app/update-product`,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
       .then(res=>res.json())
       .then((data)=>{
        toast.dismiss();
        toast.success("Updated Successfully")
       })
   
    };

    return (
        <div className="max-w-4xl mx-2 lg:mx-auto my-10 p-6 bg-base-100 rounded-md shadow-2xl border text-blue-600">
            <h2 className="text-2xl font-semibold mb-4">Update Product</h2>
            <form onSubmit={handleSubmit}>

                <div className="mb-4">
                    <label className="blocktext-sm font-bold mb-2">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        placeholder="name"
                        onChange={handleInputChange}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Brand Name:</label>
                    <input
                        type="text"
                        name="brand"
                        value={product.brand}
                        placeholder="brand"
                        onChange={handleInputChange}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Image URL:</label>
                    <input
                        type="text"
                        name="image"
                        value={product.image}
                        placeholder="imageUrl"
                        onChange={handleInputChange}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Type:</label>
                    <input
                        type="text"
                        name="type"
                        value={product.type}
                        placeholder="type"
                        onChange={handleInputChange}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        placeholder="price"
                        onChange={handleInputChange}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Short Description:</label>
                    <textarea
                        name="description"
                        value={product.description}
                        placeholder="description"
                        onChange={handleInputChange}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Rating:</label>
                    <input
                        type="number"
                        name="rating"
                        value={product.rating}
                        placeholder="rating"
                        onChange={handleInputChange}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>

                <div className='text-center'>
                <button
                    type="submit"
                    className="bg-blue-800 hover:bg-blue-950 text-white font-semibold py-2 px-4 my-2 rounded"
                >
                    Update Product
                </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;
