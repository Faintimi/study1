import { createRouter, createWebHashHistory } from 'vue-router'
import Login from'../components/Login.vue'
import Home from '../components/Home.vue'
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//挂载路由导航守卫
router.beforeEach((to,from,next) =>
{
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next() 放行  next('/login') 强制跳转

  if(to.path==='/login') return next();
  //获取token
  const tokenStr =window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next();
}
)
export default router
