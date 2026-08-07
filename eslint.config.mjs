// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    'vue/multi-word-component-names': 'off',
    'vue/padding-line-between-blocks': 'off',
    '@stylistic/no-trailing-spaces': 'off',
    '@stylistic/js/brace-style': 'error',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'vue/html-self-closing': 'off',
  },
  languageOptions: {
    ecmaVersion: 5,
  },
});
