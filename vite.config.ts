import { ConfigEnv, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteVConsole } from 'vite-plugin-vconsole'
import * as path from 'path'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
    console.log('command, mode', command, mode)
    return {
        server: {
            port: 9090,
        },
        plugins: [
            // 解析 vue 模板语法
            vue(),
            viteVConsole({
                entry: path.resolve('src/main.ts'),
                localEnabled: mode === 'development',
                enabled: mode === 'development',
                config: {
                    theme: 'dark',
                },
            }),
        ],
    }
}
