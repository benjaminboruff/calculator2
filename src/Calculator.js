// @flow
import React, { Component } from 'react';
import './Calculator.css';
import Output from'./components/output';
import Keypad from'./components/keypad';

// type declarations for state and props
type State = {
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

  constructor(props) {
    super(props);
    this.state = {result: 0, expression: ""};
    // $FlowFixMe
    this.handleChange = this.handleChange.bind(this);
    // $FlowFixMe
    this.calculate = this.calculate.bind(this);
    // $FlowFixMe
    this.handleButtonClick = this.handleButtonClick.bind(this);
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
    // only allow proper patterns, e.g. .1+0.1+1 (no double .. or ending with an operator)
    let regExpFilter = /^(\d*(\.(?!\.))?\d+)([\+\-\*\/]{1}\d*(\.(?!\.))?\d*)*[^\+\-\*\/\.]$/;
    let keyStr = event.target.value.toString();
    let tmpExpression = this.state.expression ? this.state.expression + keyStr : keyStr;
    console.log(tmpExpression);
    let inputArr = tmpExpression.match(regExpFilter);
    console.log(inputArr ? inputArr[0] : "FAIL");
    this.setState({expression: inputArr ? inputArr[0] : this.state.expression});
  }

  calculate(event: SyntheticInputEvent){
    event.preventDefault();
    this.setState(
      {result: this.state.expression !== "ERROR" ?
        Math.round(eval(this.state.expression) * 1000000) /1000000 :
        this.state.result}
   );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>FCC Calculator</h2>
        </div>
        <Output result={this.state.result}/>
        <Keypad handleChange={this.handleChange}
          calculate={this.calculate}
          handleButtonClick={this.handleButtonClick}
          expression={this.state.expression}/>
      </div>
    );
  }
}

export default Calculator;
