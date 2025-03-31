// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import stylistic from '@stylistic/eslint-plugin'

export default withNuxt({
  ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  files: [
    '**/*.{ts,mts,vue,mjs,js}',
  ],
  languageOptions: {
    ecmaVersion: 'latest',
  },
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    'no-console': 'warn',
    'quote-props': ['error', 'as-needed'],
    // stylistic
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    // Enforce double quotes for strings
    quotes: ['error', 'single'],
    // Disallow semicolons at the end of statements
    semi: ['error', 'never'],
    // vue-specific rules
    'vue/no-v-html': 'off',
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
      },
    ],
    //'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 5,
        },
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
        },
      },
    ],
  },
})

