'use strict';

angular.module('app').component('companyCreate', {
  template: require('./create.template.html'),
  bindings: {
    callback: '&',
  },
  controller: class CompanyCreateComponent {

    constructor(companyService) {
      this.companyService = companyService;
      this.data = {};
      'ngInject';
    }

    $onInit() {
    }

    onSubmit(form) {
      let Company = new this.companyService.resource(this.data);
      Company.$save((company)=> {
        this.callback({company: company});
      });
      this.data = {};
    }

    cancel() {
      this.data = {};
      this.callback();
    }

  },
});
