import React, { Component } from 'react';
import Results from './Results';
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNumber: 0,
            startBtnShow: true,
            showProblems: false,
            inputValue: "",
            started: false,
            userAnswers: []
        };
    }

    startInput = () => {
        console.log('Input started...');
        this.setState({
            startBtnShow: false,
            showProblems: true,
            started: true
        });
    }

    showStartButton = () => {
        if (this.state.startBtnShow) {
            return (
                <button onClick={this.startInput}>Start</button>
            );
        }
    }

    showProblem = () => {
        if (this.state.showProblems) {
            return (
                <span>{this.props.problems[this.state.currentNumber]}<label> {this.state.inputValue}</label></span>
            );
        }
    }

    nextProblem = () => {
        this.setState(prevState => ({
            currentNumber: prevState.currentNumber + 1,
            userAnswers: [...prevState.userAnswers, this.state.inputValue]
        }), () => {
            this.setState({
                inputValue: ""
            });
        });
    }

    typed = (event) => {
        console.log(event.target.value);
        if (this.state.started) {
            let number = event.target.value;
            this.setState(prevState => ({
                inputValue: prevState.inputValue.concat(number)
            }));
        }
    }

    clear = () => {
        this.setState({
            inputValue: ""
        });
    }

    renderButton = (value) => {
        if (value === "C") {
            return (
                <button onClick={this.clear} value={value}>{value}</button>
            );
        }
        return (
            <button onClick={this.typed} value={value}>{value}</button>
        );
    }

    renderResults = () => {
        if (this.state.currentNumber === this.props.problems.length) {
            return (
                <div>
                    <Results
                        problems={this.props.problems}
                        answers={this.props.answers}
                        userAnswers={this.state.userAnswers}
                    />
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div>
                    {this.showStartButton()}
                    {this.showProblem()}
                </div>
                <div>
                    <div>
                        {this.renderButton(7)}
                        {this.renderButton(8)}
                        {this.renderButton(9)}
                    </div>
                    <div>
                        {this.renderButton(4)}
                        {this.renderButton(5)}
                        {this.renderButton(6)}
                    </div>
                    <div>
                        {this.renderButton(1)}
                        {this.renderButton(2)}
                        {this.renderButton(3)}
                    </div>
                    <div>
                        {this.renderButton("C")}
                        {this.renderButton(0)}
                        <button>(-)</button>
                    </div>
                    <div>
                        <button onClick={this.nextProblem}>Next</button>
                    </div>
                </div>
                {this.renderResults()}
            </div >
        );
    }
}

export default Input;