require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const { convertToLanguage } = require('./Converter/Converter');
const { handleUnsupportedLanguage, handleServerError } = require('./Converter/ErrorHandler');
const { debugCode } = require('./Debug/Debugger');
const { performQualityCheck } = require('./Quality/Quality');
const axios = require('axios');

const API_KEY = process.env.API_KEY;
const API_URL = 'https://api.openai.com/v1/chat/completions';

app.post('/convert', async (req, res) => {
  const { code, language } = req.body;

  const prompt = convertToLanguage(code, language);
  if (!prompt) {
    handleUnsupportedLanguage(res);
    return;
  }

  const options = {
    method: 'POST',
    url: API_URL,
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    data: {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: prompt }],
      max_tokens: 100,
    }
  };

  try {
    const response = await axios(options);
    res.json({ output: response.data.choices[0].message.content.trim() });
  } catch (error) {
    handleServerError(res, error);
  }
});

// Debug route
app.post('/debug', async (req, res) => {
  const { code } = req.body;
  const language = 'code';  // Default language (you can change it if needed)

  const prompt = `Debug this code:\n\n${code}`;

  const debugOutput = await debugCode(prompt, language);
  res.json(debugOutput);
});

// Quality check route
app.post('/quality-check', async (req, res) => {
  const { qualityCriteria } = req.body;

  const qualityCheckOutput = await performQualityCheck(qualityCriteria);

  res.json(qualityCheckOutput);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
