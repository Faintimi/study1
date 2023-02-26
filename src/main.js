import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import global from './assets/css/global.css'
import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(global)

app.mount('#app')
Vue = app

Vue.config.globalProperties.$http = axios

