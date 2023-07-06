import  { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../components/PageHome.vue'
import PageLogin from '../components/PageLogin.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: PageHome },
        { path: '/', component: PageLogin }
    ]

})

export default router