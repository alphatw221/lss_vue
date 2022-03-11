// vue-router
import { createRouter, createWebHashHistory } from 'vue-router'

// import AdminLoginPage from './pages/AdminLoginPage.vue'

const routes = [
    { path: '/', component: () => import('@/pages/AdminLoginPage.vue') },
    { path: '/admin_console_page', component: () => import('@/pages/AdminConsolePage.vue'),
      children:[
        {
          path:'user_subscription',
          component: () => import('@/components/HelloWorld.vue')
        }
      ]
    },
    { path: '/test_page1', component: () => import('@/pages/test/TestPage1.vue') },
    { path: '/test_page2', component: () => import('@/pages/test/TestPage2.vue') },
    { path: '/test_page3', component: () => import('@/pages/test/TestPage3.vue') },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router