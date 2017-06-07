
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

// window.Vue = require('vue');

// *
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
 

// Vue.component('example', require('./components/Example.vue'));

// const app = new Vue({
//     el: '#app'
// });

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import VueResource from 'vue-resource'
// import vueRouter from 'vue-router'
// import Example from './components/Example.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './components/store.js';

// import App from './App'

// import LoginPage from './pages/LoginPage'
// import DashboardPage from './pages/DashboardPage'
// import ProfilePage from './pages/ProfilePage'
// import CalendarPage from './pages/CalendarPage'
// import WorkflowPage from './pages/WorkflowPage'
// import RequestUser from './pages/RequestUser'
// import ChatBoard from './components/chat/chat-board/ChatBoard'
// import GSignInButton from 'vue-google-signin-button'
// // import Home from './pages/Home'
// import RequestDis from './pages/RequestDisplay'
// import SearchPage from './pages/SearchPage'
// import SuccessfulSubmit from './pages/SuccessfulSubmit'
// import SingleTask from './components/task-elements/SingleTask'
// import Example from './components/Example'
import Layout from './components/layout'
import App from './components/App'

Vue.use(VueRouter)
// Vue.use(Vuex)
// Vue.use(ClientTable, {}, false, require('./template.js')('client'))

// Vue.component('chatBoard', ChatBoard)
// Vue.component('request-display', RequestDis)
// Vue.component('single-task', SingleTask)

// var RequestDisplay = Vue.extend({
//   template: '<request-display :id="$route.params.id"></request-display>'
// })
// var Redirect = Vue.extend({
//   template: ''
// })
/* eslint-disable no-new */

// Vue.component('example', Example)
// Vue.component('dashboard', Dashboard)
Vue.component('app', App)

const routes = [
  {path: '/', component: Layout, name: 'layout'}
  // {path: '/profile', component: ProfilePage, name: 'profile'},
  // {path: '/calendar', component: CalendarPage, name: 'calendar'},
  // {path: '/workflow', component: WorkflowPage, name: 'workflow'},
  // {path: '/request-user', component: RequestUser, name: 'request-user'},
  // {path: '/request', component: Redirect, redirect: '/request/home', name: 'requesthome', auth: true},
  // {path: '/request/:id', component: RequestDisplay, name: 'request', auth: true},
  // {path: '/search', component: SearchPage, name: 'searchpage'},
  // {path: '/form/success', component: SuccessfulSubmit, name: 'successfulsubmit'}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  // if (to.meta.requiresAuth) {
  //   const authUser = JSON.parse(window.localStorage.getItem('authUser'))
  //   if (authUser && authUser.access_token) {
  //     next()
  //   } else {
  //     next({name: 'login'})
  //   }
  // }
  next()
})

new Vue({
  router,
  store
}).$mount('#app')

