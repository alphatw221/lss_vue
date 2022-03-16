// vue-router
import { createRouter, createWebHashHistory } from 'vue-router'

// import AdminLoginPage from './pages/AdminLoginPage.vue'
// () =>import('@/libs/routerMiddleware/isAdminMiddleware')

const routes = [
    { path: '/', component: () => import('@/pages/AdminLoginPage.vue') },
    { path: '/admin_console_page', 
      component: () => import('@/pages/AdminConsolePage.vue'),
      beforeEnter: (to,from) =>{
        to;
        from;
        return true
      },
      children:[
        {
          path:'user',
          component: () => import('@/pages/ApiUserPage.vue')
        },
        {
          path:'hello_world',
          component: () => import('@/components/HelloWorld.vue')
        }
      ]
    },
    // { path: '/test_page1', component: () => import('@/pages/test/TestPage1.vue') },
    { path: '/test_page1', component: () => import('@/pages/SellerLoginPage.vue') },
    { path: '/test_page2', component: () => import('@/pages/test/TestPage2.vue') },
    { path: '/test_page3', component: () => import('@/pages/test/TestPage3.vue') },
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