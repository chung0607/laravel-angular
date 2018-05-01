'use strict';

angular.module('app').service('marketService', function ($resource) {


  var service = {
    resource: $resource('/api/markets/:id', {
      id: '@id'
    }, {}),
  }

  return service;
});
