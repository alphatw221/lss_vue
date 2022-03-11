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
import TestPage1 from './pages/test/TestPage1.vue'
import TestPage2 from './pages/test/TestPage2.vue'
import TestPage3 from './pages/test/TestPage3.vue'

const routes = [
    { path: '/', component: AdminLoginPage},
    { path: '/test_page1', component: TestPage1 },
    { path: '/test_page2', component: TestPage2 },
    { path: '/test_page3', component: TestPage3 },

]
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
app.use(router)


// vue3-cookies
import VueCookies from 'vue3-cookies'
app.use(VueCookies);


app.mount('#app')