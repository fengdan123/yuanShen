// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

//vuex
import store from "./store"

//jquery
import $ from "jquery"
Vue.prototype.$ = $

//animate
import animated from "animate.css"
Vue.use(animated)

//公共组件
import "./components"

//css
import "./assets/css/reset.css"
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})