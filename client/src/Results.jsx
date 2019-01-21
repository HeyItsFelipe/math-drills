import React from 'react';
import './Results.css';

const Results = ({ problems, answers, userAnswers }) => {
    let totalCorrect = 0;
    let allResults = problems.map((element, index) => {
        console.log(element.split(' '));
        let splittedProblem = element.split(' ');
        if (answers[index] === userAnswers[index]['value']) {
            totalCorrect++;
            return (
                <li className="Results-correct" key={userAnswers[index]['key']}>
                    <div className="Results-number">{index + 1}.</div>
                    <div className="Results-problem-element">{splittedProblem[0]}</div>
                    <div className="Results-problem-element">{splittedProblem[1]}</div>
                    <div className="Results-problem-element">{splittedProblem[2]}</div>
                    <div className="Results-problem-element">{splittedProblem[3]}</div>
                    <div className="Results-problem-element">{userAnswers[index]['value']}</div>
                </li>);
        } else {
            return (
                <li className="Results-incorrect" key={userAnswers[index]['key']}>
                    <div className="Results-number">{index + 1}.</div>
                    <div className="Results-problem-element">{splittedProblem[0]}</div>
                    <div className="Results-problem-element">{splittedProblem[1]}</div>
                    <div className="Results-problem-element">{splittedProblem[2]}</div>
                    <div className="Results-problem-element">{splittedProblem[3]}</div>
                    <div className="Results-problem-element">{userAnswers[index]['value']}</div>
                </li>);
        }
    });
    let score = (totalCorrect / problems.length).toFixed(4) * 100;
    return (
        <div className="Results">
            <div className="Results-inner">
                <div className="Results-title">Score: {score}%</div>
                <div>
                    <ul className="Results-list">{allResults}</ul>
                </div>
            </div>
        </div>
    );
};

export default Results;