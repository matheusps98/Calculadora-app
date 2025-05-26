import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row , Column } from './styles';
import { useState } from 'react';


function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
const [operator, setOperator] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperator('');
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperator('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperator('');
    }
  }

 const handleRemNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperator('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperator('');
    }
  }

  const handleMulNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperator('*');
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperator('');
    }
  }

  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperator('/');
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperator('');
    }
  }

  const handlePorcNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperator('%');
    } else {
      const sum = Number(firstNumber) % Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperator('');
    }
  }
  const handleEquals  = () => {
    if (firstNumber !== '0' && operator !== '' && currentNumber !== '0') {
      switch (operator) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleRemNumbers();
          break;
        case '*':
          handleMulNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case '%':
          handlePorcNumbers();
          break;
        default:
          break;

      }
    }
  }

  return (
    <Container>
      <Content>
      <Input value={currentNumber}/>
      <Row>
      <Button label="%" onClick={handlePorcNumbers}/>
      <Button label="CE" onClick={() => handleAddNumber('CE')}/>
      <Button label="C" onClick={() => handleAddNumber('C')}/>
      <Button label="<=" onClick={handleOnClear}/>
      </Row>
      <Row>
      <Button label="7" onClick={() => handleAddNumber('7')}/>
      <Button label="8" onClick={() => handleAddNumber('8')}/>
      <Button label="9" onClick={() => handleAddNumber('9')}/>
      <Button label="x" onClick={handleMulNumbers}/>
      </Row>
      <Row>
      <Button label="4" onClick={() => handleAddNumber('4')}/>
      <Button label="5" onClick={() => handleAddNumber('5')}/>
      <Button label="6" onClick={() => handleAddNumber('6')}/>
      <Button label="-" onClick={handleRemNumbers}/>
      </Row>
      <Row>
      <Button label="1" onClick={() => handleAddNumber('1')}/>
      <Button label="2" onClick={() => handleAddNumber('2')}/>
      <Button label="3" onClick={() => handleAddNumber('3')}/>
      <Button label="+" onClick={handleSumNumbers}/>
      </Row>
      <Row>
      <Button label="+/-" onClick={handleDivNumbers}/>
      <Button label="0" onClick={() => handleAddNumber('0')}/>
      <Button label="," onClick={() => handleAddNumber(',')}/>
      <Button label="=" onClick={handleEquals} />
      </Row>
      </Content>
      </Container>  
  );
}

export default App;
