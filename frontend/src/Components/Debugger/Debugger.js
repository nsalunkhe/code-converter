// Debug.js
import React, { useState } from 'react';
import InputDebugComponent from './InputComponent';
import OutputDebugComponent from './OutputComponent';
import "./Debug.css"

const Debugger = () => {
  const [inputCode, setInputCode] = useState('');
  const [debugOutput, setDebugOutput] = useState('');

  const handleInputChange = (event) => {
    setInputCode(event.target.value);
  };

  const handleDebug = async () => {
    if (!inputCode) {
      alert('Please enter code to debug.');
      return;
    }

    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ code: inputCode }),
      };

      const response = await fetch('https://converter-backend-ho08.onrender.com/debug', requestOptions);

      if (response.ok) {
        const data = await response.json();
        console.log('Debug Successful:', data);
        setDebugOutput(data.debugOutput);
      } else {
        console.log('Debug Failed:', response);
        alert('Code debugging failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <div className='container'>
        <InputDebugComponent
          inputCode={inputCode}
          onInputChange={handleInputChange}
          onDebug={handleDebug}
        />
        <OutputDebugComponent debugOutput={debugOutput} />
      </div>
    </div>
  );
};

export default Debugger;
