import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
// import prettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.ts'],
    ignores: ['dist/**', 'node_modules/**'],
    languageOptions: {
      parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        sourceType: 'module',
      },
      globals: {
        console: true,
        process: true,
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      // prettier,
    },
    rules: {
      semi: ['error', 'always'],
      'no-trailing-spaces': ['error', { skipBlankLines: true }],
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      }],
      'no-inner-declarations': ['error', 'both'],
      'array-bracket-newline': ['error', 'consistent'],
      'no-console': process.env.NODE_ENV === 'production'
        ? ['error', { allow: ['warn', 'error'] }]
        : 'off',
      'comma-dangle': ['error', 'always-multiline'],
      // 'array-element-newline': ['error', 'always'],
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
