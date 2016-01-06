 'use strict';

angular.module('soesmsesApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-soesmsesApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-soesmsesApp-params')});
                }
                return response;
            }
        };
    });
