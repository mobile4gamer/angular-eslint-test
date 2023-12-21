module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint','prettier'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended', // Prettier ile çakışan kuralları devre dışı bırakmak için
    ],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      // Projenize özel TypeScript kurallarını buraya ekleyebilirsiniz
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    },
  };
  