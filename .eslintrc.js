module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'jsdoc/require-param-description': 0,
    'jsdoc/require-returns-description': 0,
    'jsdoc/check-tag-names': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  plugins: ['prettier', 'jsdoc'],
  noInlineConfig: true,
};
