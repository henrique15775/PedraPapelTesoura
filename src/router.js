
import VueRouter from 'vue-router'
import StartApp from './components/StartApp'
import App from './App'
import GameSession from './components/GameSession'


const routes = [
    {
        path: '/',
        component: App
    },
    {
        path:'/start',
        component: StartApp
    },
    {
        path:'/game',
        component: GameSession
    }
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })
  
export default router