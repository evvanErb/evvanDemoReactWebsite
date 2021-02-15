import React, {Component} from 'react';

import KeyPad from "./KeyPad"
import Result from "./Result"

class Calculator extends Component {

    constructor(props) {
        super(props)

        this.handeNewInput = this.handeNewInput.bind(this)
        this.state = {input: "0"};
      }

    calculate(val) {
        return this.state.input + val;
    }

    handeNewInput(val) {
        var value = this.calculate(val);
        this.setState({input: value});
    }

  render() {
      return (
        <div className="Calculator">
            <Result value={this.state.input}/>
            <KeyPad onButtonPress={this.handeNewInput} />
        </div>
      );
  }
}

export default Calculator;
