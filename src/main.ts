import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import routes from './plugins/routes'


createApp(App)
    .use(routes)
    .mount('#app')
