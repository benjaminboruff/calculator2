// @flow
import React, { Component } from 'react';
import './Calculator.css';
import Output from'./components/output';
import Keypad from'./components/keypad';

// type declarations for state and props
type State = {
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
    this.state = {result: parseInt(this.props.input1,10) + parseInt(this.props.input2,10)};
    // $FlowFixMe
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: SyntheticInputEvent){
    this.setState({result: parseInt(event.target.value, 10)});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>FCC Calculator</h2>
        </div>
        <Output result={this.state.result}/>
        <Keypad handler={this.handleChange}/>
      </div>
    );
  }
}

export default Calculator;
