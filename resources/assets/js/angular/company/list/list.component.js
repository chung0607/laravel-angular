'use strict';

angular.module('app').component('company', {
  template: require('./list.template.html'),
  bindings: {},
  controller: class CompanyListComponent {

    constructor() {
      'ngInject';
    }


    $onChanges(changes) {
      if (changes) {
      }
    }

  },
});
