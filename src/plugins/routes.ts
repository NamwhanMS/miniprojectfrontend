import  { createRouter, createWebHistory} from 'vue-router'
import PageHome from '../components/PageHome.vue'
import PageLogin from '../components/PageLogin.vue'
import LoginPage from '../components/LoginPage.vue'
import PageRegister from '../components/PageRegister.vue'
import PageForgotPassword from'../components/PageForgotPassword.vue'
import PageProfile from '../components/PageProfile.vue'
import PageSetting from '../components/PageSetting.vue'
import Page404 from '../components/Page404.vue'
import PagePost from '../components/PagePost.vue'
import PageStuData from '../components/PageStuData.vue'
import PageAddStu from '../components/PageAddStu.vue'
import PageUpdateStuVue from '../components/PageUpdateStu.vue'
import {isLoggedIn} from '../store/auth'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: PageHome },
        { path: '/login', component: PageLogin },
        { path: '/loginpage', component: LoginPage },
        { path: '/register', component: PageRegister },
        { path: '/forgotpass', component: PageForgotPassword },
        { path: '/setting', meta: { onlyAuth: true},component: PageSetting },
        {path: '/profile', meta: { onlyAuth: true}, component: PageProfile },
        {path: '/posts/:id', meta: { onlyAuth: true}, component: PagePost },
        { path: '/studata', component: PageStuData },
        { path: '/addstu', component: PageAddStu },
        { path: '/updatestu', component: PageUpdateStuVue },
        { path: '/:pathMatch(.*)*',  component: Page404 }
        
    ]
})

router.beforeEach((to) => {
    if (to.meta.onlyAuth && !isLoggedIn.value){
        router.replace('/')
        return false
    }
})

export default router