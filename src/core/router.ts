import AppVue from '@/App.vue';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

type routeKey = 'home' | 'login' | 'register';

export const routers: Record<routeKey, RouteRecordRaw> = {
    home: {
        path: '/',
        name: 'Home',
        component: Home,
    },
    login: {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    register: {
        path: '/register',
        name: 'Register',
        component: Register,
    },
};

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: Object.keys(routers).map((key) => routers[key as keyof typeof routers]),
});

export default router;
