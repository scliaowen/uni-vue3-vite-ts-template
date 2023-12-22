import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      uni(),
      AutoImport({
        imports: [
          // 需要自动导入的插件，自定义导入的API
          'vue',
          'vue-router',
          'pinia',
        ],
        dts: 'src/types/auto-import.d.ts', // 指明 .d.ts 文件的位置和文件名
        resolvers: [ElementPlusResolver()],
        exclude: ['createApp'],
        eslintrc: {
          enabled: true,
        },
      }),

      Components({
        extensions: ['vue'],
        dts: 'src/components.d.ts',
        resolvers: [
          // 问题开发环境按需导入样式会导致 vite 热更新卡顿
          // 解决方案：开发环境不按需导入样式，生产环境再按需导入样式
          ElementPlusResolver({
            importStyle: mode === 'development' ? false : 'sass',
          }),
        ],
      }),
    ],
  }
})
