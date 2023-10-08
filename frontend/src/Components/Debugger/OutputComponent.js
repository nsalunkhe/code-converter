// OutputDebugComponent.js
import React from 'react';

const OutputDebugComponent = ({ debugOutput }) => {
  return (
    <div className="output-section">
      <h2>Debug Output</h2>
      <textarea value={debugOutput} readOnly placeholder="Debug output will appear here" />
    </div>
  );
};

export default OutputDebugComponent;
