import React from 'react';
import { useNavigate } from 'react-router-dom';

const BrandCard = ({ element }) => {
    const navigate = useNavigate();
    return (
        <div className='cursor-pointer' onClick={() => navigate(`products/${element.brand}`)}>
            <div className=' shadow-xl w-80 md:w-[412px] rounded-lg mx-auto relative'>
                <div>
                    <div className="image-overlay">
                        <img className='border w-80 md:w-[412px] h-80 rounded-lg relative' src={element.brandImage} alt="" />
                        <div className='absolute rounded-lg top-0 left-0 w-full h-full inset-0 bg-black opacity-50'></div> {/* Add the dark overlay */}
                    </div>
                </div>
                <div className='text-center rounded-b-md absolute bottom-0 right-10'>
                    <h4 className='py-5 text-2xl font-bold text-white uppercase'>{element.brand}</h4>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;
