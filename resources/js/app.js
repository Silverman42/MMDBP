import VueAxios from "./plugins/axios"
import {BASEURL} from "./api_endpoint"
import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import GlobalComps from "./plugins/global_comps"
/**
 * Import Vue progress bar to detect changes in the route
 */
import VueProgress from "vue-progressbar"
//import "../sass/blank.scss"

window.Vue = require('vue')
Vue.use(InertiaApp)
Vue.use(VueAxios,{baseURL: BASEURL})
Vue.use(GlobalComps)
Vue.prototype.$route = {
  url: (...args)=>route(...args).url(),
  getCurrent: ()=>route().current(),
  isCurrent: (routeName)=>route().current(routeName),
  isValid:(routeName)=>route().check(routeName),
  relativePath:(...args)=>route(...args),
  obj:()=>route() 
}

const app = document.getElementById('app')
new Vue({
    render: h => h(InertiaApp, {
      props: {
        initialPage: JSON.parse(app.dataset.page),
        resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
      },
    }),
}).$mount(app);
