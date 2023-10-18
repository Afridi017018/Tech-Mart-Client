import React from 'react';

const Advertisement = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className="carousel h-[450px] w-full rounded-md">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHo5f97F6O-eEEV7OU3wA46rFZDdISip3FBQ&usqp=CAU" className="h-full w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHo5f97F6O-eEEV7OU3wA46rFZDdISip3FBQ&usqp=CAU" className="h-full w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHo5f97F6O-eEEV7OU3wA46rFZDdISip3FBQ&usqp=CAU" className="h-full w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Advertisement;