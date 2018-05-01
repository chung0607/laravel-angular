'use strict';

angular.module('app').component('stockList', {
  template: require('./list.template.html'),
  bindings: {
    stocks: '<',
  },
  controller: class StockListComponent {

    constructor() {
      'ngInject';

      this.showForm = false;
      this.groupedStocks = [];
    }

    $onInit() {
      this.isHighestOnly = true;
    }

    $onChanges(changes) {
      if (changes.stocks && changes.stocks.currentValue) {
        this.stocks = changes.stocks.currentValue;
        this.groupStocks();
      }
    }

    groupStocks() {
      if (!this.stocks.length) {
        return;
      }
      let groupedStocks = [];
      let stocks = {};

      this.stocks.map((stock)=> {
        if (!stocks[stock.company.name]) {
          stocks[stock.company.name] = {
            preferred: [],
            common: [],
          };
        }
        stocks[stock.company.name][stock.type].push(stock);
      });

      for (let key in stocks) {
        let company = key;
        let types = stocks[key];
        if (types.preferred.length) {
          groupedStocks.push({
            company: company,
            type: 'preferred',
            stocks: types.preferred
          });
        }
        if (types.common.length) {
          groupedStocks.push({
            company: company,
            type: 'common',
            stocks: types.common
          });
        }
      }
      this.groupedStocks = groupedStocks;

    }

  },
});
