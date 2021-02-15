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

        if (/^\d+$/.test(val) || val === "+" || val === "-" || val === "*" || val === "/") {
            if (this.state.input === "0") {
                return val;
            }
            else {
                return this.state.input + val;
            }
        }

        else if (val === "=") {
            return eval(this.state.input).toString();
        }

        else if (val === "CE") {
            return "0";
        }

        else if (val === "%") {

        }

        else if (val === "+/-") {

        }

        else if (val === "C") {
            return "0";
        }

        return this.state.input;
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
