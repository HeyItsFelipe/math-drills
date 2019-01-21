import React, { Component } from 'react';
import './Input.css';
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
                <div className="Input-start">
                    <button className="Input-startBtn" onClick={this.startDrill}>Start</button>
                </div>
            );
        }
    }

    renderProblem = () => {
        if (this.state.started) {
            return (
                <div className="Input-problem">
                    <span className="Input-problemText">{this.props.problems[this.state.currentNumber]}<label> {this.state.inputValue}</label></span>
                </div>
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
        let value = null;
        if (this.state.started) {
            if (event === "-") {
                value = "-"
            } else {
                value = event.target.value;
            }
            this.setState(prevState => ({
                inputValue: prevState.inputValue.concat(value)
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
                <button className="Input-buttons-btn Input-buttons-btn-clear" disabled={!this.state.started} onClick={this.clearInput} value={value}>{value}</button>
            );
        }
        if (value === "-") {
            // let negative = `(${value})`;
            return (
                <button className="Input-buttons-btn" disabled={!this.state.started} onClick={(e) => this.enableInput("-")} value={value}>
                    <span className="Input-buttons-btn-negative">({value})</span>
                </button>
            );
        }
        return (
            <button className="Input-buttons-btn" disabled={!this.state.started} onClick={this.enableInput} value={value}>{value}</button>
        );
    }

    renderResults = () => {
        if (this.state.currentNumber === this.props.problems.length) {
            this.props.handleShowResults();
        }
    }

    render() {
        return (
            <div className="Input">
                <div className="Input-screen">
                    {this.renderStartButton()}
                    {this.renderProblem()}
                </div>
                <div className="Input-buttons">
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
                </div>
                <div className="Input-next">
                    <button className="Input-nextBtn" disabled={!this.state.started} onClick={this.goToNextProblem}>Next</button>
                </div>
            </div >
        );
    }
}

export default Input;