
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('angular');
require('angular-resource');

angular.module('app', [
  'ngResource',
])
  .config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }]);

//
require('./angular/index.controller.js');

require('./angular/company/list/list.component.js');