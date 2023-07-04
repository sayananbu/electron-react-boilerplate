module.exports = {
  extends: [
    'airbnb-typescript-prettier',
    'plugin:jsx-a11y/recommended',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'jsx-a11y',
    'prettier',
  ],
  rules: {
    'linebreak-style': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: [
          'function-declaration',
          'function-expression',
          'arrow-function',
        ],
      },
    ],
    prettier: {
      singleQuote: true,
      jsxSingleQuote: true,
    },
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        jsxBracketSameLine: false,
        jsxSingleQuote: true,
        bracketSameLine: false,
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    curly: ['error', 'multi-line'],
    'react/no-array-index-key': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': 'off',
    'import/no-import-module-exports': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
      useJSXTextNode: true,
      modules: true,
    },
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: require.resolve('./.erb/configs/webpack.config.eslint.ts'),
      },
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
