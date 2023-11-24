import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import SearchView from '@/views/SearchView.vue'
import ContextView from '@/views/ContextView.vue'
// import { container } from '@/ioc/DIContainer';
// import Constants from '@/utils/constants';
// import { TYPES } from '@/ioc/Types';
import { RouteModules } from '@/utils/CommonEnums'

// const securityService: SecurityService = container.get<SecurityService>(TYPES.SecurityService);

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/contextview'
  },
  {
    path: '/contextview',
    name: 'contextview',
    component: ContextView,
    meta: {
      requiresAuth: false,
      module: RouteModules.contextview
    }
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
    meta: {
      requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/**
 * Check Router Access Permission
 */
router.beforeEach(async (to, from, next) => {
  // get required authentication or not state
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth) {
    next()
  } else {
    next()
  }
})

export default router
