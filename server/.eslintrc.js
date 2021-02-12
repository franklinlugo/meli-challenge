const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['prettier', 'airbnb-base'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ERROR,
    'no-underscore-dangle': OFF,
    'import/extensions': OFF,
  },
};
