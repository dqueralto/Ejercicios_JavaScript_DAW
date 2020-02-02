import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'

import Notas from './components/Notas.vue'
import Noticias from './components/Noticias.vue'
import PaquiLimpiadas from './components/PaquiLimpiadas.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)


const rutas = [
  {path: '/Notas', component: Notas},
  {path: '/Noticias', component: Noticias},
  {path: '/PaquiLimpiadas', component: PaquiLimpiadas},

  {path: '*',component:PaquiLimpiadas}
]

const router = new VueRouter({
  'routes':rutas
}) 

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
