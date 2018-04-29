angular.module('stock').controller('IndexController', function($scope) {

  $scope.hello = 'world';

  $scope.init = function() {
    console.log('init');
  }

});