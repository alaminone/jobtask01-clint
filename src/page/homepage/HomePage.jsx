import React from 'react';
import ClientSection from '../../components/ClientSection/ClientSection';
import Banner from './banner/Banner';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <ClientSection></ClientSection>
        </div>
    );
};

export default HomePage;