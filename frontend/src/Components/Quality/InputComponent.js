// InputQualityCheckComponent.js
import React from 'react';

const InputComponent = ({ qualityCriteria, onInputChange, onQualityCheck }) => {
  return (
    <div className="input-section">
      <h2>Input</h2>
      <textarea value={qualityCriteria} onChange={onInputChange} placeholder="Enter quality criteria here" />
      <button onClick={onQualityCheck}>Check Quality</button>
    </div>
  );
};

export default InputComponent;
