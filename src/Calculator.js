// @flow
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Layout, Content } from 'react-mdl';
import React, { Component } from 'react';
import './Calculator.css';
import Output from'./components/output';
import Keypad from'./components/keypad';

// type declarations for state and props
type State = {
  input: string,
  result: number
};

class Calculator extends Component<void, void, State> {
  state: State;

  constructor(props: Object) {
    super(props);
    this.state = {result: 0, input: ""};
    // $FlowFixMe
    this.calculate = this.calculate.bind(this);
    // $FlowFixMe
    this.handleButtonClick = this.handleButtonClick.bind(this);
    // $FlowFixMe
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  // handle 0-1 and operator buttons
  handleButtonClick(event: SyntheticInputEvent){
    event.preventDefault();
    // if(event.target.value.match(/\+\-\*\/]/)) {
    // STRIP OCTAL!!!!!
    // }
    this.setState({input: this.state.input + event.target.value});
  }
  // handle CLEAR and UNDO buttons
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
  // handle "=" button click my performing the calculation
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
      <div className="">
        <Layout>
          <Content className="App">
            <Output result={this.state.result} input={this.state.input}/>
            <Keypad
              calculate={this.calculate}
              handleButtonClick={this.handleButtonClick}
              handleClearClick={this.handleClearClick} />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Calculator;
