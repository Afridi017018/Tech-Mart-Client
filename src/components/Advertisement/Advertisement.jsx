import React from 'react';

const Advertisement = ({sliderBrand}) => {
    // console.log(sliderBrand)
    return (
        <div className='container mx-auto my-10 px-5 lg:px-0'>
           {
            sliderBrand.length > 0 &&
            <div className="carousel h-[450px] w-full rounded-md">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={sliderBrand[0].sliderImage} className="h-full w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={sliderBrand[1].sliderImage}  className="h-full w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={sliderBrand[2].sliderImage}  className="h-full w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
           
        </div>
           }
        </div>
    );
};

export default Advertisement;