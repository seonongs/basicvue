import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import User from "@/pages/User";
import UserDetail from "@/pages/UserDetail";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/user",
        name: "User",
        component: User,
    },
    {
        path: "/user/:id",
        name: "UserDetail",
        component: UserDetail,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
