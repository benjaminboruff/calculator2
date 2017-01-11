// @flow
import React, { Component } from 'react';
import './Calculator.css';
import Output from'./components/output';
import Keypad from'./components/keypad';

// type declarations for state and props
type State = {
  input: string,
  expression: string,
  result: number
};

// type Props = {
//   input1: string,
//   input2: string
// };

class Calculator extends Component<void, void, State> {
  //props: Props;
  state: State;

  constructor(props: Object) {
    super(props);
    this.state = {result: 0, expression: "", input: ""};
    // $FlowFixMe
    this.handleChange = this.handleChange.bind(this);
    // $FlowFixMe
    this.calculate = this.calculate.bind(this);
    // $FlowFixMe
    this.handleButtonClick = this.handleButtonClick.bind(this);
    // $FlowFixMe
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handleChange(event: SyntheticInputEvent){
    event.preventDefault();
    // only allow proper patterns, e.g. .1+0.1+1 (no double .. or ending with an operator)
    let regExpFilter = /^(\d*(\.(?!\.))?\d+)([\+\-\*\/]{1}\d*(\.(?!\.))?\d*)*[^\+\-\*\/\.]$/;
    let inputArr = event.target.value.match(regExpFilter);
    console.log(inputArr ? inputArr[0] : "");
    this.setState({expression: inputArr ? inputArr[0] : this.state.expression});

  }

  handleButtonClick(event: SyntheticInputEvent){
    event.preventDefault();
    this.setState({input: this.state.input + event.target.value});
  }

  handleClearClick(event: SyntheticInputEvent){
    event.preventDefault();
    if(event.target.value === "CLEAR") {
      console.log("CLEAR!");
      this.setState({input: "", result: 0});
    }
    if(event.target.value === "UNDO") {
      this.setState({input: this.state.input.slice(0, -1), result: 0});
    }
  }

  calculate(event: SyntheticInputEvent){
    event.preventDefault();

    // only allow proper patterns, e.g. .1+0.1+1 (no double .. or ending with an operator)
    let regExpFilter = /^(\d*(\.(?!\.))?\d+)([\+\-\*\/]{1}\d*(\.(?!\.))?\d*)*[^\+\-\*\/\.]$/;
    console.log(this.state.input);
    let inputArr = this.state.input.match(regExpFilter);
    console.log(inputArr ? "SUCCESS" : "FAIL");

    if(inputArr) {
      this.setState(
        {result: Math.round(eval(this.state.input) * 1000000) /1000000}
      );
    } else {
      this.setState(
        {result: this.state.result}
      );
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>FCC Calculator</h2>
        </div>
        <Output result={this.state.result} input={this.state.input}/>
        <Keypad handleChange={this.handleChange}
          calculate={this.calculate}
          handleButtonClick={this.handleButtonClick}
          handleClearClick={this.handleClearClick}
          expression={this.state.expression}/>
      </div>
    );
  }
}

export default Calculator;
