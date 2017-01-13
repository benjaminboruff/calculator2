// @flow
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Layout, Content, Card, CardTitle, CardText, CardActions } from 'react-mdl';
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
    if(this.state.input.length === 25) {
      this.setState({input: '**Digital Limit Reached**'});
    } else {
      this.setState({input: this.state.input + event.target.value});
    }
  }
  // handle CLEAR and UNDO buttons
  handleClearClick(event: SyntheticInputEvent){
    event.preventDefault();
    if(event.target.value === "CLEAR") {
      console.log("CLEAR!");
      this.setState({input: "", result: 0});
    }
    if(event.target.value === "UNDO") {
      if(this.state.input.length === 25) {
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
    console.log(this.state.input);
    let inputArr = this.state.input.match(regExpFilter);
    console.log(inputArr ? "SUCCESS" : "FAIL");
    // the leading zeros must be stripped, else the numbers are mistaken for octal
    if(inputArr) {
      this.setState(
        {result: Math.round(eval(removeLeadingZeros(this.state.input)) * 1000000) /1000000}
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
            <Card shadow={3} style={{width: '300px', height: '500px',
                                    margin: 'auto', marginTop: '20%',
                                    borderRadius: '10px',
                                    backgroundColor: '#f5f5f5'}}>
              <CardTitle expand style={{background: '#3E4EB8', color: '#fff'}}>
                <h4 style={{margin: 'auto'}}>Calculator</h4>
              </CardTitle>
              <CardText style={{width: '80%', margin: 'auto', marginTop: '10px',
                                marginBottom: '10px',
                                backgroundColor: '#e0e0e0',
                                borderRadius: '5px',
                                color: '#000'}}>
                <Output result={this.state.result} input={this.state.input}/>
              </CardText>
              <CardActions border>
                <Keypad
                  calculate={this.calculate}
                  handleButtonClick={this.handleButtonClick}
                  handleClearClick={this.handleClearClick} />
              </CardActions>
            </Card>
          </Content>
        </Layout>
      </div>
    );
  }
}

export { Calculator, removeLeadingZeros };
