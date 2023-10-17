import React from 'react';

const BrandCard = () => {
    return (
        <div>
           <div className='border border-gray-200 shadow-xl w-80 md:w-[412px] rounded-md mx-auto'>
            <img className='border w-80 md:w-[412px] h-[400px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdrqzDSX3LTTYCr9WFcS7Q33wcdsQqm2z4Q&usqp=CAU" alt="" />
            <div className='bg-blue-200 text-center'>
                <h4 className='py-5 text-2xl font-bold text-blue-900'>Samsung</h4>
            </div>
           </div>
        </div>
    );
};

export default BrandCard;