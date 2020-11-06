import React from 'react';
import ContestHeader from './Contest/ContestHeader';
import ContestHomeProblem from './Contest/ContestHomeProblem';
import Navbar from './Navbar';

const Practice = () => {
    return (
        <div className="practice-container">
            <Navbar />
            <ContestHeader content="Contest Name" />
            <div className="row">
                <div className="col-md-8">
                    <ContestHomeProblem />
                    <ContestHomeProblem />
                    <ContestHomeProblem />
                    <ContestHomeProblem />
                    <ContestHomeProblem />
                </div>
                <div className="col-md-4">
                    <div className="problem-tags-container">
                        <div className="problem-tags-heading">Problem Tags</div>
                        <div className="problem-tags">
                            <div className="tag-title">Tree</div>
                            <div className="tag-title">Graph</div>
                            <div className="tag-title">Greedy</div>
                            <div className="tag-title">DP</div>
                            <div className="tag-title">Graph</div>
                            <div className="tag-title">Search</div>
                            <div className="tag-title">Two Pointers</div>
                            <div className="tag-title">Hashing</div>
                            <div className="tag-title">DSU</div>
                            <div className="tag-title">Trie</div>
                            <div className="tag-title">Graph</div>
                            <div className="tag-title">Greedy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Practice;