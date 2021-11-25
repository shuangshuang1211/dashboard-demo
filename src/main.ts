import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index'
import { key, store } from './store'
import '../src/styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn' // 设置国际化
import Particles from 'particles.vue3'

createApp(App)
  .use(ElementPlus, {
    locale: zhCn,
    size: 'small' // 设置全局的element icon的默认大小
  })
  .use(Particles)
  .use(router)
  .use(store, key)
  .mount('#app')
