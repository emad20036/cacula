// src/App.js
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class Logic extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
      currentNumber: '',
      operator: '',
      previousNumber: '',
    };
  }

  handleNumberClick = (number) => {
    this.setState((prevState) => ({
      display:
        prevState.display === '0' ? number : prevState.display + number,
      currentNumber: prevState.currentNumber + number,
    }));
  };

  handleOperatorClick = (operator) => {
    this.setState((prevState) => ({
      display: operator,
      operator: operator,
      previousNumber: prevState.currentNumber,
      currentNumber: '',
    }));
  };

  handleEqualClick = () => {
    const { currentNumber, previousNumber, operator } = this.state;
    let result = 0;
    switch (operator) {
      case '+':
        result = parseFloat(previousNumber) + parseFloat(currentNumber);
        break;
      case '-':
        result = parseFloat(previousNumber) - parseFloat(currentNumber);
        break;
      case '*':
        result = parseFloat(previousNumber) * parseFloat(currentNumber);
        break;
      case '/':
        result = parseFloat(previousNumber) / parseFloat(currentNumber);
        break;
      default:
        break;
    }
    this.setState({
      display: String(result),
      currentNumber: String(result),
      operator: '',
      previousNumber: '',
    });
  };

  handleClearClick = () => {
    this.setState({
      display: '0',
      currentNumber: '',
      operator: '',
      previousNumber: '',
    });
  };

  render() {
    return (
      <>


      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="calculator">
              <input
                className="form-control display"
                type="text"
                value={this.state.display}
                readOnly
              />
              <div className="buttons">
                <div className="row">
                  <button
                    className="btn btn-primary col"
                    onClick={() => this.handleNumberClick('7')}
                  >
                    7
                  </button>
                  <button
                    className="btn btn-primary col"
                    onClick={() => this.handleNumberClick('8')}
                  >
                    8
                  </button>
                  <button
                    className="btn btn-primary col"
                    onClick={() => this.handleNumberClick('9')}
                  >
                    9
                  </button>
                  <button
                    className="btn btn-danger col"
                    onClick={() => this.handleOperatorClick('/')}
                  >
                    ÷
                  </button>
                </div>
                <div className="row">
                  <button
                    className="btn btn-primary col"
                    onClick={() => this.handleNumberClick('4')}
                  >
                    4
                  </button>
                  <button
                    className="btn btn-primary col"
                    onClick={() => this.handleNumberClick('5')}
                  >
                    5
                  </button>
                  <button
                    className="btn btn-primary col"
                    onClick={() => this.handleNumberClick('6')}
                  >
                    6
                  </button>
                  <button
                    className="btn btn-danger col"
                    onClick={() => this.handleOperatorClick('*')}
                  >
                    ×
                  </button>
                </div>
                <div className="row">
                  <button
                    className="btn btn-primary col"
                    onClick={() => this.handleNumberClick('1')}
                  >
                    1
                  </button>
                  <button
                    className="btn btn-primary col"
                    onClick={() => this.handleNumberClick('2')}
                  >
                    2
                  </button>
                  <button
                    className="btn btn-primary col"
                    onClick={() => this.handleNumberClick('3')}
                  >
                    3
                  </button>
                  <button
                    className="btn btn-danger col"
                    onClick={() => this.handleOperatorClick('-')}
                  >
                    -
                  </button>
                </div>
                <div className="row">
                  <button
                    className="btn btn-primary col"
                    onClick={() => this.handleNumberClick('0')}
                  >
                    0
                  </button>
                  <button
                    className="btn btn-warning col"
                    onClick={this.handleClearClick}
                  >
                    C
                  </button>
                  <button
                    className="btn btn-success col"
                    onClick={this.handleEqualClick}
                  >
                    =
                  </button>
                  <button
                    className="btn btn-danger col"
                    onClick={() => this.handleOperatorClick('+')}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      </>
    );
  }
}

export default Logic;
