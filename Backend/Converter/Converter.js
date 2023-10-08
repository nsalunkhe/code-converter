// converter.js

function convertToLanguage(code, language) {
    let prompt = '';
  
    switch (language) {
      case 'python':
        prompt = `Convert the following Python code:\n\n${code}\n\nTo Python:\n\n`;
        break;
  
      case 'javascript':
        prompt = `Convert the following JavaScript code:\n\n${code}\n\nTo JavaScript:\n\n`;
        break;
  
      case 'java':
        prompt = `Convert the following Java code:\n\n${code}\n\nTo Java:\n\n`;
        break;
  
      default:
        return null; // Unsupported language
    }
  
    return prompt;
  }
  
  module.exports = {
    convertToLanguage,
  };
  