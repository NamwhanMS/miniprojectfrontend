import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import routes from './plugins/routes'
import { Popover } from 'bootstrap';

createApp(App)
    .use(routes)
    .mount('#app')

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
        new Popover(popover)
    })

