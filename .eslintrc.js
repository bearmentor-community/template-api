module.exports = {
  plugins: ['jest'],
  env: {
    node: true,
    es2020: true,
    commonjs: true,
    'jest/globals': true
  },
  extends: ['standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-var': 'error',
    'no-unreachable': 'error',
    'prefer-arrow-callback': 'error',
    'linebreak-style': ['error', 'unix']
  }
}
