import React, { useState } from 'react';

import './App.css';
import { InputNumber } from './InputNumber.jsx';
import { Button } from './Button.jsx';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const [result, setResult] = useState('');
  const [message, setMessage] = useState('');

  const validateNumbers = (operation) => {
    if (!num1.trim() && !num2.trim()) {
      setMessage("NUM1 & Num2 can't be empty.");
      setResult('Error!');
      return;
    }
    if (!num1.trim()) {
      setMessage("Num1 can't be empty.");
      setResult('Error!');
      return;
    }
    if (!num2.trim()) {
      setMessage("Num2 can't be empty.");
      setResult('Error!');
      return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operation) {
      case '+':
        setMessage(`Result: ${number1 + number2}`);
        setResult('Success!');
        break;
      case '-':
        setMessage(`Result: ${number1 - number2}`);
        setResult('Success!');
        break;
      case '*':
        setMessage(`Result: ${number1 * number2}`);
        setResult('Success!');
        break;
      case '/':
        if (number2 !== 0) {
          setMessage(`Result: ${number1 / number2}`);
          setResult('Success!');
        } else {
          setMessage('Cannot divide by zero.');
          setResult('Error!');
        }
        break;
      default:
        break;
    }
  }


  return (
    <div className="App">
      <span className='title'>React Calculator</span>
      <InputNumber value={num1} placeholder="Num1" onChange={(e) => setNum1(e.target.value)} />
      <InputNumber value={num2} placeholder="Num2" onChange={(e) => setNum2(e.target.value)} />
      <div className='buttons'>
        <Button label={'+'} onClick={() => validateNumbers('+')}/>
        <Button label={'-'} onClick={() => validateNumbers('-')}/>
        <Button label={'*'} onClick={() => validateNumbers('*')}/>
        <Button label={'/'} onClick={() => validateNumbers('/')}/>
      </div>
      <div>
        {result==="Error!" && <div style={{ color: 'red', textAlign: 'center', fontWeight: 600 }}>{result}</div>}
        {result==="Success!" && <div style={{ color: 'green' }}>{result}</div>}
        {message && <div style={{fontWeight: 600}}>{message}</div>}
      </div>
    </div>
  );
}

export default App;
