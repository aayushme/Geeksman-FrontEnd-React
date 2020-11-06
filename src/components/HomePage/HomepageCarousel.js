import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import LoginSlide from './LoginSlide';
import TopPerformersSlide from './TopPerformersSlide';
import ContestSlide from './ContestSlide';

const HomepageCarousel = () => {
    return (
        <div className="homepage-carousel-container">
            <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                items={1}
                nav={false}
                autoplay
                autoplayTimeout={400000}
            >
                <div className="item"><LoginSlide /></div>
                <div className="item"><TopPerformersSlide /></div>
                <div className="item"><ContestSlide /></div>
            </OwlCarousel>
        </div>
    );
}

export default HomepageCarousel;