import React, { Component } from 'react';
import './App.css';

class Botao extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '0' };
  }

  render() {
    const { simbolo, handleClick } = this.props;

    return (
      <button
        simbolo={simbolo}
        onClick={handleClick}
        style={{ fontSize: '1.5rem' }}
      >
        {simbolo}
      </button>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      value1: '',
      result: '0',
      operator: '',
      setResult: false,
    };
    this.operacao = this.operacao.bind(this);
    this.handleNumericInput = this.handleNumericInput.bind(this);
    this.handleOperationInput = this.handleOperationInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleResultInput = this.handleResultInput.bind(this);
  }

  handleNumericInput(e) {
    const buttonValue = e.target.innerHTML;

    this.setState((prevState) => {
      return {
        value: prevState.value ? prevState.value + buttonValue : buttonValue,
        value1: prevState.value1 ? prevState.value1 + buttonValue : buttonValue,
        result: prevState.operator ? buttonValue : '0',
      };
    });
  }

  handleOperationInput(e) {
    const buttonValue = e.target.innerHTML;

    this.setState((prevState) => {
      return {
        operator: buttonValue,
        value: prevState.value
          ? prevState.value + ' ' + buttonValue + ' '
          : prevState.value,
        value1: prevState.value1 + buttonValue,
        result: '0',
      };
    });
  }

  handleReset() {
    this.setState({
      operator: '',
      result: '0',
      value: '',
      value1: '',
      setResult: false,
    });
  }

  handleResultInput(e) {
    let operation = this.state.operator;
    let operationResult = 0;

    let numbers = this.state.value1.split(operation);
    let firstNumber = numbers[0];

    switch (operation) {
      case '+':
        operationResult = Number(firstNumber) + Number(this.state.result);
        break;
      case '-':
        operationResult = Number(firstNumber) - Number(this.state.result);
        break;
      case 'x':
        operationResult = Number(firstNumber) * Number(this.state.result);
        break;
      case '/':
        operationResult = Number(firstNumber) / Number(this.state.result);
        break;
      default:
        break;
    }
    this.setState({ result: operationResult, setResult: true });
  }

  operacao(e) {
    console.log(e.target.getAttribute('simbolo'));
  }

  render() {
    return (
      <div className="container">
        <div className="formulario">
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <Botao simbolo="7" handleClick={this.handleNumericInput} />
                  </td>
                  <td>
                    <Botao simbolo="8" handleClick={this.handleNumericInput} />
                  </td>
                  <td>
                    <Botao simbolo="9" handleClick={this.handleNumericInput} />
                  </td>
                  <td>
                    <Botao
                      simbolo="/"
                      handleClick={this.handleOperationInput}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <Botao simbolo="4" handleClick={this.handleNumericInput} />
                  </td>
                  <td>
                    <Botao simbolo="5" handleClick={this.handleNumericInput} />
                  </td>
                  <td>
                    <Botao simbolo="6" handleClick={this.handleNumericInput} />
                  </td>
                  <td>
                    <Botao
                      simbolo="x"
                      handleClick={this.handleOperationInput}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <Botao simbolo="3" handleClick={this.handleNumericInput} />
                  </td>
                  <td>
                    <Botao simbolo="2" handleClick={this.handleNumericInput} />
                  </td>
                  <td>
                    <Botao simbolo="1" handleClick={this.handleNumericInput} />
                  </td>
                  <td>
                    <Botao
                      simbolo="-"
                      handleClick={this.handleOperationInput}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <Botao simbolo="0" handleClick={this.handleNumericInput} />
                  </td>
                  <td>
                    <Botao simbolo="." />
                  </td>
                  <td>
                    <Botao simbolo="=" handleClick={this.handleResultInput} />
                  </td>
                  <td>
                    <Botao
                      simbolo="+"
                      handleClick={this.handleOperationInput}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Botao simbolo="CE" handleClick={this.handleReset} />
                  </td>
                </tr>
              </tbody>
            </table>

            <input
              type="text"
              onChange={this.operacao}
              value={
                this.state.setResult ? this.state.result : this.state.value
              }
              disabled="disabled"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
