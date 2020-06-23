import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const main = () => import('../views/main.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: main }
    ]
  })
}
