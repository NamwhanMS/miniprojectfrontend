import  { createRouter, createWebHistory} from 'vue-router'
import PageHome from '../components/PageHome.vue'
import PageLogin from '../components/PageLogin.vue'
import PageRegister from '../components/PageRegister.vue'
import PageProfile from '../components/PageProfile.vue'
import Page404 from '../components/Page404.vue'
import PagePost from '../components/PagePost.vue'
import {isLoggedIn} from '../store/auth'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: PageHome },
        { path: '/login', component: PageLogin },
        { path: '/register', component: PageRegister },
        {path: '/profile', meta: { onlyAuth: true}, component: PageProfile },
        {path: '/posts/:id', meta: { onlyAuth: true}, component: PagePost },
        { path: '/:pathMatch(.*)*',  component: Page404 }
        
    ],
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
      },

})

router.beforeEach((to, from) => {
    if (to.meta.onlyAuth && !isLoggedIn.value){
        router.replace('/')
        return false
    }
})

export default router