module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'vue'
  ],
  plugins: [
    'eslint-plugin-vue'
  ],
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true
  },
  globals: {},
  rules: {
    'no-console': ['error', { allow: ['error'] }],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'no-undef': 'error'
  }
}