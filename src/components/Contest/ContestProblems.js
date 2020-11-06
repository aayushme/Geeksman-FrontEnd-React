import React from 'react';
import ContestHomeProblem from './ContestHomeProblem';
import ContestHeader from './ContestHeader';

const ContestProblems = () => {
    return (
        <div>
            <ContestHeader content="Contest Name" />
            <div className="row no-gutters">
                <div className="col-md-8">
                    <ContestHomeProblem />
                    <ContestHomeProblem />
                    <ContestHomeProblem />
                    <ContestHomeProblem />
                    <ContestHomeProblem />
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
}

export default ContestProblems;