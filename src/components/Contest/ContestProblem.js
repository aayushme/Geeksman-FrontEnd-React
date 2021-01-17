import React from 'react';
import Ace from './../Ace/Ace';

const ContestProblem = () => {
    return (
        <div className="contest-problem-container">
            <div className="row no-gutters">
                <div className="col-md-8">
                    <div className="problem">
                        <Ace />
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
}

export default ContestProblem;