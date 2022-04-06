module.exports = {
  // 解析 .vue 中的 template
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 原本不存在于
    parser: '@typescript-eslint/parser',
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    'vue/setup-compiler-macros': true,
  },
  plugins: ['vue', 'prettier'],
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'no-var': 'error',
    'no-unused-vars': 'error',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    // 'vue/no-dupe-v-else-if': 'error',
    // 'vue/script-setup-uses-vars': 'error',
    // '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: ['*.test.js'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],
}
