module.exports = {
  extends: [
    'airbnb-typescript-prettier',
    'plugin:jsx-a11y/recommended',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
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
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: [
          'function-declaration',
          'function-expression',
          'arrow-function',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/newline-after-import': [
      'off',
      {
        count: 1,
      },
    ],
    'import/order': 'off',
    'react/self-closing-comp': 'off',
    '@typescript-eslint/comma-dangle':'off',
    'prettier/prettier': [
      'off',
      {
        singleQuote: true,
        jsxBracketSameLine: false,
        jsxSingleQuote: true,
        bracketSameLine: false,
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    curly: ['off', 'multi-line'],
    'react/no-array-index-key': ['warn'],
    '@typescript-eslint/naming-convention': [
      'warn',
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
    '@typescript-eslint/no-shadow': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
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
