import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout/index.vue"
import StudentList from "../views/StudentList.vue"
import Login from "../views/login/index.vue"
import { isTokenExpired } from "../utils/auth";

const routes = [
    { 
        path: "/", 
        name: "Layout",
        component: Layout,
        meta: { requiresAuth: true }, // 需要认证
        children: [
            {
                path: "students",
                component: StudentList
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    // const isAuthenticated = !!localStorage.getItem('token');
    const token = localStorage.getItem('token');
    console.log(localStorage.getItem('token'));

    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(isTokenExpired(token)) {
            localStorage.removeItem('token');
            next({name: 'Login'});
        }else {
            next();
        }
    }else {
        next();
    }
});

export default router;