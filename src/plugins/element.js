import Vue, { createApp } from 'vue'
import { Button } from 'element-ui'
import {Form,FormItem}from 'element-ui'
import {Input}from 'element-ui'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios'
import {Message} from 'element-ui'
//配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'


Vue.globalProperties.$http = axios
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.prototype.$message = Message

