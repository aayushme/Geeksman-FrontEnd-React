import React from 'react'

const TopPerformersSlide = () => {
    return (
        <div className="top-performers-slide">
            <div className="top-performers-content-container">
                <div className="row no-gutters">
                    <div className="col-md-2"></div>
                    <div className="col-md-3">
                        <img id="top-performers-prize-img" src="/images/svg/prize.svg" alt="prize icon" />
                    </div>
                    <div className="col-md-3">
                        <div className="top-performers-text">Top Performers</div>
                        <div className="contest-details">
                            Code For YMCA (Week 12)
                        </div>
                        <div className="top-performers-names-container">
                            <div className="top-performer-name">Mohit Yadav</div>
                            <div className="top-performer-name">Prince Batra</div>
                            <div className="top-performer-name">Sahil Singla</div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    );
}

export default TopPerformersSlide;