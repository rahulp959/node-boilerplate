module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  plugins: ['jest', 'prettier'],
  rules: {
    // We will generally be using named exports, for both handler lambda functions and our normal exports
    // Default is cool, but I feel like going named.
    'import/prefer-default-export': 0
  },
  env: {
    'jest/globals': true
  },
  };
