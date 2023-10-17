import React from 'react';
import Banner from '../../components/Banner/Banner';
import BrandCards from '../../components/BrandCards/BrandCards';
import ContactUs from '../../components/ContactUs/ContactUs';
import PositiveSide from '../../components/PositiveSide/PositiveSide';

const Home = () => {
    return (
        <div>
            <Banner />
            <PositiveSide />
            <BrandCards />
            <ContactUs />
        </div>
    );
};

export default Home;