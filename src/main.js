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


//router middleware
// import { authMiddleware } from "@/libs/routerMiddleware/auth.js";
// import { addQueryGroupNameMiddleware } from "@/libs/routerMiddleware/addQueryGroupName.js";
// import { checkUserGroupRoleMiddleware } from "@/libs/routerMiddleware/checkUserGroupRole";

// router.beforeEach(async (to, from, next) => {

//     // to.path
//     // to.name
//     for (let middleWare of [authMiddleware, addQueryGroupNameMiddleware, checkUserGroupRoleMiddleware]) {
//         let  nextOption = await middleWare(to, from);
//         if (nextOption.name || nextOption.path) {return next(nextOption)}
//         else{
//           next();
//         }
        
//     }
// });

// router.afterEach(route => {
//     // ViewUI.LoadingBar.finish();
//     // ViewUI.Spin.hide();
// });
import router from './router';
app.use(router);


// vue3-cookies
import VueCookies from 'vue3-cookies'
app.use(VueCookies);


app.mount('#app')