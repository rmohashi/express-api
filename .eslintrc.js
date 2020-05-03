module.exports = {
  env: {
    browser: false,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'no-useless-constructor': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
  },
  settings: {
    'import/resolver': {
      'typescript': {}
    },
  },
};
