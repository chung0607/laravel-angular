'use strict';

angular.module('app').filter('dateToISO', function() {
  return function(input) {
    return new Date(input).toISOString();
  };
});