'use strict';

angular.module('app').component('stockCreate', {
  template: require('./create.template.html'),
  bindings: {
    callback: '&',
    markets: '<',
    companies: '<',
  },
  controller: class StockCreateComponent {

    constructor(stockService) {
      this.stockService = stockService;
      this.data = {};
      'ngInject';
    }

    $onInit() {
    }

    onSubmit(form) {
      let Stock = new this.stockService.resource(this.data);
      Stock.$save((stock)=> {
        this.callback({stock: stock});
      });
      this.data = {};
    }

    cancel() {
      this.data = {};
      this.callback();
    }

  },
});
