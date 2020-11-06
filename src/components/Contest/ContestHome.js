import React from 'react';
import ContestHeader from './ContestHeader';
import { Link } from 'react-router-dom';

const ContestHome = () => {
    return (
        <div id="contest-home">
            <ContestHeader content="Contests" />
            <div className="row">
                <div className="col-md-7">
                    <div className="contest-name">
                        Code For YMCA
                    </div>
                    <div className="contest-remaining-time">
                        The contest will start in 2 days 21 hours 28 minutes 47 seconds.
                    </div>
                    <div className="contest-instructions-container">
                        <div className="contest-instructions-heading">
                            Instructions
                        </div>
                        <div className="contest-instructions">
                            The penalty time has been changed from 10 minutes to 5 minutes for each wrong submission.
                            All submissions will be run through a plagiarism checker.
                            Any detected plagiarism will result in immediate disqualification + 3 weeks account ban. Cheating will NOT be tolerated in any way, shape, or form.
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <button className="contest-register-button">Register</button>
                    <Link to="/contests/contestid/problems">
                        <button className="contest-register-button">Start Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContestHome;