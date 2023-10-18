import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CartItem from '../CartItem/CartItem';



const CartItems = () => {

    const [cart, setCart] = useState([]);

    

    return (
        <div className='min-h-[553px]'>
           <CartItem />
           <CartItem />
           <CartItem />
           <CartItem />
           <CartItem />

        </div>
    );
};

export default CartItems;