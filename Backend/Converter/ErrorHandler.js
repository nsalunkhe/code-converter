// errorHandler.js

function handleUnsupportedLanguage(res) {
    res.status(400).send('Unsupported language');
  }
  
  function handleServerError(res, error) {
    console.error(error);
    res.status(500).send('An error occurred.');
  }
  
  module.exports = {
    handleUnsupportedLanguage,
    handleServerError,
  };
  