'use strict';

angular.module('app').service('companyService', function ($resource) {


  var service = {
    resource: $resource('/api/companies/:id', {
      id: '@id'
    }, {}),
  }

  return service;
});
