import Vue from 'vue'
import VueRouter from 'vue-router'
import StartApp from './components/StartApp'
import App from './App'
import GameApp from './components/GameApp'
import GameSession from './components/GameSession'
Vue.use(VueRouter)

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
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
