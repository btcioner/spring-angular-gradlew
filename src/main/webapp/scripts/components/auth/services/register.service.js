'use strict';

angular.module('soesmsesApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


