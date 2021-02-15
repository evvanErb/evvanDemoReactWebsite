import React, {Component} from 'react';

import KeyPad from "./KeyPad"
import Result from "./Result"

class Calculator extends Component {

    handeNewInput(val) {
        console.log(val);
    }

  render() {
      return (
        <div className="Calculator">
            <Result />
            <KeyPad onButtonPress={this.handeNewInput} />
        </div>
      );
  }
}

export default Calculator;
