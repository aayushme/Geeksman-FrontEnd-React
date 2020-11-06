import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from '../Navbar';
import HomepageCarousel from './HomepageCarousel';
// import Footer from './Footer';

const HomePage = () => {
    return (
        <div className="homepage">
            <Navbar />
            <HomepageCarousel />

            {/* <Footer /> */}
        </div>
    );
}

export default HomePage;