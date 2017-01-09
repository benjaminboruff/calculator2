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

type Props = {
  input1: string,
  input2: string
};

class Calculator extends Component<void, Props, State> {
  props: Props;
  state: State;

  constructor(props: Object) {
    super(props);
    this.state = {result: 0, expression: ""};
    // $FlowFixMe
    this.handleChange = this.handleChange.bind(this);
    // $FlowFixMe
    this.calculate = this.calculate.bind(this);
  }

  handleChange(event: SyntheticInputEvent){
    event.preventDefault();
    //if(event.key === 'Enter') {
      console.log(event.target.value);
      this.setState({expression: event.target.value});
    //}
  }

  calculate(event: SyntheticInputEvent){
    event.preventDefault();
    //if(event.key === 'Enter') {
      //console.log(event.target.value);
      this.setState({result: eval(this.state.expression)});
    //}
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>FCC Calculator</h2>
        </div>
        <Output result={this.state.result}/>
        <Keypad handleChange={this.handleChange} calculate={this.calculate}/>
      </div>
    );
  }
}

export default Calculator;