import React from 'react';
import { Link } from 'react-router-dom';

const ContestHomeProblem = () => {
    return (
        <div className="problems-problem-container">
            <div className="problems-problem-title">
                Solve Me First
            </div>
            <div className="row no-gutters">
                <div className="col-3">
                    <div className="problems-problem-level">Level: Easy</div>
                </div>
                <div className="col-3">
                    <div className="problems-problem-accuracy">Accuracy: 69%</div>
                </div>
                <div className="col-3"></div>
                <div className="col-3 text-center">
                    <Link to="/contests/contestid/problems/problemid" className="problems-solve-button">
                        Solve Now
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContestHomeProblem;