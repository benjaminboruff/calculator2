// @flow
import { Panel } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import React, { Component } from 'react';
import './Calculator.css';
import Output from'./components/output';
import Keypad from'./components/keypad';

  // we need to remove the leading zeros from the
  // numbers in the string, otherwise they are eval-ed
  // as octal numbers
  function removeLeadingZeros(str: string): string {
    // array of numbers/args
    let numbersArr = str.split(/[\+\-\*\/]/);
    //console.log(numbersArr);
    // array of operators
    let operatorsArr = str.split(/[0-9|.]+/);
    // remove empty strings at begining and end
    operatorsArr.pop();
    operatorsArr.shift();
    //console.log(operatorsArr);

    let cleanArr = [];
    for(let i = 0; i < operatorsArr.length; i++) {
      let tmpNumArr = numbersArr.shift().match(/[^0][.|0-9]*/);

      let tmpStr = tmpNumArr ? tmpNumArr[0] : '0';
      //console.log(tmpStr);
      cleanArr.push(tmpStr);
      cleanArr.push(operatorsArr[i]);
    }
    //console.log(numbersArr);
    let tmpNumArr = numbersArr.shift().match(/[^0][.|0-9]*/);
    let tmpStr = tmpNumArr ? tmpNumArr[0] : '0';
    cleanArr.push(tmpStr);

    return cleanArr.join("");
  }

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
    if(this.state.input.length === 31) {
      this.setState({input: '**Digital Limit Reached**'});
    } else {
      this.setState({input: this.state.input + event.target.value});
    }
  }
  // handle CLEAR and UNDO buttons
  handleClearClick(event: SyntheticInputEvent){
    event.preventDefault();
    if(event.target.value === "CLEAR") {
      //console.log("CLEAR!");
      this.setState({input: "", result: 0});
    }
    if(event.target.value === "UNDO") {
      if(this.state.input.length === 31) {
          this.setState({input: "", result: 0});
      } else {
          this.setState({input: this.state.input.slice(0, -1), result: 0});
      }
    }
  }
  // handle "=" button click my performing the calculation
  calculate(event: SyntheticInputEvent){
    event.preventDefault();
    // only allow proper patterns, e.g. .1+0.1+1 (no double .. or ending with an operator)
    let regExpFilter = /^(\d*(\.(?!\.))?\d+)([\+\-\*\/]{1}\d*(\.(?!\.))?\d*)*[^\+\-\*\/\.]$/;
    //console.log(this.state.input);
    let inputArr = this.state.input.match(regExpFilter);
    //console.log(inputArr ? "SUCCESS" : "FAIL");
    // the leading zeros must be stripped, else the numbers are mistaken for octal
    if(inputArr) {
      this.setState(
        {result: eval(removeLeadingZeros(this.state.input))}
      );
    } else {
      this.setState(
        {result: this.state.result}
      );
    }
  }

  render() {
    // add custom Panel style for Panel header
    bootstrapUtils.addStyle(Panel, 'custom');
    let title = <h4 style={{margin: 'auto'}}>Calculator</h4>;
    return (
      <div className="">
        <div>
          <div className="App">
            <Panel header={title} bsStyle="custom">
              <Output result={this.state.result} input={this.state.input} />
              <Keypad
                calculate={this.calculate}
                handleButtonClick={this.handleButtonClick}
                handleClearClick={this.handleClearClick} />
            </Panel>
            <div style={{color: '#f5f5f5', textAlign: 'center', position: 'absolute', width: '100%', marginTop: '25px'}}>
              Designed and coded by <a style={{textDecoration: 'none', color: '#3E4EB8'}} href="http://stackoverflow.com/story/benjaminboruff">Benjamin H Boruff</a> &copy;2017
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Calculator, removeLeadingZeros };
