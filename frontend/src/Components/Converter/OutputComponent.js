// OutputComponent.js
import React from 'react';

const OutputComponent = ({ outputCode }) => {
  return (
    <div className="output-section">
      <h2>Output</h2>
      <textarea value={outputCode} readOnly placeholder="Converted code will appear here" />
    </div>
  );
};

export default OutputComponent;
