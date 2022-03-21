// vue-router
import { createRouter, createWebHashHistory } from 'vue-router'

// import AdminLoginPage from './pages/AdminLoginPage.vue'
// () =>import('@/libs/routerMiddleware/isAdminMiddleware')

const routes = [
    { path: '/admin_login', component: () => import('@/pages/AdminLoginPage.vue') },
    { path: '/admin_console', 
      component: () => import('@/pages/AdminConsolePage.vue'),
      beforeEnter: (to,from) =>{
        to;
        from;
        return true
      },
      children:[
        {
          path:'user',
          component: () => import('@/pages/admin/AdminApiUserPage.vue')
        },
        {
          path:'user_subscription',
          component: () => import('@/pages/admin/AdminApiUserSubscription.vue')
        },
        {
          path:'hello_world',
          component: () => import('@/components/HelloWorld.vue')
        }
        
      ]
    },

    { path: '/test1', component: () => import('@/pages/test/TestPage1.vue') },
    { path: '/test2', component: () => import('@/pages/test/TestPage2.vue') },
    { path: '/test3', component: () => import('@/pages/test/TestPage3.vue') },



    //seller
    { path: '/', component: () => import('@/pages/SellerLoginPage.vue') },
    { path: '/seller_login', component: () => import('@/pages/SellerLoginPage.vue') },
    { path: '/seller_console', 
      component: () => import('@/pages/SellerConsolePage.vue'),
      beforeEnter: (to,from) =>{
        to;
        from;
        return true
      },
      children:[
        {
          path:'user',
          component: () => import('@/pages/AdminApiUserPage.vue')
        },
        {
          path:'user_subscription',
          component: () => import('@/pages/AdminApiUserSubscription.vue')
        },
        {
          path:'hello_world',
          component: () => import('@/components/HelloWorld.vue')
        }
        
      ]
    },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})



//router middleware
// import { authMiddleware } from "@/libs/routerMiddleware/auth.js";

// router.beforeEach(async (to, from, next) => {

//     // to.path
//     // to.name
//     const isAdmin = false
//     if(!isAdmin && to.path != 'admin_console_page'){
//       return next(true)
//     }else{
//       next()
//     }
//     // for (let middleWare of [authMiddleware]) {
//     //     let  nextOption = await middleWare(to, from);
//     //     if (nextOption.name || nextOption.path) {return next(nextOption)}
//     //     else{
//     //       next();
//     //     }
        
//     // }
// });

// router.afterEach(route => {
// });


export default router