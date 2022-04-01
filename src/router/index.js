// vue-router
import { createRouter, createWebHashHistory } from 'vue-router'

// import AdminLoginPage from './pages/AdminLoginPage.vue'
// () =>import('@/libs/routerMiddleware/isAdminMiddleware')

const routes = [
    { path: '/admin_login', component: () => import('@/pages/admin/AdminLoginPage.vue') },
    { path: '/admin_console', 
      component: () => import('@/pages/admin/AdminConsolePage.vue'),
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

    //buyer
    { path: '/buyer_login', component: () => import('@/pages/buyer/BuyerLoginPage.vue') },
    { path: '/buyer', 
      component: () => import('@/pages/buyer/BuyerLayoutPage.vue'),
      beforeEnter: (to,from) =>{
        to;
        from;
        return true
      },
      children:[
        {
          path:'pre_order/:id',
          component: () => import('@/pages/buyer/BuyerCartDetailPage.vue')
        },
        {
          path:'order/:id',
          component: () => import('@/pages/buyer/BuyerOrderDetailPage.vue')
        },
        {
          path:'order_history',
          component: () => import('@/pages/buyer/BuyerOrderHistoryPage.vue')
        },
      ]
    },
    //seller
    { path: '/', component: () => import('@/pages/seller/SellerLoginPage.vue') },
    { path: '/seller_login', component: () => import('@/pages/seller/SellerLoginPage.vue') },
    { path: '/seller', 
      component: () => import('@/pages/seller/SellerLayoutPage.vue'),
      beforeEnter: (to,from) =>{
        to;
        from;
        return true
      },
      children:[
        {
          path: 'setting',
          component: () => import('@/pages/seller/SellerSettingPage.vue')
        },
        {
          path: 'dashboard',
          component: () => import('@/pages/seller/SellerDashBoardPage.vue')
        },
        {
          path: 'subscription',
          component: () => import('@/pages/seller/SellerUserSubscriptionPage.vue')
        },
        {
          path: 'comment_summarize',
          component: () => import('@/pages/seller/SellerCommentSummarizePage-ListCampaign.vue')
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