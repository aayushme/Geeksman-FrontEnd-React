import React from 'react';
import Problem from '../Problem/Problem';
import Ace from './../Ace/Ace';

const ContestProblem = () => {
    return (
        <div className="contest-problem-container">
            <div className="row no-gutters">
                <div className="col-md-8">
                    <div className="problem">
                        <Problem />
                        <Ace />
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
}

export default ContestProblem;