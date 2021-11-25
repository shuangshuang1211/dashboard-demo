module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'quote-props': [1, 'as-needed'],
    quotes: [1, 'single']
  },
  overrides: [
    {
      files: ['src/api/**/*.ts', 'src/**/types.ts'],
      rules: {
        camelcase: 'off'
      }
    }
  ]
}
