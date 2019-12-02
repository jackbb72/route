import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [ // https://router.vuejs.org/ru/guide/essentials/passing-props.html#%D0%B1%D1%83n%D0%B5%D0%B2%D0%BE-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5
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

const router = new VueRouter({
    routes // сокращённая запись для `routes: routes`
})

new Vue({
    router,
    render: function (h) { return h(App) },
}).$mount('#app')
