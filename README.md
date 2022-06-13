- @vitejs/plugin-vue: 打包 vue 的插件
- vue-eslint-parser: 转换 vue 文件的 template 为 AST 树，供 eslint 校验判断
- @typescript-eslint/parser: 转换 typescript(包括.vue 中的)为 AST 树，供 eslint 校验判断
- vue-eslint-plugin: vue 自定义 eslint 规则插件

eslint-config-prettier 关掉的是 eslint ， prettier 同时配置的项，并不是只是说两者 相同配置的值不同才算冲突（比如 两者同时配置 semi: true， 仍然会报错，因为只能有配置该项）

eslint 脚本参数

### vconsole

yarn add vconsole vite-plugin-vconsole -D
viteVConsole()

###
