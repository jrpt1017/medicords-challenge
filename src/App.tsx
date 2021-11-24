import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>MediCords Frontend Challenge</h1>
      <div className="root-container">
        <div className="box-container">
          <h3>Input</h3>
          <p>Array</p>
          <input type="text" />
        </div>
        <div className="box-container">
          <h3>Output</h3>
          <p>Double</p>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default App;
