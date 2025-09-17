import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true // ← ESTO ES CLAVE PARA JSX
        }
      }
    },
    plugins: {
      react: pluginReact,
      'react-hooks': reactHooks
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-key': 'error',
      'no-undef': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      eqeqeq: 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  prettierConfig
]);
