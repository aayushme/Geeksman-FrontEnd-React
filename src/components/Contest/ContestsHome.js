import React from 'react';
import ContestCard from './ContestCard';
import ContestHeader from './ContestHeader';

const ContestsHome = () => {
    return (
        <div>
            <ContestHeader content="Contests" />
            <div className="row">
                <div className="col-lg-8">
                    <div className="contests-section-heading">
                        Live Contests
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <ContestCard />
                        </div>
                        <div className="col-md-6">
                            <ContestCard />
                        </div>
                    </div>

                    <div className="contests-section-heading">
                        Upcoming Contests
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <ContestCard />
                        </div>
                        <div className="col-md-6">
                            <ContestCard />
                        </div>
                    </div>

                    <div className="contests-section-heading">
                        Past Contests
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <ContestCard />
                        </div>
                        <div className="col-md-6">
                            <ContestCard />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contests-section-heading">
                        Our Top Performers
                    </div>
                    <div className="contests-top-performers-container">
                        <div className="contests-top-performer">
                            <img src="/images/svg/gold-medal.svg" alt="gold" className="contests-medal-img" />
                            <div className="contests-top-performer-name">Prince Batra</div>
                        </div>
                        <div className="contests-top-performer">
                            <img src="/images/svg/silver-medal.svg" alt="silver" className="contests-medal-img" />
                            <div className="contests-top-performer-name">Sahil Singla</div>
                            <div className="contests-top-performer">
                            </div>
                            <img src="/images/svg/bronze-medal.svg" alt="bronze" className="contests-medal-img" />
                            <div className="contests-top-performer-name">Mohit Yadav</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContestsHome;