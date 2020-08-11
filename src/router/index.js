import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../models/auth/Login'),
  },
  {
    path: '/404',
    name: 'not-found',
    component: () => import('../models/NotFound.vue'),
  },
  {
    path: '/',
    name: 'main',
    component: () => import('../models/Main.vue'),
    meta: {
      requireAuth: true,
    },
    children: [],
  },
  {
    path: '*',
    redirect: '/404',
    name: '404',
    component: () => import('../models/NotFound.vue'),
  },
];
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否需要登录权限
    if (localStorage.getItem('token')) {
      // 判断是否登录
      next();
    } else {
      // 没登录则跳转到登录界面
      next({
        path: '/login',
      });
    }
  } else {
    next();
  }
});
export default router;
