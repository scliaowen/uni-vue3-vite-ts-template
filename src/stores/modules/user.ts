export const user = defineStore({
  id: 'user',
  state: () => ({
    isLogin: !!uni.getStorageSync('token'), // 登录状态
  }),
  actions: {},

  // 配置持久化
  persist: {
    // 调整为兼容多端的API
    storage: {
      setItem(key, value) {
        uni.setStorageSync(key, value) // [!code warning]
      },
      getItem(key) {
        return uni.getStorageSync(key) // [!code warning]
      },
    },
  },
})
