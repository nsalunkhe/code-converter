// QualityCheck.js
import React, { useState } from 'react';
import InputQualityCheckComponent from './InputComponent';
import OutputQualityCheckComponent from './OutputComponent';
import "./Quality.css"

const Quality = () => {
  const [qualityCriteria, setQualityCriteria] = useState('');
  const [qualityCheckOutput, setQualityCheckOutput] = useState('');

  const handleInputChange = (event) => {
    setQualityCriteria(event.target.value);
  };

  const handleQualityCheck = async () => {
    if (!qualityCriteria) {
      alert('Please enter quality criteria to check.');
      return;
    }

    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ qualityCriteria }),
      };

      const response = await fetch('https://converter-backend-ho08.onrender.com/quality-check', requestOptions);

      if (response.ok) {
        const data = await response.json();
        console.log('Quality Check Successful:', data);
        setQualityCheckOutput(data.qualityCheckOutput);
      } else {
        console.log('Quality Check Failed:', response);
        alert('Quality check failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <div className='container'>
        <InputQualityCheckComponent
          qualityCriteria={qualityCriteria}
          onInputChange={handleInputChange}
          onQualityCheck={handleQualityCheck}
        />
        <OutputQualityCheckComponent qualityCheckOutput={qualityCheckOutput} />
      </div>
    </div>
  );
};

export default Quality;
