// InputComponent.js
import React from 'react';

const InputComponent = ({ inputCode, onInputChange, selectedLanguage, onLanguageChange, onConvert }) => {
  return (
    <div className="input-section">
      <h2>Input</h2>
      <textarea value={inputCode} onChange={onInputChange} placeholder="Enter your code here" />
      <div className='one'>
      <select value={selectedLanguage} onChange={onLanguageChange}>
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
        <option value="java">Java</option>
        {/* Add more language options as needed */}
      </select>
      <button onClick={onConvert}>Convert</button>
      </div>
    </div>
  );
};

export default InputComponent;
