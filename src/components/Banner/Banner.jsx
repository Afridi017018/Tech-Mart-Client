import React from 'react';

const Banner = () => {
    return (
        <div>

            <div className="hero min-h-[558px]" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/all-kinds-famous-gadgets_217507-788.jpg?w=826)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div className='flex justify-center'>
                            <img className='h-16 w-52' src="/techlogo.png" alt="" />
                        </div>
                        <h1 className="mb-5 text-4xl font-bold">Discover Tomorrow's Tech Today</h1>
                        <p className="mb-5">Explore cutting-edge technology, discover the latest gadgets, and stay informed about tech trends. Join us on a journey through the ever-evolving world of innovation.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;