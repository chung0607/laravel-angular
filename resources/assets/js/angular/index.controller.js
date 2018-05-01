angular.module('app').controller('IndexController', function($scope, marketService, companyService, stockService) {

  $scope.companies = [];
  $scope.markets = [];
  $scope.stocks = [];

  $scope.init = function() {

    $scope.loadStocks();
    $scope.loadCompanies();
    $scope.loadMarkets();

  }

  $scope.loadCompanies = function() {
    companyService.resource.query(function(companies) {
      $scope.companies = companies
    });
  }

  $scope.loadMarkets = function() {
    marketService.resource.query(function(markets) {
      $scope.markets = markets;
    });
  }

  $scope.loadStocks = function() {
    stockService.resource.query(function(stocks) {
      $scope.stocks = stocks;
    });
  }

});