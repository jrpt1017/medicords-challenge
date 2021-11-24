import React from 'react';
import '../App.css';

interface Props {
  output: string
}

const OutputBox: React.FC<Props> = ({ output }) => {
  return (
    <div className="box-container">
      <h3>Output</h3>
      <p>Double</p>
      <input type="text" value={output} readOnly />
    </div>
  )
}

export default OutputBox;
