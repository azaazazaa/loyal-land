import Home from '@/views/HR-page.vue'
import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home}
    ]
})