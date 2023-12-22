/*
 * @Description: 自动注入所有 pinia 模块
 * @Author: 415156969@qq.com
 * @Date: 2023-12-22 17:21:07
 * @LastEditTime: 2023-12-22 17:59:56
 */

import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'

const files = import.meta.glob('./*.ts')

export const setupPinia = async (app: any) => {
  const modules: Record<string, any> = {}

  // 使用 Object.entries 获取 files 对象的键值对数组
  const filesArray = Object.entries(files)

  // 使用 for await ... of 迭代
  for await (const [key, getFile] of filesArray) {
    const filePath: string = (await getFile()) as string // 手动进行类型断言
    const moduleName = key.replace(/(.*\/)*([^.]+).*/gi, '$2')
    modules[moduleName] = (await import(filePath)).default
  }

  const pinia = createPinia()
  pinia.use(piniaPersist)

  // 注册所有模块
  Object.keys(modules).forEach((key) => {
    modules[key]
    pinia.use(modules[key])
  })

  app.use(pinia)
}
