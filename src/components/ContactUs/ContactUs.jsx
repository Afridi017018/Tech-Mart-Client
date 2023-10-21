import React from 'react';

const ContactUs = () => {
    return (
        <div className='container mx-auto mt-20 md:mt-28 mb-10'>
            <div className='bg-base-200 py-16 relative lg:px-20'>
                <div className='w-1/2'>
                <h4 className='text-xl font-bold text-blue-600 text-center'>Can’t find your desired service? Let us know 24/7 in 16516.</h4>
                <div className='text-center'>
                    <button className='px-2 py-1 bg-blue-800 hover:bg-blue-950 rounded-md text-white my-5 text-xl'>Call Now</button>
                </div>
                </div>
                <img className='absolute w-52 md:w-72 h-80 right-0 lg:right-20 bottom-0' src="https://i.ibb.co/q0Bfr8K/care.png" alt="" />
            </div>
        </div>
    );
};

export default ContactUs;