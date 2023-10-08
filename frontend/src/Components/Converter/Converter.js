import React from 'react';
import  { useState } from 'react';
import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';
import "./Converter.css"

const Converter = () => {
  const [inputCode, setInputCode] = useState('');
  const [outputCode, setOutputCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('python');

  const handleInputChange = (event) => {
    setInputCode(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleConvert = async () => {
    if (!inputCode) {
      alert('Please enter code to convert.');
      return;
    }
  
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ code: inputCode, language: selectedLanguage }),
      };
  
      const response = await fetch('https://converter-backend-ho08.onrender.com/convert', requestOptions);
  
      if (response.ok) {
        const data = await response.json();
        console.log('Conversion Successful:', data);
        setOutputCode(data.output);
      } else {
        console.log('Conversion Failed:', response);
        alert('Code conversion failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  
  return (
    <div>
      <div className='container'>
      <InputComponent
        inputCode={inputCode}
        onInputChange={handleInputChange}
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
        onConvert={handleConvert}
      />
      <OutputComponent outputCode={outputCode} />
    </div>
    </div>
  );
};

export default Converter;
