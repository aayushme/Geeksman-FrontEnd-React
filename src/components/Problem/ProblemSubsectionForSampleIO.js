import React from 'react';

const ProblemSubsectionForSampleIO = ({ title, content }) => {
    return (
        <div className="problem-subsection">
            <div className="problem-subsection-title">{title}</div>
            <div className="problem-subsection-content higlighted-problem-subsection-content">{content}</div>
        </div>
    );
}

export default ProblemSubsectionForSampleIO;