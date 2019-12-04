import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Next from './components/Next.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Next
    },
    { 
        path: '/foo', 
        component: Foo,
        props: {msg: 'one'}
    },
    { 
        path: '/bar', 
        component: Bar,
        props: {msg: 'two'}
    }
]
/*
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Next
    },
    { 
        path: '/foo', 
        component: Foo,
        props: {msg: 'one'}
    },
    { 
        path: '/bar', 
        component: Bar,
        props: {msg: 'two'}
    }
  ]
})
*/

const router = new VueRouter({
    mode: 'history', 
    routes // сокращённая запись для `routes: routes`
})

new Vue({
    router,
    render: function (h) { return h(App) },
}).$mount('#app')
