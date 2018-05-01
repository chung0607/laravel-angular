'use strict';

angular.module('app').component('stockCompany', {
  template: require('./company.template.html'),
  bindings: {
    company: '<',
    type: '<',
    stocks: '<',
    isHighestOnly: '<',
  },
  controller: class StockCompanyComponent {

    constructor() {
      'ngInject';
    }

    $onInit() {
      this.highestStock = false;
      this.getHighestStock();
    }

    $onChanges(changes) {
      if (
        (changes.stocks && changes.stocks.currentValue) ||
        (changes.isHighestOnly && changes.isHighestOnly.currentValue)
      ) {
        this.getHighestStock();
      }
    }

    getHighestStock() {
      let highestStock;
      this.stocks.map((stock) => {
        if (!highestStock || parseFloat(highestStock.price) < parseFloat(stock.price)) {
          highestStock = stock;
        }
      });
      this.highestStock = highestStock;
    }

  },
});
