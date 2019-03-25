import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import Dashboard from './views/Dashboard.vue'
import Error from './views/Error.vue'
import schedule from './views/schedule.vue'
import admin from './views/admin.vue'
import store from './store/modules/user/index'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'Error',
      component: Error,
      meta: { title: 'iSTART | Error', requiresAuth: false }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { title: 'iSTART', requiresAuth: false }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      meta: { title: 'iSTART | Logout', requiresAuth: true, userAuth: true, adminAuth: true }
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: { title: 'iSTART | Dashboard', requiresAuth: true, userAuth: true }
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: schedule,
      meta: { title: 'iSTART | Schedule', requiresAuth: true, userAuth: true }
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      meta: { title: 'iSTART | Admin', requiresAuth: true, adminAuth: true }
    }
  ]
})

export default router

// Before each route change check if route needs & has proper authentication
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.getters.correctLoginInfo) {
      next({ path: '/login' })
    } else if (store.getters.user.isAdmin && to.meta.adminAuth) {
      next()
    } else if (!(store.getters.user.isAdmin) && to.meta.userAuth) {
      next()
    } else {
      next(from.path)
    }
  } else {
    next()
  }
})
