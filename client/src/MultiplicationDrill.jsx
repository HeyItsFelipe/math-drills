import React, { Component } from 'react';
import Input from './Input';
import Results from './Results';
import './MultiplicationDrill.css';
class MultiplicationDrill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            problems: [],
            answers: [],
            userAnswers: [],
            showInput: true,
            showResults: false
        };
    }

    componentDidMount() {
        const { problems, answers } = this.generate();
        this.setState({
            problems: problems,
            answers: answers
        }, () => console.log(this.state));
    }

    generate = () => {
        console.log('Generating problems...');
        let problems = [];
        let answers = []
        for (let i = 0; i < 20; i++) {
            let num1 = Math.floor(Math.random() * 13);
            let num2 = Math.floor(Math.random() * 13);
            let ans = num1 * num2;
            problems.push(`${num1} x ${num2} =`);
            answers.push(`${ans}`);
        }
        console.log(problems);
        console.log(answers);
        return { problems, answers };
    }

    pushInputToUserAnswers = (value, key) => {
        this.setState(prevState => ({
            userAnswers: [...prevState.userAnswers, { key, value }]
        }));
    }

    handleShowResults = () => {
        this.setState({
            showInput: false,
            showResults: true
        });
    }

    renderInput = () => {
        if (this.state.showInput) {
            return (
                <div className="drill-input">
                    <Input
                        problems={this.state.problems}
                        answers={this.state.answers}
                        pushInputToUserAnswers={this.pushInputToUserAnswers}
                        handleShowResults={this.handleShowResults}
                    />
                </div>
            );
        }
    }

    renderResults = () => {
        if (this.state.showResults) {
            return (
                <div className="drill-results">
                    <Results
                        problems={this.state.problems}
                        answers={this.state.answers}
                        userAnswers={this.state.userAnswers}
                    />
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderInput()}
                {this.renderResults()}
            </div>
        );
    }
}

export default MultiplicationDrill;