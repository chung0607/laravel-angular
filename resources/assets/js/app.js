
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('angular');
require('angular-resource');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
//
// const app = new Vue({
//     el: '#app'
// });
//
//
angular.module('stock', [
  'ngResource',
])
  .config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }]);

//
require('./angular/controllers/index.controller.js');
// require('./angular/controllers/product.js');
// require('./angular/controllers/user.js');
// require('./angular/controllers/cart.js');
//
// require('./angular/resources/product.js');
// require('./angular/resources/user.js');
// require('./angular/resources/cartItem.js');