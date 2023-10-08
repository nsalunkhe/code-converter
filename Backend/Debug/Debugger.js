// debugger.js
const axios = require('axios');
const { handleServerError } = require('../Converter/ErrorHandler');

const API_KEY = process.env.API_KEY;
const API_URL = 'https://api.openai.com/v1/chat/completions';

async function debugCode(code, language) {
  const options = {
    method: 'POST',
    url: API_URL,
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    data: {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: `Debug this code:\n\n${code}` }],
      max_tokens: 100,
    }
  };

  try {
    const response = await axios(options);
    return { debugOutput: response.data.choices[0].message.content.trim(), language };
  } catch (error) {
    handleServerError(error);
    return { debugOutput: 'An error occurred.', language };
  }
}

module.exports = {
  debugCode,
};
