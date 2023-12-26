import React from 'react';
import ClientSection from '../../components/ClientSection/ClientSection';
import Banner from './banner/Banner';
import ServicesSection from './ServicesSection/ServicesSection';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <ClientSection></ClientSection>
            <ServicesSection></ServicesSection>
        </div>
    );
};

export default HomePage;