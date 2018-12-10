import React from 'react';
import './Results.css';

const Results = ({ problems, answers, userAnswers }) => {
    let totalCorrect = 0;
    let allResults = problems.map((element, index) => {
        if (answers[index] === userAnswers[index]['value']) {
            totalCorrect++;
            return (<li className="Results-correct" key={userAnswers[index]['key']}>{element} {userAnswers[index]['value']}</li>);
        } else {
            return (<li className="Results-incorrect" key={userAnswers[index]['key']}>{element} {userAnswers[index]['value']}</li>);
        }
    });
    let score = (totalCorrect / problems.length).toFixed(4) * 100;
    return (
        <div className="Results">
            <div className="Results-title">Score {score}%</div>
            <div>
                <ul className="Results-list">{allResults}</ul>
            </div>
        </div>
    );
};

export default Results;