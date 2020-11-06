import React from 'react';

const ProblemSubsection = ({ title, content }) => {
    return (
        <div className="problem-subsection">
            <div className="problem-subsection-title">{title}</div>
            <div className="problem-subsection-content">{content}</div>
        </div>
    );
}

export default ProblemSubsection;