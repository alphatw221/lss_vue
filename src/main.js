import { createApp } from 'vue'

// import App from './App.vue'
import AppAdminConsole from './AppAdminConsole.vue'
const app = createApp(AppAdminConsole)


// vuetify
import 'vuetify/styles' // Global CSS has to be imported
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/css/lss.css'

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


import store from './store';
app.use(store)

//Vue router
import router from './router';
app.use(router);


// vue3-cookies
import VueCookies from 'vue3-cookies'
app.use(VueCookies);

//mitt (eventBus)
import mitt from 'mitt'
const eventBus = mitt()
app.config.globalProperties.eventBus = eventBus


//axios
import axios from 'axios'
import VueAxios from 'vue-axios'

app.use(VueAxios, axios)


//i18n
import i18n from './i18n'
app.use(i18n)


app.mount('#app')