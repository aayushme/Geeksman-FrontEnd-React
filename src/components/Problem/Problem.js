import React from 'react';
import ProblemSubsection from './ProblemSubsection';
import ProblemSubsectionForSampleIO from './ProblemSubsectionForSampleIO';

const Problem = () => {

    let problemDescription = "The Patlu and Motu works in a building construction, they have to put some number of bricks N from one place to another, and started doing their work. They decided , they end up with a fun challenge who will put the last brick. They to follow a simple rule. In the i'th round, Patlu puts i bricks whereas Motu puts ix2 bricks. There are only N bricks, you need to help find the challenge result to find who put the last brick.";
    let timeLimit = "1 sec";
    let memoryLimit = "5000 Bytes";
    let inputContent = "The First line contains an integer N.";
    let outputContent = "Output \"Patlu\" (without the quotes) if Patlu puts the last bricks ,\"Motu\"(without the quotes) otherwise.";
    let constraints = "1 ≤ N ≤ 10000";
    let sampleInput = "13";
    let sampleOutput = "Motu";
    let explanantion = "13 bricks are there :\nPatlu Motu\n1 2\n2 4\n3 1 ( Only 1 remains)\nHence, Motu puts the last one.";

    return (
        <div className="problem-container">
            <div className="problem-title">Brick Game</div>
            <div className="time-and-memory-constraints-container">
                <div className="time-limit-container">Time Limit: {timeLimit}</div>
                <div className="memory-limit-container">Memory Limit: {memoryLimit}</div>
            </div>
            <div className="problem-description">{problemDescription}</div>
            <ProblemSubsection title="Input" content={inputContent} />
            <ProblemSubsection title="Output" content={outputContent} />
            <ProblemSubsection title="Constraints" content={constraints} />
            <ProblemSubsectionForSampleIO title="Sample Input" content={sampleInput} />
            <ProblemSubsectionForSampleIO title="Sample Output" content={sampleOutput} />
            <ProblemSubsection title="Explanation" content={explanantion} />
        </div>
    );
}

export default Problem;