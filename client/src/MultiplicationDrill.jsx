import React, { Component } from 'react';
import Input from './Input';

class MultiplicationDrill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            problems: [],
            answers: []
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
            problems.push(`${num1} X ${num2} =`);
            answers.push(`${ans}`);
        }
        console.log(problems);
        console.log(answers);
        return { problems, answers };
    }

    render() {
        return (
            <div>
                <Input
                    problems={this.state.problems}
                    answers={this.state.answers} />
            </div>
        );
    }
}

export default MultiplicationDrill;