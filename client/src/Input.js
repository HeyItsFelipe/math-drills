import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNumber: 0,
            startBtnShow: true,
            inputValue: "",
            started: false
        };
    }

    startDrill = () => {
        console.log('Drill started...');
        this.setState({
            startBtnShow: false,
            started: true
        });
    }

    renderStartButton = () => {
        if (this.state.startBtnShow) {
            return (
                <button onClick={this.startDrill}>Start</button>
            );
        }
    }

    renderProblem = () => {
        if (this.state.started) {
            return (
                <span>{this.props.problems[this.state.currentNumber]}<label> {this.state.inputValue}</label></span>
            );
        }
    }

    goToNextProblem = () => {
        this.props.pushInputToUserAnswers(this.state.inputValue, this.state.currentNumber);
        this.setState(prevState => ({
            currentNumber: prevState.currentNumber + 1
        }), () => {
            this.renderResults();
            this.setState({
                inputValue: ""
            });
        });
    }

    enableInput = (event) => {
        console.log(event.target.value);
        if (this.state.started) {
            let number = event.target.value;
            this.setState(prevState => ({
                inputValue: prevState.inputValue.concat(number)
            }));
        }
    }

    clearInput = () => {
        this.setState({
            inputValue: ""
        });
    }

    renderButton = (value) => {
        if (value === "C") {
            return (
                <button disabled={!this.state.started} onClick={this.clearInput} value={value}>{value}</button>
            );
        }
        return (
            <button disabled={!this.state.started} onClick={this.enableInput} value={value}>{value}</button>
        );
    }

    renderResults = () => {
        if (this.state.currentNumber === this.props.problems.length) {
            this.props.handleShowResults();
        }
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderStartButton()}
                    {this.renderProblem()}
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
                        {this.renderButton("-")}
                    </div>
                    <div>
                        <button disabled={!this.state.started} onClick={this.goToNextProblem}>Next</button>
                    </div>
                </div>

            </div >
        );
    }
}

export default Input;