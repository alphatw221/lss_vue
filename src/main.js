// import { createApp } from 'vue'
// import App from './App.vue'
// import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

// createApp(App)
//   .use(vuetify)
//   .mount('#app')


import 'vuetify/styles' // Global CSS has to be imported
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
// import App from './App.vue'
import AppAdminConsole from './AppAdminConsole.vue'
const app = createApp(AppAdminConsole)

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })


import {createRouter, createWebHashHistory} from 'vue-router'

import AdminLoginPage from './pages/AdminLoginPage.vue'
import TestPage1 from './pages/test/TestPage1.vue'
import TestPage2 from './pages/test/TestPage2.vue'
import TestPage3 from './pages/test/TestPage3.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: AdminLoginPage},
    { path: '/test_page1', component: TestPage1 },
    { path: '/test_page2', component: TestPage2 },
    { path: '/test_page3', component: TestPage3 },

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})


//Vue 3 Axios
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// app.use(VueAxios, axios)
app.use(vuetify)
app.use(router)
app.mount('#app')