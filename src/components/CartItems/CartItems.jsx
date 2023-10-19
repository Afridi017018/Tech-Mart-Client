import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../../pages/Loading/Loading';
import CartItem from '../CartItem/CartItem';
import { AuthContext } from '../providers/AuthProvider';



const CartItems = () => {

    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([])
    // console.log(user?.email)
    useEffect(() => {

        fetch(`http://localhost:4000/get-cart-items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ user: user?.email })

        })
            .then(res => res.json())
            .then((data) => {
                setCartItems(data.result);
            })

    }, [user?.email, cartItems])



    return (
        <div className='min-h-[553px]'>

            {
                user?.email ?
                    cartItems.map((element) => (
                        <CartItem key={element._id} element={element} />
                    ))
                    :

                    <Loading />
              
           }

            {cartItems.length === 0 &&
                <div className='flex justify-center items-center min-h-[553px]'>
                    <h1 className='text-2xl font-bold text-gray-500'>Cart Is Empty !</h1>
                </div>
            }

        </div>
    );
};

export default CartItems;