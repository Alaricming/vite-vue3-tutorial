module.exports = {
  root: true,
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    // 'stylelint-config-recommended-vue',
    // 'stylelint-config-recommended-vue/scss',
    'stylelint-config-prettier',
  ],
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': ['top', 'position', 'height', 'width'],
    indentation: 2,
  },
  customSyntax: 'postcss-html',
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
}
