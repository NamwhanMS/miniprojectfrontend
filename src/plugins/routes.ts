import  { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../components/PageHome.vue'
import PageLogin from '../components/PageLogin.vue'
import PageRegister from '../components/PageRegister.vue'
import Page404 from '../components/Page404.vue'
import PagePost from '../components/PagePost.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: PageHome },
        { path: '/login', component: PageLogin },
        { path: '/register', component: PageRegister },
        { path: '/posts/:id', component: PagePost },
        { path: '/:pathMatch(.*)*',  component: Page404 }
        
    ]

})

export default router