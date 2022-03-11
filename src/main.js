import { createApp } from 'vue'
// import App from './App.vue'
import AppAdminConsole from './AppAdminConsole.vue'
const app = createApp(AppAdminConsole)


// vuetify
import 'vuetify/styles' // Global CSS has to be imported
import '@mdi/font/css/materialdesignicons.css'

import { loadFonts } from './plugins/webfontloader'
loadFonts()

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })
app.use(vuetify)


// vue-router
import {createRouter, createWebHashHistory} from 'vue-router'

import AdminLoginPage from './pages/AdminLoginPage.vue'
import AdminConsolePage from './pages/AdminConsolePage.vue'
import TestPage1 from './pages/test/TestPage1.vue'
import TestPage2 from './pages/test/TestPage2.vue'
import TestPage3 from './pages/test/TestPage3.vue'
import HelloWorld from '@/components/HelloWorld.vue'

const routes = [
    { path: '/', component: AdminLoginPage},
    { path: '/admin_console_page', component:AdminConsolePage,
      children:[
        {
          path:'user_subscription',
          component:HelloWorld
        }
      ]
    },
    { path: '/test_page1', component: TestPage1 },
    { path: '/test_page2', component: TestPage2 },
    { path: '/test_page3', component: TestPage3 },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
//router middleware
import { authMiddleware } from "@/libs/routerMiddleware/auth.js";
// import { addQueryGroupNameMiddleware } from "@/libs/routerMiddleware/addQueryGroupName.js";
// import { checkUserGroupRoleMiddleware } from "@/libs/routerMiddleware/checkUserGroupRole";

router.beforeEach(async (to, from, next) => {

    // to.path
    // to.name
    for (let middleWare of [authMiddleware]) {
        let  nextOption = await middleWare(to, from);
        if (nextOption.name || nextOption.path) {return next(nextOption)}
        else{
          next();
        }
        
    }
});

// router.afterEach(route => {
// });

app.use(router)


// vue3-cookies
import VueCookies from 'vue3-cookies'
app.use(VueCookies);


app.mount('#app')