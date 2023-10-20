import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../components/providers/AuthProvider';

const Details = () => {
    const {user} = useContext(AuthContext);
    const productDetails = useLoaderData().result;
//  console.log(user.email, productDetails._id)



const handleCart = ()=>{

    const obj = {
        user: user.email,
        productId: productDetails._id,
        image:productDetails.image,
        name: productDetails.name,
        brand: productDetails.brand,
        price: productDetails.price
    }

    fetch(`https://brand-shop-server-a10.vercel.app/add-to-cart`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body : JSON.stringify(obj)
    })
    .then(res=>res.json())
    .then((data)=>{
        toast.dismiss();
        toast.success("Added To The Cart")
    })
}
    

    return (
        <div>

            {
                <div className='my-10 grid grid-col-1 lg:grid-cols-2 gap-5'>
                    <div className='px-10'>
                        <img className='h-[480px] w-full rounded-md' src={productDetails.image} alt="" />
                    </div>
                    <div className='px-10'>
                        <div>
                            <h2 className='text-xl font-bold text-blue-800'>{productDetails.name}</h2>
                        </div>
                        <hr className='my-3 w-4/5' />
                        <div>
                            <p className='text-gray-500'>
                                {productDetails.description}
                            </p>
                        </div>
                        <hr className='my-3 w-4/5' />

                        <div className='font-bold text-gray-500 '>
                            <div className='flex justify-between my-1'>
                                <p>Brand:</p>
                                <p>{productDetails.brand}</p>
                            </div>
                            <div className='flex justify-between my-1'>
                                <p>Type:</p>
                                <p>{productDetails.type}</p>
                            </div>
                            <div className='flex justify-between my-1'>
                                <p>Price:</p>
                                <p>${productDetails.price}</p>
                            </div>
                            <div className='flex justify-between my-1'>
                                <p>Rating:</p>
                                <div className='flex justify-center items-center gap-1'>
                                <p>{productDetails.rating} </p>
                                <AiFillStar className=' text-orange-500' />
                                </div>
                            </div>
                            <div className='flex justify-between my-1'>
                                <p>Warranty:</p>
                                <p>7 Days</p>
                            </div>
                        </div>


                        <hr className='my-3 w-4/5' />

                        <div className='text-center my-5'>
                            <button onClick={handleCart} className='py-1 px-2 rounded-md text-lg text-white bg-blue-800 hover:bg-blue-950'>Add To Cart</button>
                        </div>

                    </div>
                </div>
            }

        </div>
    );
};

export default Details;