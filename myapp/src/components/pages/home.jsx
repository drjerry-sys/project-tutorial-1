import '../../App.css';
import 'font-awesome/css/font-awesome.min.css';
import HeroSection from '../HeroSection';
import React from 'react';
import Cards from '../cards'
import Footer from '../footer'

const Home = () => {
    return ( 
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
     );
}
 
export default Home;