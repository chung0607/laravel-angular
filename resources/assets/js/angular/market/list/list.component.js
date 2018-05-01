'use strict';

angular.module('app').component('marketList', {
  template: require('./list.template.html'),
  bindings: {
    callback: '&',
    markets: '<',
    stocks: '<',
    companies: '<',
  },
  controller: class MarketListComponent {

    constructor() {
      'ngInject';

      this.showForm = false;
      this.stocksByMarket = {};
    }

    $onInit() {
    }

    $onChanges(changes) {
      if (changes.markets && changes.markets.currentValue) {
        this.markets = changes.markets.currentValue;
      }
      if (changes.companies && changes.companies.currentValue) {
        this.companies = changes.companies.currentValue;
      }
      if (changes.stocks && changes.stocks.currentValue) {
        this.stocks = changes.stocks.currentValue;
        this.loadStocks();
      }
    }

    loadStocks() {
      this.stocksByMarket = {};
      this.stocks.map((stock)=> {
        if (!this.stocksByMarket[stock.market_id]) {
          this.stocksByMarket[stock.market_id] = [];
        }
        this.stocksByMarket[stock.market_id].push(stock);
      });
    }

    createStock(stock) {
      if (stock) {
        this.callback();
      }
      this.showForm = false;
    }

    toggleForm() {
      this.showForm = !this.showForm;
    }

  },
});
