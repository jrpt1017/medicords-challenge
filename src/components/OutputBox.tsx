import React from 'react';
import '../App.css';

interface Props {
  output: string
}

const OutputBox: React.FC<Props> = ({ output }) => {
  return (
    <div className="box-container" data-testid="output-box">
      <h3>Output</h3>
      <p>Double</p>
      <input data-testid="output-element" type="text" value={output} readOnly />
    </div>
  )
}

export default OutputBox;
