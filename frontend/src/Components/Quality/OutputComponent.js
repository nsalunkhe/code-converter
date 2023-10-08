// OutputQualityCheckComponent.js
import React from 'react';

const OutputComponent = ({ qualityCheckOutput }) => {
  return (
    <div className="output-section">
      <h2>Quality Check Output</h2>
      <textarea value={qualityCheckOutput} readOnly placeholder="Quality check output will appear here" />
    </div>
  );
};

export default OutputComponent;
