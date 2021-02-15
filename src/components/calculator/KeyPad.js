import React, {Component} from 'react';

class KeyPad extends Component {
    render() {
      return (
        <div className="KeyPad">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-1 mb-4">
                        <button name="%" class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >%</button>
                    </div>
                    <div class="col-md-1 mb-4">
                        <button name="CE" class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >CE</button>
                    </div>
                    <div class="col-md-1 mb-4">
                        <button name="+/-" class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >+/-</button>
                    </div>
                    <div class="col-md-1 mb-4">
                        <button name="C" class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >C</button>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-1 mb-4">
                        <button class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >1</button>
                    </div>
                    <div class="col-md-1 mb-4">
                        <button class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >2</button>
                    </div>
                    <div class="col-md-1 mb-4">
                        <button class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >3</button>
                    </div>
                    <div class="col-md-1 mb-4">
                        <button class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >+</button>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-1 mb-4">
                        <button class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >4</button>
                    </div>
                    <div class="col-md-1 mb-4">
                        <button class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >5</button>
                    </div>
                    <div class="col-md-1 mb-4">
                        <button class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >6</button>
                    </div>
                    <div class="col-md-1 mb-4">
                        <button class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >-</button>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-1 mb-4">
                        <button class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >7</button>
                    </div>
                    <div class="col-md-1 mb-4">
                        <button class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >8</button>
                    </div>
                    <div class="col-md-1 mb-4">
                        <button class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >9</button>
                    </div>
                    <div class="col-md-1 mb-4">
                        <button class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >*</button>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-1 mb-4">
                        <button class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >.</button>
                    </div>
                    <div class="col-md-1 mb-4">
                        <button class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >0</button>
                    </div>
                    <div class="col-md-1 mb-4">
                        <button class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >=</button>
                    </div>
                    <div class="col-md-1 mb-4">
                        <button class="btn btn-dark" style={{ fontSize: "30px", height: "75px", width: "75px" }} >/</button>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default KeyPad;
