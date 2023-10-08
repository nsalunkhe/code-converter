// InputDebugComponent.js
import React from 'react';

const InputComponent = ({ inputCode, onInputChange, onDebug }) => {
  return (
    <div className="input-section">
      <h2>Input</h2>
      <textarea value={inputCode} onChange={onInputChange} placeholder="Enter your code here" />
      <button onClick={onDebug}>Debug</button>
    </div>
  );
};

export default InputComponent;
