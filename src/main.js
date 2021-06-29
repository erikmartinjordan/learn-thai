import { createApp }                      from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routerview                         from './components/routerview.vue'
import start                              from './components/start.vue'
import question                           from './components/question.vue'

const routes = [
    {path: '/',         component: start},
    {path: '/question', component: question}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(routerview).use(router).mount('#app')