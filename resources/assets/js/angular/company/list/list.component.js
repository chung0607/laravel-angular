'use strict';

angular.module('app').component('companyList', {
  template: require('./list.template.html'),
  bindings: {
    callback: '&',
    companies: '<',
  },
  controller: class CompanyListComponent {

    constructor() {
      'ngInject';

      this.showForm = false;
    }

    $onInit() {
    }

    createCompany(company) {
      if (company) {
        this.callback();
      }
      this.showForm = false;
    }

    toggleForm() {
      this.showForm = !this.showForm;
    }

  },
});
