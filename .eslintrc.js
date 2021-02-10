const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  ignorePatterns: ['mocks', 'mock', 'dist/', 'build/', 'public/', '.scss', '.svg'],
  env: {
    jest: true,
    browser: true,
    es6: true,
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    navigator: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [OFF, { devDependencies: ['**/*.story.jsx', '**/*.stories.jsx'] }],
    'prettier/prettier': ERROR,
    'no-unused-vars': WARNING,
    'no-unused-expressions': [
      ERROR,
      {
        allowShortCircuit: true,
      },
    ],
    'no-console': OFF,
    'no-debugger': OFF,
    'no-alert': OFF,
    'no-use-before-define': OFF,
    'func-names': OFF,
    'react/jsx-filename-extension': [WARNING, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-nested-ternary': OFF,
    'import/no-cycle': OFF,
    'import/prefer-default-export': OFF,
    'import/no-unresolved': ERROR,
    'react/react-in-jsx-scope': ERROR,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': 'warn',
    'react/button-has-type': WARNING,
    'react/jsx-pascal-case': ERROR,
    'react/require-default-props': OFF,
    'react/prop-types': OFF,
    'react/jsx-props-no-spreading': OFF,
    'jsx-a11y/control-has-associated-label': OFF,
    'jsx-a11y/click-events-have-key-events': OFF,
    'jsx-a11y/anchor-is-valid': OFF,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
