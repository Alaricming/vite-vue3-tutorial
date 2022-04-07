module.exports = {
  // 解析 .vue 中的 template
  parser: 'vue-eslint-parser',
  parserOptions: {
    // vue 项目中加的属性
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
    'no-unused-vars': 'error',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  overrides: [
    {
      files: ['*.vue'],
      excludedFiles: [],
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],
}
