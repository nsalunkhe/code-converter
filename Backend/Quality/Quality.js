// qualityChecker.js
const axios = require('axios');
const { handleServerError } = require('../Converter/ErrorHandler');

const API_KEY = process.env.API_KEY;
const API_URL = 'https://api.openai.com/v1/chat/completions';

async function performQualityCheck(qualityCriteria) {
  const options = {
    method: 'POST',
    url: API_URL,
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    data: {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: 'You are a quality checker.' }, { role: 'user', content: qualityCriteria }],
      max_tokens: 100,
    }
  };

  try {
    const response = await axios(options);
    return { qualityCheckOutput: response.data.choices[0].message.content.trim() };
  } catch (error) {
    handleServerError(error);
    return { qualityCheckOutput: 'An error occurred during quality check.' };
  }
}

module.exports = {
  performQualityCheck,
};
