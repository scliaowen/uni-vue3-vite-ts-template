import { createSSRApp } from 'vue'
import App from './App.vue'
import { setupPinia } from './stores'

export function createApp() {
  const app = createSSRApp(App)
  setupPinia(app)
  return {
    app,
  }
}
