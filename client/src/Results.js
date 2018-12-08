import React from 'react';

const Results = ({ problems, answers, userAnswers }) => {
    let allResults = problems.map((element, index) => {
        if (answers[index] === userAnswers[index]['value']) {
            return (<li key={userAnswers[index]['key']}>{element} {userAnswers[index]['value']}</li>);
        } else {
            return (<li key={userAnswers[index]['key']}>{element} {userAnswers[index]['value']}***</li>);
        }
    });
    return (
        <div className="Results">
            <div>Results</div>
            <ul>{allResults}</ul>
        </div>
    );
};

export default Results;