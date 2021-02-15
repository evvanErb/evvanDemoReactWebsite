import React, {Component} from 'react';

import KeyPad from "./KeyPad"
import Result from "./Result"

class Calculator extends Component {
  render() {
      return (
        <div className="Calculator">
            <Result />
            <KeyPad />
        </div>
      );
  }
}

export default Calculator;
