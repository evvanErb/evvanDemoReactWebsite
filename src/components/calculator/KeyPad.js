import React, {Component} from 'react';

class KeyPad extends Component {
    render() {
      return (
        <div className="KeyPad justify-content-center text-center">
            <div class="container">
                <div class="row">
                    <button class="col-sm">%</button>
                    <button class="col-sm">CE</button>
                    <button class="col-sm">+/-</button>
                    <button class="col-sm">C</button>
                </div>
                <div class="row">
                    <button class="col-sm">1</button>
                    <button class="col-sm">2</button>
                    <button class="col-sm">3</button>
                    <button class="col-sm">+</button>
                </div>
                <div class="row">
                    <button class="col-sm">4</button>
                    <button class="col-sm">5</button>
                    <button class="col-sm">6</button>
                    <button class="col-sm">-</button>
                </div>
                <div class="row">
                    <button class="col-sm">7</button>
                    <button class="col-sm">8</button>
                    <button class="col-sm">9</button>
                    <button class="col-sm">*</button>
                </div>
                <div class="row">
                    <button class="col-sm">.</button>
                    <button class="col-sm">0</button>
                    <button class="col-sm">=</button>
                    <button class="col-sm">/</button>
                </div>
            </div>
            <br /><br /><br /><br /><br />
        </div>
      );
    }
}

export default KeyPad;
