import React from 'react';
import { Link } from 'react-router-dom';

const ContestCard = () => {
    return (
        <div className="contest-card">
            <div className="contest-card-heading">
                <Link to="/contests/contestId">
                    Code For YMCA
                </Link>
            </div>
            <div className="contest-card-description">ICPC style mock challenge and something something</div>
            <div className="contest-card-timer">
                <span className="contest-card-timer-prefix">Starts at </span>
                Nov 6, 2019, <span className="contes-card-time">09:30PM</span>
            </div>
            <div className="contest-card-timer">
                <span className="contest-card-timer-prefix">Ends at </span>
                Nov 7, 2019, <span className="contes-card-time">00:00AM</span>
            </div>
            <div className="contest-card-register-button">Register Now</div>
        </div>
    );
}

export default ContestCard;