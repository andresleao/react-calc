import * as S from './styled';
import CalcButton from './components/CalcButton';
import useCalc from './hooks/useCalc';

function App() {
  const {
    handleNumericInput,
    handleOperationInput,
    handleResultInput,
    handleReset,
    firstNumber,
    result,
  } = useCalc();

  return (
    <S.Container>
      <S.Calculadora>
        <S.Table>
          <tbody>
            <tr>
              <td>
                <CalcButton
                  simbolo="7"
                  handleClick={(e) => handleNumericInput(e)}
                />
              </td>
              <td>
                <CalcButton
                  simbolo="8"
                  handleClick={(e) => handleNumericInput(e)}
                />
              </td>
              <td>
                <CalcButton
                  simbolo="9"
                  handleClick={(e) => handleNumericInput(e)}
                />
              </td>
              <td>
                <CalcButton
                  simbolo="/"
                  handleClick={(e) => handleOperationInput(e)}
                />
              </td>
            </tr>

            <tr>
              <td>
                <CalcButton
                  simbolo="4"
                  handleClick={(e) => handleNumericInput(e)}
                />
              </td>
              <td>
                <CalcButton
                  simbolo="5"
                  handleClick={(e) => handleNumericInput(e)}
                />
              </td>
              <td>
                <CalcButton
                  simbolo="6"
                  handleClick={(e) => handleNumericInput(e)}
                />
              </td>
              <td>
                <CalcButton
                  simbolo="x"
                  handleClick={(e) => handleOperationInput(e)}
                />
              </td>
            </tr>

            <tr>
              <td>
                <CalcButton
                  simbolo="3"
                  handleClick={(e) => handleNumericInput(e)}
                />
              </td>
              <td>
                <CalcButton
                  simbolo="2"
                  handleClick={(e) => handleNumericInput(e)}
                />
              </td>
              <td>
                <CalcButton
                  simbolo="1"
                  handleClick={(e) => handleNumericInput(e)}
                />
              </td>
              <td>
                <CalcButton
                  simbolo="-"
                  handleClick={(e) => handleOperationInput(e)}
                />
              </td>
            </tr>

            <tr>
              <td>
                <CalcButton
                  simbolo="0"
                  handleClick={(e) => handleNumericInput(e)}
                />
              </td>
              <td>
                <CalcButton simbolo="." />
              </td>
              <td>
                <CalcButton
                  simbolo="="
                  handleClick={() => handleResultInput()}
                />
              </td>
              <td>
                <CalcButton
                  simbolo="+"
                  handleClick={(e) => handleOperationInput(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <CalcButton simbolo="CE" handleClick={() => handleReset()} />
              </td>
              {result.value !== '0' && firstNumber.value === '0' && (
                <td
                  colSpan={3}
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  Type a number or CE...
                </td>
              )}
            </tr>
          </tbody>
        </S.Table>
        <S.Display
          type="text"
          onChange={() => ''}
          value={result.value}
          disabled="disabled"
        />
      </S.Calculadora>
    </S.Container>
  );
}

export default App;

// class Botao extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: '0' };
//   }

//   render() {
//     const { simbolo, handleClick } = this.props;

//     return (
//       <button
//         simbolo={simbolo}
//         onClick={handleClick}
//         style={{ fontSize: '1.5rem' }}
//       >
//         {simbolo}
//       </button>
//     );
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//       value1: '',
//       result: '0',
//       operator: '',
//       setResult: false,
//     };
//     this.operacao = this.operacao.bind(this);
//     this.handleNumericInput = this.handleNumericInput.bind(this);
//     this.handleOperationInput = this.handleOperationInput.bind(this);
//     this.handleReset = this.handleReset.bind(this);
//     this.handleResultInput = this.handleResultInput.bind(this);
//   }

//   handleNumericInput(e) {
//     const buttonValue = e.target.innerHTML;

//     this.setState((prevState) => {
//       return {
//         value: prevState.value ? prevState.value + buttonValue : buttonValue,
//         value1: prevState.value1 ? prevState.value1 + buttonValue : buttonValue,
//         result: prevState.operator ? buttonValue : '0',
//       };
//     });
//   }

//   handleOperationInput(e) {
//     const buttonValue = e.target.innerHTML;

//     this.setState((prevState) => {
//       return {
//         operator: buttonValue,
//         value: prevState.value
//           ? prevState.value + ' ' + buttonValue + ' '
//           : prevState.value,
//         value1: prevState.value1 + buttonValue,
//         result: '0',
//       };
//     });
//   }

//   handleReset() {
//     this.setState({
//       operator: '',
//       result: '0',
//       value: '',
//       value1: '',
//       setResult: false,
//     });
//   }

//   handleResultInput(e) {
//     let operation = this.state.operator;
//     let operationResult = 0;

//     let numbers = this.state.value1.split(operation);
//     let firstNumber = numbers[0];

//     switch (operation) {
//       case '+':
//         operationResult = Number(firstNumber) + Number(this.state.result);
//         break;
//       case '-':
//         operationResult = Number(firstNumber) - Number(this.state.result);
//         break;
//       case 'x':
//         operationResult = Number(firstNumber) * Number(this.state.result);
//         break;
//       case '/':
//         operationResult = Number(firstNumber) / Number(this.state.result);
//         break;
//       default:
//         break;
//     }
//     this.setState({ result: operationResult, setResult: true });
//   }

//   operacao(e) {
//     console.log(e.target.getAttribute('simbolo'));
//   }

//   render() {
//     return (
//       <S.Container>
//         <S.Calculadora>
//           <div>
//             <table>
//               <tbody>
//                 <tr>
//                   <td>
//                     <CalcButton
//                       simbolo="7"
//                       handleClick={this.handleNumericInput}
//                     />
//                   </td>
//                   <td>
//                     <CalcButton
//                       simbolo="8"
//                       handleClick={this.handleNumericInput}
//                     />
//                   </td>
//                   <td>
//                     <CalcButton
//                       simbolo="9"
//                       handleClick={this.handleNumericInput}
//                     />
//                   </td>
//                   <td>
//                     <CalcButton
//                       simbolo="/"
//                       handleClick={this.handleOperationInput}
//                     />
//                   </td>
//                 </tr>

//                 <tr>
//                   <td>
//                     <CalcButton
//                       simbolo="4"
//                       handleClick={this.handleNumericInput}
//                     />
//                   </td>
//                   <td>
//                     <CalcButton
//                       simbolo="5"
//                       handleClick={this.handleNumericInput}
//                     />
//                   </td>
//                   <td>
//                     <CalcButton
//                       simbolo="6"
//                       handleClick={this.handleNumericInput}
//                     />
//                   </td>
//                   <td>
//                     <CalcButton
//                       simbolo="x"
//                       handleClick={this.handleOperationInput}
//                     />
//                   </td>
//                 </tr>

//                 <tr>
//                   <td>
//                     <CalcButton
//                       simbolo="3"
//                       handleClick={this.handleNumericInput}
//                     />
//                   </td>
//                   <td>
//                     <CalcButton
//                       simbolo="2"
//                       handleClick={this.handleNumericInput}
//                     />
//                   </td>
//                   <td>
//                     <CalcButton
//                       simbolo="1"
//                       handleClick={this.handleNumericInput}
//                     />
//                   </td>
//                   <td>
//                     <CalcButton
//                       simbolo="-"
//                       handleClick={this.handleOperationInput}
//                     />
//                   </td>
//                 </tr>

//                 <tr>
//                   <td>
//                     <CalcButton
//                       simbolo="0"
//                       handleClick={this.handleNumericInput}
//                     />
//                   </td>
//                   <td>
//                     <CalcButton simbolo="." />
//                   </td>
//                   <td>
//                     <CalcButton
//                       simbolo="="
//                       handleClick={this.handleResultInput}
//                     />
//                   </td>
//                   <td>
//                     <CalcButton
//                       simbolo="+"
//                       handleClick={this.handleOperationInput}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <CalcButton simbolo="CE" handleClick={this.handleReset} />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>

//             <S.Display
//               type="text"
//               onChange={this.operacao}
//               value={
//                 this.state.setResult ? this.state.result : this.state.value
//               }
//               disabled="disabled"
//             />
//           </div>
//         </S.Calculadora>
//       </S.Container>
//     );
//   }
// }

//export default App;
