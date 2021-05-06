/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import router from "./router";
import store from './store';


//! Оптимизировать момент, много места занимает
import moment from 'moment';

require('./bootstrap');
require('../css/bootstrap.css');
// console.log( process.env.MIX_API_URL)


window.Vue = require('vue').default;

import App from "./App.vue";


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('test-component', require('./components/TestComponent.vue').default);
Vue.component('AppPreloader', require('./components/AppPreloader.vue').default);
Vue.component('AdminMessage', require('./components/AdminMessage').default);

Vue.filter('dateFormat_MM/DD/YYYY_hh:mm', function (value) {
    if (!value) return '';
    return moment(String(value)).format('DD.MM.YYYY hh:mm');
});
Vue.filter('dateFormat_Do_MMMM_YYYY', function (value) {
    if (!value) return '';
    return moment(String(value)).format('Do MMMM, YYYY');
});
Vue.filter('dateFormat_DD_MMM_YYYY_HH_mm_A', function (value) {
    if (!value) return '';
    return moment(String(value)).format('DD MMM, YYYY HH:mm A');
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App),
});
