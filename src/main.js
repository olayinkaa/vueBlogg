import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import Routes from './route'

global.jQuery = jQuery
global .$ = jQuery

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({

    routes:Routes,
    mode:'history'
})
// custom directives
Vue.directive('rainbow',{

  bind(el,binding,vnode){

      el.style.color="#"+Math.random().toString().slice(2,8)
  }
})

Vue.directive('theme',{

  bind(el,binding,vnode){

          if(binding.value=='wide'){

              el.style.maxWidth = "1200px"
          }
          else if(binding.value=='narrow')
          {
            el.style.maxWidth = "600px"

          }

          if(binding.arg=='column')
          {
            // el.style.background='#ddd';
            el.style.padding='5px';
          }
    }
})

Vue.filter('capitalize',(value)=>{

      return value.toUpperCase()
})



Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
