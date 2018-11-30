import React from 'react';

const Results = ({ problems, answers, userAnswers }) => {
    let allResults = problems.map((element, index) => {
        if (answers[index] === userAnswers[index]) {
            return (<li>{element} {userAnswers[index]}</li>);
        } else {
            return (<li>{element} {userAnswers[index]}***</li>);
        }
    });
    return (
        <div>
            <div>Results</div>
            <ul>{allResults}</ul>
        </div>
    );
};

export default Results;