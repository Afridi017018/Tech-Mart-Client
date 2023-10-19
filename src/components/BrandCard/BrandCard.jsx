import React from 'react';
import { useNavigate } from 'react-router-dom';

const BrandCard = ({element}) => {
    const navigate = useNavigate();
    return (
        <div className='cursor-pointer' onClick={()=>navigate(`products/${element.brand}`)}>
           <div className='border border-gray-200 shadow-xl w-80 md:w-[412px] rounded-md mx-auto'>
            <img className='border w-80 md:w-[412px] h-80 rounded-t-md' src={element.brandImage} alt="" />
            <div className='bg-blue-50 text-center rounded-b-md'>
                <h4 className='py-5 text-2xl font-bold text-blue-900 capitalize'>{element.brand}</h4>
            </div>
           </div>
        </div>
    );
};

export default BrandCard;