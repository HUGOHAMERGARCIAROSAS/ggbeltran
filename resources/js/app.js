/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

window.Vue = require('vue');
window.Bus = new Vue();

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// Vue.component('crear-compra-component', require('./components/operaciones/CompraComponent.vue').default);

Vue.component("crear-compra-component", () => import("./components/operaciones/CompraComponent.vue"));
Vue.component("crear-combustible-component", () => import("./components/CombustibleComponent.vue"));
Vue.component("facturacion-detalle-modal-compra-component", () => import("./components/operaciones/FacturacionDetalleModalCompraComponent.vue"));
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('gasto-component',require('./components/GastosComponent.vue').default);
Vue.component('saldo-component',require('./components/SaldoComponent.vue').default);
Vue.component("crear-otros-gastos-component", () => import("./components/CrearOtrosGastosComponent.vue"));
Vue.component("crear-otros-gastos-detalle-component", () => import("./components/CrearDetalleOtrosGastosComponent.vue"));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
