import { defineConfig, globalIgnores } from 'eslint/config'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const GLOBALS_BROWSER_FIX = Object.assign({}, globals.browser, {
  AudioWorkletGlobalScope: globals.browser['AudioWorkletGlobalScope '],
})

delete GLOBALS_BROWSER_FIX['AudioWorkletGlobalScope ']

export default defineConfig([
  globalIgnores(['dist', '**/.next']),
  {
    extends: compat.extends(
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
      'airbnb',
      'prettier',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended'
      // "plugin:sonarjs/recommended",
      // "plugin:security/recommended",
    ),

    plugins: {
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...GLOBALS_BROWSER_FIX,
        ...globals.node,
      },

      ecmaVersion: 2020,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },

      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx'],
        },
      },
    },

    rules: {
      // Disable base ESLint no-unused-vars
      'no-unused-vars': 'off',
      // Configure TypeScript version
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/function-component-definition': 'off',

      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
      ],

      'react/jsx-props-no-spreading': 'off',

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

      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'],
        },
      ],

      'no-nested-ternary': 'off',
      'import/prefer-default-export': 'off',

      'prettier/prettier': [
        'error',
        {
          tabWidth: 2,
          printWidth: 80,
          endOfLine: 'auto',
          arrowParens: 'always',
          trailingComma: 'es5',
          semi: false,
          useTabs: false,
          singleQuote: true,
        },
      ],

      '@next/next/no-img-element': 'off',
      'react/prop-types': 'off',
      'sonarjs/cognitive-complexity': 'off',
    },
  },
])
