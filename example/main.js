import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VDesign from 'VDesign'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
  .use(VDesign)
  .use(ElementPlus)
  .use(router)
  .mount('#app')
