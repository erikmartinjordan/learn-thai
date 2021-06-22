import { createApp }                      from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App                                from './App.vue'

const routes = [
    {path: '/lesson/:string', component: App},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App).use(router).mount('#app')