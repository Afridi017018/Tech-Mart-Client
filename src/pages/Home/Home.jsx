import React from 'react';
import Banner from '../../components/Banner/Banner';
import BrandCards from '../../components/BrandCards/BrandCards';
import PositiveSide from '../../components/PositiveSide/PositiveSide';

const Home = () => {
    return (
        <div>
            <Banner />
            <PositiveSide />
            <BrandCards />
        </div>
    );
};

export default Home;