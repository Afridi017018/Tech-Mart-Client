import React from 'react';

const Details = () => {
    return (
        <div className='my-10 grid grid-col-1 lg:grid-cols-2 gap-5'>
            <div className='px-10'>
                <img className='h-[480px] w-full rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6yKZQ18H60BJunLIWTTJWw6ZKXDAdY7HRg&usqp=CAU" alt="" />
            </div>
            <div className='px-10'>
                <div>
                    <h2 className='text-xl font-bold text-blue-800'>Samsung galaxy A30</h2>
                </div>
                <hr className='my-3 w-4/5' />
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum non quos corrupti eum quasi? Distinctio, assumenda? Tempore vero recusandae dolorum. Dolorum, ipsa! Nulla quis autem ipsum facilis voluptatum! Asperiores ea delectus non, distinctio nobis enim quis earum illum numquam porro voluptate explicabo harum corporis eos voluptatibus perspiciatis similique quisquam. Debitis.
                </div>
                <hr className='my-3 w-4/5' />

                <div className='font-bold text-gray-500 '>
                <div className='flex justify-between my-1'>
                    <p>Brand:</p>
                    <p>Samsung</p>
                </div>
                <div className='flex justify-between my-1'>
                <p>Type:</p>
                    <p>Phone</p>
                </div>
                <div className='flex justify-between my-1'>
                    <p>Price:</p>
                    <p>$99</p>
                </div>
                <div className='flex justify-between my-1'>
                    <p>Rating:</p>
                    <p>4.8*</p>
                </div>
                <div className='flex justify-between my-1'>
                    <p>Warranty:</p>
                    <p>7 Days</p>
                </div>
                </div>


                <hr className='my-3 w-4/5' />

                <div className='text-center my-5'>
                    <button className='py-1 px-2 rounded-md text-lg text-white bg-blue-800 hover:bg-blue-950'>Add To Cart</button>
                </div>
                
            </div>
        </div>
    );
};

export default Details;