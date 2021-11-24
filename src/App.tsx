import React, { useState } from 'react';
import OutputBox from './components/OutputBox';
import './App.css';

const App = () => {
  const [output, setOutput] = useState<string>('');
  const [input, setInput] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // Don't let user type alphabet characters
    if (value.match("[a-zA-Z]+")) {
      return;
    }
    setInput(value);
    const splitValues = value.split(',');
    const doubledValues = splitValues.map((input) => {
      return Number(input) * 2;
    });
    setOutput(String(doubledValues));
  };

  return (
    <div className="App">
      <h1>MediCords Frontend Challenge</h1>
      <div className="root-container">
        <div className="box-container">
          <h3>Input</h3>
          <p>Array</p>
          <input type="text" value={input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { return handleInputChange(e); }} />
        </div>
        <OutputBox output={output} />
      </div>
    </div>
  );
}

export default App;
