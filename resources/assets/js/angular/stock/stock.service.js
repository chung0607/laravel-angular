'use strict';

angular.module('app').service('stockService', function ($resource) {


  var service = {
    resource: $resource('/api/stocks/:id', {
      id: '@id'
    }, {}),
  }

  return service;
})
  .filter('stockTypeToString', function() {
    return function(type) {
      switch (type) {
        case 'preferred':
          return 'Preferred Stock';
        case 'common':
          return 'Common Stock';
      }
    };
  });
