import React from 'react';
import { LiaShippingFastSolid } from "react-icons/lia";
import { ImLoop2 } from "react-icons/im";
import { FaAward } from "react-icons/fa";

const PositiveSide = () => {
    return (
        <div className="flex my-10 gap-5 justify-center container mx-auto px-5 lg:px-0">
            <div className="border w-2/3 h-52 flex flex-col items-center justify-center shadow-xl gap-7 bg-base-200">
                <div className='text-4xl text-blue-600'>
                    <LiaShippingFastSolid />
                </div>

                <div className='text-xs md:text-xl text-blue-600'>
                    FAST SHIPPING
                </div>
            </div>
            <div className="border w-2/3 h-52 flex flex-col items-center justify-center shadow-xl gap-7 bg-base-200">
                <div className='text-4xl text-blue-600'>
                    <ImLoop2 />
                </div>

                <div className='text-xs md:text-xl text-blue-600'>
                    30 DAY RETURNS
                </div>
            </div>
            <div className="border w-2/3 h-52 flex flex-col items-center justify-center shadow-xl gap-7 bg-base-200">
                <div className='text-4xl text-blue-600'>
                    <FaAward />
                </div>

                <div className='text-xs md:text-xl text-blue-600'>
                    BEST TECHNOLOGY
                </div>
            </div>
        </div>
    );
};

export default PositiveSide;