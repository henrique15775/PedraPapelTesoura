import Vue from 'vue'
import VueRouter from 'vue-router'
import StartApp from './components/StartApp'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import GameApp from './components/GameApp'
import GameSession from './components/GameSession'
Vue.use(VueRouter)
Vue.prototype.$axios = axios
Vue.use(VueAxios)
Vue.config.productionTip = false
const routes = [
    {
        path: '/',
        component: StartApp
    },
    {
        path:'/start',
        component: GameApp
    },
    {
        path:'/game',
        component: GameSession
    }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
